import Link from "next/link";
import { Bot } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="bg-muted">
      <div className="container py-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg">Kasparro</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link href="/platform" className="text-muted-foreground hover:text-foreground">Platform</Link>
        </nav>
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} KasparroAI. All rights reserved.</p>
      </div>
    </footer>
  );
}
