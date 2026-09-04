export type Origin = "documento" | "grade" | "manual";

export type EventType = "aula" | "prova" | "entrega" | "trabalho" | "evento";

export type Difficulty = "baixa" | "media" | "alta";

export interface Assessment {
  id: string;
  name: string;
  weight: number | null;
  grade: number | null;
  date: string | null;
}

export interface ContentItem {
  id: string;
  title: string;
  month: string;
  date: string | null;
  status: "concluido" | "atual" | "previsto";
  origin: Origin;
}

export interface Subject {
  id: string;
  name: string;
  shortName: string;
  code: string;
  credits: number;
  duration: "Anual" | "Semestral";
  professor: string | null;
  workload: string;
  difficulty: Difficulty;
  absences: number;
  classesHeld: number;
  absenceLimit: number | null;
  criteriaComplete: boolean;
  assessments: Assessment[];
  contents: ContentItem[];
}

export interface ScheduleBlock {
  id: string;
  subjectId: string;
  day: number; // 1 = segunda ... 5 = sexta
  start: string;
  end: string;
  room: string;
  periods: number;
}

export interface AgendaEvent {
  id: string;
  title: string;
  type: EventType;
  subjectId: string | null;
  date: string; // yyyy-MM-dd
  start: string;
  end: string;
  content: string;
  weight: string;
  notes: string;
  origin: Origin;
  attendance?: "presente" | "faltou" | null;
}

export interface StudySession {
  id: string;
  date: string;
  start: string;
  end: string;
  subjectId: string;
  topic: string;
  reason: string;
  status: "pendente" | "concluido" | "nao-realizado";
}

export interface AcademicDoc {
  id: string;
  name: string;
  kind: "documento" | "grade";
  status: "processado" | "revisao" | "processando";
  date: string;
}

export interface PastCourse {
  name: string;
  code: string;
  credits: number;
  grade: number | null;
  status: "Aprovado" | "Cursando" | "Reprovado";
}

export const TODAY = "2026-09-04";

