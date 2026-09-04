import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { EventType, Origin } from "@/lib/academic-data";

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border px-6 py-6 md:px-10 md:py-8">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight md:text-[26px]">{title}</h1>
        {subtitle && <p className="mt-1 text-[13px] text-muted-foreground">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="px-6 py-6 md:px-10 md:py-8">{children}</div>;
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{children}</h2>
      {action}
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border px-6 py-10 text-center">
      <p className="text-sm font-medium">{title}</p>
      {description && <p className="mt-1 text-[13px] text-muted-foreground">{description}</p>}
    </div>
  );
}

const typeStyles: Record<EventType | "estudo", string> = {
  aula: "text-muted-foreground",
  prova: "text-destructive",
  entrega: "text-warning",
  trabalho: "text-warning",
  evento: "text-muted-foreground",
  estudo: "text-primary",
};

const typeLabels: Record<EventType | "estudo", string> = {
  aula: "Aula",
  prova: "Prova",
  entrega: "Entrega",
  trabalho: "Trabalho",
  evento: "Evento",
  estudo: "Estudo planejado",
};

export function TypeTag({ type }: { type: EventType | "estudo" }) {
  return (
    <span className={cn("text-[11px] font-medium uppercase tracking-[0.06em]", typeStyles[type])}>
      {typeLabels[type]}
    </span>
  );
}

export function TypeDot({ type }: { type: EventType | "estudo" }) {
  const bg: Record<EventType | "estudo", string> = {
    aula: "bg-border-strong",
    prova: "bg-destructive",
    entrega: "bg-warning",
    trabalho: "bg-warning",
    evento: "bg-muted-foreground",
    estudo: "bg-primary",
  };
  return <span className={cn("inline-block size-1.5 shrink-0 rounded-full", bg[type])} />;
}

export function StatusIndicator({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "ok" | "warning" | "danger" | "info";
  children: ReactNode;
}) {
  const tones = {
    neutral: "text-muted-foreground",
    ok: "text-success",
    warning: "text-warning",
    danger: "text-destructive",
    info: "text-primary",
  };
  return <span className={cn("text-[12px] font-medium", tones[tone])}>{children}</span>;
}

const originLabels: Record<Origin, string> = {
  documento: "Importado do programa da disciplina",
  grade: "Importado da grade horária",
  manual: "Adicionado manualmente",
};

export function OriginNote({ origin }: { origin: Origin }) {
  return <span className="text-[11px] text-muted-foreground">{originLabels[origin]}</span>;
}

export function Drawer({
  open,
  onClose,
  title,
  footer,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  footer?: ReactNode;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button aria-label="Fechar" className="absolute inset-0 bg-foreground/15" onClick={onClose} />
      <div className="relative flex h-full w-full max-w-[420px] flex-col border-l border-border bg-surface">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="text-[15px] font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Fechar">
            <X className="size-4 text-muted-foreground" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">{children}</div>
        {footer && <div className="flex items-center gap-2 border-t border-border px-5 py-4">{footer}</div>}
      </div>
    </div>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full rounded-md border border-input bg-surface px-3 py-2 text-[13px] outline-none transition-colors placeholder:text-muted-foreground focus:border-ring";

export function Btn({
  variant = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost" | "danger" }) {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-surface hover:bg-accent",
    ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
    danger: "text-destructive hover:bg-destructive/10",
  };
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors disabled:opacity-50",
        variants[variant],
        className,
      )}
    />
  );
}
