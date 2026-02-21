import Link from "next/link";
import ApiStatus from "./ApiStatus";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="text-xl tracking-tight">
              MyCare<span className="text-emerald-600">Linker</span>
            </span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600">
            <ApiStatus />
            <Link href="/docs" className="hover:text-slate-900 transition">
              Docs
            </Link>
            <Link href="/demo" className="hover:text-slate-900 transition">
              Demo
            </Link>
            <Link
              href="/#quickstart"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
            >
              Get API Key
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