export const subjects: Subject[] = [
  {
    id: "fund",
    name: "Fundamentos Científicos e Modelagem para Eng. I",
    shortName: "Fundamentos",
    code: "2000101",
    credits: 23,
    duration: "Anual",
    professor: null,
    workload: "345h",
    difficulty: "alta",
    absences: 8,
    classesHeld: 45,
    absenceLimit: 25,
    criteriaComplete: true,
    assessments: [
      { id: "f1", name: "P1", weight: 30, grade: 8, date: "2026-05-14" },
      { id: "f2", name: "P2", weight: 30, grade: null, date: "2026-09-18" },
      { id: "f3", name: "Projeto", weight: 25, grade: 8.5, date: "2026-06-20" },
      { id: "f4", name: "Listas", weight: 15, grade: 9, date: null },
    ],
    contents: [
      { id: "c1", title: "Sistemas lineares", month: "Agosto", date: "2026-08-06", status: "concluido", origin: "documento" },
      { id: "c2", title: "Vetores", month: "Agosto", date: "2026-08-20", status: "concluido", origin: "documento" },
      { id: "c3", title: "Espaços vetoriais", month: "Setembro", date: "2026-09-04", status: "atual", origin: "documento" },
      { id: "c4", title: "Autovalores", month: "Setembro", date: "2026-09-17", status: "previsto", origin: "documento" },
      { id: "c5", title: "Oscilações", month: "Setembro", date: "2026-09-24", status: "previsto", origin: "documento" },
      { id: "c6", title: "Equações diferenciais", month: "Outubro", date: "2026-10-08", status: "previsto", origin: "documento" },
      { id: "c7", title: "Otimização", month: "Outubro", date: "2026-10-22", status: "previsto", origin: "manual" },
    ],
  },
  {
    id: "comp",
    name: "Introdução à Computação",
    shortName: "Computação",
    code: "MAC2166",
    credits: 4,
    duration: "Semestral",
    professor: "Ana Ribeiro",
    workload: "60h",
    difficulty: "media",
    absences: 2,
    classesHeld: 26,
    absenceLimit: 25,
    criteriaComplete: true,
    assessments: [
      { id: "k1", name: "P1", weight: 40, grade: 7.5, date: "2026-08-12" },
      { id: "k2", name: "Listas", weight: 20, grade: 9.5, date: null },
      { id: "k3", name: "P2", weight: 40, grade: null, date: "2026-10-14" },
    ],
    contents: [
      { id: "kc1", title: "Variáveis e tipos", month: "Agosto", date: "2026-08-05", status: "concluido", origin: "documento" },
      { id: "kc2", title: "Estruturas condicionais", month: "Setembro", date: "2026-09-04", status: "atual", origin: "documento" },
      { id: "kc3", title: "Laços de repetição", month: "Setembro", date: "2026-09-18", status: "previsto", origin: "documento" },
      { id: "kc4", title: "Funções", month: "Outubro", date: "2026-10-02", status: "previsto", origin: "documento" },
    ],
  },
  {
    id: "est",
    name: "Introdução à Estática",
    shortName: "Estática",
    code: "PME0101",
    credits: 4,
    duration: "Semestral",
    professor: "Carlos Menezes",
    workload: "60h",
    difficulty: "alta",
    absences: 4,
    classesHeld: 24,
    absenceLimit: null,
    criteriaComplete: false,
    assessments: [
      { id: "e1", name: "P1", weight: null, grade: 5.4, date: "2026-08-19" },
      { id: "e2", name: "Avaliação", weight: null, grade: null, date: "2026-09-30" },
    ],
    contents: [
      { id: "ec1", title: "Forças e momentos", month: "Agosto", date: "2026-08-11", status: "concluido", origin: "documento" },
      { id: "ec2", title: "Equilíbrio", month: "Setembro", date: "2026-09-09", status: "previsto", origin: "documento" },
      { id: "ec3", title: "Treliças", month: "Outubro", date: "2026-10-07", status: "previsto", origin: "documento" },
    ],
  },
  {
    id: "proj",
    name: "Introdução ao Projeto na Engenharia",
    shortName: "Projeto",
    code: "PRO0201",
    credits: 6,
    duration: "Semestral",
    professor: "Marina Lopes",
    workload: "90h",
    difficulty: "media",
    absences: 1,
    classesHeld: 22,
    absenceLimit: 25,
    criteriaComplete: true,
    assessments: [
      { id: "p1", name: "Entrega parcial", weight: 40, grade: 8, date: "2026-09-23" },
      { id: "p2", name: "Entrega final", weight: 60, grade: null, date: "2026-11-25" },
    ],
    contents: [
      { id: "pc1", title: "Definição de escopo", month: "Agosto", date: "2026-08-13", status: "concluido", origin: "documento" },
      { id: "pc2", title: "Levantamento de requisitos", month: "Setembro", date: "2026-09-10", status: "previsto", origin: "documento" },
    ],
  },
];

export const scheduleBlocks: ScheduleBlock[] = [
  { id: "s1", subjectId: "fund", day: 1, start: "08:00", end: "11:00", room: "B-201", periods: 3 },
  { id: "s2", subjectId: "comp", day: 1, start: "14:00", end: "16:00", room: "Lab 4", periods: 2 },
  { id: "s3", subjectId: "est", day: 2, start: "10:00", end: "12:00", room: "A-105", periods: 2 },
  { id: "s4", subjectId: "fund", day: 3, start: "08:00", end: "10:00", room: "B-201", periods: 2 },
  { id: "s5", subjectId: "proj", day: 3, start: "14:00", end: "17:00", room: "C-310", periods: 3 },
  { id: "s6", subjectId: "comp", day: 4, start: "10:00", end: "12:00", room: "Lab 4", periods: 2 },
  { id: "s7", subjectId: "est", day: 4, start: "14:00", end: "16:00", room: "A-105", periods: 2 },
  { id: "s8", subjectId: "fund", day: 5, start: "08:00", end: "10:00", room: "B-201", periods: 2 },
  { id: "s9", subjectId: "comp", day: 5, start: "10:00", end: "12:00", room: "Lab 4", periods: 2 },
  { id: "s10", subjectId: "proj", day: 5, start: "14:00", end: "16:00", room: "C-310", periods: 2 },
];

