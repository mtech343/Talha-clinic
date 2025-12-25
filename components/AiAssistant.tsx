
import React, { useState, useRef, useEffect } from 'react';
import { getAiResponse } from '../services/ai';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to Dr. Talha Dental Clinic. I am your AI assistant powered by Gemini. How can I help your smile today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiRes = await getAiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiRes || '' }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button - Positioned exactly above the WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-28 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center border-2 border-white ${
          isOpen ? 'bg-gray-800 scale-90' : 'bg-blue-600 hover:scale-110'
        }`}
        aria-label="AI Dental Assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🤖</span>
            <span className="hidden sm:inline text-white font-bold pr-2">Ask AI</span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-44 right-6 z-50 w-[90vw] sm:w-[400px] h-[550px] max-h-[70vh] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-gray-100 animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">Dr. Talha AI</h3>
                  <p className="text-xs text-blue-100 mt-1 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Gemini 3 Pro Online
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-5 overflow-y-auto space-y-4 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-md' 
                  : 'bg-white text-gray-700 border border-gray-200 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                placeholder="Describe your dental concern..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 text-blue-600 hover:text-blue-800 disabled:text-gray-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3">
              AI advice is for information only. Visit Dr. Talha for a professional checkup.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
