import PomodoroTimer from "@/components/PomodoroTimer";
import MusicList from "@/components/MusicList";

const StudyBuddyPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-display">
          Study Buddy
        </h1>
        <p className="text-muted-foreground text-lg">
          Music suggestions, Pomodoro timer, and mood-based study support
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <PomodoroTimer />
        </div>
        <div className="space-y-6">
          <MusicList />
        </div>
      </div>
    </div>
  );
};

export default StudyBuddyPage;