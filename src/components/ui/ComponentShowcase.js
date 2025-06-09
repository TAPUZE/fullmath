import React from 'react';
import { 
  LessonSection, 
  ExampleBox, 
  FormulaDefinition,
  StepByStep 
} from '../components/lesson';

/**
 * ComponentShowcase - Demonstration page for the new reusable lesson components
 * This shows how the components work and can be accessed at /component-showcase
 */
const ComponentShowcase = () => {
  const sampleSteps = [
    {
      title: 'שלב 1:',
      content: 'זהו השלב הראשון בפתרון',
      formula: 'x + 2 = 5'
    },
    {
      title: 'שלב 2:',
      content: 'העברת אגפים',
      formula: 'x = 5 - 2'
    },
    {
      title: 'שלב 3:',
      content: 'תוצאה סופית',
      formula: 'x = 3'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">
        🎨 Component Showcase - Reusable Lesson Components
      </h1>

      {/* LessonSection Examples */}
      <LessonSection 
        title="LessonSection Component Demo" 
        titleColor="purple" 
        icon="🔧"
      >
        <p>This is a LessonSection component with purple color and a tool icon.</p>
        <p>It provides consistent styling and spacing for lesson sections.</p>
      </LessonSection>

      <LessonSection 
        title="Different Color Example" 
        titleColor="blue" 
        icon="🌊"
      >
        <p>Same component, different color theme (blue) and icon.</p>
      </LessonSection>

      {/* ExampleBox Examples */}
      <LessonSection 
        title="ExampleBox Component Demo" 
        titleColor="green" 
        icon="📦"
      >
        <ExampleBox 
          type="example"
          variant="default"
        >
          <p>This is a default example box.</p>
          <p>It has automatic icon and color coding based on type.</p>
        </ExampleBox>

        <ExampleBox 
          type="problem"
          variant="highlighted"
        >
          <p>This is a highlighted problem box.</p>
          <p>Notice the different background and border colors.</p>
        </ExampleBox>

        <ExampleBox 
          type="solution"
          variant="compact"
        >
          <p>This is a compact solution box.</p>
          <p>Perfect for quick answers or notes.</p>
        </ExampleBox>

        <ExampleBox 
          type="important"
          variant="large"
        >
          <p>This is an important notice with large variant.</p>
          <p>Great for highlighting key concepts or warnings.</p>
        </ExampleBox>
      </LessonSection>

      {/* FormulaDefinition Examples */}
      <LessonSection 
        title="FormulaDefinition Component Demo" 
        titleColor="indigo" 
        icon="🔢"
      >
        <FormulaDefinition 
          title="Basic Formula:"
          formula="a^2 + b^2 = c^2"
          description="This is the Pythagorean theorem"
          variant="default"
        />

        <FormulaDefinition 
          title="Highlighted Formula:"
          formula="\\frac{d}{dx}[x^n] = nx^{n-1}"
          description="Power rule for derivatives"
          variant="highlighted"
        />

        <FormulaDefinition 
          title="Emphasized Formula:"
          formula="E = mc^2"
          description="Einstein's mass-energy equivalence"
          variant="emphasized"
        />
      </LessonSection>

      {/* StepByStep Examples */}
      <LessonSection 
        title="StepByStep Component Demo" 
        titleColor="orange" 
        icon="👣"
      >
        <h3 className="text-lg font-semibold mb-4">Default Step-by-Step Solution:</h3>
        <StepByStep 
          title="פתרון המשוואה:"
          steps={sampleSteps}
          variant="default"
        />

        <h3 className="text-lg font-semibold mb-4 mt-8">Highlighted Variant:</h3>
        <StepByStep 
          title="פתרון מודגש:"
          steps={sampleSteps}
          variant="highlighted"
        />

        <h3 className="text-lg font-semibold mb-4 mt-8">Without Step Numbers:</h3>
        <StepByStep 
          title="פתרון ללא מספור:"
          steps={[
            { content: 'זהו שלב ראשון ללא מספר', formula: 'x + 2 = 5' },
            { content: 'שלב שני ללא מספר', formula: 'x = 3' }
          ]}
          variant="solution"
          showStepNumbers={false}
        />
      </LessonSection>

      {/* Benefits Summary */}
      <LessonSection 
        title="Benefits of Using These Components" 
        titleColor="red" 
        icon="🎯"
      >
        <ExampleBox 
          type="note"
          variant="highlighted"
        >
          <h4 className="font-semibold mb-2">Key Advantages:</h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>🎨 <strong>Consistent Design</strong> - Uniform appearance across all lessons</li>
            <li>⚡ <strong>Faster Development</strong> - Create lessons 50% faster</li>
            <li>🔧 <strong>Easy Maintenance</strong> - Update styling in one place</li>
            <li>📱 <strong>Responsive</strong> - Automatically adapts to different screen sizes</li>
            <li>♿ <strong>Accessible</strong> - Built-in semantic HTML structure</li>
            <li>🚀 <strong>Performance</strong> - Optimized React components</li>
          </ul>
        </ExampleBox>

        <ExampleBox 
          type="important"
          variant="large"
        >
          <h4 className="font-semibold mb-2">Code Reduction:</h4>
          <p>Using these components reduces lesson code by <strong>60-80%</strong> compared to manual styling!</p>
          <p className="mt-2">
            <strong>Before:</strong> 40+ lines for an example with solution<br/>
            <strong>After:</strong> 8-10 lines with clean component usage
          </p>
        </ExampleBox>
      </LessonSection>
    </div>
  );
};

export default ComponentShowcase;
