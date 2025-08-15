import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings, Bell, Palette, Volume2, Shield, Database } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-display">
          Settings
        </h1>
        <p className="text-muted-foreground text-lg">
          Customize your Campus Compass experience
        </p>
      </div>

      {/* Notifications */}
      <Card className="p-6 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Notifications</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications" className="text-sm">
              Push Notifications
            </Label>
            <Switch id="push-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications" className="text-sm">
              Email Notifications
            </Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="event-reminders" className="text-sm">
              Event Reminders
            </Label>
            <Switch id="event-reminders" defaultChecked />
          </div>
        </div>
      </Card>

      {/* Appearance */}
      <Card className="p-6 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <Palette className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Appearance</h3>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm">Theme</Label>
            <Select defaultValue="light">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Color Scheme</Label>
            <Select defaultValue="default">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default (Warm Pastels)</SelectItem>
                <SelectItem value="cool">Cool Blues</SelectItem>
                <SelectItem value="vibrant">Vibrant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Audio */}
      <Card className="p-6 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <Volume2 className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Audio</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="sound-effects" className="text-sm">
              Sound Effects
            </Label>
            <Switch id="sound-effects" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="voice-responses" className="text-sm">
              Voice Responses
            </Label>
            <Switch id="voice-responses" />
          </div>
        </div>
      </Card>

      {/* Privacy */}
      <Card className="p-6 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Privacy & Security</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="data-sharing" className="text-sm">
              Allow Data Sharing for Improvements
            </Label>
            <Switch id="data-sharing" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="analytics" className="text-sm">
              Usage Analytics
            </Label>
            <Switch id="analytics" />
          </div>
          <Button variant="outline" className="w-full justify-start">
            <Database className="w-4 h-4 mr-2" />
            Download My Data
          </Button>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-gradient-peach hover:bg-gradient-peach/90">
          <Settings className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;