export const agendaEvents: AgendaEvent[] = [
  {
    id: "ev1",
    title: "Lista de Computação",
    type: "entrega",
    subjectId: "comp",
    date: "2026-09-05",
    start: "23:59",
    end: "23:59",
    content: "Lista 3 — estruturas condicionais",
    weight: "5%",
    notes: "",
    origin: "documento",
  },
  {
    id: "ev2",
    title: "Prova de Fundamentos",
    type: "prova",
    subjectId: "fund",
    date: "2026-09-18",
    start: "08:00",
    end: "10:00",
    content: "Espaços vetoriais e autovalores",
    weight: "30%",
    notes: "",
    origin: "documento",
  },
  {
    id: "ev3",
    title: "Projeto de Engenharia — entrega parcial",
    type: "entrega",
    subjectId: "proj",
    date: "2026-09-23",
    start: "18:00",
    end: "18:00",
    content: "Relatório de requisitos",
    weight: "40%",
    notes: "",
    origin: "documento",
  },
  {
    id: "ev4",
    title: "Avaliação de Estática",
    type: "prova",
    subjectId: "est",
    date: "2026-09-30",
    start: "10:00",
    end: "12:00",
    content: "Equilíbrio de corpos rígidos",
    weight: "Peso não informado",
    notes: "",
    origin: "documento",
  },
  {
    id: "ev5",
    title: "Monitoria de Estática",
    type: "evento",
    subjectId: "est",
    date: "2026-09-09",
    start: "17:00",
    end: "18:30",
    content: "",
    weight: "",
    notes: "Sala A-102",
    origin: "manual",
  },
  {
    id: "ev6",
    title: "Trabalho de Fundamentos",
    type: "trabalho",
    subjectId: "fund",
    date: "2026-09-11",
    start: "23:59",
    end: "23:59",
    content: "Modelagem de sistemas lineares",
    weight: "10%",
    notes: "",
    origin: "documento",
  },
];

export const studySessions: StudySession[] = [
  { id: "ss1", date: "2026-09-04", start: "17:00", end: "17:45", subjectId: "comp", topic: "Estruturas condicionais", reason: "Entrega amanhã", status: "pendente" },
  { id: "ss2", date: "2026-09-04", start: "18:00", end: "19:15", subjectId: "fund", topic: "Autovalores", reason: "Prova em 14 dias", status: "pendente" },
  { id: "ss3", date: "2026-09-07", start: "18:00", end: "19:00", subjectId: "fund", topic: "Autovalores", reason: "Matéria marcada como dificuldade alta", status: "pendente" },
  { id: "ss4", date: "2026-09-07", start: "19:15", end: "20:00", subjectId: "comp", topic: "Laços de repetição", reason: "Conteúdo novo na semana", status: "pendente" },
  { id: "ss5", date: "2026-09-09", start: "16:00", end: "17:30", subjectId: "fund", topic: "Oscilações", reason: "Prova em 9 dias", status: "pendente" },
  { id: "ss6", date: "2026-09-09", start: "18:00", end: "19:00", subjectId: "est", topic: "Equilíbrio", reason: "Média atual baixa", status: "pendente" },
  { id: "ss7", date: "2026-09-10", start: "18:00", end: "19:30", subjectId: "proj", topic: "Levantamento de requisitos", reason: "Entrega em 13 dias", status: "pendente" },
  { id: "ss8", date: "2026-09-12", start: "09:00", end: "11:00", subjectId: "fund", topic: "Espaços vetoriais", reason: "Prova em 6 dias", status: "pendente" },
];

