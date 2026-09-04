import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import {
  agendaEvents as seedEvents,
  documents as seedDocs,
  scheduleBlocks as seedSchedule,
  studySessions as seedSessions,
  subjects as seedSubjects,
  type AcademicDoc,
  type AgendaEvent,
  type Assessment,
  type Difficulty,
  type ScheduleBlock,
  type StudySession,
  type Subject,
} from "./academic-data";

export interface PlanConfig {
  days: number;
  label: string;
  availability: Record<number, { enabled: boolean; start: string; end: string; flexible: boolean }>;
  intensity: "leve" | "moderada" | "intensa";
  difficulty: Record<string, Difficulty>;
}

interface Store {
  subjects: Subject[];
  schedule: ScheduleBlock[];
  events: AgendaEvent[];
  sessions: StudySession[];
  docs: AcademicDoc[];
  plan: PlanConfig | null;
  setPlan: (p: PlanConfig | null) => void;
  saveEvent: (e: AgendaEvent) => void;
  deleteEvent: (id: string) => void;
  moveEvent: (id: string, date: string) => void;
  saveBlock: (b: ScheduleBlock) => void;
  deleteBlock: (id: string) => void;
  saveSession: (s: StudySession) => void;
  deleteSession: (id: string) => void;
  setSessions: (s: StudySession[]) => void;
  setSessionStatus: (id: string, status: StudySession["status"]) => void;
  clearDay: (date: string) => void;
  saveAssessment: (subjectId: string, a: Assessment) => void;
  deleteAssessment: (subjectId: string, id: string) => void;
  updateSubject: (id: string, patch: Partial<Subject>) => void;
  addAbsences: (subjectId: string, n: number) => void;
  addDoc: (d: AcademicDoc) => void;
}

const StoreContext = createContext<Store | null>(null);

export const uid = () => Math.random().toString(36).slice(2, 10);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [subjects, setSubjects] = useState(seedSubjects);
  const [schedule, setSchedule] = useState(seedSchedule);
  const [events, setEvents] = useState(seedEvents);
  const [sessions, setSessions] = useState(seedSessions);
  const [docs, setDocs] = useState(seedDocs);
  const [plan, setPlan] = useState<PlanConfig | null>(null);

  const value = useMemo<Store>(
    () => ({
      subjects,
      schedule,
      events,
      sessions,
      docs,
      plan,
      setPlan,
      saveEvent: (e) =>
        setEvents((prev) => (prev.some((x) => x.id === e.id) ? prev.map((x) => (x.id === e.id ? e : x)) : [...prev, e])),
      deleteEvent: (id) => setEvents((prev) => prev.filter((x) => x.id !== id)),
      moveEvent: (id, date) => setEvents((prev) => prev.map((x) => (x.id === id ? { ...x, date } : x))),
      saveBlock: (b) =>
        setSchedule((prev) => (prev.some((x) => x.id === b.id) ? prev.map((x) => (x.id === b.id ? b : x)) : [...prev, b])),
      deleteBlock: (id) => setSchedule((prev) => prev.filter((x) => x.id !== id)),
      saveSession: (s) =>
        setSessions((prev) => (prev.some((x) => x.id === s.id) ? prev.map((x) => (x.id === s.id ? s : x)) : [...prev, s])),
      deleteSession: (id) => setSessions((prev) => prev.filter((x) => x.id !== id)),
      setSessions,
      setSessionStatus: (id, status) => setSessions((prev) => prev.map((x) => (x.id === id ? { ...x, status } : x))),
      clearDay: (date) => setSessions((prev) => prev.filter((x) => x.date !== date)),
      saveAssessment: (subjectId, a) =>
        setSubjects((prev) =>
          prev.map((s) =>
            s.id !== subjectId
              ? s
              : {
                  ...s,
                  assessments: s.assessments.some((x) => x.id === a.id)
                    ? s.assessments.map((x) => (x.id === a.id ? a : x))
                    : [...s.assessments, a],
                },
          ),
        ),
      deleteAssessment: (subjectId, id) =>
        setSubjects((prev) =>
          prev.map((s) => (s.id !== subjectId ? s : { ...s, assessments: s.assessments.filter((a) => a.id !== id) })),
        ),
      updateSubject: (id, patch) => setSubjects((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s))),
      addAbsences: (subjectId, n) =>
        setSubjects((prev) => prev.map((s) => (s.id === subjectId ? { ...s, absences: Math.max(0, s.absences + n) } : s))),
      addDoc: (d) => setDocs((prev) => [d, ...prev]),
    }),
    [subjects, schedule, events, sessions, docs, plan],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore precisa estar dentro de StoreProvider");
  return ctx;
}

/* ---------- cálculos ---------- */

export function currentAverage(s: Subject): number | null {
  const done = s.assessments.filter((a) => a.grade !== null && a.weight !== null);
  const totalWeight = done.reduce((acc, a) => acc + (a.weight ?? 0), 0);
  if (!done.length || totalWeight === 0) return null;
  return done.reduce((acc, a) => acc + (a.grade ?? 0) * (a.weight ?? 0), 0) / totalWeight;
}

export function projectedAverage(s: Subject, overrides: Record<string, number> = {}): number | null {
  const total = s.assessments.reduce((acc, a) => acc + (a.weight ?? 0), 0);
  if (total === 0) return null;
  const sum = s.assessments.reduce((acc, a) => {
    const g = overrides[a.id] ?? a.grade;
    return acc + (g ?? 0) * (a.weight ?? 0);
  }, 0);
  return sum / total;
}

export function neededGrade(s: Subject, target: number): number | null {
  const pending = s.assessments.filter((a) => a.grade === null && a.weight !== null);
  if (pending.length !== 1) return null;
  const pendingWeight = pending[0]?.weight ?? 0;
  if (pendingWeight === 0) return null;
  const totalWeight = s.assessments.reduce((acc, a) => acc + (a.weight ?? 0), 0);
  const earned = s.assessments
    .filter((a) => a.grade !== null)
    .reduce((acc, a) => acc + (a.grade ?? 0) * (a.weight ?? 0), 0);
  return (target * totalWeight - earned) / pendingWeight;
}

export function absencePercent(s: Subject): number {
  if (!s.classesHeld) return 0;
  return (s.absences / s.classesHeld) * 100;
}

export function weightedAverage(courses: { credits: number; grade: number | null }[]): number | null {
  const valid = courses.filter((c) => c.grade !== null);
  const credits = valid.reduce((a, c) => a + c.credits, 0);
  if (!credits) return null;
  return valid.reduce((a, c) => a + (c.grade as number) * c.credits, 0) / credits;
}

export function minutesBetween(start: string, end: string) {
  const [h1 = 0, m1 = 0] = start.split(":").map(Number);
  const [h2 = 0, m2 = 0] = end.split(":").map(Number);
  return Math.max(0, h2 * 60 + m2 - (h1 * 60 + m1));
}

export function formatDuration(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h && m) return `${h}h${String(m).padStart(2, "0")}`;
  if (h) return `${h}h`;
  return `${m} min`;
}
