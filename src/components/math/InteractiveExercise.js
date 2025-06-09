import React, { useState } from 'react';
import StandardButtons from '../ui/StandardButtons';

/**
 * InteractiveExercise - A comprehensive, reusable exercise component
 * This component handles input validation, feedback, solution display, and multiple input types
 * Usage: Replace custom exercise implementations across all lessons
 */
const InteractiveExercise = ({ 
  id,
  question, 
  inputs = [], // Array of input configurations
  correctAnswers = {}, // Object with correct answers
  solution = [], // Array of solution steps or JSX content
  validator, // Custom validation function
  onAnswerCheck, // Callback for answer checking
  exerciseNumber, // Exercise number for display
  className = ""
}) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const handleInputChange = (inputId, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [inputId]: value
    }));
  };

  const checkAnswers = () => {
    let results = [];
    let allCorrect = true;

    if (validator) {
      // Use custom validator if provided
      const result = validator(userAnswers, correctAnswers);
      setFeedback(result.message);
      setFeedbackType(result.isCorrect ? 'success' : 'error');
      
      if (onAnswerCheck) {
        onAnswerCheck(id, result.isCorrect, userAnswers);
      }
      return;
    }

    // Default validation logic
    inputs.forEach(input => {
      const userAnswer = userAnswers[input.id] || '';
      const correctAnswer = correctAnswers[input.answerKey || input.id];
      
      if (correctAnswer !== undefined) {
        const isCorrect = input.type === 'number' 
          ? Math.abs(parseFloat(userAnswer) - parseFloat(correctAnswer)) < (input.tolerance || 0.01)
          : userAnswer.trim() === correctAnswer.toString().trim();
        
        if (isCorrect) {
          results.push(`${input.label}: נכון 👍`);
        } else {
          results.push(`${input.label}: שגוי (תשובה: ${userAnswer}, נכון: ${correctAnswer}) 🤔`);
          allCorrect = false;
        }
      }
    });

    const message = results.length > 0 ? results.join('\n') : 
      (allCorrect ? 'כל הכבוד! התשובה נכונה! 👍' : 'תשובה שגויה. נסה שוב! 🤔');

    setFeedback(message);
    setFeedbackType(allCorrect ? 'success' : 'error');

    if (onAnswerCheck) {
      onAnswerCheck(id, allCorrect, userAnswers);
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const feedbackClasses = {
    success: 'bg-green-100 text-green-700 border border-green-300',
    error: 'bg-red-100 text-red-700 border border-red-300'
  };

  return (
    <div className={`interactive-exercise p-4 border border-gray-300 rounded-lg bg-gray-50 ${className}`}>
      <p className="font-medium mb-4">
        {exerciseNumber && `תרגיל ${exerciseNumber}: `}{question}
      </p>
      
      {/* Input Fields */}
      {inputs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {inputs.map((input) => (
            <div key={input.id}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {input.label}:
              </label>
              <input
                type={input.type || 'text'}
                value={userAnswers[input.id] || ''}
                onChange={(e) => handleInputChange(input.id, e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder={input.placeholder || `הכנס ${input.label.toLowerCase()}`}
                step={input.step}
                min={input.min}
                max={input.max}
              />
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <StandardButtons
        onCheck={checkAnswers}
        onShowSolution={toggleSolution}
        checkText="בדוק תשובה"
        solutionText={showSolution ? "הסתר פתרון" : "הצג פתרון"}
      />

      {/* Feedback */}
      {feedback && (
        <div className={`mt-3 p-3 rounded-md text-sm ${feedbackClasses[feedbackType]}`}>
          <div className="whitespace-pre-line">{feedback}</div>
        </div>
      )}

      {/* Solution */}
      {showSolution && solution && (
        <div className="mt-3 p-3 border-t border-gray-200 bg-white rounded-md">
          <p className="font-semibold mb-2">פתרון מלא:</p>
          {Array.isArray(solution) ? (
            solution.map((step, index) => (
              <div key={index} className="mb-1">
                {typeof step === 'string' ? <p>{step}</p> : step}
              </div>
            ))
          ) : (
            solution
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveExercise;
