import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Mic, Bot, User } from "lucide-react";
import type { Mode } from "@/pages/Index";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatWindowProps {
  mode: Mode;
}

const getModeGreeting = (mode: Mode): Message => {
  const greetings = {
    mood: "Hi! I'm here to help you study better and feel great! 🎵 How are you feeling today? I can suggest music to match your mood and help you focus with a Pomodoro timer.",
    career: "Hello! I'm your career mentor. 🚀 I can help you with project ideas, review your pitches, and create personalized skill roadmaps. What career goals are you working on?",
    events: "Hey there! 🎯 I'm here to help you find amazing events like hackathons, workshops, and networking opportunities. What kind of events are you interested in?"
  };

  return {
    id: `${mode}-greeting`,
    text: greetings[mode],
    sender: "bot",
    timestamp: new Date()
  };
};

const ChatWindow = ({ mode }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([getModeGreeting(mode)]);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Update greeting when mode changes
    setMessages([getModeGreeting(mode)]);
  }, [mode]);

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
        text: "Thanks for your message! I'm processing your request and will provide personalized suggestions based on your needs. This is a demo response - in the full version, I'd use AI to give you tailored advice! ✨",
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

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording functionality would be implemented here
  };

  return (
    <Card className="h-[600px] flex flex-col bg-card shadow-card">
      {/* Chat Header */}
      <div className="p-4 border-b border-border bg-gradient-warm rounded-t-lg">
        <h2 className="font-semibold text-foreground flex items-center gap-2">
          <Bot className="w-5 h-5" />
          Campus Compass AI
        </h2>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                max-w-[80%] p-3 rounded-2xl shadow-sm animate-fade-in
                ${message.sender === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-muted text-muted-foreground rounded-bl-md"
                }
              `}
            >
              <div className="flex items-start gap-2">
                {message.sender === "bot" && (
                  <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm leading-relaxed">{message.text}</p>
                {message.sender === "user" && (
                  <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 rounded-full"
          />
          <Button
            onClick={toggleRecording}
            variant="outline"
            size="icon"
            className={`rounded-full ${isRecording ? 'bg-destructive text-destructive-foreground' : ''}`}
          >
            <Mic className="w-4 h-4" />
          </Button>
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="rounded-full bg-gradient-peach hover:bg-gradient-peach/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatWindow;