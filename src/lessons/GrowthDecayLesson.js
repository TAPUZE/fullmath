import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const GrowthDecayLesson = () => {
  const title = "גדילה ודעיכה";
  const lessonId = "35381_growth_decay";
  const nextLessonPath = "/lessons/statistics-dispersion";

  const exercises = [
    {
      id: 'ex1',
      question: 'סכום כסף הופקד בבנק בתוכנית חיסכון הנושאת ריבית דריבית שנתית של 5%. לאחר 6 שנים היו בתוכנית 2680.19 ש"ח. מה היה הסכום ההתחלתי שהופקד? (עגל לשתי ספרות אחרי הנקודה)',
      correctAnswer: '2000.00',
      tolerance: 0.01,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>נתונים: <FormulaBox inline>M_t = 2680.19</FormulaBox>, <FormulaBox inline>p = 5\\%</FormulaBox>, <FormulaBox inline>t = 6</FormulaBox>. מחפשים <FormulaBox inline>M_0</FormulaBox>.</p>
          <p>גורם הגדילה: <FormulaBox inline>{"q = 1 + \\frac{5}{100} = 1.05"}</FormulaBox>.</p>
          <p>נציב בנוסחה <FormulaBox inline>M_t = M_0 \\cdot q^t</FormulaBox>:</p>
          <p><FormulaBox inline>2680.19 = M_0 \\cdot (1.05)^6</FormulaBox></p>
          <p><FormulaBox inline>(1.05)^6 \\approx 1.3400956</FormulaBox></p>
          <p><FormulaBox inline>{"M_0 = \\frac{2680.19}{1.3400956} \\approx 1999.999..."}</FormulaBox></p>
          <p>תשובה: הסכום ההתחלתי היה 2000.00 ש"ח.</p>
        </div>
      )
    },
    {
      id: 'ex2',
      question: 'מספר התושבים בעיר מסוימת היה 50,000 בתחילת שנת 2010. בכל שנה גדלה האוכלוסייה בעיר ב-2.5%. מה יהיה מספר התושבים בעיר בתחילת שנת 2015? (עגל למספר שלם קרוב)',
      correctAnswer: '56570',
      tolerance: 1,
      solution: (
        <div>
          <p><strong>פתרון מלא:</strong></p>
          <p>נתונים: <FormulaBox inline>M_0 = 50,000</FormulaBox>, <FormulaBox inline>p = 2.5\\%</FormulaBox>.</p>
          <p>מספר השנים: מתחילת 2010 עד תחילת 2015 עברו 5 שנים. לכן, <FormulaBox inline>t = 5</FormulaBox>.</p>
          <p>גורם הגדילה: <FormulaBox inline>{"q = 1 + \\frac{2.5}{100} = 1.025"}</FormulaBox>.</p>
          <p>נציב בנוסחה <FormulaBox inline>M_t = M_0 \\cdot q^t</FormulaBox>:</p>
          <p><FormulaBox inline>M_5 = 50,000 \\cdot (1.025)^5</FormulaBox></p>
          <p><FormulaBox inline>(1.025)^5 \\approx 1.131408</FormulaBox></p>
          <p><FormulaBox inline>M_5 = 50,000 \\cdot 1.131408 \\approx 56570.4</FormulaBox></p>
          <p>תשובה: מספר התושבים יהיה כ-56,570.</p>
        </div>
      )
    }
  ];
  const quizQuestions = [
    {
      id: 'q1',
      question: 'מחיר מוצר יורד בכל חודש ב-3%. מחירו ההתחלתי 500 ש"ח. מה יהיה מחירו לאחר חצי שנה (6 חודשים)? (עגל לשתי ספרות אחרי הנקודה)',
      options: [
        { value: 'a', label: '416.49 ש"ח' },
        { value: 'b', label: '410.00 ש"ח' },
        { value: 'c', label: '425.72 ש"ח' }
      ],
      correctAnswer: 'a'
    },
    {
      id: 'q2',
      question: 'חומר רדיואקטיבי מאבד 15% ממשקלו בכל יום. אם כיום יש 200 גרם מהחומר, כמה גרם היו ממנו לפני יומיים? (עגל לשתי ספרות אחרי הנקודה)',
      options: [
        { value: 'a', label: '262.83 גרם' },
        { value: 'b', label: '276.82 גרם' },
        { value: 'c', label: '230.00 גרם' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q3',
      question: 'השקעה של 1000 ש"ח מניבה ריבית דריבית של 8% לשנה. כמה כסף יהיה בחשבון לאחר 3 שנים?',
      options: [
        { value: 'a', label: '1240 ש"ח' },
        { value: 'b', label: '1259.71 ש"ח' },
        { value: 'c', label: '1300 ש"ח' }
      ],
      correctAnswer: 'b',
      explanation: 'השקעה = 1000 × (1.08)³ = 1000 × 1.259712 = 1259.71 ש"ח'
    },
    {
      id: 'q4',
      question: 'אוכלוסיית עיר גדלה ב-2% מדי שנה. אם כיום יש 50,000 תושבים, כמה תושבים יהיו בעוד 5 שנים? (עגל למספר שלם)',
      options: [
        { value: 'a', label: '55,000' },
        { value: 'b', label: '55,204' },
        { value: 'c', label: '60,000' }
      ],
      correctAnswer: 'b',
      explanation: 'אוכלוסיה = 50,000 × (1.02)⁵ = 50,000 × 1.10408 = 55,204 תושבים'
    }
  ];

  return (
    <LessonLayout title={title} lessonId={lessonId} nextLessonPath={nextLessonPath}>
      {/* Learn Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">לומדים 📚</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>תהליכי גדילה ודעיכה מתארים מצבים שבהם כמות מסוימת משתנה באחוז קבוע בכל תקופת זמן (למשל, כל שנה, כל שעה וכו'). דוגמאות נפוצות כוללות גידול אוכלוסייה, עליית ערך של השקעה (ריבית דריבית), ירידת ערך של מוצר (פחת), או דעיכה של חומר רדיואקטיבי.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">הנוסחה המרכזית לגדילה ודעיכה</h3>
          <p>הנוסחה לחישוב הכמות לאחר מספר תקופות זמן היא:</p>
          <div className="my-3 text-center">
            <FormulaBox>M_t = M_0 \cdot q^t</FormulaBox>
          </div>
          <p>כאשר:</p>
          <ul className="list-disc pr-6 space-y-2 my-2">
            <li><FormulaBox inline>M_t</FormulaBox> היא הכמות הסופית, לאחר <FormulaBox inline>t</FormulaBox> תקופות זמן.</li>
            <li><FormulaBox inline>M_0</FormulaBox> היא הכמות ההתחלתית (בזמן <FormulaBox inline>t=0</FormulaBox>).</li>
            <li><FormulaBox inline>q</FormulaBox> הוא גורם השינוי (גורם הגדילה או הדעיכה) בכל תקופת זמן.</li>
            <li><FormulaBox inline>t</FormulaBox> הוא מספר תקופות הזמן שעברו.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-1 text-gray-800">כיצד מחשבים את <FormulaBox inline>q</FormulaBox>?</h4>          <p>אם הכמות גדלה ב-<FormulaBox inline>{"p\\%"}</FormulaBox> בכל תקופת זמן, אז גורם הגדילה הוא: <FormulaBox inline>{"q = 1 + \\frac{p}{100}"}</FormulaBox>.</p>
          <p>לדוגמה, אם המחיר עולה ב-10% כל שנה, אז <FormulaBox inline>{"p=10"}</FormulaBox>, ו-<FormulaBox inline>{"q = 1 + \\frac{10}{100} = 1 + 0.1 = 1.1"}</FormulaBox>.</p>
          <p>אם הכמות קטנה (דועכת) ב-<FormulaBox inline>{"p\\%"}</FormulaBox> בכל תקופת זמן, אז גורם הדעיכה הוא: <FormulaBox inline>{"q = 1 - \\frac{p}{100}"}</FormulaBox>.</p>
          <p>לדוגמה, אם ערך מכונית יורד ב-15% כל שנה, אז <FormulaBox inline>{"p=15"}</FormulaBox>, ו-<FormulaBox inline>{"q = 1 - \\frac{15}{100} = 1 - 0.15 = 0.85"}</FormulaBox>.</p>
          <p>שימו לב: אם <FormulaBox inline>q &gt; 1</FormulaBox> מדובר בתהליך גדילה, ואם <FormulaBox inline>0 &lt; q &lt; 1</FormulaBox> מדובר בתהליך דעיכה.</p>

          <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמאות פתורות</h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 mb-6">
            <p className="font-medium"><strong>דוגמה 1: גידול אוכלוסייה</strong></p>
            <p>אוכלוסיית חיידקים גדלה ב-20% בכל שעה. בתחילת הניסוי היו 1000 חיידקים. כמה חיידקים יהיו כעבור 3 שעות?</p>
            <p><strong>פתרון:</strong></p>
            <ul className="list-disc pr-5 space-y-1">
              <li>הכמות ההתחלתית: <FormulaBox inline>M_0 = 1000</FormulaBox>.</li>
              <li>אחוז הגדילה לשעה: <FormulaBox inline>p = 20\\%</FormulaBox>.</li>
              <li>גורם הגדילה: <FormulaBox inline>{"q = 1 + \\frac{20}{100} = 1 + 0.2 = 1.2"}</FormulaBox>.</li>
              <li>מספר תקופות הזמן (שעות): <FormulaBox inline>t = 3</FormulaBox>.</li>
            </ul>
            <p>נציב בנוסחה <FormulaBox inline>M_t = M_0 \\cdot q^t</FormulaBox>:</p>
            <div className="my-2 text-center">              <FormulaBox>M_3 = 1000 \cdot (1.2)^3</FormulaBox>
            </div>
            <div className="my-2 text-center">
              <FormulaBox>M_3 = 1000 \cdot 1.728 = 1728</FormulaBox>
            </div>
            <p>תשובה: כעבור 3 שעות יהיו 1728 חיידקים.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 mb-6">
            <p className="font-medium"><strong>דוגמה 2: ירידת ערך (פחת)</strong></p>
            <p>מחיר מכונית חדשה הוא 120,000 ש"ח. ערך המכונית יורד ב-10% בכל שנה. מה יהיה ערך המכונית כעבור 4 שנים?</p>
            <p><strong>פתרון:</strong></p>
            <ul className="list-disc pr-5 space-y-1">
              <li>הכמות ההתחלתית (מחיר התחלתי): <FormulaBox inline>M_0 = 120,000</FormulaBox>.</li>
              <li>אחוז הדעיכה לשנה: <FormulaBox inline>p = 10\\%</FormulaBox>.</li>
              <li>גורם הדעיכה: <FormulaBox inline>{"q = 1 - \\frac{10}{100} = 1 - 0.1 = 0.9"}</FormulaBox>.</li>
              <li>מספר תקופות הזמן (שנים): <FormulaBox inline>t = 4</FormulaBox>.</li>
            </ul>
            <p>נציב בנוסחה <FormulaBox inline>M_t = M_0 \\cdot q^t</FormulaBox>:</p>
            <div className="my-2 text-center">              <FormulaBox>M_4 = 120,000 \cdot (0.9)^4</FormulaBox>
            </div>
            <div className="my-2 text-center">
              <FormulaBox>M_4 = 120,000 \cdot 0.6561 = 78,732</FormulaBox>
            </div>
            <p>תשובה: כעבור 4 שנים, ערך המכונית יהיה 78,732 ש"ח.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3">
            <p className="font-medium"><strong>דוגמה 3: מציאת הכמות ההתחלתית</strong></p>
            <p>לאחר 5 שנים, ערכו של פריט מסוים הוא 1500 ש"ח. ידוע כי ערך הפריט יורד ב-8% כל שנה. מה היה מחירו ההתחלתי של הפריט?</p>
            <p><strong>פתרון:</strong></p>
            <ul className="list-disc pr-5 space-y-1">
              <li>הכמות הסופית: <FormulaBox inline>M_t = 1500</FormulaBox> (כאשר <FormulaBox inline>t=5</FormulaBox>).</li>
              <li>אחוז הדעיכה לשנה: <FormulaBox inline>p = 8\\%</FormulaBox>.</li>
              <li>גורם הדעיכה: <FormulaBox inline>{"q = 1 - \\frac{8}{100} = 1 - 0.08 = 0.92"}</FormulaBox>.</li>
              <li>מספר תקופות הזמן (שנים): <FormulaBox inline>t = 5</FormulaBox>.</li>
              <li>אנחנו מחפשים את <FormulaBox inline>M_0</FormulaBox>.</li>
            </ul>
            <p>נציב בנוסחה <FormulaBox inline>M_t = M_0 \\cdot q^t</FormulaBox>:</p>
            <div className="my-2 text-center">              <FormulaBox>1500 = M_0 \cdot (0.92)^5</FormulaBox>
            </div>
            <p>נחשב את <FormulaBox inline>(0.92)^5 \approx 0.65908</FormulaBox> (מומלץ להשתמש במחשבון).</p>
            <div className="my-2 text-center">
              <FormulaBox>1500 = M_0 \cdot 0.65908</FormulaBox>
            </div>
            <div className="my-2 text-center">
              <FormulaBox>{"M_0 = \\frac{1500}{0.65908} \\approx 2275.94"}</FormulaBox>
            </div>
            <p>תשובה: מחירו ההתחלתי של הפריט היה כ-2275.94 ש"ח.</p>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">מתרגלים ✍️</h2>
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <Exercise
              key={exercise.id}
              id={exercise.id}
              question={`תרגיל ${index + 1}: ${exercise.question}`}
              correctAnswer={exercise.correctAnswer}
              tolerance={exercise.tolerance}
              solution={exercise.solution}
            />
          ))}
        </div>
      </section>

      {/* Quiz Section */}      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">בחן את עצמך 🧐</h2>
        <Quiz questions={quizQuestions} />
      </section>
    </LessonLayout>
  );
};

export default GrowthDecayLesson;
