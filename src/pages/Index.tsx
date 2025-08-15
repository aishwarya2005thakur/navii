import { Outlet } from "react-router-dom";
import TopNavbar from "@/components/TopNavbar";
import SideNavbar from "@/components/SideNavbar";
import ChatbotWidget from "@/components/ChatbotWidget";

export type Mode = "mood" | "career" | "events";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm flex flex-col">
      {/* Top Navigation */}
      <TopNavbar />
      
      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Side Navigation */}
        <SideNavbar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      
      {/* Floating Chatbot */}
      <ChatbotWidget />
    </div>
  );
};

export default Index;