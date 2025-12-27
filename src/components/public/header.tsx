import Link from "next/link";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Bot className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline-block">Kasparro</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="/platform" className="text-muted-foreground hover:text-foreground transition-colors">Platform</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
            <Button asChild variant="ghost">
                <Link href="/app/dashboard">Log In</Link>
            </Button>
            <Button asChild>
                <Link href="/app/dashboard">Get Started</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
