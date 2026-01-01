"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, ShieldCheck, Network, LogOut } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { BRANDS } from "@/lib/data";

const navigation = [
  { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { name: "Audit Engine", href: "/app/audit", icon: ShieldCheck },
  { name: "Architecture", href: "/app/architecture", icon: Network },
];

export function Sidebar() {
  const pathname = usePathname();
  const { selectedBrandId, setSelectedBrand } = useAppStore();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50">
      <div className="flex h-16 items-center border-b px-6 dark:border-slate-800">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-blue-600">⚡</span> Kasparro
        </Link>
      </div>

      <div className="p-4">
        <label className="mb-2 block text-xs font-semibold text-slate-500 uppercase">
          Select Client
        </label>
        <select
          value={selectedBrandId}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="w-full rounded-md border border-slate-200 bg-slate-50 p-2 text-sm outline-none focus:border-blue-500 dark:bg-slate-900 dark:border-slate-800"
        >
          {BRANDS.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400 group-hover:text-slate-500"
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4 dark:border-slate-800">
        <button className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800">
          <LogOut className="h-5 w-5 text-slate-400" />
          Sign Out
        </button>
      </div>
    </div>
  );
}