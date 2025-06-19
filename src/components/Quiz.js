import React, { useState, useEffect } from 'react';

const Quiz = ({ questions, onSubmit, lessonId }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  useEffect(() => {
    setStartTime(Date.now());
    
    return () => {
      // Save time when component unmounts
      if (startTime && !submitted) {
        const sessionTime = Math.floor((Date.now() - startTime) / 1000);
        setTimeSpent(prev => prev + sessionTime);
      }
    };
  }, [startTime, submitted]);

  // Handle undefined or empty questions
  if (!questions || !Array.isArray(questions) || questions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>אין שאלות זמינות לבחינה זו.</p>
      </div>
    );
  }

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    const totalQuestions = questions.length;
    const currentTime = Date.now();
    const finalTimeSpent = startTime ? Math.floor((currentTime - startTime) / 1000) : 0;
    
    const detailedResults = [];
    
    questions.forEach(question => {
      const userAnswer = answers[question.id];
      const isCorrect = userAnswer === question.correctAnswer;
      if (isCorrect) {
        score++;
      }
      
      detailedResults.push({
        questionId: question.id,
        question: question.question,
        userAnswer: userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect
      });
    });
    
    const quizData = {
      score,
      total: totalQuestions,
      timeSpent: finalTimeSpent,
      detailedResults: detailedResults,
      date: new Date().toISOString(),
      lessonId: lessonId
    };
    
    // Save quiz results to localStorage
    if (lessonId) {
      localStorage.setItem(`lesson_quiz_score_${lessonId}`, JSON.stringify(quizData));
    }
    
    setResults({ score, totalQuestions, timeSpent: finalTimeSpent });
    setSubmitted(true);
    setTimeSpent(finalTimeSpent);
    
    if (onSubmit) {
      onSubmit(quizData);
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
          <div className="font-bold">הציון שלך הוא: {results.score} מתוך {results.totalQuestions}</div>
          <div className="mt-1 text-xs">
            זמן שהושקע: {Math.floor(results.timeSpent / 60)}:{(results.timeSpent % 60).toString().padStart(2, '0')} דקות
          </div>
          <div className="mt-1 text-xs">
            אחוז הצלחה: {Math.round((results.score / results.totalQuestions) * 100)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
