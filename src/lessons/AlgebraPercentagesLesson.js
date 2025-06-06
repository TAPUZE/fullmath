import React from 'react';
import LessonLayout from '../components/LessonLayout';
import FormulaBox from '../components/FormulaBox';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const P = 15; // Example value, replace with the correct one if needed

const AlgebraPercentagesLesson = () => {
  const DataTable = ({ children, className = "" }) => (
    <table className={`w-full border-collapse mt-4 mb-4 ${className}`}>
      {children}
    </table>
  );

  const TableHeader = ({ children }) => (
    <thead>
      <tr className="bg-gray-100">
        {children}
      </tr>
    </thead>
  );

  const TableCell = ({ children, isHeader = false, className = "" }) => (
    <td className={`border border-gray-300 p-3 text-right ${isHeader ? 'bg-gray-100 font-semibold' : ''} ${className}`}>
      {children}
    </td>
  );

  return (
    <LessonLayout 
      title="אחוזים" 
      lessonId="35182-algebra-percentages"
      nextLessonPath="/lessons/algebra-inequalities"
    >
      {/* Learning Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          לומדים 📚
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            אחוז הוא דרך לבטא חלק מתוך שלם, כאשר השלם מחולק ל-100 חלקים שווים. 
            המילה "אחוז" משמעותה "מתוך מאה". הסמל של אחוז הוא %.
          </p>
          
          <p>
            לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>\frac{25}{100}</FormulaBox>, 
            ששווה ל-<FormulaBox inline>\frac{1}{4}</FormulaBox> או 0.25.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">חישוב ערך האחוז מגודל נתון</h3>
          <p>
            כדי לחשב <FormulaBox inline>P\%</FormulaBox> מגודל <FormulaBox inline>N</FormulaBox>, 
            משתמשים בנוסחה:
          </p>
          
          <div className="my-4 text-center">
            <FormulaBox>{`\\text{Value} = \\\\frac{P}{100} \\\\cdot N`}</FormulaBox>
          </div>
          
          <p>או בצורה עשרונית: <FormulaBox inline>{`\\text{Value} = (\\text{Decimal}) \\\\cdot N`}</FormulaBox>.</p>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה:</h4>
            <p className="font-medium">שאלה: חשב כמה הם 20% מתוך 150.</p>
            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>כאן <FormulaBox inline>{`P=20`}</FormulaBox> ו-<FormulaBox inline>{`N=150`}</FormulaBox>.</p>
            <FormulaBox>{`\\text{Value} = \\\\frac{20}{100} \\\\cdot 150 = 0.20 \\\\cdot 150 = 30`}</FormulaBox>
            <p className="mt-2">לכן, 20% מתוך 150 הם 30.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">מציאת הגודל השלם (100%)</h3>
          <p>
            כאשר נתון חלק מהגודל (ערך האחוז) והאחוז שהוא מהווה, ניתן למצוא את הגודל השלם (<FormulaBox inline>N</FormulaBox>).
          </p>
          <p>
            אם <FormulaBox inline>V</FormulaBox> הוא ערך האחוז המהווה <FormulaBox inline>P\%</FormulaBox> מהשלם <FormulaBox inline>N</FormulaBox>, אז:
          </p>
          
          <div className="my-4 text-center">
            <FormulaBox>{`V = \\frac{P}{100} \\cdot N \\Rightarrow N = \\frac{V \\cdot 100}{P}`}</FormulaBox>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה:</h4>
            <p className="font-medium">שאלה: 40 ש"ח הם 10% ממחיר מסוים. מהו המחיר המלא?</p>
            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>כאן <FormulaBox inline>V=40</FormulaBox> ו-<FormulaBox inline>P=10</FormulaBox>.</p>
            <FormulaBox>{`N = \\frac{40 \\cdot 100}{10} = \\frac{4000}{10} = 400`}</FormulaBox>
            <p className="mt-2">המחיר המלא הוא 400 ש"ח.</p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-2">בעיות התייקרות והוזלה</h3>
          <p>אחוזים משמשים לעיתים קרובות לתיאור שינויים במחירים או בכמויות.</p>
          
          <h4 className="text-lg font-semibold mt-4 mb-1">שימוש בטבלה לארגון נתונים בבעיות אחוזים</h4>
          <p>
            כאשר פותרים בעיות מילוליות עם אחוזים, במיוחד כאלה הכוללות התייקרות או הוזלה, 
            טבלה יכולה לעזור מאוד לארגן את הנתונים ולהבין את הקשרים ביניהם לפני בניית המשוואה. 
            הטבלה בדרך כלל תכלול עמודות עבור:
          </p>
          
          <ul className="list-disc list-inside space-y-1 pr-5">
            <li><strong>תיאור / פריט</strong></li>
            <li><strong>ערך התחלתי / מקורי (100%)</strong></li>
            <li><strong>אחוז השינוי (+% להתייקרות, -% להוזלה)</strong></li>
            <li><strong>סכום השינוי (הערך של האחוז)</strong></li>
            <li><strong>ערך סופי / חדש</strong></li>
          </ul>
          <p>לא תמיד צריך למלא את כל העמודות, אך הן עוזרות לחשוב על כל המרכיבים.</p>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-2">דוגמה פתורה עם שימוש בטבלה:</h4>
            <p className="font-medium">שאלה: מחיר מוצר הוא 200 ש"ח. המוצר התייקר ב-15%. מהו מחירו החדש?</p>
            <p className="mt-2"><strong>ארגון הנתונים בטבלה:</strong></p>
            
            <DataTable>
              <TableHeader>
                <TableCell isHeader>תיאור</TableCell>
                <TableCell isHeader>מחיר מקורי (ש"ח)</TableCell>
                <TableCell isHeader>אחוז השינוי</TableCell>
                <TableCell isHeader>סכום השינוי (ש"ח)</TableCell>
                <TableCell isHeader>מחיר חדש (ש"ח)</TableCell>
              </TableHeader>
              <tbody>
                <tr>
                  <TableCell>מחיר המוצר</TableCell>
                  <TableCell>200 (זה ה-100%)</TableCell>
                  <TableCell>+15% (התייקרות)</TableCell>
                  <TableCell>?</TableCell>
                  <TableCell>?</TableCell>
                </tr>
              </tbody>
            </DataTable>

            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>אנו יודעים שהמחיר המקורי הוא 200 ש"ח.</p>
            <p>1. <strong>חישוב סכום השינוי:</strong> ההתייקרות היא 15% מהמחיר המקורי.</p>
            <FormulaBox>{`\\text{Change} = \\frac{15}{100} \\cdot 200 = 0.15 \\cdot 200 = 30 \\text{ ש״ח}`}</FormulaBox>
            
            <p>נמלא בטבלה:</p>
            <DataTable>
              <tbody>
                <tr>
                  <TableCell>מחיר המוצר</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell>+15%</TableCell>
                  <TableCell className="font-bold">30</TableCell>
                  <TableCell>?</TableCell>
                </tr>
              </tbody>
            </DataTable>

            <p className="mt-2">2. <strong>חישוב המחיר החדש:</strong></p>
            <p>המחיר החדש = מחיר מקורי + סכום השינוי (ההתייקרות).</p>
            <FormulaBox>{`\\text{New Price} = 200 + 30 = 230 \\text{ ש״ח}`}</FormulaBox>

            <p>נשלים את הטבלה:</p>
            <DataTable>
              <tbody>
                <tr>
                  <TableCell>מחיר המוצר</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell>+15%</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell className="font-bold">230</TableCell>
                </tr>
              </tbody>
            </DataTable>

            <p className="mt-2">מחירו החדש של המוצר הוא 230 ש"ח.</p>
            
            <p className="mt-4"><strong>דרך נוספת (ישירה למחיר החדש):</strong></p>
            <p>
              אם המחיר התייקר ב-15%, אז המחיר החדש מהווה <FormulaBox inline>100\% + 15\% = 115\%</FormulaBox> מהמחיר המקורי.
            </p>
            <p>המחיר החדש <FormulaBox inline>M_1</FormulaBox> הוא:</p>
            <FormulaBox>{`M_1 = \\frac{115}{100} \\cdot 200 = 1.15 \\cdot 200 = 230 \\text{ ש״ח}`}</FormulaBox>
            <p>או באמצעות הנוסחה הכללית להתייקרות: <FormulaBox inline>M_1 = M_0 \left(1 + \frac{P}{100}\right)</FormulaBox></p>
            <FormulaBox>{`M_1 = 200 \\left(1 + \\frac{15}{100}\\right) = 200 \\cdot (1 + 0.15) = 200 \\cdot 1.15 = 230 \\text{ ש״ח}`}</FormulaBox>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 mt-4">
            <h4 className="text-lg font-semibold mb-2">דוגמה נוספת עם הוזלה:</h4>
            <p className="font-medium">שאלה: מחיר מכנסיים היה 300 ש"ח. הם הוזלו ב-20%. מה מחירם החדש?</p>
            <p className="mt-2"><strong>ארגון בטבלה:</strong></p>
            
            <DataTable>
              <TableHeader>
                <TableCell isHeader>תיאור</TableCell>
                <TableCell isHeader>מחיר מקורי (ש"ח)</TableCell>
                <TableCell isHeader>אחוז השינוי</TableCell>
                <TableCell isHeader>סכום השינוי (ש"ח)</TableCell>
                <TableCell isHeader>מחיר חדש (ש"ח)</TableCell>
              </TableHeader>
              <tbody>
                <tr>
                  <TableCell>מחיר מכנסיים</TableCell>
                  <TableCell>300</TableCell>
                  <TableCell>-20% (הוזלה)</TableCell>
                  <TableCell>?</TableCell>
                  <TableCell>?</TableCell>
                </tr>
              </tbody>
            </DataTable>

            <p className="mt-2"><strong>פתרון:</strong></p>
            <p>1. <strong>סכום השינוי (ההוזלה):</strong> <FormulaBox inline>\frac{20}{100} \cdot 300 = 0.20 \cdot 300 = 60</FormulaBox> ש"ח.</p>
            <p>2. <strong>המחיר החדש:</strong> <FormulaBox inline>300 - 60 = 240</FormulaBox> ש"ח.</p>
            <p className="mt-2">המחיר החדש הוא 240 ש"ח.</p>
            <p className="mt-2">
              <strong>דרך ישירה:</strong> אם הוזל ב-20%, המחיר החדש הוא <FormulaBox inline>100\% - 20\% = 80\%</FormulaBox> מהמקורי.
            </p>
            <FormulaBox>{`M_1 = \\frac{80}{100} \\cdot 300 = 0.80 \\cdot 300 = 240 \\text{ ש״ח}`}</FormulaBox>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
          מתרגלים ✍️
        </h2>
        
        <div className="space-y-8">
          <Exercise
            question="תרגיל 1: כמה הם 30% מתוך 250?"
            answer="75"
            type="number"
            solution={
              <div>
                <p><strong>פתרון מלא:</strong></p>
                <FormulaBox>{`\\frac{30}{100} \\cdot 250 = 0.30 \\cdot 250 = 75`}</FormulaBox>
                <p>התשובה היא 75.</p>
              </div>
            }
          />

          <Exercise
            question="תרגיל 2: מחיר חולצה היה 120 ש״ח. החולצה הוזלה ב-25%. מה מחירה החדש?"
            answer="90"
            type="number"
            hint="נסה להשתמש בטבלה לארגון הנתונים לפני החישוב."
            solution={
              <div>
                <p><strong>פתרון מלא:</strong></p>
                <p>טבלת עזר:</p>
                <DataTable className="text-sm">
                  <TableHeader>
                    <TableCell isHeader>תיאור</TableCell>
                    <TableCell isHeader>מחיר מקורי</TableCell>
                    <TableCell isHeader>אחוז שינוי</TableCell>
                    <TableCell isHeader>סכום שינוי</TableCell>
                    <TableCell isHeader>מחיר חדש</TableCell>
                  </TableHeader>
                  <tbody>
                    <tr>
                      <TableCell>חולצה</TableCell>
                      <TableCell>120</TableCell>
                      <TableCell>-25%</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell>90</TableCell>
                    </tr>
                  </tbody>
                </DataTable>
                <p>גודל ההוזלה: <FormulaBox inline>\frac{25}{100} \cdot 120 = 0.25 \cdot 120 = 30</FormulaBox> ש"ח.</p>
                <p>המחיר החדש: <FormulaBox inline>120 - 30 = 90</FormulaBox> ש"ח.</p>
                <p>לחלופין: <FormulaBox inline>120 \left(1 - \frac{25}{100}\right) = 120 \cdot 0.75 = 90</FormulaBox> ש"ח.</p>
                <p>המחיר החדש הוא 90 ש"ח.</p>
              </div>
            }
          />
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz
        title="בחן את עצמך 🧐"
        questions={[
          {
            id: 1,
            question: "בכיתה 30 תלמידים. 60% מהם בנות. כמה בנים בכיתה?",
            options: [
              { value: "a", label: "12" },
              { value: "b", label: "18" },
              { value: "c", label: "10" },
              { value: "d", label: "15" }
            ],
            correctAnswer: "a",
            explanation: "60% בנות = 18 בנות. מספר הבנים = 30 - 18 = 12 בנים."
          },
          {
            id: 2,
            question: "מחיר ספר התייקר מ-80 ש״ח ל-100 ש״ח. בכמה אחוזים התייקר הספר?",
            options: [
              { value: "a", label: "20%" },
              { value: "b", label: "25%" },
              { value: "c", label: "15%" },
              { value: "d", label: "30%" }
            ],
            correctAnswer: "b",
            explanation: "העלייה היא 100 - 80 = 20 ש״ח. אחוז העלייה = (20/80) × 100% = 25%."
          }        ]}
      />
    </LessonLayout>
  );
};

export default AlgebraPercentagesLesson;
