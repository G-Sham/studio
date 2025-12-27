import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function PublicHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Link href="/" className="flex items-center gap-2 mr-6">
                    <Bot className="w-6 h-6 text-primary" />
                    <span className="font-bold">Kasparro</span>
                </Link>
                <nav className="hidden md:flex items-center gap-4 text-sm">
                    <Link href="/platform" className="text-muted-foreground hover:text-foreground">
                        Platform
                    </Link>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground">
                        About
                    </Link>
                </nav>
                <div className="flex flex-1 items-center justify-end gap-4">
                    <Button asChild>
                        <Link href="/app/dashboard">Dashboard</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
