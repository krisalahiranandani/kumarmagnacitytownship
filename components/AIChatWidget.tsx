'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    const userMsgObj: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
    };

    setMessages((prev) => [...prev, userMsgObj]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsgObj].map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) {
        throw new Error('Chat API returned an error');
      }

      // Handle JSON response or text stream
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = (await res.json()) as { mock?: boolean; text?: string; error?: string };
        const assistantMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.text || data.error || 'Thank you for reaching out. Please connect with our team for priority bookings.',
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        const text = await res.text();
        const assistantMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: text || 'Thank you for reaching out to Kumar Magnacity.',
        };
        setMessages((prev) => [...prev, assistantMsg]);
      }
    } catch {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I am momentarily experiencing network delays. Please request a callback via WhatsApp or our instant form.',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform" />
          {isOpen ? <X size={24} className="relative z-10" /> : <MessageSquare size={24} className="relative z-10" />}
          
          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-dark border-2 border-accent"></span>
            </span>
          )}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-light border border-primary/10 rounded-[2rem] shadow-[0_20px_80px_rgba(44,36,24,0.15)] z-[99] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary/5 backdrop-blur-md p-4 border-b border-primary/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-primary font-bold text-sm">Sovereign Concierge</h3>
                <p className="text-primary/40 text-[10px] uppercase tracking-widest">AI Sales Assistant</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent">
              <div className="bg-primary/5 border border-primary/10 p-3 rounded-2xl rounded-tl-sm text-sm text-primary/80 w-[85%]">
                Welcome to Kumar Magnacity. I am your personal AI concierge. Are you looking for 2BHK/3BHK apartments or NA Bungalow Plots?
              </div>
              
              {messages.map((m) => (
                <div 
                  key={m.id} 
                  className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                    m.role === 'user' 
                      ? 'bg-accent text-white rounded-tr-sm ml-auto' 
                      : 'bg-primary/5 border border-primary/10 text-primary/80 rounded-tl-sm'
                  }`}
                >
                  {m.content}
                </div>
              ))}
              
              {isLoading && (
                <div className="bg-primary/5 border border-primary/10 p-3 rounded-2xl rounded-tl-sm w-16 flex justify-center gap-1">
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-200"></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-primary/5 border-t border-primary/10">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about pricing, location..."
                  className="w-full bg-white border border-primary/20 rounded-full py-3 pl-4 pr-12 text-sm text-primary focus:outline-none focus:border-accent"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-accent text-white rounded-full disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
