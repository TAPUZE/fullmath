import React from 'react';
import NavigationHeader from './NavigationHeader';
import ChatbotFloatingButton from './ChatbotFloatingButton';

const ChatbotTestPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavigationHeader />
      
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">🤖 בדיקת הבוט המתמטי</h1>
          
          {/* Test Instructions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">✅ שאלות שיעבדו</h2>
              <ul className="space-y-2 text-green-700">
                <li>• "איך פותרים משוואה ליניארית?"</li>
                <li>• "מה זה שטח משולש?"</li>
                <li>• "כמה זה 2+2?"</li>
                <li>• "הסבר לי על נגזרות"</li>
                <li>• "איך מחשבים היקף עיגול?"</li>
                <li>• "מה זה פונקציה ליניארית?"</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ שאלות שיביאו לאזהרה</h2>
              <ul className="space-y-2 text-yellow-700">
                <li>• "מה השעה?"</li>
                <li>• "איך מכינים עוגה?"</li>
                <li>• "מה האוכל הכי טעים?"</li>
                <li>• "ספר לי בדיחה"</li>
                <li>• "איך הולכים לקניון?"</li>
                <li>• "מה מזג האוויר?"</li>
              </ul>
            </div>
          </div>
          
          {/* Harassment Test Warning */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">🚫 בדיקת הגנה מהטרדות</h2>
            <p className="text-red-700 mb-4">
              <strong>זהירות:</strong> אל תנסה את האפשרויות הבאות אלא אם כן אתה רוצה להיחסם!
            </p>
            <ul className="space-y-2 text-red-600">
              <li>• קללות או מילים פוגעות</li>
              <li>• הודעות עם אותיות חוזרות (aaaaaaa)</li>
              <li>• הודעות באותיות גדולות בלבד (CAPS LOCK)</li>
              <li>• הטרדה או מילים כמו "טמבל", "אידיוט"</li>
            </ul>
          </div>
          
          {/* Feature Overview */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">🎯 תכונות הבוט</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-blue-700 mb-2">הגנות מובנות:</h3>
                <ul className="space-y-1 text-blue-600 text-sm">
                  <li>• זיהוי שאלות לא מתמטיות</li>
                  <li>• מערכת אזהרות מדורגת</li>
                  <li>• חסימה אוטומטית אחרי 3 הטרדות</li>
                  <li>• בדיחות ואזהרות ידידותיות</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-blue-700 mb-2">יכולות מתמטיות:</h3>
                <ul className="space-y-1 text-blue-600 text-sm">
                  <li>• זיהוי מונחים מתמטיים</li>
                  <li>• הסברים שלב אחר שלב</li>
                  <li>• תמיכה בעברית ואנגלית</li>
                  <li>• זיהוי סמלים מתמטיים</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🚀 איך להתחיל?</h2>
            <p className="text-gray-600 mb-4">
              לחץ על הכפתור הכחול עם הסמל 🤖 בפינה הימנית התחתונה של המסך
            </p>
            <div className="text-4xl">👇</div>
          </div>
        </div>
      </div>
      
      {/* Math Chatbot Floating Button */}
      <ChatbotFloatingButton />
    </div>
  );
};

export default ChatbotTestPage;
