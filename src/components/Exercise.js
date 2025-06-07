import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useUserData } from '../contexts/UserDataContext';

const Exercise = ({ 
  id, 
  question, 
  correctAnswer, 
  placeholder, 
  solution,
  onAnswerCheck,
  lessonId 
}) => {
  const { currentUser } = useAuth();
  const { updateUserData } = useUserData();
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  useEffect(() => {
    // Load existing data for this exercise
    let savedData = null;
    
    // Try to load from user data first if user is logged in
    if (currentUser?.email) {
      const userData = JSON.parse(localStorage.getItem(`userData_${currentUser.email}`) || '{}');
      const userExerciseKey = `exercise_${lessonId}_${id}`;
      savedData = userData.exercises?.[userExerciseKey];
    }
    
    // Fallback to localStorage if no user data found
    if (!savedData) {
      const localData = localStorage.getItem(`exercise_${lessonId}_${id}`);
      if (localData) {
        savedData = JSON.parse(localData);
      }
    }
    
    if (savedData) {
      setAttempts(savedData.attempts || 0);
      setWrongAnswers(savedData.wrongAnswers || []);
      setTimeSpent(savedData.timeSpent || 0);
    }
    
    // Set start time when component mounts
    setStartTime(Date.now());
    
    return () => {
      // Save time spent when component unmounts
      if (startTime) {
        const additionalTime = Math.floor((Date.now() - startTime) / 1000);
        setTimeSpent(prev => prev + additionalTime);
      }
    };
  }, [id, lessonId, currentUser]);
  const saveExerciseData = (newAttempts, newWrongAnswers, newTimeSpent) => {
    const exerciseData = {
      attempts: newAttempts,
      wrongAnswers: newWrongAnswers,
      timeSpent: newTimeSpent,
      lastAttempt: new Date().toISOString(),
      exerciseId: id,
      lessonId: lessonId
    };
    
    // Save to localStorage for backward compatibility
    localStorage.setItem(`exercise_${lessonId}_${id}`, JSON.stringify(exerciseData));
    
    // Save to user data if user is logged in
    if (currentUser?.email) {
      const userExerciseKey = `exercise_${lessonId}_${id}`;
      updateUserData(currentUser.email, {
        exercises: {
          [userExerciseKey]: exerciseData
        }
      });
    }
  };

  const checkAnswer = () => {
    const cleanAnswer = userAnswer.trim().replace('°', '');
    const isCorrect = cleanAnswer === correctAnswer;
    const currentTime = Date.now();
    const sessionTime = startTime ? Math.floor((currentTime - startTime) / 1000) : 0;
    const newTimeSpent = timeSpent + sessionTime;
    const newAttempts = attempts + 1;
    
    if (isCorrect) {
      setFeedback('נכון מאוד! כל הכבוד! 👍');
      setFeedbackType('success');
    } else {
      setFeedback('תשובה שגויה. נסה שוב או הצג את הפתרון. 🤔');
      setFeedbackType('error');
      
      // Add wrong answer to list
      const newWrongAnswers = [...wrongAnswers, {
        answer: cleanAnswer,
        timestamp: new Date().toISOString(),
        attempt: newAttempts
      }];
      setWrongAnswers(newWrongAnswers);
      saveExerciseData(newAttempts, newWrongAnswers, newTimeSpent);
    }
    
    setAttempts(newAttempts);
    setTimeSpent(newTimeSpent);
    setStartTime(currentTime); // Reset start time for next attempt
    
    if (isCorrect) {
      saveExerciseData(newAttempts, wrongAnswers, newTimeSpent);
    }
    
    if (onAnswerCheck) {
      onAnswerCheck(id, isCorrect, cleanAnswer, {
        attempts: newAttempts,
        wrongAnswers: wrongAnswers,
        timeSpent: newTimeSpent
      });
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
          {attempts > 0 && (
            <div className="mt-2 text-xs opacity-75">
              ניסיונות: {attempts} | זמן: {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')} דקות
              {wrongAnswers.length > 0 && (
                <div className="mt-1">
                  תשובות שגויות: {wrongAnswers.map(wa => wa.answer).join(', ')}
                </div>
              )}
            </div>
          )}
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
