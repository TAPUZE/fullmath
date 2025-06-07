import React, { useState } from 'react';
import MathChatbot from './MathChatbot';

const ChatbotFloatingButton = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:shadow-xl z-40"
        title="פתח בוט מתמטיקה"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        {/* Math formula icon overlay */}
        <div className="absolute -top-1 -right-1 bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          ∑
        </div>
      </button>

      {/* Chatbot Modal */}
      <MathChatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
    </>
  );
};

export default ChatbotFloatingButton;
