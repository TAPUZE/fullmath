import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const Mahat73MidpointDistance = () => {
  const lessonId = 'mahat-7-3-midpoint-distance';
  const nextLessonPath = '/lessons/mahat-7-4-implicit-function';

  const exercises = [
    {
      id: 'ex1',
      question: 'מצא את המרחק בין הנקודות (-1,3) ו-(5,11).',
      correctAnswer: '10',
      placeholder: 'הזן את המרחק',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נשתמש בנוסחת המרחק:</p>
          <FormulaBox>{"d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"}</FormulaBox>
          <p>נציב את הנקודות (-1,3) ו-(5,11):</p>
          <FormulaBox>{"d = \\sqrt{(5 - (-1))^2 + (11 - 3)^2}"}</FormulaBox>
          <FormulaBox>{"d = \\sqrt{6^2 + 8^2}"}</FormulaBox>
          <FormulaBox>{"d = \\sqrt{36 + 64} = \\sqrt{100} = 10"}</FormulaBox>
          <p><strong>התשובה: המרחק הוא 10 יחידות</strong></p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מצא את אמצע הקטע שקצותיו הם (-4,0) ו-(2,-8).',
      correctAnswer: '(-1, -4)',
      placeholder: 'הזן את נקודת האמצע',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>נוסחת אמצע הקטע:</p>
          <FormulaBox>{"M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)"}</FormulaBox>
          <p>נציב את הנקודות (-4,0) ו-(2,-8):</p>
          <FormulaBox>{"M = \\left(\\frac{-4 + 2}{2}, \\frac{0 + (-8)}{2}\\right)"}</FormulaBox>
          <FormulaBox>{"M = \\left(\\frac{-2}{2}, \\frac{-8}{2}\\right) = (-1, -4)"}</FormulaBox>
          <p><strong>התשובה: נקודת האמצע היא (-1, -4)</strong></p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'הנקודה C(-2,1) היא אמצע הקטע PQ. נתון P(0,5). מצא את שיעורי הנקודה Q.',
      correctAnswer: '(-4, -3)',
      placeholder: 'הזן את שיעורי Q',
      solution: (
        <div>
          <p><strong>פתרון:</strong></p>
          <p>אם C היא אמצע הקטע PQ, אז:</p>
          <FormulaBox>{"C = \\left(\\frac{x_P + x_Q}{2}, \\frac{y_P + y_Q}{2}\\right)"}</FormulaBox>
          <p>נציב את הנתונים: C(-2,1) ו-P(0,5)</p>
          <FormulaBox>{"-2 = \\frac{0 + x_Q}{2} \\Rightarrow x_Q = -4"}</FormulaBox>
          <FormulaBox>{"1 = \\frac{5 + y_Q}{2} \\Rightarrow y_Q = -3"}</FormulaBox>
          <p><strong>התשובה: Q(-4, -3)</strong></p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהי נקודת האמצע של קטע שמתחיל בראשית הצירים (0,0) ומסתיים בנקודה (-6,10)?',
      options: [
        '(-12, 20)',
        '(6, -10)',
        '(-3, 5)',
        '(3, -5)'
      ],
      correctAnswer: '(-3, 5)',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <p>נוסחת אמצע הקטע:</p>
          <FormulaBox>{"M = \\left(\\frac{0 + (-6)}{2}, \\frac{0 + 10}{2}\\right) = (-3, 5)"}</FormulaBox>
        </div>
      )
    },
    {
      id: 'q2',
      question: 'מהו המרחק בין הנקודות (1,1) ו-(4,5)?',
      options: [
        '3',
        '4',
        '5',
        '7'
      ],
      correctAnswer: '5',
      explanation: (
        <div>
          <p><strong>הסבר:</strong></p>
          <FormulaBox>{"d = \\sqrt{(4-1)^2 + (5-1)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5"}</FormulaBox>
        </div>
      )
    }
  ];

  return (
    <LessonLayout
      lessonId={lessonId}
      lessonTitle="MAHAT - נושא 7.3: אמצע קטע, קצה קטע ומרחק בין נקודות"
      nextLessonPath={nextLessonPath}
    >
      <div className="lesson-content">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">אמצע קטע, קצה קטע ומרחק בין נקודות</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg mb-8 border-r-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">מבוא לשיעור</h3>
          <p className="text-gray-700 leading-relaxed">
            בשיעור זה נלמד שלוש נוסחאות בסיסיות וחשובות: הנוסחה למציאת המרחק בין שתי נקודות, 
            הנוסחה למציאת נקודת האמצע המדויקת של קטע, והטכניקה למצוא קצה של קטע. נוסחאות אלה 
            הן כלים יסודיים בגיאומטריה אנליטית ושימושיות במגוון רחב של בעיות מתמטיות.
          </p>
        </div>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">מטרות השיעור</h3>
          <ul className="list-disc list-inside space-y-2 mr-4">
            <li><strong>חישוב מרחק בין שתי נקודות:</strong> נלמד להשתמש בנוסחת המרחק המבוססת על משפט פיתגורס</li>
            <li><strong>מציאת אמצע קטע:</strong> נבין כיצד למצוא את הנקודה שמחלקת קטע לשני חלקים שווים</li>
            <li><strong>מציאת קצה קטע חסר:</strong> נלמד לפתור בעיות שבהן ידוע אמצע הקטע וקצה אחד</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 1: מרחק בין שתי נקודות</h3>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">נוסחת המרחק</h4>
            <p className="text-gray-700 mb-3">
              הנוסחה המבוססת על משפט פיתגורס:
            </p>
            <FormulaBox>{"d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}"}</FormulaBox>
            
            <div className="bg-white p-3 rounded border mt-4">
              <h5 className="font-semibold mb-2">הסבר הנוסחה:</h5>
              <p>• המרחק האופקי בין הנקודות: |x₂ - x₁|</p>
              <p>• המרחק האנכי בין הנקודות: |y₂ - y₁|</p>
              <p>• המרחק הישר (היפוטנוזה): שורש סכום הריבועים</p>
            </div>
            
            <div className="bg-yellow-100 p-3 rounded border mt-3">
              <p><strong>דוגמה:</strong></p>
              <p>המרחק בין (2, 3) ל-(1, 7):</p>
              <FormulaBox>{"d = \\sqrt{(-1-2)^2 + (7-3)^2} = \\sqrt{9 + 16} = 5"}</FormulaBox>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 2: מציאת אמצע קטע</h3>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">נוסחת אמצע הקטע</h4>
            <p className="text-gray-700 mb-3">
              נקודת האמצע היא הממוצע של שיעורי הקצוות:
            </p>
            <FormulaBox>{"M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)"}</FormulaBox>
            
            <div className="bg-white p-3 rounded border mt-4">
              <h5 className="font-semibold mb-2">הסבר הנוסחה:</h5>
              <p>• שיעור X של האמצע: ממוצע שיעורי ה-X של שני הקצוות</p>
              <p>• שיעור Y של האמצע: ממוצע שיעורי ה-Y של שני הקצוות</p>
              <p>• התוצאה: הנקודה שנמצאת בדיוק באמצע הקטע</p>
            </div>
            
            <div className="bg-blue-100 p-3 rounded border mt-3">
              <p><strong>דוגמה:</strong></p>
              <p>אמצע הקטע בין (2, 4) ל-(6, 8):</p>
              <FormulaBox>{"M = \\left(\\frac{2 + (-6)}{2}, \\frac{4 + 8}{2}\\right) = (-2, 6)"}</FormulaBox>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">חלק 3: מציאת קצה קטע</h3>
          
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">שימוש בנוסחת אמצע הקטע</h4>
            <p className="text-gray-700 mb-3">
              משתמשים בנוסחת אמצע הקטע, אך הפעם שיעורי הקצה השני הם הנעלמים.
            </p>
            
            <div className="bg-white p-3 rounded border mt-4">
              <h5 className="font-semibold mb-2">שלבי הפתרון:</h5>
              <ol className="list-decimal list-inside space-y-2 mr-4">
                <li>כתוב את נוסחת אמצע הקטע</li>
                <li>הצב את הנתונים: אמצע הקטע וקצה אחד</li>
                <li>פתור שתי משוואות נפרדות עבור x ו-y של הקצה השני</li>
                <li>רשום את שיעורי הקצה השני</li>
              </ol>
            </div>
            
            <div className="bg-green-100 p-3 rounded border mt-3">
              <p><strong>דוגמה:</strong></p>
              <p>אמצע הקטע AB הוא (1, 3). A הוא (4, 7). מצא את B.</p>
              <p>פתרון:</p>
              <FormulaBox>{"1 = \\frac{4 + x_B}{2} \\Rightarrow x_B = -2"}</FormulaBox>
              <FormulaBox>{"3 = \\frac{7 + y_B}{2} \\Rightarrow y_B = -1"}</FormulaBox>
              <p>לכן B(-2, -1)</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">תרגול מעשי</h3>
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <Exercise key={exercise.id} {...exercise} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">סיכום</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">נקודות מפתח לזכירה:</h4>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>נוסחת מרחק:</strong> d = √[(x₂-x₁)² + (y₂-y₁)²] - מבוססת על משפט פיתגורס</li>
              <li><strong>נוסחת אמצע:</strong> M = ((x₁+x₂)/2, (y₁+y₂)/2) - ממוצע השיעורים</li>
              <li><strong>מציאת קצה:</strong> השתמש בנוסחת האמצע עם נעלם</li>
              <li><strong>זהירות בחישובים:</strong> שים לב לסימנים (חיובי/שלילי)</li>
              <li><strong>יחידות:</strong> המרחק תמיד חיובי, האמצע יכול להיות בכל מקום</li>
              <li><strong>בדיקה:</strong> ודא שהמרחקים מהאמצע לשני הקצוות שווים</li>
            </ul>
          </div>
        </section>

        <Quiz 
          questions={quizQuestions} 
          lessonId={lessonId}
          title="בחן את עצמך - אמצע קטע ומרחק בין נקודות"
        />
      </div>
    </LessonLayout>
  );
};

export default Mahat73MidpointDistance;
