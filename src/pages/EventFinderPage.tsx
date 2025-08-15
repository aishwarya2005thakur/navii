import ChatWindow from "@/components/ChatWindow";
import EventList from "@/components/EventList";

const EventFinderPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-display">
          Event Finder
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover hackathons, networking events, and opportunities near you
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Window - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ChatWindow mode="events" />
        </div>

        {/* Event List - Takes 1 column */}
        <div className="lg:col-span-1">
          <EventList />
        </div>
      </div>
    </div>
  );
};

export default EventFinderPage;