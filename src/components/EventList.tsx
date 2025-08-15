import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "hackathon" | "workshop" | "networking" | "competition";
  participants: number;
  description: string;
  tags: string[];
}

const dummyEvents: Event[] = [
  {
    id: "1",
    title: "AI for Good Hackathon",
    date: "March 15-17, 2024",
    location: "San Francisco, CA",
    type: "hackathon",
    participants: 500,
    description: "48-hour hackathon focused on using AI to solve social problems",
    tags: ["AI", "Social Impact", "$10K Prize"]
  },
  {
    id: "2",
    title: "React Developer Workshop",
    date: "March 22, 2024",
    location: "Online",
    type: "workshop",
    participants: 150,
    description: "Learn advanced React patterns and best practices",
    tags: ["React", "Frontend", "Free"]
  },
  {
    id: "3",
    title: "Startup Pitch Competition",
    date: "April 5, 2024",
    location: "Austin, TX",
    type: "competition",
    participants: 100,
    description: "Present your startup idea to top VCs and entrepreneurs",
    tags: ["Startups", "VC", "$50K Prize"]
  },
  {
    id: "4",
    title: "Women in Tech Networking",
    date: "April 12, 2024",
    location: "New York, NY",
    type: "networking",
    participants: 200,
    description: "Connect with female leaders in technology",
    tags: ["Networking", "Diversity", "Career"]
  }
];

const getTypeColor = (type: Event["type"]) => {
  const colors = {
    hackathon: "bg-peach text-foreground",
    workshop: "bg-mint text-foreground",
    networking: "bg-lavender text-foreground",
    competition: "bg-primary text-primary-foreground"
  };
  return colors[type];
};

const EventList = () => {
  return (
    <Card className="p-6 bg-gradient-lavender shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white/20 rounded-lg">
          <Calendar className="w-5 h-5 text-foreground" />
        </div>
        <h3 className="font-semibold text-foreground">Upcoming Events</h3>
      </div>

      <div className="space-y-4">
        {dummyEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
          >
            {/* Event Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">
                  {event.title}
                </h4>
                <div className="flex items-center gap-4 text-xs text-foreground/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </div>
              </div>
              <Badge className={getTypeColor(event.type)}>
                {event.type}
              </Badge>
            </div>

            {/* Event Description */}
            <p className="text-sm text-foreground/80 mb-3">
              {event.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-white/20 rounded-full text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-foreground/70">
                <Users className="w-3 h-3" />
                {event.participants} participants
              </div>
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-foreground"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Join Event
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="text-center">
          <Button
            variant="outline"
            className="border-white/20 text-foreground hover:bg-white/10"
          >
            View All Events
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EventList;