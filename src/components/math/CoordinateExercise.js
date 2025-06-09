import React, { useState } from 'react';

const CoordinateExercise = ({ 
  question, 
  correctAnswer, 
  solution, 
  exerciseId,
  labels = { x: 'שיעור X', y: 'שיעור Y' },
  placeholders = { x: 'הכנס x', y: 'הכנס y' }
}) => {
  const [userXAnswer, setUserXAnswer] = useState('');
  const [userYAnswer, setUserYAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const checkAnswer = () => {
    const isXCorrect = userXAnswer.trim() === correctAnswer.x;
    const isYCorrect = userYAnswer.trim() === correctAnswer.y;
    
    if (isXCorrect && isYCorrect) {
      setFeedback('כל הכבוד! התשובה נכונה.');
    } else {
      let message = 'התשובה אינה נכונה. ';
      if (!isXCorrect && !isYCorrect) {
        message += 'שני השיעורים שגויים.';
      } else if (!isXCorrect) {
        message += 'שיעור ה-X שגוי.';
      } else {
        message += 'שיעור ה-Y שגוי.';
      }
      setFeedback(message);
    }
  };

  return (
    <div className="bg-gray-50 p-4 border border-gray-300 rounded-lg">
      <p className="font-medium mb-3" dir="rtl">{question}</p>
      
      <div className="space-y-3" dir="rtl">
        <div>
          <label className="block text-sm font-medium text-gray-700">{labels.x}:</label>
          <input
            type="text"
            value={userXAnswer}
            onChange={(e) => setUserXAnswer(e.target.value)}
            className="mt-1 border border-gray-300 p-2 rounded w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={placeholders.x}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">{labels.y}:</label>
          <input
            type="text"
            value={userYAnswer}
            onChange={(e) => setUserYAnswer(e.target.value)}
            className="mt-1 border border-gray-300 p-2 rounded w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={placeholders.y}
          />
        </div>
      </div>
      
      <div className="mt-3 text-right">
        <button
          onClick={checkAnswer}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out ml-2"
        >
          בדוק תשובה
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          {showSolution ? 'הסתר פתרון' : 'הצג פתרון'}
        </button>
      </div>
      
      {feedback && (
        <div className={`mt-3 p-3 rounded-md text-sm ${
          feedback.includes('נכונה') 
            ? 'bg-green-100 border border-green-300 text-green-800' 
            : 'bg-red-100 border border-red-300 text-red-800'
        }`}>
          {feedback}
        </div>
      )}
      
      {showSolution && (
        <div className="mt-3 p-3 border-t border-gray-200 bg-white rounded-md">
          {solution}
        </div>
      )}
    </div>
  );
};

export default CoordinateExercise;
