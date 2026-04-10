export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border bg-white p-6">
          <p className="text-sm text-gray-500">Status</p>
          <p className="text-2xl font-bold">Active</p>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <p className="text-sm text-gray-500">Modules</p>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <p className="text-sm text-gray-500">Features</p>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>
    </div>
  );
}
