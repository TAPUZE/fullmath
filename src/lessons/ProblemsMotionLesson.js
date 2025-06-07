import React, { useState } from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const ProblemsMotionLesson = () => {
  const [completionStatus, setCompletionStatus] = useState(false);

  const breadcrumbItems = [
    { label: 'דף ראשי', href: '/' },
    { label: 'שאלון 35382', href: '/lessons' },
    { label: 'בעיות תנועה', href: '#' }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: (
        <>
          רכב נוסע במהירות 60 קמ"ש למשך 2 שעות. מה המרחק שעבר?
        </>
      ),
      options: [
        { value: 'a', label: '30 ק"מ' },
        { value: 'b', label: '60 ק"מ' },
        { value: 'c', label: '120 ק"מ' },
        { value: 'd', label: '240 ק"מ' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q2',
      question: (
        <>
          שני רכבים יוצאים מאותה נקודה בכיוונים מנוגדים. מהירות הראשון 50 קמ"ש 
          ומהירות השני 70 קמ"ש. כמה זמן יעבור עד שהמרחק ביניהם יהיה 240 ק"מ?
        </>
      ),
      options: [
        { value: 'a', label: '2 שעות' },
        { value: 'b', label: '3 שעות' },
        { value: 'c', label: '4 שעות' },
        { value: 'd', label: '5 שעות' }
      ],
      correctAnswer: 'a'
    }
  ];

  const exercises = [
    {
      id: 'ex1',
      question: (
        <>
          רכב יוצא מעיר א' לעיר ב' במהירות 80 קמ"ש. המרחק בין הערים 320 ק"מ. 
          כמה זמן ייקח לרכב להגיע לעיר ב'?
        </>
      ),
      correctAnswer: '4',
      placeholder: 'הכנס זמן בשעות',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>
          <p>נתונים:</p>
          <ul className="list-disc pr-4">            <li>מהירות: <FormulaBox inline>v = 80</FormulaBox> קמ"ש</li>
            <li>מרחק: <FormulaBox inline>s = 320</FormulaBox> ק"מ</li>
          </ul>          <p>נוסחה: <FormulaBox inline>{"t = \\frac{s}{v}"}</FormulaBox></p>
          <p>חישוב:</p>
          <FormulaBox>{"t = \\frac{320}{80} = 4"}</FormulaBox>
          <p><strong>תשובה:</strong> 4 שעות</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: (
        <>
          שני רכבים יוצאים באותו זמן ממקומות שמרחק ביניהם 450 ק"מ ונוסעים זה לקראת זה. 
          מהירות הראשון 60 קמ"ש ומהירות השני 90 קמ"ש. אחרי כמה זמן הם ייפגשו?
        </>
      ),
      correctAnswer: '3',
      placeholder: 'הכנס זמן בשעות',
      solution: (
        <div className="space-y-3">
          <p><strong>פתרון:</strong></p>
          <p>נתונים:</p>          <ul className="list-disc pr-4">
            <li>מרחק התחלתי: <FormulaBox inline>s = 450</FormulaBox> ק"מ</li>
            <li>מהירות רכב 1: <FormulaBox inline>v_1 = 60</FormulaBox> קמ"ש</li>
            <li>מהירות רכב 2: <FormulaBox inline>v_2 = 90</FormulaBox> קמ"ש</li>
          </ul>          <p>מהירות יחסית (מתקרבים זה לזה):</p>
          <FormulaBox>{"v_{rel} = v_1 + v_2 = 60 + 90 = 150"}</FormulaBox>
          <p>זמן פגישה:</p>
          <FormulaBox>{"t = \\frac{s}{v_{rel}} = \\frac{450}{150} = 3"}</FormulaBox>
          <p><strong>תשובה:</strong> 3 שעות</p>
        </div>
      )
    }
  ];

  return (
    <LessonLayout 
      title="בעיות תנועה"
      breadcrumbItems={breadcrumbItems}
      nextLessonUrl="/lessons/problems-geometric-algebraic"
      lessonMenuUrl="/lessons"
      completionStatus={completionStatus}
      onCompletionChange={setCompletionStatus}
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים: בעיות תנועה 🚗💨
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            בעיות תנועה עוסקות ביחסים בין מהירות, זמן ומרחק. הנוסחה הבסיסית היא:
          </p>
            <FormulaBox>s = v \cdot t</FormulaBox>
          
          <p>כאשר:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li><FormulaBox inline>s</FormulaBox> = מרחק</li>
            <li><FormulaBox inline>v</FormulaBox> = מהירות</li>
            <li><FormulaBox inline>t</FormulaBox> = זמן</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            1. נוסחאות נגזרות
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">            <div className="border border-blue-200 rounded-lg p-3 bg-blue-50 text-center">
              <p className="font-semibold">מרחק</p>
              <FormulaBox>s = v \cdot t</FormulaBox>
            </div>            <div className="border border-green-200 rounded-lg p-3 bg-green-50 text-center">
              <p className="font-semibold">מהירות</p>
              <FormulaBox>{"v = \\frac{s}{t}"}</FormulaBox>
            </div>
            <div className="border border-purple-200 rounded-lg p-3 bg-purple-50 text-center">
              <p className="font-semibold">זמן</p>
              <FormulaBox>{"t = \\frac{s}{v}"}</FormulaBox>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            2. סוגי בעיות תנועה
          </h3>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-semibold text-gray-800 mb-2">א. תנועה פשוטה</h4>
              <p>חישוב אחד מהגדלים (מרחק, מהירות, זמן) כאשר שניים אחרים נתונים.</p>
            </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-semibold text-gray-800 mb-2">ב. תנועה מנוגדת</h4>              <p>שני גופים נעים זה לקראת זה. המהירות היחסית היא סכום המהירויות.</p>
              <FormulaBox>{"v_{rel} = v_1 + v_2"}</FormulaBox>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h4 className="font-semibold text-gray-800 mb-2">ג. תנועה במקביל</h4>
              <p>שני גופים נעים באותו כיוון. המהירות היחסית היא הפרש המהירויות.</p>
              <FormulaBox>{"v_{rel} = |v_1 - v_2|"}</FormulaBox>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            3. אסטרטגיית פתרון
          </h3>
          
          <ol className="list-decimal pr-6 space-y-2">
            <li><strong>זיהוי הנתונים:</strong> מה נתון ומה מבוקש?</li>
            <li><strong>בחירת נוסחה:</strong> איזו נוסחה מתאימה לבעיה?</li>
            <li><strong>הצבה וחישוב:</strong> הצב את הנתונים ופתור.</li>
            <li><strong>בדיקת יחידות:</strong> ודא שהיחידות עקביות.</li>
            <li><strong>בדיקת הגיונות:</strong> האם התוצאה הגיונית?</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            4. דוגמה מפורטת
          </h3>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6">
            <p className="font-medium">
              <strong>דוגמה:</strong> שני רכבים יוצאים מאותה נקודה באותו זמן בכיוונים מנוגדים. 
              מהירות הראשון 50 קמ"ש ומהירות השני 70 קמ"ש. אחרי כמה זמן המרחק ביניהם יהיה 360 ק"מ?
            </p>
            
            <p><strong>פתרון:</strong></p>
            <p>1. <strong>זיהוי נתונים:</strong></p>
            <ul className="list-disc pr-4">              <li>מהירות רכב 1: <FormulaBox inline>v_1 = 50</FormulaBox> קמ"ש</li>
              <li>מהירות רכב 2: <FormulaBox inline>v_2 = 70</FormulaBox> קמ"ש</li>
              <li>מרחק מבוקש: <FormulaBox inline>s = 360</FormulaBox> ק"מ</li>
              <li>מבוקש: זמן <FormulaBox inline>t</FormulaBox></li>
            </ul>
            
            <p>2. <strong>ניתוח המצב:</strong> הרכבים נעים בכיוונים מנוגדים, לכן הם מתרחקים זה מזה.</p>
            
            <p>3. <strong>חישוב מהירות יחסית:</strong></p>
            <p className="text-center my-4">
              <FormulaBox>{`v_{rel} = v_1 + v_2 = 50 + 70 = 120`}</FormulaBox>
              <span className="text-lg mr-2">קמ"ש</span>
            </p>
            
            <p>4. <strong>חישוב זמן:</strong></p>
            <p className="text-center my-4">
              <FormulaBox>{`t = \\frac{s}{v_{rel}} = \\frac{360}{120} = 3`}</FormulaBox>
              <span className="text-lg mr-2">שעות</span>
            </p>
            
            <p>5. <strong>בדיקה:</strong></p>
            <ul className="list-disc pr-4">              <li>רכב 1 עבר: <FormulaBox inline>50 \times 3 = 150</FormulaBox> ק"מ</li>
              <li>רכב 2 עבר: <FormulaBox inline>70 \times 3 = 210</FormulaBox> ק"מ</li>
              <li>מרחק כולל: <FormulaBox inline>150 + 210 = 360</FormulaBox> ק"מ ✓</li>
            </ul>
            
            <p><strong>תשובה:</strong> אחרי 3 שעות המרחק ביניהם יהיה 360 ק"מ.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            5. טיפים חשובים
          </h3>
          
          <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50 space-y-2">
            <p><strong>שימו לב:</strong></p>
            <ul className="list-disc pr-4 space-y-1">
              <li>תמיד בדקו שהיחידות עקביות (קמ"ש ושעות, או מ/ש ושניות).</li>
              <li>ציירו סקיצה של המצב - זה עוזר להבין את הבעיה.</li>
              <li>בתנועה מנוגדת - מהירויות מתחברות.</li>
              <li>בתנועה מקבילה - מהירויות מתחסרות.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        <div className="space-y-6">
          {exercises.map((exercise) => (
            <Exercise key={exercise.id} {...exercise} />
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz questions={quizQuestions} />
    </LessonLayout>
  );
};

export default ProblemsMotionLesson;
