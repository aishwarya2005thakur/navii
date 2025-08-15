import { NavLink } from "react-router-dom";
import { Heart, Briefcase, Calendar, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Study Buddy",
    href: "/study-buddy",
    icon: Heart,
    gradient: "bg-gradient-peach"
  },
  {
    name: "Career Mentor",
    href: "/career-mentor", 
    icon: Briefcase,
    gradient: "bg-gradient-mint"
  },
  {
    name: "Event Finder",
    href: "/event-finder",
    icon: Calendar,
    gradient: "bg-gradient-lavender"
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    gradient: "bg-gradient-warm"
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
    gradient: "bg-gradient-peach"
  }
];

const SideNavbar = () => {
  return (
    <nav className="w-64 bg-card border-r border-border shadow-soft h-full sticky top-16 overflow-y-auto">
      <div className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  isActive
                    ? `${item.gradient} text-foreground shadow-float`
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActive ? "bg-white/20" : "bg-muted group-hover:bg-muted"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNavbar;