import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface FloatingActionButtonProps {
  isDarkTheme: boolean;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to a backend
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-gradient-accent text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
      {isChatOpen && (
        <div className="fixed bottom-24 right-8 w-80 h-96 bg-gradient-primary rounded-lg shadow-xl p-4 z-40">
          <h3 className="text-lg font-semibold mb-4 text-white">RoboChat</h3>
          <div className="h-64 overflow-y-auto mb-4 bg-gray-800 rounded p-2">
            {/* Chat messages would go here */}
          </div>
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question..."
              className="flex-grow p-2 bg-gray-700 text-white border border-gray-600 rounded-l"
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-gradient-accent text-white rounded-r"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActionButton;