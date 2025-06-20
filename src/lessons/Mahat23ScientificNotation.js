import React from 'react';
import LessonLayout from '../components/LessonLayout';

const Mahat23ScientificNotation = () => {
  const lessonId = 'mahat-2-3-scientific-notation';
  const nextLessonPath = '/lessons/mahat-3-1-graph-reading';

  return (
    <LessonLayout
      lessonId={lessonId}
      title="כתיבה מדעית והמרת מידות"
      description="הצגה מדעית של מספרים, פעולות חשבון והמרת מידות"
      nextLessonPath={nextLessonPath}
    >      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>הבנה מלאה של כתיבה מדעית: הצגת מספרים גדולים וקטנים באמצעות חזקות של 10</li>
          <li>ביצוע פעולות חשבון בהצגה מדעית: כפל, חילוק, חיבור וחיסור</li>
          <li>המרת יחידות מידה: אורך, משקל, נפח וזמן</li>
          <li>יישום בבעיות מעשיות: פתרון בעיות מדעיות והנדסיות</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">חלק 1: כתיבה מדעית - הגדרה ועקרונות</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4 text-blue-700">מהי כתיבה מדעית?</h3>
          <p className="text-lg mb-4">
            כתיבה מדעית היא דרך לכתוב מספרים גדולים מאוד או קטנים מאוד בצורה קומפקטית ונוחה.
            כל מספר ניתן לכתוב בצורה:
          </p>
          <div className="bg-white p-4 rounded border-l-4 border-blue-500 mb-4">
            <p className="text-center text-xl font-bold">a × 10<sup>n</sup></p>
            <p className="text-center text-sm mt-2">כאשר: 1 ≤ a &lt; 10, ו- n הוא מספר שלם</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-600 mb-2">למספרים גדולים:</h4>
              <ul className="space-y-2">
                <li>• 345,000 = 3.45 × 10<sup>5</sup></li>
                <li>• 12,000,000 = 1.2 × 10<sup>7</sup></li>
                <li>• מרחק לירח: 384,400 ק"מ = 3.844 × 10<sup>5</sup> ק"מ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 mb-2">למספרים קטנים:</h4>
              <ul className="space-y-2">
                <li>• 0.00034 = 3.4 × 10<sup>-4</sup></li>
                <li>• 0.000000056 = 5.6 × 10<sup>-8</sup></li>
                <li>• גודל אטום: 0.0000000001 מ' = 1 × 10<sup>-10</sup> מ'</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4 text-yellow-800">איך להמיר לכתיבה מדעית?</h3>
          
          <div className="mb-4">
            <h4 className="font-bold text-yellow-700 mb-2">עבור מספרים גדולים:</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>העבר את הנקודה העשרונית שמאלה עד שנותר מספר בין 1-10</li>
              <li>ספור כמה מקומות הזזת את הנקודה - זה יהיה המעריך החיובי</li>
            </ol>
            <div className="mt-3 p-3 bg-white rounded border">
              <strong>דוגמה:</strong> 56,700 → 5.67 × 10<sup>4</sup> (הזזנו 4 מקומות שמאלה)
            </div>
          </div>

          <div>
            <h4 className="font-bold text-yellow-700 mb-2">עבור מספרים קטנים:</h4>
            <ol className="list-decimal list-inside space-y-2">
              <li>העבר את הנקודה העשרונית ימינה עד שנותר מספר בין 1-10</li>
              <li>ספור כמה מקומות הזזת את הנקודה - זה יהיה המעריך השלילי</li>
            </ol>
            <div className="mt-3 p-3 bg-white rounded border">
              <strong>דוגמה:</strong> 0.00789 → 7.89 × 10<sup>-3</sup> (הזזנו 3 מקומות ימינה)
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">חלק 2: פעולות חשבון בכתיבה מדעית</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">כפל</h3>
            <p className="mb-3">כופלים את המקדמים ומחברים את המעריכים:</p>
            <div className="bg-white p-3 rounded border mb-3">
              <p>(a × 10<sup>m</sup>) × (b × 10<sup>n</sup>) = (a × b) × 10<sup>m+n</sup></p>
            </div>
            <div className="text-sm">
              <strong>דוגמה:</strong><br/>
              (3 × 10<sup>4</sup>) × (2 × 10<sup>6</sup>) = 6 × 10<sup>10</sup>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-800">חילוק</h3>
            <p className="mb-3">מחלקים את המקדמים ומחסרים את המעריכים:</p>
            <div className="bg-white p-3 rounded border mb-3">
              <p>(a × 10<sup>m</sup>) ÷ (b × 10<sup>n</sup>) = (a ÷ b) × 10<sup>m-n</sup></p>
            </div>
            <div className="text-sm">
              <strong>דוגמה:</strong><br/>
              (8 × 10<sup>7</sup>) ÷ (4 × 10<sup>3</sup>) = 2 × 10<sup>4</sup>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-4 text-purple-800">חיבור וחיסור</h3>
          <p className="mb-3">צריך להביא למעריך משותף לפני החיבור/חיסור:</p>
          <div className="bg-white p-4 rounded border">
            <strong>דוגמה:</strong> 3.2 × 10<sup>5</sup> + 4.5 × 10<sup>4</sup><br/>
            <span className="text-sm">= 3.2 × 10<sup>5</sup> + 0.45 × 10<sup>5</sup> = 3.65 × 10<sup>5</sup></span>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">חלק 3: המרת יחידות מידה</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-700">יחידות אורך</h3>
            <ul className="space-y-2 text-sm">
              <li>• 1 ק"מ = 1,000 מ'</li>
              <li>• 1 מ' = 100 ס"מ</li>
              <li>• 1 ס"מ = 10 מ"מ</li>
              <li>• 1 מ' = 1,000 מ"מ</li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded border">
              <strong>דוגמה:</strong><br/>
              2.5 ק"מ = 2.5 × 10<sup>3</sup> מ' = 2,500 מ'
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-700">יחידות משקל</h3>
            <ul className="space-y-2 text-sm">
              <li>• 1 טון = 1,000 ק"ג</li>
              <li>• 1 ק"ג = 1,000 גרם</li>
              <li>• 1 גרם = 1,000 מ"ג</li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded border">
              <strong>דוגמה:</strong><br/>
              3.4 ק"ג = 3.4 × 10<sup>3</sup> גרם = 3,400 גרם
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-700">יחידות נפח</h3>
            <ul className="space-y-2 text-sm">
              <li>• 1 מ"ק = 1,000 ליטר</li>
              <li>• 1 ליטר = 1,000 מ"ל</li>
              <li>• 1 ס"מ³ = 1 מ"ל</li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded border">
              <strong>דוגמה:</strong><br/>
              0.5 מ"ק = 5 × 10<sup>2</sup> ליטר = 500 ליטר
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">אסטרטגיית המרה</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-gray-700 mb-2">מיחידה גדולה לקטנה:</h4>
              <p className="text-sm mb-2">כפל במקדם ההמרה</p>
              <div className="bg-white p-2 rounded text-xs">
                5 מ' → ס"מ: 5 × 100 = 500 ס"מ
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-2">מיחידה קטנה לגדולה:</h4>
              <p className="text-sm mb-2">חלק במקדם ההמרה</p>
              <div className="bg-white p-2 rounded text-xs">
                2000 גרם → ק"ג: 2000 ÷ 1000 = 2 ק"ג
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תרגילים מעשיים</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-lg font-bold mb-3 text-blue-700">תרגיל 1: כתיבה מדעית</h3>
            <p className="mb-2"><strong>שאלה:</strong> כתב בכתיבה מדעית את המספר 0.00000567</p>
            <div className="bg-blue-50 p-3 rounded mt-3">
              <p><strong>פתרון:</strong></p>
              <p>נזיז את הנקודה 6 מקומות ימינה: 5.67</p>
              <p><strong>תשובה:</strong> 5.67 × 10<sup>-6</sup></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-lg font-bold mb-3 text-green-700">תרגיל 2: פעולות בכתיבה מדעית</h3>
            <p className="mb-2"><strong>שאלה:</strong> חשב: (4 × 10<sup>5</sup>) × (3 × 10<sup>-2</sup>)</p>
            <div className="bg-green-50 p-3 rounded mt-3">
              <p><strong>פתרון:</strong></p>
              <p>כופלים מקדמים: 4 × 3 = 12</p>
              <p>מחברים מעריכים: 5 + (-2) = 3</p>
              <p>12 × 10<sup>3</sup> = 1.2 × 10<sup>4</sup></p>
              <p><strong>תשובה:</strong> 1.2 × 10<sup>4</sup></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-yellow-200">
            <h3 className="text-lg font-bold mb-3 text-yellow-700">תרגיל 3: המרת יחידות</h3>
            <p className="mb-2"><strong>שאלה:</strong> המר 2.5 ק"מ למילימטרים</p>
            <div className="bg-yellow-50 p-3 rounded mt-3">
              <p><strong>פתרון:</strong></p>
              <p>2.5 ק"מ = 2.5 × 1,000 מ' = 2,500 מ'</p>
              <p>2,500 מ' = 2,500 × 1,000 מ"מ = 2,500,000 מ"מ</p>
              <p><strong>תשובה:</strong> 2.5 × 10<sup>6</sup> מ"מ</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
            <h3 className="text-lg font-bold mb-3 text-purple-700">תרגיל 4: בעיה מעשית</h3>
            <p className="mb-2"><strong>שאלה:</strong> מהירות האור היא 3 × 10<sup>8</sup> מ'/שנייה. כמה זמן לוקח לאור להגיע מהשמש לארץ אם המרחק הוא 1.5 × 10<sup>11</sup> מטר?</p>
            <div className="bg-purple-50 p-3 rounded mt-3">
              <p><strong>פתרון:</strong></p>
              <p>זמן = מרחק ÷ מהירות</p>
              <p>זמן = (1.5 × 10<sup>11</sup>) ÷ (3 × 10<sup>8</sup>)</p>
              <p>זמן = (1.5 ÷ 3) × 10<sup>11-8</sup> = 0.5 × 10<sup>3</sup> = 500 שניות</p>
              <p><strong>תשובה:</strong> 500 שניות = 8.33 דקות</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">בחן את עצמך</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-bold mb-3">שאלה 1</h3>
            <p className="mb-4"><strong>המספר 0.000789 בכתיבה מדעית הוא:</strong></p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q1" className="mr-2" />
                  7.89 × 10<sup>4</sup>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" className="mr-2" />
                  7.89 × 10<sup>-4</sup>
                </label>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q1" className="mr-2" />
                  78.9 × 10<sup>-5</sup>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" className="mr-2" />
                  0.789 × 10<sup>-3</sup>
                </label>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded">
              <p><strong>תשובה נכונה:</strong> 7.89 × 10<sup>-4</sup></p>
              <p><strong>הסבר:</strong> הזזנו את הנקודה 4 מקומות ימינה, לכן המעריך הוא -4</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-bold mb-3">שאלה 2</h3>
            <p className="mb-4"><strong>תוצאת הכפל (2 × 10<sup>3</sup>) × (4 × 10<sup>5</sup>) היא:</strong></p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q2" className="mr-2" />
                  6 × 10<sup>8</sup>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q2" className="mr-2" />
                  8 × 10<sup>8</sup>
                </label>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q2" className="mr-2" />
                  8 × 10<sup>15</sup>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q2" className="mr-2" />
                  2 × 10<sup>15</sup>
                </label>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded">
              <p><strong>תשובה נכונה:</strong> 8 × 10<sup>8</sup></p>
              <p><strong>הסבר:</strong> 2 × 4 = 8, ו- 10<sup>3</sup> × 10<sup>5</sup> = 10<sup>8</sup></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-bold mb-3">שאלה 3</h3>
            <p className="mb-4"><strong>3.5 ק"ג שווים ל:</strong></p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q3" className="mr-2" />
                  350 גרם
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q3" className="mr-2" />
                  3,500 גרם
                </label>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q3" className="mr-2" />
                  35 גרם
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q3" className="mr-2" />
                  35,000 גרם
                </label>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded">
              <p><strong>תשובה נכונה:</strong> 3,500 גרם</p>
              <p><strong>הסבר:</strong> 1 ק"ג = 1,000 גרם, לכן 3.5 × 1,000 = 3,500 גרם</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">סיכום השיעור</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">נקודות מפתח לזכירה:</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><strong>כתיבה מדעית:</strong> a × 10<sup>n</sup> כאשר 1 ≤ a &lt; 10</li>
            <li><strong>מספרים גדולים:</strong> מעריך חיובי (הזזה שמאלה)</li>
            <li><strong>מספרים קטנים:</strong> מעריך שלילי (הזזה ימינה)</li>
            <li><strong>כפל:</strong> כופלים מקדמים ומחברים מעריכים</li>
            <li><strong>חילוק:</strong> מחלקים מקדמים ומחסרים מעריכים</li>
            <li><strong>המרת יחידות:</strong> מגדול לקטן = כפל, מקטן לגדול = חילוק</li>
            <li><strong>יחידות בסיסיות:</strong> ק"מ↔מ'↔ס"מ↔מ"מ, טון↔ק"ג↔גרם</li>
          </ul>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">למה זה חשוב?</h4>
            <p className="text-blue-700">
              כתיבה מדעית והמרת יחידות הן כלים בסיסיים בהנדסה, מדע וטכנולוgia. הן מאפשרות לעבוד 
              עם מספרים קיצוניים (מגודל אטום ועד מרחקים בחלל) ולהמיר בין מערכות מידה שונות.
            </p>
          </div>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat23ScientificNotation;
