import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Play, Pause, Volume2 } from "lucide-react";

interface Song {
  id: string;
  title: string;
  artist: string;
  mood: string;
  duration: string;
}

const dummySongs: Song[] = [
  { id: "1", title: "Lofi Hip Hop Beats", artist: "ChillHop Music", mood: "Focus", duration: "3:45" },
  { id: "2", title: "Calm Piano", artist: "StudyVibes", mood: "Relaxed", duration: "4:12" },
  { id: "3", title: "Acoustic Indie", artist: "Motivation Mix", mood: "Motivated", duration: "3:28" },
  { id: "4", title: "Nature Sounds", artist: "Ambient Focus", mood: "Peaceful", duration: "5:00" },
  { id: "5", title: "Electronic Chill", artist: "Synthwave Study", mood: "Energetic", duration: "3:52" }
];

const MusicList = () => {
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string>("Focus");

  const moods = ["Focus", "Relaxed", "Motivated", "Peaceful", "Energetic"];

  const togglePlay = (songId: string) => {
    if (currentPlaying === songId) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(songId);
    }
  };

  const filteredSongs = dummySongs.filter(song => song.mood === selectedMood);

  return (
    <Card className="p-6 bg-gradient-mint shadow-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/20 rounded-lg">
          <Music className="w-5 h-5 text-foreground" />
        </div>
        <h3 className="font-semibold text-foreground">Mood Music</h3>
      </div>

      {/* Mood Selector */}
      <div className="mb-4">
        <p className="text-sm text-foreground/80 mb-2">Choose your mood:</p>
        <div className="flex flex-wrap gap-2">
          {moods.map((mood) => (
            <Button
              key={mood}
              size="sm"
              variant={selectedMood === mood ? "secondary" : "outline"}
              onClick={() => setSelectedMood(mood)}
              className={`text-xs ${
                selectedMood === mood 
                  ? "bg-white/30 text-foreground" 
                  : "border-white/20 text-foreground/70 hover:bg-white/10"
              }`}
            >
              {mood}
            </Button>
          ))}
        </div>
      </div>

      {/* Song List */}
      <div className="space-y-2">
        {filteredSongs.map((song) => (
          <div
            key={song.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Button
              size="sm"
              onClick={() => togglePlay(song.id)}
              className="w-8 h-8 p-0 bg-white/20 hover:bg-white/30 text-foreground"
            >
              {currentPlaying === song.id ? (
                <Pause className="w-3 h-3" />
              ) : (
                <Play className="w-3 h-3" />
              )}
            </Button>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {song.title}
              </p>
              <p className="text-xs text-foreground/70 truncate">
                {song.artist}
              </p>
            </div>
            
            <div className="text-xs text-foreground/60">
              {song.duration}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs text-foreground/70">
          <Volume2 className="w-4 h-4" />
          <span>Spotify integration ready</span>
        </div>
      </div>
    </Card>
  );
};

export default MusicList;