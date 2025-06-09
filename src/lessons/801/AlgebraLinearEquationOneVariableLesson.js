import React from 'react';
import LessonLayout from '../../components/lesson/LessonLayout';
import FormulaBox from '../../components/math/FormulaBox';
import InteractiveExercise from '../../components/math/InteractiveExercise';
import Quiz from '../../components/math/Quiz';

// Import the new reusable lesson components
import { 
  LessonSection, 
  ExampleBox, 
  FormulaDefinition,
  StepByStep 
} from '../../components/lesson';

const AlgebraLinearEquationOneVariableLesson = () => {
  const lessonId = 'algebra_linear_equation_one_variable_35182';
  const nextLessonPath = '/algebra-linear-equations-two-variables';
  const exercises = [
    {
      id: 'ex1',
      question: 'פתור את המשוואה 5x - 8 = 2x + 7.',
      correctAnswer: '5',
      placeholder: 'הכנס פתרון',
      solution: (
        <StepByStep 
          title="פתרון מלא:"
          variant="solution"
          steps={[
            { formula: '5x - 8 = 2x + 7' },
            { content: 'העברת אגפים:', formula: '5x - 2x = 7 + 8' },
            { content: 'כינוס איברים:', formula: '3x = 15' },
            { content: 'בידוד הנעלם:', formula: 'x = \\frac{15}{3} = 5' }
          ]}
        />
      )
    },
    {
      id: 'ex2',
      question: 'פתור את המשוואה 4(x+1) - 2(x-3) = 12.',
      correctAnswer: '1',
      placeholder: 'הכנס פתרון',
      solution: (
        <StepByStep 
          title="פתרון מלא:"
          variant="solution"
          steps={[
            { formula: '4(x+1) - 2(x-3) = 12' },
            { content: 'פתיחת סוגריים:', formula: '4x + 4 - 2x + 6 = 12' },
            { content: 'כינוס איברים באגף שמאל:', formula: '2x + 10 = 12' },
            { content: 'העברת אגפים:', formula: '2x = 12 - 10' },
            { formula: '2x = 2' },
            { content: 'בידוד הנעלם:', formula: 'x = \\frac{2}{2} = 1' }
          ]}
        />
      )
    },
    {
      id: 'ex3',
      question: 'פתור את המשוואה עם שברים: x/2 + x/3 = 5.',
      correctAnswer: '6',
      placeholder: 'הכנס פתרון',
      solution: (
        <StepByStep 
          title="פתרון מלא:"
          variant="solution"
          steps={[
            { formula: '\\frac{x}{2} + \\frac{x}{3} = 5' },
            { content: 'המכנה המשותף הקטן ביותר של 2 ו-3 הוא 6.' },
            { content: 'נכפול כל איבר במשוואה ב-6:', formula: '6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 5' },
            { formula: '3x + 2x = 30' },
            { content: 'כינוס איברים:', formula: '5x = 30' },
            { content: 'בידוד הנעלם:', formula: 'x = \\frac{30}{5} = 6' }
          ]}
        />
      )
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'מהו הפתרון של המשוואה 7x - 5 = 3x + 11?',
      options: [
        { value: 'a', label: <FormulaBox inline>x = 2</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>x = 3</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>x = 4</FormulaBox> },
        { value: 'd', label: <FormulaBox inline>x = 1.6</FormulaBox> }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q2',
      question: 'מהו הפתרון של המשוואה x/4 - 1 = 2?',
      options: [
        { value: 'a', label: <FormulaBox inline>x = 4</FormulaBox> },
        { value: 'b', label: <FormulaBox inline>x = 8</FormulaBox> },
        { value: 'c', label: <FormulaBox inline>x = 12</FormulaBox> },
        { value: 'd', label: <FormulaBox inline>x = \\frac{3}{4}</FormulaBox> }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q3',
      question: 'מה השלב הראשון בפתרון המשוואה 2(x + 3) = 8?',
      options: [
        { value: 'a', label: 'חילוק ב-2' },
        { value: 'b', label: 'פתיחת סוגריים' },
        { value: 'c', label: 'העברת 3 לאגף השני' },
        { value: 'd', label: 'כינוס איברים' }
      ],
      correctAnswer: 'b'
    }
  ];

  return (    <LessonLayout 
      title="משוואה ממעלה ראשונה עם נעלם אחד - שאלון 35182"
      lessonId={lessonId}
      nextLessonPath={nextLessonPath}
    >
      {/* Learning Section - Using LessonSection component */}
      <LessonSection 
        title="לומדים: משוואות ממעלה ראשונה" 
        titleColor="purple" 
        icon="📚"
      >
        <p>
          משוואה ממעלה ראשונה עם נעלם אחד היא משוואה שבה הנעלם (בדרך כלל x) מופיע בחזקה ראשונה בלבד, 
          ולא בחזקות גבוהות יותר או במכנה. המטרה היא למצוא את ערכו של הנעלם שמקיים את השוויון.
        </p>
        
        <FormulaDefinition 
          title="הצורה הכללית:"
          formula="ax = b"
          description="כאשר a ו-b הם מספרים ידועים, ו-a ≠ 0"
          variant="highlighted"
        />

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">שלבי פתרון:</h3>
        
        <StepByStep 
          title=""
          steps={[
            {
              title: 'פתיחת סוגריים:',
              content: 'אם יש סוגריים במשוואה, פותחים אותם באמצעות חוק הפילוג.'
            },
            {
              title: 'כינוס איברים דומים:',
              content: 'מחברים או מחסרים איברים המכילים את הנעלם בנפרד, ואיברים חופשיים (מספרים) בנפרד, בכל אגף של המשוואה.'
            },
            {
              title: 'העברת אגפים:',
              content: 'מעבירים את כל האיברים המכילים את הנעלם לאגף אחד ואת כל המספרים החופשיים לאגף השני. זכרו שכאשר מעבירים איבר מאגף לאגף, סימנו משתנה.'
            },
            {
              title: 'בידוד הנעלם:',
              content: 'מחלקים את שני האגפים במקדם של הנעלם כדי למצוא את ערכו.'
            }
          ]}
          variant="highlighted"
        />

        <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">דוגמה פתורה</h3>
        
        <ExampleBox 
          title="שאלה:" 
          type="example"
          variant="highlighted"
        >
          <p className="font-medium">
            פתור את המשוואה <FormulaBox inline>3(x-2) + 5 = 2x - 1</FormulaBox>
          </p>
          
          <StepByStep 
            steps={[
              {
                title: 'שלב 1 - פתיחת סוגריים:',
                formula: '3x - 3 \\cdot 2 + 5 = 2x - 1'
              },
              {
                formula: '3x - 6 + 5 = 2x - 1'
              },
              {
                title: 'שלב 2 - כינוס איברים באגף שמאל:',
                formula: '3x - 1 = 2x - 1'
              },
              {
                title: 'שלב 3 - העברת אגפים:',
                content: 'מעבירים 2x שמאלה ו-1- ימינה:',
                formula: '3x - 2x = -1 + 1'
              },
              {
                title: 'שלב 4 - כינוס איברים ובידוד הנעלם:',
                formula: 'x = 0'
              }
            ]}
            variant="default"
          />
          
          <p className="font-medium text-green-700 mt-4">
            לכן, פתרון המשוואה הוא <FormulaBox inline>x = 0</FormulaBox>.
          </p>
        </ExampleBox>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">משוואות עם שברים פשוטים</h3>
        <p>
          כאשר במשוואה יש שברים והנעלם אינו במכנה, ניתן לפתור על ידי מציאת מכנה משותף וכפל כל אברי המשוואה 
          במכנה המשותף כדי "להיפטר" מהמכנים. לאחר מכן, פותרים את המשוואה כרגיל.
        </p>

        <ExampleBox 
          title="דוגמה:" 
          type="example"
          variant="default"
        >
          <p className="font-medium">
            פתור את המשוואה <FormulaBox inline>{"\\frac{x}{2} + \\frac{x}{3} = 5"}</FormulaBox>
          </p>
          
          <StepByStep 
            steps={[
              { content: 'המכנה המשותף הקטן ביותר של 2 ו-3 הוא 6.' },
              { content: 'נכפול כל איבר במשוואה ב-6:', formula: '6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 5' },
              { formula: '3x + 2x = 30' },
              { content: 'כינוס איברים:', formula: '5x = 30' },
              { content: 'בידוד הנעלם:', formula: 'x = \\frac{30}{5} = 6' }
            ]}
            variant="example"
            showStepNumbers={false}
          />
          
          <p className="font-medium text-green-700 mt-4">
            פתרון המשוואה הוא <FormulaBox inline>x = 6</FormulaBox>.
          </p>
        </ExampleBox>

        <ExampleBox 
          title="טיפים חשובים" 
          type="important"
          variant="highlighted"
        >
          <ul className="list-disc pr-6 space-y-1">
            <li>תמיד שמרו על שוויון בין שני האגפים</li>
            <li>זכרו לשנות סימן כשמעבירים איבר מאגף לאגף</li>
            <li>בדקו את הפתרון על ידי הצבה במשוואה המקורית</li>
            <li>במשוואות עם שברים, מצאו מכנה משותף לפני הפתרון</li>
            <li>פתחו תמיד סוגריים לפני שילוב איברים</li>
          </ul>
        </ExampleBox>
      </LessonSection>

      {/* Practice Section */}
      <LessonSection 
        title="מתרגלים" 
        titleColor="green" 
        icon="✍️"
      >        {exercises.map((exercise) => (
          <InteractiveExercise 
            key={exercise.id}
            id={exercise.id}
            question={exercise.question}
            correctAnswer={exercise.correctAnswer}
            placeholder={exercise.placeholder}
            solution={exercise.solution}
          />
        ))}
      </LessonSection>

      {/* Quiz Section */}
      <LessonSection 
        title="בחן את עצמך" 
        titleColor="orange" 
        icon="🧠"
      >
        <Quiz questions={quizQuestions} lessonId={lessonId} />
      </LessonSection>
    </LessonLayout>
  );
};

export default AlgebraLinearEquationOneVariableLesson;
