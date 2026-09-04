import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Btn, PageHeader, Page, SectionTitle, TypeDot, TypeTag } from "@/components/kit";
import { TODAY, type EventType } from "@/lib/academic-data";
import { absencePercent, currentAverage, formatDuration, minutesBetween, useStore } from "@/lib/store";
import { addDays, daysUntil, fmt, iso, relativeLabel, today, weekdayIndex } from "@/lib/dates";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visão Geral — disciplinIA" },
      { name: "description", content: "Seu dia organizado: aulas, provas, entregas e plano de estudos." },
      { property: "og:title", content: "Visão Geral — disciplinIA" },
      { property: "og:description", content: "Seu dia organizado: aulas, provas, entregas e plano de estudos." },
    ],
  }),
  component: Overview,
});

interface Item {
  time: string;
  end?: string;
  title: string;
  type: EventType | "estudo" | "livre";
  detail?: string;
  duration?: string;
  id?: string;
  status?: string;
}

function Overview() {
  const { subjects, schedule, events, sessions, setSessionStatus } = useStore();
  const name = (id: string | null) => subjects.find((s) => s.id === id)?.shortName ?? "";
  const full = (id: string | null) => subjects.find((s) => s.id === id)?.name ?? "";

  const items = useMemo<Item[]>(() => {
    const wd = weekdayIndex(TODAY);
    const list: Item[] = [];
    schedule
      .filter((b) => b.day === wd)
      .forEach((b) => {
        const subj = subjects.find((s) => s.id === b.subjectId);
        const content = subj?.contents.find((c) => c.status === "atual");
        list.push({
          time: b.start,
          end: b.end,
          title: subj?.name ?? "",
          type: "aula",
          detail: content?.title,
        });
      });
    events
      .filter((e) => e.date === TODAY)
      .forEach((e) => list.push({ time: e.start, end: e.end, title: e.title, type: e.type, detail: e.content }));
    sessions
      .filter((s) => s.date === TODAY)
      .forEach((s) =>
        list.push({
          id: s.id,
          time: s.start,
          end: s.end,
          title: full(s.subjectId),
          type: "estudo",
          detail: s.topic,
          duration: formatDuration(minutesBetween(s.start, s.end)),
          status: s.status,
        }),
      );
    list.sort((a, b) => a.time.localeCompare(b.time));
    return list;
  }, [schedule, events, sessions, subjects]);

  const todaySessions = sessions.filter((s) => s.date === TODAY);
  const plannedMinutes = todaySessions.reduce((a, s) => a + minutesBetween(s.start, s.end), 0);
  const classMinutes = schedule
    .filter((b) => b.day === weekdayIndex(TODAY))
    .reduce((a, b) => a + minutesBetween(b.start, b.end), 0);

  const upcoming = [...events]
    .filter((e) => e.type !== "aula" && e.type !== "evento" && daysUntil(e.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);

  const nextClass = items.find((i) => i.type === "aula");

  const attention = useMemo(() => {
    const rows: { subject: string; note: string; tone: "warning" | "danger" }[] = [];
    subjects.forEach((s) => {
      const pct = absencePercent(s);
      if (s.absenceLimit && pct > s.absenceLimit * 0.6)
        rows.push({ subject: s.shortName, note: `${pct.toFixed(1).replace(".", ",")}% de faltas`, tone: "warning" });
      const avg = currentAverage(s);
      if (avg !== null && avg < 6)
        rows.push({ subject: s.shortName, note: `Média atual ${avg.toFixed(1).replace(".", ",")}`, tone: "danger" });
    });
    upcoming.slice(0, 2).forEach((e) => {
      const d = daysUntil(e.date);
      if (d <= 3)
        rows.push({
          subject: name(e.subjectId) || e.title,
          note: d === 0 ? "Entrega hoje" : d === 1 ? "Entrega amanhã" : `Entrega em ${d} dias`,
          tone: "warning",
        });
    });
    return rows.slice(0, 4);
  }, [subjects, events]);

  const weekStats = (offset: number) => {
    const start = addDays(today(), offset * 7);
    const range = Array.from({ length: 7 }, (_, i) => iso(addDays(start, i)));
    const evs = events.filter((e) => range.includes(e.date));
    const classes = schedule.filter((b) => range.some((d) => weekdayIndex(d) === b.day)).length;
    const mins = sessions.filter((s) => range.includes(s.date)).reduce((a, s) => a + minutesBetween(s.start, s.end), 0);
    return {
      provas: evs.filter((e) => e.type === "prova").length,
      entregas: evs.filter((e) => e.type === "entrega" || e.type === "trabalho").length,
      aulas: classes,
      estudo: formatDuration(mins),
    };
  };

  const freeGap = "16:00–18:00";

  return (
    <>
      <PageHeader title="Bom dia, Rafael" subtitle={fmt(TODAY, "EEEE, d 'de' MMMM")} />
      <Page>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 space-y-10">
            {/* resumo do dia */}
            <section className="flex flex-wrap gap-x-10 gap-y-3 border-b border-border pb-6">
              <Summary label="Aulas" value={formatDuration(classMinutes)} />
              <Summary label="Estudo planejado" value={formatDuration(plannedMinutes)} />
              <Summary label="Próximo compromisso" value={nextClass ? `${name(null) || nextClass.title.split(" ")[0]} às ${nextClass.time}` : "—"} />
              <Summary label="Tempo livre identificado" value={freeGap} />
            </section>

            {/* timeline */}
            <section>
              <SectionTitle>Seu dia</SectionTitle>
              <ul className="divide-y divide-border border-y border-border">
                {items.map((item, i) => (
                  <li key={i} className="flex gap-4 py-3">
                    <span className="num w-14 shrink-0 pt-0.5 text-[13px] text-muted-foreground">{item.time}</span>
                    <span className="mt-2">
                      <TypeDot type={item.type === "livre" ? "evento" : item.type} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "truncate text-[14px]",
                          item.status === "concluido" && "text-muted-foreground line-through",
                        )}
                      >
                        {item.title}
                      </p>
                      <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[12px] text-muted-foreground">
                        <TypeTag type={item.type === "livre" ? "evento" : item.type} />
                        {item.detail && <span>{item.detail}</span>}
                        {item.duration && <span>· {item.duration}</span>}
                      </p>
                    </div>
                    {item.type === "estudo" && item.id && (
                      <div className="hidden shrink-0 items-start gap-1 sm:flex">
                        <Btn
                          variant="ghost"
                          onClick={() =>
                            setSessionStatus(item.id!, item.status === "concluido" ? "pendente" : "concluido")
                          }
                        >
                          {item.status === "concluido" ? "Desfazer" : "Concluído"}
                        </Btn>
                        <Btn variant="ghost" onClick={() => setSessionStatus(item.id!, "nao-realizado")}>
                          Não realizado
                        </Btn>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* próximas semanas */}
            <section>
              <SectionTitle>Próximas semanas</SectionTitle>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                {[
                  { label: "Semana atual", stats: weekStats(0) },
                  { label: "Próxima semana", stats: weekStats(1) },
                ].map((w) => (
                  <div key={w.label} className="bg-surface px-5 py-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[13px] font-medium">{w.label}</p>
                      <Link
                        to="/planejamento"
                        className="text-[12px] text-primary hover:underline"
                      >
                        Ver semana
                      </Link>
                    </div>
                    <dl className="mt-3 space-y-1.5 text-[13px]">
                      <Row label="Provas" value={String(w.stats.provas)} />
                      <Row label="Entregas" value={String(w.stats.entregas)} />
                      <Row label="Aulas" value={String(w.stats.aulas)} />
                      <Row label="Estudo planejado" value={w.stats.estudo} />
                    </dl>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* coluna lateral */}
          <div className="space-y-10">
            <section>
              <SectionTitle>Próximos eventos importantes</SectionTitle>
              <ul className="divide-y divide-border border-y border-border">
                {upcoming.map((e) => (
                  <li key={e.id} className="flex items-baseline gap-3 py-2.5">
                    <span
                      className={cn(
                        "num w-16 shrink-0 text-[11px] font-semibold uppercase tracking-[0.06em]",
                        daysUntil(e.date) <= 1 ? "text-destructive" : "text-muted-foreground",
                      )}
                    >
                      {relativeLabel(e.date)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[13px]">{e.title}</p>
                      <TypeTag type={e.type} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionTitle
                action={
                  <Link to="/planejamento" className="flex items-center gap-1 text-[12px] text-primary hover:underline">
                    Ver planejamento <ArrowRight className="size-3" />
                  </Link>
                }
              >
                Seu plano de hoje
              </SectionTitle>
              <ul className="divide-y divide-border border-y border-border">
                {todaySessions.map((s) => (
                  <li key={s.id} className="py-2.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="truncate text-[13px]">{full(s.subjectId)}</p>
                      <span className="num shrink-0 text-[12px] text-muted-foreground">
                        {formatDuration(minutesBetween(s.start, s.end))}
                      </span>
                    </div>
                    <p className="text-[12px] text-muted-foreground">{s.topic}</p>
                    <div className="mt-1.5 flex gap-3 text-[12px]">
                      <button
                        className={cn(
                          "hover:underline",
                          s.status === "concluido" ? "text-success" : "text-muted-foreground",
                        )}
                        onClick={() => setSessionStatus(s.id, s.status === "concluido" ? "pendente" : "concluido")}
                      >
                        Concluído
                      </button>
                      <button
                        className={cn(
                          "hover:underline",
                          s.status === "nao-realizado" ? "text-destructive" : "text-muted-foreground",
                        )}
                        onClick={() => setSessionStatus(s.id, s.status === "nao-realizado" ? "pendente" : "nao-realizado")}
                      >
                        Não realizado
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-[12px] text-muted-foreground">
                Carga planejada hoje: {formatDuration(plannedMinutes)}
              </p>
            </section>

            {attention.length > 0 && (
              <section>
                <SectionTitle>Atenção</SectionTitle>
                <ul className="divide-y divide-border border-y border-border">
                  {attention.map((a, i) => (
                    <li key={i} className="flex items-baseline justify-between gap-3 py-2.5">
                      <span className="truncate text-[13px]">{a.subject}</span>
                      <span
                        className={cn(
                          "num shrink-0 text-[12px]",
                          a.tone === "danger" ? "text-destructive" : "text-warning",
                        )}
                      >
                        {a.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </Page>
    </>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</p>
      <p className="num mt-1 text-[14px] font-medium">{value}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="num">{value}</dd>
    </div>
  );
}
