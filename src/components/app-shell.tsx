import { Link, useRouterState } from "@tanstack/react-router";
import {
  CalendarDays,
  CalendarRange,
  GraduationCap,
  LayoutGrid,
  ListChecks,
  Menu,
  Settings,
  UploadCloud,
  UserMinus,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Visão Geral", icon: LayoutGrid },
  { to: "/agenda", label: "Agenda", icon: CalendarDays },
  { to: "/planejamento", label: "Planejamento", icon: ListChecks },
  { to: "/grade-horaria", label: "Grade Horária", icon: CalendarRange },
  { to: "/disciplinas", label: "Disciplinas", icon: GraduationCap },
  { to: "/graduacao", label: "Graduação", icon: GraduationCap },
  { to: "/faltas", label: "Faltas", icon: UserMinus },
  { to: "/uploads", label: "Uploads", icon: UploadCloud },
] as const;

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const active = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <nav className="flex flex-1 flex-col gap-0.5 px-3">
      {nav.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className={cn(
            "flex items-center gap-2.5 rounded-md px-2.5 py-[7px] text-[13px] transition-colors",
            active(item.to)
              ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
              : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
          )}
        >
          <item.icon className="size-4 shrink-0" strokeWidth={1.75} />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 px-6 py-5">
      <span className="text-[15px] font-semibold tracking-tight">
        disciplin<span className="text-primary">IA</span>
      </span>
    </Link>
  );
}

function Bottom({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  return (
    <div className="border-t border-sidebar-border px-3 py-3">
      <Link
        to="/configuracoes"
        onClick={onNavigate}
        className={cn(
          "flex items-center gap-2.5 rounded-md px-2.5 py-[7px] text-[13px] transition-colors",
          pathname.startsWith("/configuracoes")
            ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
            : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
        )}
      >
        <Settings className="size-4" strokeWidth={1.75} />
        Configurações
      </Link>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <aside className="hidden w-[232px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
        <Brand />
        <NavList />
        <Bottom />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Fechar menu"
            className="absolute inset-0 bg-foreground/20"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex h-full w-[248px] flex-col border-r border-sidebar-border bg-sidebar">
            <div className="flex items-center justify-between pr-3">
              <Brand />
              <button onClick={() => setOpen(false)} aria-label="Fechar">
                <X className="size-4 text-muted-foreground" />
              </button>
            </div>
            <NavList onNavigate={() => setOpen(false)} />
            <Bottom onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3 lg:hidden">
          <button onClick={() => setOpen(true)} aria-label="Abrir menu">
            <Menu className="size-5" strokeWidth={1.75} />
          </button>
          <span className="text-sm font-semibold">
            disciplin<span className="text-primary">IA</span>
          </span>
        </div>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
