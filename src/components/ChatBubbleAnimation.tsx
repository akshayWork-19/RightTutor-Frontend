import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";

const PARENT_AVATAR = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face";

const chatMessages = [
  {
    type: "advisor",
    text: "Hello! I'm here to help you find the perfect tutor. What subject does your child need help with?",
  },
  {
    type: "parent",
    text: "Hi! My child needs help with Maths.",
  },
  {
    type: "advisor",
    text: "Great! What class is your child in?",
  },
  {
    type: "parent",
    text: "Class 9. She struggles with Algebra.",
  },
  {
    type: "advisor",
    text: "Perfect! We have expert tutors for Class 9 Maths. Let me find the best match! ✨",
  },
];

const ChatBubbleAnimation = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [cycle, setCycle] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to bottom when new messages appear
  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, []);

  // Scroll when messages change or typing starts
  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages, isTyping, scrollToBottom]);

  const runAnimation = useCallback(() => {
    setVisibleMessages([]);
    setIsTyping(false);
    
    const timers: NodeJS.Timeout[] = [];
    let delay = 500;

    chatMessages.forEach((msg, index) => {
      if (msg.type === "advisor") {
        timers.push(setTimeout(() => setIsTyping(true), delay));
        delay += 1200;
      }

      timers.push(setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, index]);
      }, delay));
      
      delay += 1000;
    });

    timers.push(setTimeout(() => setCycle(c => c + 1), delay + 3000));

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  useEffect(() => {
    const cleanup = runAnimation();
    return cleanup;
  }, [cycle, runAnimation]);

  // RightTutor Logo Avatar Component
  const RightTutorAvatar = ({ size = "sm" }: { size?: "sm" | "lg" }) => (
    <div className={`${size === "lg" ? "w-9 h-9 sm:w-10 sm:h-10" : "w-6 h-6 sm:w-7 sm:h-7"} rounded-full bg-primary flex items-center justify-center flex-shrink-0`}>
      <span className={`font-logo ${size === "lg" ? "text-[10px] sm:text-xs" : "text-[8px] sm:text-[10px]"} font-bold text-primary-foreground`}>RT</span>
    </div>
  );

  return (
    <div className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-elevated border border-border/50 h-[320px] sm:h-[400px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-border/40">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <RightTutorAvatar size="lg" />
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-card" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-xs sm:text-sm">RightTutor</p>
            <p className="text-[10px] sm:text-xs text-green-600 flex items-center gap-1">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500" />
              Online now
            </p>
          </div>
        </div>
      </div>
      
      {/* Messages - Scrollable */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 space-y-2.5 sm:space-y-3 overflow-y-auto scrollbar-hide pr-1"
        style={{ scrollBehavior: 'smooth' }}
      >
        <AnimatePresence mode="popLayout">
          {visibleMessages.map((index) => {
            const msg = chatMessages[index];
            const isParent = msg.type === "parent";

            return (
              <motion.div
                key={`${cycle}-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25,
                  mass: 0.8
                }}
                className={`flex items-end gap-1.5 sm:gap-2 ${isParent ? "flex-row-reverse" : ""}`}
              >
                {isParent ? (
                  <img 
                    src={PARENT_AVATAR}
                    alt="Parent"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover ring-1 ring-border flex-shrink-0"
                  />
                ) : (
                  <RightTutorAvatar />
                )}
                <motion.div
                  initial={{ opacity: 0, x: isParent ? 15 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.25 }}
                  className={`px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs max-w-[78%] ${
                    isParent
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-end gap-1.5 sm:gap-2"
            >
              <RightTutorAvatar />
              <div className="bg-muted px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl rounded-bl-sm flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.12 }}
                    className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Footer */}
      <div className="mt-2.5 pt-2.5 border-t border-border/40 flex items-center justify-between">
        <p className="text-[9px] sm:text-[10px] text-muted-foreground">
          Trusted by 5,000+ parents
        </p>
        <div className="flex -space-x-1.5 sm:-space-x-2">
          {[
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=30&h=30&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=30&h=30&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=30&h=30&fit=crop&crop=face"
          ].map((src, i) => (
            <img key={i} src={src} alt="" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-card object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBubbleAnimation;
