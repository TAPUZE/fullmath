/**
 * UnifiedAnswerChecker - Centralized answer validation logic
 * Handles different types of answer checking across all lessons
 */

export const AnswerChecker = {
  // Standard equality check
  exact: (userAnswer, correctAnswer) => {
    return userAnswer.toString().trim() === correctAnswer.toString().trim();
  },

  // Numerical comparison with tolerance
  numerical: (userAnswer, correctAnswer, tolerance = 0.01) => {
    const userNum = parseFloat(userAnswer);
    const correctNum = parseFloat(correctAnswer);
    return !isNaN(userNum) && !isNaN(correctNum) && 
           Math.abs(userNum - correctNum) < tolerance;
  },

  // Multiple field validation (like area and perimeter)
  multipleFields: (userAnswers, correctAnswers, tolerance = 0.01) => {
    const results = [];
    let allCorrect = true;

    Object.keys(correctAnswers).forEach(key => {
      const userValue = parseFloat(userAnswers[key]) || 0;
      const correctValue = parseFloat(correctAnswers[key]);
      
      if (Math.abs(userValue - correctValue) < tolerance) {
        results.push(`${key}: נכון 👍`);
      } else {
        results.push(`${key}: שגוי (תשובה: ${userAnswers[key]}, נכון: ${correctAnswers[key]}) 🤔`);
        allCorrect = false;
      }
    });

    return {
      message: results.join('\n'),
      isCorrect: allCorrect,
      results: results
    };
  },

  // Coordinate validation (x,y pairs)
  coordinates: (userAnswer, correctAnswer) => {
    const cleanAnswer = userAnswer.trim().replace(/[()]/g, '');
    const coords = cleanAnswer.split(',').map(s => s.trim());
    
    if (coords.length !== 2) return false;
    
    const [userX, userY] = coords;
    return userX === correctAnswer.x.toString() && userY === correctAnswer.y.toString();
  },

  // Linear equation validation (y = mx + b format)
  linearEquation: (userAnswer, slope, intercept) => {
    const cleanAnswer = userAnswer.toLowerCase().replace(/\s/g, '');
    const yPattern = /y=(-?\d*\.?\d*)x([+-]\d+\.?\d*)/;
    const match = cleanAnswer.match(yPattern);
    
    if (!match) return false;
    
    const userSlope = parseFloat(match[1]) || 1; // Handle cases where coefficient is omitted
    const userIntercept = parseFloat(match[2]);
    
    return Math.abs(userSlope - slope) < 0.01 && Math.abs(userIntercept - intercept) < 0.01;
  },

  // System of equations validation
  systemOfEquations: (userAnswer, correctAnswer) => {
    const normalize = (answer) => answer.replace(/[()]/g, '').replace(/\s+/g, '').trim();
    return normalize(userAnswer) === normalize(correctAnswer);
  },

  // Custom validation with user-provided function
  custom: (userAnswer, correctAnswer, validatorFunc) => {
    return validatorFunc(userAnswer, correctAnswer);
  }
};

// Pre-configured validators for common patterns
export const CommonValidators = {
  // Area and perimeter checker (geometry lessons)
  areaPerimeter: (userAnswers, correctAnswers) => {
    return AnswerChecker.multipleFields(userAnswers, correctAnswers, 0.01);
  },

  // Trigonometry calculator (with degrees)
  trigonometry: (userAnswer, correctAnswer, tolerance = 0.1) => {
    return AnswerChecker.numerical(userAnswer, correctAnswer, tolerance);
  },

  // Statistics (mean, median, mode)
  statistics: (userAnswers, correctAnswers) => {
    const results = [];
    let allCorrect = true;
    const tolerance = 0.1;

    ['mean', 'median', 'mode'].forEach(field => {
      if (correctAnswers[field] !== undefined) {
        const isCorrect = field === 'mean' 
          ? AnswerChecker.numerical(userAnswers[field], correctAnswers[field], tolerance)
          : AnswerChecker.exact(userAnswers[field], correctAnswers[field]);
        
        if (isCorrect) {
          results.push(`${field}: נכון 👍`);
        } else {
          results.push(`${field}: שגוי 🤔`);
          allCorrect = false;
        }
      }
    });

    return {
      message: allCorrect ? 'כל הכבוד! כל התשובות נכונות.' : `שגויים: ${results.filter(r => r.includes('שגוי')).join(', ')}`,
      isCorrect: allCorrect,
      results: results
    };
  }
};

export default AnswerChecker;
