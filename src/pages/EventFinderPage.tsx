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

      <div className="max-w-4xl">
        <EventList />
      </div>
    </div>
  );
};

export default EventFinderPage;