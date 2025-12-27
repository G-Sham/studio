"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Bot, Gauge, Microscope, Share2 } from "lucide-react";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { BrandProvider } from "@/context/brand-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { BrandSelector } from "@/components/dashboard/brand-selector";

const appRoutes = [
    { name: "Dashboard", href: "/app/dashboard", icon: Gauge, tooltip: "Dashboard" },
    { name: "Audit", href: "/app/audit", icon: Microscope, tooltip: "Audit" },
    { name: "Architecture", href: "/app/architecture", icon: Share2, tooltip: "Architecture" },
]

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <BrandProvider>
      <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <Link href="/" className="flex items-center gap-2 p-2 group-data-[collapsible=icon]:justify-center">
                <Bot className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">Kasparro</span>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {appRoutes.map(route => (
                  <SidebarMenuItem key={route.name}>
                    <Link href={route.href} className="w-full">
                      <SidebarMenuButton isActive={pathname.startsWith(route.href)} tooltip={{content: route.tooltip}}>
                        <route.icon/>
                        <span>{route.name}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
                <SidebarTrigger className="md:hidden"/>
                <div className="flex-1">
                  <BrandSelector />
                </div>
                <ModeToggle/>
            </header>
            <div className="flex-1 p-4 sm:p-6 overflow-auto">
              {children}
            </div>
          </SidebarInset>
      </SidebarProvider>
    </BrandProvider>
  );
}
