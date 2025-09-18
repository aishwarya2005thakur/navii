import { Card } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-display">
          About Campus Compass
        </h1>
        <p className="text-muted-foreground text-lg">
          Your all-in-one student companion platform
        </p>
      </div>

      <Card className="p-8 shadow-card">
        <div className="prose max-w-none text-foreground">
          <p className="text-lg mb-6 text-muted-foreground">
            Campus Compass is an all-in-one student companion platform designed to help students stay productive, find opportunities, and maintain balance in their academic journey.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-foreground">What We Offer</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-peach rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Study Buddy Mode</h3>
                <p className="text-muted-foreground">Pomodoro timers, quizzes, and study tracking to help you stay focused and productive during study sessions.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-lavender rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Event Finder Mode</h3>
                <p className="text-muted-foreground">Discover and track hackathons, competitions, and student events to expand your network and skills.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-mint rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Profile Management</h3>
                <p className="text-muted-foreground">Keep your academic info in one place and track your progress throughout your student journey.</p>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-muted-foreground">
            With a modern UI, warm color palette, and smooth navigation, Campus Compass is designed for students who want to make the most of their time and opportunities.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;