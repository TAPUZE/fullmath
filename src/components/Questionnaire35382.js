import React from 'react';
import { Link } from 'react-router-dom';

const Questionnaire35382 = () => {
  const lessons = [
    {
      id: 'problems-work-rate',
      title: 'בעיות קצב עבודה',
      description: 'בעיות מילוליות בנושא קצב עבודה ושיתופי פעולה',
      path: '/lesson/problems-work-rate'
    },
    {
      id: 'problems-motion',
      title: 'בעיות תנועה',
      description: 'בעיות מילוליות בנושא תנועה, מהירות וזמן',
      path: '/lesson/problems-motion'
    },
    {
      id: 'problems-geometric-algebraic',
      title: 'בעיות גיאומטריות אלגבריות',
      description: 'בעיות מילוליות המשלבות גיאומטריה ואלגברה',
      path: '/lesson/problems-geometric-algebraic'
    },
    {
      id: 'problems-buy-sell',
      title: 'בעיות קנייה ומכירה',
      description: 'בעיות מילוליות בנושא רווח, הפסד ועסקאות',
      path: '/lesson/problems-buy-sell'
    },
    {
      id: 'analytic-geometry-circle',
      title: 'גיאומטריה אנליטית - מעגל',
      description: 'משוואת מעגל, רדיוס ומרכז',
      path: '/lesson/analytic-geometry-circle'
    },
    {
      id: 'analytic-geometry-circle-tangent',
      title: 'משיק למעגל',
      description: 'מציאת משיקים למעגל ותכונותיהם',
      path: '/lesson/analytic-geometry-circle-tangent'
    },
    {
      id: 'analytic-geometry-circle-line-intersection',
      title: 'חיתוך ישר ומעגל',
      description: 'נקודות חיתוך בין ישר למעגל',
      path: '/lesson/analytic-geometry-circle-line-intersection'
    },
    {
      id: 'analytic-geometry-line-continued',
      title: 'גיאומטריה אנליטית - ישר מתקדם',
      description: 'נושאים מתקדמים בגיאומטריה אנליטית של ישרים',
      path: '/lesson/analytic-geometry-line-continued'
    },
    {
      id: 'calculus-polynomial',
      title: 'חדו״א - פונקציות פולינום',
      description: 'נגזרות ואינטגרלים של פונקציות פולינום',
      path: '/lesson/calculus-polynomial'
    },
    {
      id: 'calculus-rational',
      title: 'חדו״א - פונקציות רציונליות',
      description: 'נגזרות ואינטגרלים של פונקציות רציונליות',
      path: '/lesson/calculus-rational'
    },
    {
      id: 'calculus-square-root',
      title: 'חדו״א - פונקציות שורש',
      description: 'נגזרות ואינטגרלים של פונקציות שורש',
      path: '/lesson/calculus-square-root'
    },
    {
      id: 'calculus-optimization',
      title: 'בעיות אופטימיזציה',
      description: 'מציאת מקסימום ומינימום בעזרת נגזרות',
      path: '/lesson/calculus-optimization'
    },
    {
      id: 'calculus-integral-polynomial',
      title: 'אינטגרלים פולינומיים',
      description: 'חישוב אינטגרלים של פונקציות פולינום',
      path: '/lesson/calculus-integral-polynomial'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-purple-600">
            לומדים מתמטיקה לבגרות
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="/progress" 
              className="text-gray-700 hover:text-purple-600 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
            >
              ההתקדמות שלי 📊
            </Link>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-purple-600 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
            >
              חזרה לעמוד הראשי
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">שאלון 35382 (803)</h1>
          <p className="text-xl mb-2">משקל: 40% מהציון הסופי</p>
          <p className="text-lg opacity-90">
            בעיות מילוליות מורכבות, גיאומטריה אנליטית (כולל מעגל), חשבון דיפרנציאלי ואינטגרלי (פולינום, רציונלית, שורש)
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-full mr-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {lesson.description}
                </p>
                <Link 
                  to={lesson.path}
                  className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out w-full text-center"
                >
                  התחל שיעור
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg"
          >
            חזרה לעמוד הראשי
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Questionnaire35382;
