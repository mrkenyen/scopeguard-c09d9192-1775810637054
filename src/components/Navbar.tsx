import { Link } from "react-router-dom";

interface NavbarProps { appName: string }

export default function Navbar({ appName }: NavbarProps) {
  return (
    <nav className="bg-white border-b px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-gray-900">{appName}</Link>
      <div className="flex gap-4">
        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
        <Link to="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">Dashboard</Link>
        <Link to="/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link>
      </div>
    </nav>
  );
}
