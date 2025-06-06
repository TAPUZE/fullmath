import React, { useState } from 'react';

const Quiz = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    const totalQuestions = questions.length;
    
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    
    setResults({ score, totalQuestions });
    setSubmitted(true);
    
    if (onSubmit) {
      onSubmit({ score, totalQuestions, answers });
    }
  };

  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <div key={question.id} className="quiz-question p-4 border border-gray-300 rounded-lg bg-gray-50">
          <p className="font-medium mb-3">
            שאלה {index + 1}: {question.question}
          </p>
          <div className="space-y-1">
            {question.options.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className="ml-2"
                  disabled={submitted}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      ))}
      
      {!submitted && (
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          הגש בוחן
        </button>
      )}
      
      {results && (
        <div className="mt-3 p-3 rounded-md text-sm bg-yellow-100 text-yellow-700">
          הציון שלך הוא: <strong>{results.score}</strong> מתוך {results.totalQuestions}.
        </div>
      )}
    </div>
  );
};

export default Quiz;
