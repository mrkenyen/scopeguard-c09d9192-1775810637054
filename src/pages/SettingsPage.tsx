export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="space-y-6">
        <div className="rounded-lg border bg-white p-6">
          <h2 className="text-lg font-semibold mb-2">General</h2>
          <p className="text-sm text-gray-600">Application settings and preferences.</p>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <h2 className="text-lg font-semibold mb-2">Account</h2>
          <p className="text-sm text-gray-600">Manage your account and authentication.</p>
        </div>
      </div>
    </div>
  );
}
