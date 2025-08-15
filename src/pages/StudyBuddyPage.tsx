import PomodoroTimer from "@/components/PomodoroTimer";
import MusicList from "@/components/MusicList";
import ChatWindow from "@/components/ChatWindow";

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

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Window - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ChatWindow mode="mood" />
        </div>

        {/* Study Tools - Takes 1 column */}
        <div className="lg:col-span-1 space-y-6">
          <PomodoroTimer />
          <MusicList />
        </div>
      </div>
    </div>
  );
};

export default StudyBuddyPage;