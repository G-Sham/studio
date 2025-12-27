import Link from "next/link";
import { Bot } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="bg-muted">
      <div className="container py-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Kasparro. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link href="/platform" className="text-sm text-muted-foreground hover:text-primary">Platform</Link>
        </div>
      </div>
    </footer>
  );
}
