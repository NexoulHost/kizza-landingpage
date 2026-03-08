import { Link } from "wouter";
import { Building2 } from "lucide-react";
import { ContactModal } from "./ContactModal";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-primary tracking-tight">
            Faisal Kizza Properties
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-primary hover:text-primary/70 transition-colors">Home</Link>
          <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pages</button>
          <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About us</button>
          <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">FAQ</button>
        </nav>

      
      </div>
    </header>
  );
}
