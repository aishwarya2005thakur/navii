import ChatWindow from "@/components/ChatWindow";
import { Card } from "@/components/ui/card";
import { Brain, Target, Presentation, TrendingUp } from "lucide-react";

const CareerMentorPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-display">
          Career Mentor
        </h1>
        <p className="text-muted-foreground text-lg">
          AI-powered project suggestions, pitch feedback, and skill roadmaps
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Window - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ChatWindow mode="career" />
        </div>

        {/* Career Tools - Takes 1 column */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 bg-gradient-mint shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent rounded-lg">
                <Brain className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Career Insights</h3>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>AI-powered project suggestions</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Personalized skill roadmaps</span>
              </div>
              <div className="flex items-center gap-2">
                <Presentation className="w-4 h-4" />
                <span>Pitch feedback & improvement</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Career progression tracking</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm">
                📝 Generate Project Ideas
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm">
                🎯 Create Skill Roadmap
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm">
                🎤 Practice Pitch Presentation
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareerMentorPage;