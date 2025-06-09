import React, { useState, useEffect, useRef } from 'react';
import { useUserData } from '../../contexts/UserDataContext';

const MathChatbot = ({ isOpen, onClose }) => {
  const { currentUser, updateUserData } = useUserData();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize chatbot state from user data
  useEffect(() => {
    if (currentUser) {
      const chatbotData = currentUser.chatbotData || {
        harassmentCount: 0,
        nonMathWarnings: 0,
        lastHarassmentTime: null,
        isBlocked: false,
        blockUntil: null
      };
      
      // Check if user is currently blocked
      if (chatbotData.isBlocked && chatbotData.blockUntil) {
        const now = new Date().getTime();
        if (now < chatbotData.blockUntil) {
          setIsBlocked(true);
        } else {
          // Block expired, reset
          updateUserData({
            chatbotData: {
              ...chatbotData,
              isBlocked: false,
              blockUntil: null,
              harassmentCount: 0
            }
          });
        }
      }
    }
  }, [currentUser, updateUserData]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: "שלום! אני הבוט המתמטי שלך 🤖\nאני כאן לעזור לך עם שאלות מתמטיות. שאל אותי על כל נושא במתמטיקה!",
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  const isMathRelated = (message) => {
    const mathKeywords = [
      // Hebrew math terms
      'מתמטיקה', 'חשבון', 'אלגברה', 'גיאומטריה', 'טריגונומטריה', 'חדו״א', 'סטטיסטיקה',
      'משוואה', 'נוסחה', 'פתרון', 'חישוב', 'מספר', 'ספרה', 'שבר', 'עשרוני',
      'זווית', 'משולש', 'ריבוע', 'מעגל', 'שטח', 'היקף', 'נפח', 'אורך',
      'חיבור', 'חיסור', 'כפל', 'חילוק', 'שורש', 'חזקה', 'לוגריתם',
      'וקטור', 'מטריצה', 'פונקציה', 'נגזרת', 'אינטגרל', 'גבול',
      'הסתברות', 'סטטיסטיקה', 'ממוצע', 'חציון', 'שונות',
      // English math terms
      'math', 'mathematics', 'algebra', 'geometry', 'trigonometry', 'calculus',
      'equation', 'formula', 'solve', 'calculate', 'number', 'fraction', 'decimal',
      'angle', 'triangle', 'square', 'circle', 'area', 'perimeter', 'volume',
      'addition', 'subtraction', 'multiplication', 'division', 'square root', 'power',
      'vector', 'matrix', 'function', 'derivative', 'integral', 'limit',
      'probability', 'statistics', 'average', 'median', 'variance'
    ];

    const mathSymbols = ['+', '-', '*', '/', '=', '<', '>', '≤', '≥', '√', '^', 'π', '∑', '∫'];
    
    const lowerMessage = message.toLowerCase();
    
    // Check for math keywords
    const hasKeywords = mathKeywords.some(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    );
    
    // Check for math symbols
    const hasSymbols = mathSymbols.some(symbol => message.includes(symbol));
    
    // Check for numbers (basic check)
    const hasNumbers = /\d/.test(message);
    
    // Check for common math question patterns
    const mathPatterns = [
      /איך.*פותר/i,
      /מה.*תשובה/i,
      /כמה.*שווה/i,
      /חשב.*את/i,
      /פתור.*את/i,
      /how.*solve/i,
      /what.*answer/i,
      /calculate/i,
      /find.*value/i
    ];
    
    const hasPatterns = mathPatterns.some(pattern => pattern.test(message));
    
    return hasKeywords || hasSymbols || (hasNumbers && hasPatterns);
  };

  const getJokeResponse = (warningCount) => {
    const jokes = [
      "😄 למה המספר 6 פחד מהמספר 7? כי 7 8 9! (seven ate nine)\nאבל בכל זאת, בוא נשוב למתמטיקה!",
      "🤔 מה ההבדל בין מתמטיקאי לבין פיצה? הפיצה יכולה להאכיל משפחה של 4...\nעכשיו, איזו שאלת מתמטיקה יש לך?",
      "😂 למה המעגל כל כך עצוב? כי הוא לא יכול למצוא את הנקודה שלו!\nבואו נמצא את הנקודה שלנו - במתמטיקה!"
    ];
    
    const warnings = [
      "זוהי אזהרה ראשונה - אני כאן רק לעזור במתמטיקה! 📚",
      "זוהי אזהרה שנייה - אם תמשיך ככה, אאלץ לחסום את הגישה שלך לבוט 😟",
      "אזהרה אחרונה! פעם אחת נוספת ואני אחסום את הגישה שלך לבוט למשך 30 דקות! 🚫"
    ];
    
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return `${randomJoke}\n\n${warnings[warningCount - 1]}`;
  };

  const detectHarassment = (message) => {
    const harassmentPatterns = [
      /(?:טמבל|מטומטם|אידיוט|מפגר|זבל)/i,
      /(?:stupid|idiot|dumb|shut up|hate)/i,
      /(?:בוט.*מטומטם|בוט.*לא.*טוב)/i,
      // Repeated characters or caps (basic harassment detection)
      /(.)\1{4,}/, // Same character repeated 5+ times
      /[A-Z]{8,}/, // 8+ consecutive caps
    ];

    return harassmentPatterns.some(pattern => pattern.test(message));
  };

  const blockUser = () => {
    const blockDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
    const blockUntil = new Date().getTime() + blockDuration;
    
    const updatedChatbotData = {
      ...currentUser.chatbotData,
      isBlocked: true,
      blockUntil: blockUntil,
      harassmentCount: 0 // Reset harassment count after blocking
    };
    
    updateUserData({ chatbotData: updatedChatbotData });
    setIsBlocked(true);
    
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: "🚫 הגישה שלך לבוט נחסמה למשך 30 דקות בגלל התנהגות לא הולמת.\nאנא התנהג בכבוד כשהבוט יהיה זמין שוב.",
      sender: 'bot',
      timestamp: new Date(),
      isError: true
    }]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading || isBlocked) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Check for harassment
    if (detectHarassment(inputMessage)) {
      const currentData = currentUser.chatbotData || { harassmentCount: 0, nonMathWarnings: 0 };
      const newHarassmentCount = currentData.harassmentCount + 1;
      
      if (newHarassmentCount >= 3) {
        blockUser();
        setIsLoading(false);
        return;
      }
      
      updateUserData({
        chatbotData: {
          ...currentData,
          harassmentCount: newHarassmentCount,
          lastHarassmentTime: new Date().getTime()
        }
      });
      
      const warningMessage = {
        id: Date.now() + 1,
        text: `⚠️ אנא התנהג בכבוד! זוהי אזהרה ${newHarassmentCount} מתוך 3.\nאם תמשיך להטריד, הגישה שלך תיחסם.`,
        sender: 'bot',
        timestamp: new Date(),
        isWarning: true
      };
      
      setMessages(prev => [...prev, warningMessage]);
      setIsLoading(false);
      return;
    }

    // Check if message is math-related
    if (!isMathRelated(inputMessage)) {
      const currentData = currentUser.chatbotData || { harassmentCount: 0, nonMathWarnings: 0 };
      const newWarningCount = currentData.nonMathWarnings + 1;
      
      updateUserData({
        chatbotData: {
          ...currentData,
          nonMathWarnings: newWarningCount
        }
      });
      
      let responseText;
      if (newWarningCount >= 3) {
        responseText = "🚨 זוהי האזהרה האחרונה שלך!\nאם תמשיך לשאול שאלות שאינן קשורות למתמטיקה, אחסום את הגישה שלך!\nאני כאן רק לעזור במתמטיקה. מה השאלה המתמטית שלך?";
      } else {
        responseText = getJokeResponse(newWarningCount);
      }
      
      const botResponse = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
        isWarning: newWarningCount >= 2
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
      return;
    }

    // Generate math-related response (mock AI response)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateMathResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000); // Simulate AI thinking time
  };

  const generateMathResponse = (question) => {
    // This is a mock response generator. In a real implementation, 
    // you would integrate with an actual AI service like OpenAI, Gemini, etc.
    const responses = [
      "זוהי שאלה מעניינת! בואו נפתור אותה שלב אחר שלב:",
      "אני יכול לעזור לך עם זה! ההסבר המפורט:",
      "נתחיל מהבסיס. כדי לפתור את זה נצטרך:",
      "זה נושא חשוב במתמטיקה! ההסבר:",
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Add some basic math problem solving logic
    if (question.includes('משוואה') || question.includes('equation')) {
      return `${randomResponse}\n\n1. נזהה את המשוואה\n2. נבודד את המשתנה\n3. נבדוק את התשובה\n\nהאם תוכל לשתף את המשוואה הספציפית שאתה רוצה לפתור?`;
    } else if (question.includes('שטח') || question.includes('area')) {
      return `${randomResponse}\n\nלחישוב שטח נצטרך לדעת:\n• איזה צורה גיאומטרית מדובר\n• את המידות הרלוונטיות\n\nמה הצורה שאתה רוצה לחשב את השטח שלה?`;
    } else if (question.includes('נגזרת') || question.includes('derivative')) {
      return `${randomResponse}\n\nלחישוב נגזרת:\n1. נזהה את סוג הפונקציה\n2. נשתמש בכללי הגזירה המתאימים\n3. נפשט את התוצאה\n\nאיזו פונקציה אתה רוצה לגזור?`;
    }
    
    return `${randomResponse}\n\nכדי לתת לך תשובה מדויקת יותר, אתה יכול לספק פרטים נוספים על השאלה? לדוגמה:\n• מספרים ספציפיים\n• סוג הבעיה\n• מה אתה מנסה למצוא`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-lg font-semibold">🤖 בוט מתמטיקה</span>
            {isBlocked && (
              <span className="ml-2 bg-red-500 text-xs px-2 py-1 rounded">חסום</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 text-xl"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {isBlocked ? (
            <div className="text-center text-red-600 p-4">
              <div className="text-4xl mb-2">🚫</div>
              <div className="font-semibold">הגישה חסומה</div>
              <div className="text-sm mt-2">
                הגישה שלך לבוט נחסמה בגלל התנהגות לא הולמת.
                <br />
                נסה שוב מאוחר יותר.
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : message.isError
                      ? 'bg-red-100 text-red-800 border border-red-300'
                      : message.isWarning
                      ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                <span className="animate-pulse">הבוט חושב...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        {!isBlocked && (
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="שאל שאלת מתמטיקה..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                שלח
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MathChatbot;
