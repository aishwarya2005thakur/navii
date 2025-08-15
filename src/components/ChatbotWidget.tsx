import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm your Campus Compass AI assistant. How can I help you today? 🎓",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user", 
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for reaching out! I'm here to help with your studies, career questions, or finding events. This is a demo response - the full AI integration is coming soon! ✨",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-float bg-gradient-peach hover:bg-gradient-peach/90 z-50 transition-all duration-300",
          isOpen && "scale-0"
        )}
        size="icon"
      >
        <img 
          src="/lovable-uploads/87c4111a-d90b-43ac-a65e-0086978af1eb.png" 
          alt="Chat" 
          className="w-8 h-8"
        />
      </Button>

      {/* Chatbot Panel */}
      <div className={cn(
        "fixed bottom-6 right-6 w-96 h-[500px] transition-all duration-300 z-50",
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}>
        <Card className="h-full flex flex-col bg-card shadow-float border">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-peach rounded-t-lg">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/87c4111a-d90b-43ac-a65e-0086978af1eb.png" 
                alt="Bot" 
                className="w-6 h-6"
              />
              <h3 className="font-semibold text-foreground">Campus Compass AI</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm animate-fade-in",
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-muted-foreground rounded-bl-md"
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 rounded-full text-sm"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="rounded-full bg-gradient-peach hover:bg-gradient-peach/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ChatbotWidget;