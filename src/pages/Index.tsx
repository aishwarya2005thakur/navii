import { useState } from "react";
import ModeSwitcher from "@/components/ModeSwitcher";
import ChatWindow from "@/components/ChatWindow";
import PomodoroTimer from "@/components/PomodoroTimer";
import MusicList from "@/components/MusicList";
import EventList from "@/components/EventList";
import { Brain, Music, Calendar } from "lucide-react";

export type Mode = "mood" | "career" | "events";

const Index = () => {
  const [currentMode, setCurrentMode] = useState<Mode>("mood");

  const renderRightPanel = () => {
    switch (currentMode) {
      case "mood":
        return (
          <div className="space-y-6">
            <PomodoroTimer />
            <MusicList />
          </div>
        );
      case "career":
        return (
          <div className="p-6 rounded-xl bg-gradient-mint shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent rounded-lg">
                <Brain className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Career Insights</h3>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>✨ AI-powered project suggestions</p>
              <p>🎯 Personalized skill roadmaps</p>
              <p>🎤 Pitch feedback & improvement</p>
              <p>📈 Career progression tracking</p>
            </div>
          </div>
        );
      case "events":
        return <EventList />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 font-display">
            Campus Compass
          </h1>
          <p className="text-muted-foreground text-lg">
            Your AI study buddy, career mentor, and event finder
          </p>
        </header>

        {/* Mode Switcher */}
        <div className="mb-6">
          <ModeSwitcher currentMode={currentMode} onModeChange={setCurrentMode} />
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Window - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <ChatWindow mode={currentMode} />
          </div>

          {/* Right Panel - Takes 1 column on large screens */}
          <div className="lg:col-span-1">
            {renderRightPanel()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;