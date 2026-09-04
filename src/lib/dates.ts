import { addDays, differenceInCalendarDays, format, parseISO, startOfWeek } from "date-fns";
import { ptBR } from "date-fns/locale";
import { TODAY } from "./academic-data";

export const today = () => parseISO(TODAY);

export const iso = (d: Date) => format(d, "yyyy-MM-dd");

export const fmt = (d: Date | string, pattern: string) =>
  format(typeof d === "string" ? parseISO(d) : d, pattern, { locale: ptBR });

export const weekdayIndex = (d: Date | string) => {
  const date = typeof d === "string" ? parseISO(d) : d;
  return date.getDay(); // 0 dom ... 6 sáb
};

export const daysUntil = (dateStr: string) => differenceInCalendarDays(parseISO(dateStr), today());

export function relativeLabel(dateStr: string) {
  const d = daysUntil(dateStr);
  if (d === 0) return "HOJE";
  if (d === 1) return "AMANHÃ";
  return fmt(dateStr, "dd MMM").toUpperCase();
}

export function currentWeekDays(offsetWeeks = 0) {
  const start = addDays(startOfWeek(today(), { weekStartsOn: 1 }), offsetWeeks * 7);
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

export const weekdayNames = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
export const weekdayShort = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export { addDays, parseISO, differenceInCalendarDays };
