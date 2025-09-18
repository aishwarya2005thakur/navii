import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { NavLink } from "react-router-dom";

const TopNavbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
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

        {/* Right - Navigation & User Profile */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </NavLink>
          </nav>
          
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </Button>
          
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