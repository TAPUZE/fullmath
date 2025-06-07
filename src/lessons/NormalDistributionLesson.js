import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const NormalDistributionLesson = () => {
  const exercises = [
    {
      id: 'ex1',
      question: 'אורך החיים של סוללות מסוג מסוים מתפלג נורמלית עם ממוצע של 500 שעות וסטיית תקן של 40 שעות. מה ההסתברות שסוללה שנבחרה באקראי תחזיק מעמד פחות מ-450 שעות? (הכנס תשובה עשרונית מעוגלת ל-4 ספרות אחרי הנקודה)',
      correctAnswer: '0.1056',
      tolerance: 0.01,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>          <p>נתונים: <FormulaBox inline>\\mu = 500, \\sigma = 40</FormulaBox></p>
          <p>עבור <FormulaBox inline>X = 450</FormulaBox> שעות:</p>
          <FormulaBox>Z = \\frac{450 - 500}{40} = \\frac{-50}{40} = -1.25</FormulaBox>          <p>נחפש בטבלת Z את <FormulaBox inline>P(Z &lt; -1.25)</FormulaBox>. בדרך כלל, <FormulaBox inline>P(Z &lt; -1.25) = P(Z &gt; 1.25) = 1 - P(Z &lt; 1.25)</FormulaBox>.</p>
          <p>מטבלה, <FormulaBox inline>P(Z &lt; 1.25) \\approx 0.8944</FormulaBox>.</p>
          <p>לכן, <FormulaBox inline>P(Z &lt; -1.25) \\approx 1 - 0.8944 = 0.1056</FormulaBox>.</p>
          <p>ההסתברות היא כ-10.56%.</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'ציוני מבחן מתפלגים נורמלית עם ממוצע 70 וסטיית תקן 10. מהו ציון ה-Z של תלמיד שקיבל 85?',
      correctAnswer: '1.5',
      tolerance: 0.01,
      solution: (        <div>
          <p><strong>פתרון:</strong></p>
          <p>נתונים: <FormulaBox inline>X = 85, \\mu = 70, \\sigma = 10</FormulaBox></p>
          <FormulaBox>Z = \\frac{85 - 70}{10} = \\frac{15}{10} = 1.5</FormulaBox>
          <p>ציון ה-Z של התלמיד הוא 1.5. משמעות הדבר היא שהציון שלו גבוה ב-1.5 סטיות תקן מהממוצע.</p>
        </div>
      )
    },
    {
      id: 'ex3',
      question: 'במפעל מסוים, משקל מוצר מתפלג נורמלית עם ממוצע של 200 גרם וסטיית תקן של 5 גרם. מה ההסתברות שמוצר שנבחר באקראי ישקול בין 195 ל-205 גרם? (התשובה עשרונית מעוגלת ל-4 ספרות אחרי הנקודה)',
      correctAnswer: '0.6826',
      tolerance: 0.01,
      solution: (
        <div>          <p><strong>פתרון:</strong></p>
          <p>נתונים: <FormulaBox inline>\\mu = 200, \\sigma = 5</FormulaBox></p>
          <p>עבור 195 גרם: <FormulaBox inline>Z_1 = \\frac{195 - 200}{5} = -1</FormulaBox></p>
          <p>עבור 205 גרם: <FormulaBox inline>Z_2 = \\frac{205 - 200}{5} = 1</FormulaBox></p>
          <p>אנחנו מחפשים <FormulaBox inline>P(-1 &lt; Z &lt; 1)</FormulaBox>.</p>
          <p>לפי הכלל האמפירי (68-95-99.7), כ-68% מהנתונים נמצאים במרחק של סטיית תקן אחת מהממוצע.</p>
          <p>לכן ההסתברות היא 0.6826 (68.26%).</p>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מה מייצג ציון Z בהתפלגות נורמלית?',
      options: [
        'הערך המקורי של המשתנה',
        'מספר סטיות התקן מהממוצע',
        'ההסתברות לקבל ערך מסוים',
        'השטח מתחת לעקומה'
      ],
      correctAnswer: 'מספר סטיות התקן מהממוצע',
      explanation: 'ציון Z מייצג כמה סטיות תקן ערך מסוים רחוק מהממוצע, ומחושב לפי הנוסחה Z = (X - μ)/σ.'
    },
    {
      id: 'q2',
      question: 'לפי הכלל האמפירי (68-95-99.7), כמה אחוזים מהנתונים נמצאים במרחק של שתי סטיות תקן מהממוצע?',
      options: ['68%', '95%', '99.7%', '50%'],
      correctAnswer: '95%',
      explanation: 'לפי הכלל האמפירי, 95% מהנתונים נמצאים במרחק של שתי סטיות תקן מהממוצע (μ ± 2σ).'
    },
    {
      id: 'q3',
      question: 'מה מאפיין את ההתפלגות הנורמלית הסטנדרטית?',
      options: [
        'ממוצע = 1, סטיית תקן = 0',
        'ממוצע = 0, סטיית תקן = 1',
        'ממוצע = 100, סטיית תקן = 15',
        'ממוצע = 50, סטיית תקן = 10'
      ],
      correctAnswer: 'ממוצע = 0, סטיית תקן = 1',
      explanation: 'ההתפלגות הנורמלית הסטנדרטית (Z) מוגדרת עם ממוצע 0 וסטיית תקן 1, מה שמקל על חישובים.'
    }
  ];

  return (
    <LessonLayout
      title="התפלגות נורמלית"
      lessonId="35381-normal-distribution"
      nextLessonPath="/lesson/35382-functions-parabola-investigation"
    >
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">לומדים 📚</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>ההתפלגות הנורמלית היא אחת ההתפלגויות החשובות ביותר בסטטיסטיקה ובחיי היומיום. היא מתארת התפלגות של תופעות רבות בטבע ובחברה.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">תכונות ההתפלגות הנורמלית</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li><strong>סימטרית:</strong> העקומה סימטרית סביב הממוצע (μ).</li>
            <li><strong>צורת פעמון:</strong> רוב הערכים מרוכזים סביב הממוצע, והשכיחות יורדת ככל שמתרחקים מהממוצע.</li>
            <li><strong>הממוצע, החציון והשכיח שווים:</strong> μ = Md = Mo.</li>
            <li><strong>השטח הכולל מתחת לעקומה שווה ל-1 (או 100%):</strong> מייצג את כלל ההסתברויות.</li>
            <li><strong>מוגדרת על ידי שני פרמטרים:</strong> ממוצע (μ) וסטיית תקן (σ).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">התפלגות נורמלית סטנדרטית (Z)</h3>
          <p>כדי להקל על חישובים, אנו משתמשים בהתפלגות נורמלית סטנדרטית, שבה הממוצע הוא 0 וסטיית התקן היא 1. כלומר, <FormulaBox inline>Z \\sim N(0, 1)</FormulaBox>.</p>
          <p>ניתן להמיר כל משתנה מקרי <FormulaBox inline>X</FormulaBox> המתפלג נורמלית עם ממוצע <FormulaBox inline>\\mu</FormulaBox> וסטיית תקן <FormulaBox inline>\\sigma</FormulaBox> למשתנה סטנדרטי <FormulaBox inline>Z</FormulaBox> באמצעות הנוסחה:</p>
          <FormulaBox>{"Z = \\frac{X - \\mu}{\\sigma}"}</FormulaBox>
          <p>לאחר ההמרה, ניתן להשתמש בטבלת ההתפלגות הנורמלית הסטנדרטית (טבלת Z) כדי למצוא הסתברויות.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">כלל 68-95-99.7 (הכלל האמפירי)</h3>
          <p>בהתפלגות נורמלית:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>כ-<strong>68%</strong> מהנתונים נמצאים במרחק של סטיית תקן אחת מהממוצע (בין <FormulaBox inline>\\mu - \\sigma</FormulaBox> ל- <FormulaBox inline>\\mu + \\sigma</FormulaBox>).</li>
            <li>כ-<strong>95%</strong> מהנתונים נמצאים במרחק של שתי סטיות תקן מהממוצע (בין <FormulaBox inline>\\mu - 2\\sigma</FormulaBox> ל- <FormulaBox inline>\\mu + 2\\sigma</FormulaBox>).</li>
            <li>כ-<strong>99.7%</strong> מהנתונים נמצאים במרחק של שלוש סטיות תקן מהממוצע (בין <FormulaBox inline>\\mu - 3\\sigma</FormulaBox> ל- <FormulaBox inline>\\mu + 3\\sigma</FormulaBox>).</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
            <div className="text-center">
              <p className="font-medium mb-2">הכלל האמפירי (68-95-99.7)</p>
              <div className="bg-white rounded-lg p-3 inline-block">
                <FormulaBox>{"\\begin{array}{c} \\mu - 3\\sigma \\quad \\mu - 2\\sigma \\quad \\mu - \\sigma \\quad \\mu \\quad \\mu + \\sigma \\quad \\mu + 2\\sigma \\quad \\mu + 3\\sigma \\\\ \\underbrace{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}_{99.7\\%} \\\\ \\underbrace{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}_{95\\%} \\\\ \\underbrace{\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad}_{68\\%} \\end{array}"}</FormulaBox>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה: חישוב ציון Z</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 mb-6">
            <p className="font-medium"><strong>דוגמה:</strong> ציוני מבחן מתפלגים נורמלית עם ממוצע 70 וסטיית תקן 10. מהו ציון ה-Z של תלמיד שקיבל 85?</p>
            
            <p><strong>פתרון:</strong></p>
            <p>נתונים: <FormulaBox inline>X = 85, \\mu = 70, \\sigma = 10</FormulaBox></p>
            <FormulaBox>{"Z = \\frac{85 - 70}{10} = \\frac{15}{10} = 1.5"}</FormulaBox>
            <p>ציון ה-Z של התלמיד הוא 1.5. משמעות הדבר היא שהציון שלו גבוה ב-1.5 סטיות תקן מהממוצע.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה: שימוש בטבלת Z</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 mb-6">
            <p className="font-medium"><strong>דוגמה:</strong> מהי ההסתברות שערך Z שנבחר באקראי יהיה קטן מ-1.5?</p>
            
            <p><strong>פתרון:</strong></p>
            <p>נשתמש בטבלת ההתפלגות הנורמלית הסטנדרטית. הטבלה בדרך כלל מציגה את השטח משמאל לערך Z נתון, כלומר <FormulaBox inline>P(Z &lt; z)</FormulaBox>.</p>
            <p>עבור <FormulaBox inline>z = 1.5</FormulaBox>, נמצא בטבלה את הערך המתאים. ברוב הטבלאות, <FormulaBox inline>P(Z &lt; 1.5) \approx 0.9332</FormulaBox>.</p>
            <p>לכן, ההסתברות היא כ-93.32%.</p>
            
            <p><strong>חישובים נוספים:</strong></p>
            <p>מהי ההסתברות שערך Z יהיה גדול מ-1.5?</p>            <FormulaBox>P(Z &gt; 1.5) = 1 - P(Z &lt; 1.5) = 1 - 0.9332 = 0.0668</FormulaBox>
            
            <p>מהי ההסתברות שערך Z יהיה בין 0 ל-1.5?</p>
            <FormulaBox>P(0 &lt; Z &lt; 1.5) = P(Z &lt; 1.5) - P(Z &lt; 0)</FormulaBox>
            <p>מכיוון שההתפלגות סימטרית סביב 0, <FormulaBox inline>P(Z &lt; 0) = 0.5</FormulaBox>.</p>
            <FormulaBox>P(0 &lt; Z &lt; 1.5) = 0.9332 - 0.5 = 0.4332</FormulaBox>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">מתרגלים ✍️</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise key={exercise.id} {...exercise} />
          ))}
        </div>
      </section>      {/* Quiz Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">בוחן ידע 🧪</h2>
        <Quiz questions={quizQuestions} />
      </section>
    </LessonLayout>
  );
};

export default NormalDistributionLesson;
