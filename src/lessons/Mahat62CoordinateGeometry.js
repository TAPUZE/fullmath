import React, { useState } from 'react';
import '../styles/lessons.css';

const Mahat62CoordinateGeometry = () => {
  const [showAnswer, setShowAnswer] = useState({});
  const [showSolution, setShowSolution] = useState({});
  const toggleAnswer = (questionId) => {
    setShowAnswer(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const toggleSolution = (questionId) => {
    setShowSolution(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="lesson-container">
      <h1>6.2 הנדסה אנליטית - יסודות</h1>
      
      {/* Lesson Objectives */}
      <div className="objectives-section">
        <h2>מטרות השיעור</h2>
        <ul>
          <li>הכרת מערכת הצירים הקרטזית</li>
          <li>זיהוי ומיקום נקודות במישור</li>
          <li>הבנת הקשר בין נקודות לקואורדינטות</li>
          <li>פתרון בעיות בסיסיות בהנדסה אנליטית</li>
          <li>קריאה ופרשנות של גרפים במערכת צירים</li>
        </ul>
      </div>

      {/* Theory Section */}
      <div className="theory-section">
        <h2>תיאוריה</h2>
        
        <div className="concept-box">
          <h3>מערכת הצירים הקרטזית</h3>
          <p>
            מערכת הצירים הקרטזית מורכבת משני צירים מאוזנים:
          </p>
          <ul>
            <li><strong>ציר X (ציר האופקי):</strong> מייצג את הקואורדינטה הראשונה</li>
            <li><strong>ציר Y (ציר האנכי):</strong> מייצג את הקואורדינטה השנייה</li>
            <li><strong>נקודת המקור (O):</strong> נקודת החיתוך של הצירים, הקואורדינטות (0,0)</li>
          </ul>
        </div>

        <div className="concept-box">
          <h3>קואורדינטות נקודה</h3>
          <p>
            כל נקודה במישור מיוצגת על ידי זוג קואורדינטות <strong>(x, y)</strong>:
          </p>
          <ul>
            <li><strong>x:</strong> המרחק האופקי מהמקור (חיובי ימינה, שלילי שמאלה)</li>
            <li><strong>y:</strong> המרחק האנכי מהמקור (חיובי למעלה, שלילי למטה)</li>
          </ul>
          
          <div className="example-box">
            <h4>דוגמה:</h4>
            <p>הנקודה A(3, 2) נמצאת 3 יחידות ימינה ו-2 יחידות למעלה מהמקור</p>
            <p>הנקודה B(-1, -4) נמצאת 1 יחידה שמאלה ו-4 יחידות למטה מהמקור</p>
          </div>
        </div>

        <div className="concept-box">
          <h3>רביעי המישור</h3>
          <p>מערכת הצירים מחלקת את המישור לארבעה רביעים:</p>
          <ul>
            <li><strong>רביע ראשון:</strong> x &gt; 0, y &gt; 0 (שניהם חיוביים)</li>
            <li><strong>רביע שני:</strong> x &lt; 0, y &gt; 0 (x שלילי, y חיובי)</li>
            <li><strong>רביע שלישי:</strong> x &lt; 0, y &lt; 0 (שניהם שליליים)</li>
            <li><strong>רביע רביעי:</strong> x &gt; 0, y &lt; 0 (x חיובי, y שלילי)</li>
          </ul>
        </div>

        <div className="concept-box">
          <h3>מיקום נקודות על הצירים</h3>
          <ul>
            <li><strong>על ציר X:</strong> הקואורדינטה y = 0, כלומר (x, 0)</li>
            <li><strong>על ציר Y:</strong> הקואורדינטה x = 0, כלומר (0, y)</li>
            <li><strong>במקור:</strong> שתי הקואורדינטות שוות לאפס (0, 0)</li>
          </ul>
        </div>
      </div>

      {/* Exercises Section */}
      <div className="exercises-section">
        <h2>תרגילים</h2>

        <div className="exercise-box">
          <h3>תרגיל 1: זיהוי קואורדינטות</h3>
          <p>מצא את הקואורדינטות של הנקודות הבאות:</p>
          <div className="sub-exercise">
            <p>א) נקודה A נמצאת 4 יחידות ימינה ו-3 יחידות למעלה מהמקור</p>
            <button onClick={() => toggleAnswer('ex1a')} className="show-answer-btn">
              {showAnswer['ex1a'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex1a'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> A(4, 3)</p>
              </div>
            )}
          </div>

          <div className="sub-exercise">
            <p>ב) נקודה B נמצאת 2 יחידות שמאלה ו-5 יחידות למטה מהמקור</p>
            <button onClick={() => toggleAnswer('ex1b')} className="show-answer-btn">
              {showAnswer['ex1b'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex1b'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> B(-2, -5)</p>
              </div>
            )}
          </div>
        </div>

        <div className="exercise-box">
          <h3>תרגיל 2: זיהוי רביעים</h3>
          <p>קבע באיזה רביע נמצאת כל נקודה:</p>
          <div className="sub-exercise">
            <p>א) C(5, -2)</p>
            <button onClick={() => toggleAnswer('ex2a')} className="show-answer-btn">
              {showAnswer['ex2a'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex2a'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> רביע רביעי (x חיובי, y שלילי)</p>
              </div>
            )}
          </div>

          <div className="sub-exercise">
            <p>ב) D(-3, 4)</p>
            <button onClick={() => toggleAnswer('ex2b')} className="show-answer-btn">
              {showAnswer['ex2b'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex2b'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> רביע שני (x שלילי, y חיובי)</p>
              </div>
            )}
          </div>

          <div className="sub-exercise">
            <p>ג) E(-1, -6)</p>
            <button onClick={() => toggleAnswer('ex2c')} className="show-answer-btn">
              {showAnswer['ex2c'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex2c'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> רביע שלישי (שניהם שליליים)</p>
              </div>
            )}
          </div>
        </div>

        <div className="exercise-box">
          <h3>תרגיל 3: נקודות על הצירים</h3>
          <p>מצא את הקואורדינטות של הנקודות הבאות:</p>
          <div className="sub-exercise">
            <p>א) נקודה F נמצאת על ציר X במרחק 7 יחידות ימינה מהמקור</p>
            <button onClick={() => toggleAnswer('ex3a')} className="show-answer-btn">
              {showAnswer['ex3a'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex3a'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> F(7, 0)</p>
              </div>
            )}
          </div>

          <div className="sub-exercise">
            <p>ב) נקודה G נמצאת על ציר Y במרחק 3 יחידות למטה מהמקור</p>
            <button onClick={() => toggleAnswer('ex3b')} className="show-answer-btn">
              {showAnswer['ex3b'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex3b'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> G(0, -3)</p>
              </div>
            )}
          </div>
        </div>

        <div className="exercise-box">
          <h3>תרגיל 4: בעיה מורכבת</h3>
          <p>נתונות הנקודות: A(2, 3), B(-1, 4), C(-2, -1), D(3, -2)</p>
          <div className="sub-exercise">
            <p>א) איזו נקודה נמצאת ברביע הראשון?</p>
            <button onClick={() => toggleAnswer('ex4a')} className="show-answer-btn">
              {showAnswer['ex4a'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex4a'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> נקודה A(2, 3) - שתי הקואורדינטות חיוביות</p>
              </div>
            )}
          </div>

          <div className="sub-exercise">
            <p>ב) איזו נקודה נמצאת ברביע השלישי?</p>
            <button onClick={() => toggleAnswer('ex4b')} className="show-answer-btn">
              {showAnswer['ex4b'] ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>
            {showAnswer['ex4b'] && (
              <div className="answer-box">
                <p><strong>פתרון:</strong> נקודה C(-2, -1) - שתי הקואורדינטות שליליות</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2>בוחן</h2>
        
        <div className="question-box">
          <h3>שאלה 1</h3>
          <p>איזו נקודה נמצאת ברביע השני?</p>
          <div className="options">            <label>
              <input 
                type="radio" 
                name="q1" 
                value="A"
              />
              א) (3, 2)
            </label>
            <label>
              <input 
                type="radio" 
                name="q1" 
                value="B"
              />
              ב) (-4, 5)
            </label>
            <label>
              <input 
                type="radio" 
                name="q1" 
                value="C"
              />
              ג) (-1, -3)
            </label>
            <label>
              <input 
                type="radio" 
                name="q1" 
                value="D"
              />
              ד) (2, -4)
            </label>
          </div>
          <button onClick={() => toggleSolution('q1')} className="show-solution-btn">
            {showSolution['q1'] ? 'הסתר פתרון' : 'הראה פתרון'}
          </button>
          {showSolution['q1'] && (
            <div className="solution-box">
              <p><strong>תשובה נכונה: ב) (-4, 5)</strong></p>
              <p><strong>הסבר:</strong> ברביע השני x שלילי ו-y חיובי</p>
            </div>
          )}
        </div>

        <div className="question-box">
          <h3>שאלה 2</h3>
          <p>נקודה הנמצאת על ציר Y צריכה לקיים:</p>
          <div className="options">            <label>
              <input 
                type="radio" 
                name="q2" 
                value="A"
              />
              א) x = 0
            </label>
            <label>
              <input 
                type="radio" 
                name="q2" 
                value="B"
              />
              ב) y = 0
            </label>
            <label>
              <input 
                type="radio" 
                name="q2" 
                value="C"
              />
              ג) x = y
            </label>
            <label>
              <input 
                type="radio" 
                name="q2" 
                value="D"
              />
              ד) x + y = 0
            </label>
          </div>
          <button onClick={() => toggleSolution('q2')} className="show-solution-btn">
            {showSolution['q2'] ? 'הסתר פתרון' : 'הראה פתרון'}
          </button>
          {showSolution['q2'] && (
            <div className="solution-box">
              <p><strong>תשובה נכונה: א) x = 0</strong></p>
              <p><strong>הסבר:</strong> נקודה על ציר Y מתאפיינת ב-x = 0, כלומר (0, y)</p>
            </div>
          )}
        </div>

        <div className="question-box">
          <h3>שאלה 3</h3>
          <p>במה מתאפיין הרביע הרביעי?</p>
          <div className="options">            <label>
              <input 
                type="radio" 
                name="q3" 
                value="A"
              />
              א) x &gt; 0, y &gt; 0
            </label>
            <label>
              <input 
                type="radio" 
                name="q3" 
                value="B"
              />
              ב) x &lt; 0, y &gt; 0
            </label>
            <label>
              <input 
                type="radio" 
                name="q3" 
                value="C"
              />
              ג) x &lt; 0, y &lt; 0
            </label>
            <label>
              <input 
                type="radio" 
                name="q3" 
                value="D"
              />
              ד) x &gt; 0, y &lt; 0
            </label>
          </div>
          <button onClick={() => toggleSolution('q3')} className="show-solution-btn">
            {showSolution['q3'] ? 'הסתר פתרון' : 'הראה פתרון'}
          </button>
          {showSolution['q3'] && (
            <div className="solution-box">
              <p><strong>תשובה נכונה: ד) x &gt; 0, y &lt; 0</strong></p>
              <p><strong>הסבר:</strong> ברביע הרביעי x חיובי (ימינה) ו-y שלילי (למטה)</p>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="summary-section">
        <h2>סיכום השיעור</h2>
        <div className="summary-box">
          <h3>נקודות מפתח:</h3>
          <ul>
            <li><strong>מערכת הצירים הקרטזית:</strong> מורכבת מציר X (אופקי) וציר Y (אנכי)</li>
            <li><strong>קואורדינטות נקודה:</strong> מיוצגות כ-(x, y)</li>
            <li><strong>רביעי המישור:</strong> ארבעה אזורים הנקבעים על ידי סימני x ו-y</li>
            <li><strong>נקודות על הצירים:</strong> על ציר X: (x, 0), על ציר Y: (0, y)</li>
            <li><strong>המקור:</strong> נקודת החיתוך של הצירים (0, 0)</li>
          </ul>
        </div>
        
        <div className="summary-box">
          <h3>נוסחאות וכללים חשובים:</h3>
          <ul>
            <li>רביע ראשון: x &gt; 0, y &gt; 0</li>
            <li>רביע שני: x &lt; 0, y &gt; 0</li>
            <li>רביע שלישי: x &lt; 0, y &lt; 0</li>
            <li>רביע רביעי: x &gt; 0, y &lt; 0</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mahat62CoordinateGeometry;
