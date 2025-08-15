import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopNavbar = () => {
  return (
    <header className="w-full bg-card border-b border-border shadow-soft sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/87c4111a-d90b-43ac-a65e-0086978af1eb.png" 
            alt="Campus Compass Logo" 
            className="w-8 h-8 cursor-pointer"
            onClick={() => window.location.href = '/'}
          />
          <h1 className="text-xl font-bold text-foreground font-display">
            Campus Compass
          </h1>
        </div>

        {/* Right - User Profile */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage src="/api/placeholder/32/32" alt="User" />
            <AvatarFallback className="bg-gradient-peach text-primary-foreground text-sm">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;