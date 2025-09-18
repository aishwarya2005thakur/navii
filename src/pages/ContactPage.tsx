import { Card } from "@/components/ui/card";
import { Mail, Github, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 font-display">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg">
          Get in touch with the Campus Compass team
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Get In Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-peach rounded-lg">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a 
                  href="mailto:thakuraishwarya943@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  thakuraishwarya943@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-mint rounded-lg">
                <Github className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <a 
                  href="https://github.com/aishwarya2005thakur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  github.com/aishwarya2005thakur
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-lavender rounded-lg">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">Delhi, India</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">About the Developer</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Hi! I'm Aishwarya, a passionate developer focused on creating tools that help students succeed in their academic journey.
            </p>
            <p>
              Campus Compass was born from my own experience as a student, recognizing the need for a unified platform that combines productivity tools, opportunity discovery, and academic management.
            </p>
            <p>
              Feel free to reach out for feedback, suggestions, or collaboration opportunities!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;