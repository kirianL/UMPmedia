import Link from "next/link";
import { signOut } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  Newspaper,
  Calendar,
  LogOut,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-zinc-800">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            UMPmedia
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard size={18} />
              Dashboard
            </Button>
          </Link>
          <Link href="/admin/team">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users size={18} />
              Equipmento
            </Button>
          </Link>
          <Link href="/admin/news">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Newspaper size={18} />
              Noticias
            </Button>
          </Link>
          <Link href="/admin/events">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar size={18} />
              Eventos
            </Button>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
          <form action={signOut}>
            <Button
              variant="outline"
              className="w-full gap-2 text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-900/10"
            >
              <LogOut size={18} />
              Cerrar Sesión
            </Button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
