import React from 'react';
import LessonLayout from '../components/LessonLayout';

const Mahat75ComplexGeometry = () => {
  const lessonId = 'm-a-h-a-t75-c-o-m-p-l-e-x-g-e-o-m-e-t-r-y';
  const nextLessonPath = '/lessons/next-lesson';

  return (
    <LessonLayout
      lessonId={lessonId}
      title="Title"
      description="Description"
      nextLessonPath={nextLessonPath}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">מטרות השיעור</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>[מטרות השיעור להשלמה]</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">תיאוריה</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p>[תוכן תיאורטי להשלמה]</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">סיכום</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>[נקודות סיכום להשלמה]</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default Mahat75ComplexGeometry;
