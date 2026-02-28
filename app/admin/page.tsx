export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Bienvenido al panel de administración de UMPmedia. Selecciona una opción
        del menú para gestionar el contenido.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-800">
          <h3 className="font-semibold mb-2">Acceso Rápido</h3>
          <p className="text-sm text-gray-500">
            Gestiona el equipo y las noticias desde aquí.
          </p>
        </div>
      </div>
    </div>
  );
}
