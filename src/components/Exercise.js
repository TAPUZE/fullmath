import React, { useState } from 'react';

const Exercise = ({ 
  id, 
  question, 
  correctAnswer, 
  placeholder, 
  solution,
  onAnswerCheck 
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const checkAnswer = () => {
    const cleanAnswer = userAnswer.trim().replace('°', '');
    const isCorrect = cleanAnswer === correctAnswer;
    
    if (isCorrect) {
      setFeedback('נכון מאוד! כל הכבוד! 👍');
      setFeedbackType('success');
    } else {
      setFeedback('תשובה שגויה. נסה שוב או הצג את הפתרון. 🤔');
      setFeedbackType('error');
    }
    
    if (onAnswerCheck) {
      onAnswerCheck(id, isCorrect, cleanAnswer);
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const feedbackClasses = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700'
  };

  return (
    <div className="exercise p-4 border border-gray-300 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
      <p className="exercise-question font-medium mb-3">{question}</p>
      
      <div className="mt-3">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full md:w-1/2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
      
      <div className="mt-3 flex gap-2">
        <button
          onClick={checkAnswer}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          בדוק תשובה
        </button>
        <button
          onClick={toggleSolution}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          הצג פתרון
        </button>
      </div>
      
      {feedback && (
        <div className={`mt-3 p-3 rounded-md text-sm ${feedbackClasses[feedbackType]}`}>
          {feedback}
        </div>
      )}
      
      {showSolution && (
        <div className="solution mt-3 p-3 border-t border-gray-200 bg-white rounded-md">
          {solution}
        </div>
      )}
    </div>
  );
};

export default Exercise;