export const documents: AcademicDoc[] = [
  { id: "d1", name: "Programa — Fundamentos.pdf", kind: "documento", status: "processado", date: "2026-09-04" },
  { id: "d2", name: "Plano — Estática.pdf", kind: "documento", status: "processado", date: "2026-09-02" },
  { id: "d3", name: "Cronograma — Computação.pdf", kind: "documento", status: "revisao", date: "2026-09-01" },
  { id: "d4", name: "Grade 2026-2.pdf", kind: "grade", status: "processado", date: "2026-09-04" },
];

export const graduation: { semester: number; courses: PastCourse[] }[] = [
  {
    semester: 1,
    courses: [
      { name: "Cálculo I", code: "MAT0111", credits: 6, grade: 7.5, status: "Aprovado" },
      { name: "Química Geral", code: "QFL0101", credits: 4, grade: 8.2, status: "Aprovado" },
      { name: "Desenho Técnico", code: "PCC0100", credits: 4, grade: 9, status: "Aprovado" },
      { name: "Introdução à Engenharia", code: "PRO0100", credits: 2, grade: 8.5, status: "Aprovado" },
    ],
  },
  {
    semester: 2,
    courses: [
      { name: "Cálculo II", code: "MAT0112", credits: 6, grade: 6.8, status: "Aprovado" },
      { name: "Física I", code: "FEP0111", credits: 4, grade: 7, status: "Aprovado" },
      { name: "Álgebra Linear", code: "MAT0122", credits: 4, grade: 8.8, status: "Aprovado" },
    ],
  },
  {
    semester: 3,
    courses: [
      { name: "Fundamentos Científicos e Modelagem para Eng. I", code: "2000101", credits: 23, grade: null, status: "Cursando" },
      { name: "Introdução à Computação", code: "MAC2166", credits: 4, grade: null, status: "Cursando" },
      { name: "Introdução à Estática", code: "PME0101", credits: 4, grade: null, status: "Cursando" },
      { name: "Introdução ao Projeto na Engenharia", code: "PRO0201", credits: 6, grade: null, status: "Cursando" },
    ],
  },
  { semester: 4, courses: [] },
  { semester: 5, courses: [] },
  { semester: 6, courses: [] },
  { semester: 7, courses: [] },
  { semester: 8, courses: [] },
  { semester: 9, courses: [] },
  { semester: 10, courses: [] },
];

export interface ReviewField {
  id: string;
  label: string;
  value: string;
  status: "ok" | "revisao";
  category: string;
}

export const reviewFields: ReviewField[] = [
  { id: "r1", label: "Disciplina", value: "Fundamentos Científicos e Modelagem para Eng. I", status: "ok", category: "Identificação" },
  { id: "r2", label: "Código", value: "2000101", status: "ok", category: "Identificação" },
  { id: "r3", label: "Créditos", value: "23", status: "ok", category: "Identificação" },
  { id: "r4", label: "Duração", value: "Anual", status: "ok", category: "Identificação" },
  { id: "r5", label: "Professor", value: "Não identificado", status: "revisao", category: "Identificação" },
  { id: "r6", label: "Avaliação", value: "18/09 — Avaliação", status: "ok", category: "Avaliações" },
  { id: "r7", label: "Avaliação", value: "23/10 — Avaliação", status: "ok", category: "Avaliações" },
  { id: "r8", label: "Conteúdo", value: "Espaços vetoriais", status: "ok", category: "Conteúdos" },
  { id: "r9", label: "Conteúdo", value: "Autovalores", status: "ok", category: "Conteúdos" },
  { id: "r10", label: "Conteúdo", value: "Oscilações", status: "ok", category: "Conteúdos" },
  { id: "r11", label: "Conteúdo", value: "Equações diferenciais", status: "ok", category: "Conteúdos" },
  { id: "r12", label: "Conteúdo", value: "Otimização", status: "ok", category: "Conteúdos" },
  { id: "r13", label: "Informação encontrada", value: "Avaliações formativas ao longo do período", status: "revisao", category: "Não classificado" },
];
