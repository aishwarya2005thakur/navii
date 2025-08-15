import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, GraduationCap, Calendar, MapPin, LogOut } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-display">
          Profile
        </h1>
        <p className="text-muted-foreground text-lg">
          Manage your account and preferences
        </p>
      </div>

      {/* Profile Card */}
      <Card className="p-6 shadow-card">
        <div className="flex items-center gap-6 mb-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/api/placeholder/80/80" alt="Profile" />
            <AvatarFallback className="bg-gradient-peach text-primary-foreground text-2xl">
              JD
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-foreground">John Doe</h2>
            <p className="text-muted-foreground">Computer Science Student</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <User className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium text-foreground">John Doe</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <GraduationCap className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Major</p>
                <p className="font-medium text-foreground">Computer Science</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="font-medium text-foreground">3rd Year</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Section</p>
                <p className="font-medium text-foreground">Section A</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Card */}
      <Card className="p-6 shadow-card">
        <h3 className="font-semibold text-foreground mb-4">Activity Stats</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-gradient-peach">
            <p className="text-2xl font-bold text-foreground">24</p>
            <p className="text-sm text-muted-foreground">Study Sessions</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-mint">
            <p className="text-2xl font-bold text-foreground">8</p>
            <p className="text-sm text-muted-foreground">Events Joined</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-lavender">
            <p className="text-2xl font-bold text-foreground">12</p>
            <p className="text-sm text-muted-foreground">Skills Learned</p>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <Card className="p-6 shadow-card">
        <h3 className="font-semibold text-foreground mb-4">Account Actions</h3>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <User className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;