import { Button } from "@/components/ui/button";
import { Heart, Briefcase, Calendar } from "lucide-react";
import type { Mode } from "@/pages/Index";

interface ModeSwitcherProps {
  currentMode: Mode;
  onModeChange: (mode: Mode) => void;
}

const modes = [
  {
    id: "mood" as const,
    label: "Mood & Study Buddy",
    icon: Heart,
    description: "Music suggestions & Pomodoro timer",
    gradient: "bg-gradient-peach"
  },
  {
    id: "career" as const,
    label: "Career Mentor",
    icon: Briefcase,
    description: "Project ideas & skill roadmaps",
    gradient: "bg-gradient-mint"
  },
  {
    id: "events" as const,
    label: "Event Finder",
    icon: Calendar,
    description: "Hackathons & networking events",
    gradient: "bg-gradient-lavender"
  }
];

const ModeSwitcher = ({ currentMode, onModeChange }: ModeSwitcherProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-1 bg-card rounded-2xl shadow-soft">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = currentMode === mode.id;
        
        return (
          <Button
            key={mode.id}
            variant="ghost"
            onClick={() => onModeChange(mode.id)}
            className={`
              relative p-6 h-auto flex flex-col items-center gap-3 rounded-xl transition-all duration-300
              ${isActive 
                ? `${mode.gradient} text-foreground shadow-float scale-105` 
                : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }
            `}
          >
            <div className={`p-3 rounded-lg transition-colors ${isActive ? 'bg-white/20' : 'bg-muted'}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-sm mb-1">{mode.label}</h3>
              <p className="text-xs opacity-80">{mode.description}</p>
            </div>
            {isActive && (
              <div className="absolute inset-0 rounded-xl ring-2 ring-primary/20 ring-offset-2 ring-offset-background" />
            )}
          </Button>
        );
      })}
    </div>
  );
};

export default ModeSwitcher;