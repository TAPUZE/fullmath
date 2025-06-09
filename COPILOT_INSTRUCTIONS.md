# COPILOT INSTRUCTIONS - React Math Education Platform

## PROJECT OVERVIEW

This is a comprehensive React-based mathematics education platform for Israeli high school students preparing for Bagrut exams. The platform includes interactive lessons, progress tracking, teacher dashboards, and multi-user support.

### Key Technologies
- **Frontend**: React 18, React Router, TailwindCSS
- **Math Rendering**: MathJax with LaTeX support
- **State Management**: React Context API
- **Storage**: LocalStorage for user data and progress
- **Authentication**: Custom auth system with role-based access
- **Build**: Create React App (CRA)

### Platform Languages
- **Primary Language**: Hebrew (RTL support)
- **Code Comments**: English
- **UI Text**: Hebrew
- **Math Notation**: LaTeX/MathJax

### Development Preferences
- **File Management**: Prefer editing existing files over creating new ones when possible
- **Component Reuse**: Prioritize using existing reusable components over custom implementations
- **Code Optimization**: Focus on reducing redundancy and improving maintainability
- **Refactoring Approach**: When optimizing lessons, prefer replacing custom implementations with reusable components rather than creating new duplicate files

---

## PROJECT STRUCTURE & ARCHITECTURE

### Core Components Hierarchy
```
src/
├── components/
│   ├── lesson/           # NEW: Reusable lesson components (Phase 1 complete)
│   ├── progress/         # Progress tracking components
│   ├── teachers/         # Teacher-specific components
│   ├── admin/           # Admin dashboard components
│   └── [core components] # Layout, navigation, auth components
├── lessons/             # Individual lesson implementations
├── contexts/            # React Context providers
├── utils/               # Utility functions and adapters
└── hooks/               # Custom React hooks
```

### Authentication & User Roles
- **Students**: Access lessons, track progress, view personal stats
- **Teachers**: View student progress, generate reports, class management
- **Admins**: Full system access, user management, data export
- **Developers**: Testing tools, debug features, system monitoring

---

## COMPLETED MAJOR REFACTORING PROJECTS

### 1. Teachers Dashboard Refactoring ✅ COMPLETE
**Problem Solved**: Eliminated 900+ lines of duplicate code between TeachersDashboard and ProgressDashboard

**Key Files Created**:
- `src/utils/teacherProgressAdapter.js` - Adapter pattern for reusing progress utilities
- `src/components/TeachersDashboardRefactored.js` - Clean refactored template

**Architecture Pattern**:
```javascript
// BEFORE: Duplicate implementations
- Custom student data loading
- Custom progress statistics  
- Custom export functions

// AFTER: Reused existing utilities with adapter pattern
import { getAllRealStudentData } from '../utils/realStudentDataProvider';
import { TeacherProgressAdapter } from '../utils/teacherProgressAdapter';
```

### 2. Lesson Components Reusability ✅ PHASE 1 COMPLETE
**Problem Solved**: Massive code duplication across 16+ lesson files

**Reusable Components Created** (`src/components/lesson/`):
1. **LessonSection** - Standardized section wrapper (91% code reduction)
2. **ExampleBox** - Smart content containers with type-based styling
3. **FormulaDefinition** - Mathematical formula presentation
4. **StepByStep** - Structured step-by-step solutions (80% code reduction)

**Usage Pattern**:
```javascript
// Import reusable components
import { LessonSection, ExampleBox, FormulaDefinition, StepByStep } from '../components/lesson';

// BEFORE: 40+ lines of manual styling
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-purple-600 mb-4 border-b-2 border-purple-200 pb-2">
    // ... complex styling
  </h2>
</section>

// AFTER: 1 clean line
<LessonSection title="לומדים 📚" titleColor="purple" icon="📚">
```

---

## DEVELOPMENT PATTERNS & BEST PRACTICES

### Component Development Rules

#### 1. **Lesson Component Pattern**
```javascript
// Always use reusable lesson components for consistency
import { LessonSection, ExampleBox, FormulaDefinition, StepByStep } from '../components/lesson';

// Structure lessons with semantic sections
<LessonLayout title="Lesson Title" lessonId="lesson-id">
  <LessonSection title="Learning" titleColor="purple" icon="📚">
    // Learning content
  </LessonSection>
  
  <LessonSection title="Practice" titleColor="green" icon="💪">
    // Exercises
  </LessonSection>
  
  <LessonSection title="Quiz" titleColor="orange" icon="🎯">
    // Quiz components
  </LessonSection>
</LessonLayout>
```

#### 2. **Math Formula Integration**
```javascript
// Use FormulaBox for inline math
<FormulaBox inline>{`x^2 + y^2 = z^2`}</FormulaBox>

// Use FormulaDefinition for emphasized formulas
<FormulaDefinition 
  title="נוסחה:"
  formula="E = mc^2"
  description="Einstein's mass-energy equivalence"
  variant="highlighted"
/>
```

#### 3. **Step-by-Step Solutions**
```javascript
// Use data-driven approach for solutions
const solutionSteps = [
  {
    title: 'שלב 1:',
    content: 'Description of step',
    formula: 'x + 2 = 5'
  },
  // ... more steps
];

<StepByStep steps={solutionSteps} variant="solution" />
```

### Code Organization Rules

#### 1. **File Naming Conventions**
- **Components**: PascalCase (e.g., `LessonSection.js`)
- **Lessons**: PascalCase with "Lesson" suffix (e.g., `AlgebraLinearEquationOneVariableLesson.js`)
- **Utils**: camelCase (e.g., `teacherProgressAdapter.js`)
- **Documentation**: UPPERCASE with underscores (e.g., `LESSON_COMPONENTS_ANALYSIS.md`)

#### 2. **Import Organization**
```javascript
// 1. React and external libraries
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 2. Internal components (grouped by category)
import LessonLayout from '../components/LessonLayout';
import { LessonSection, ExampleBox } from '../components/lesson';

// 3. Utils and contexts
import { useAuth } from '../contexts/AuthContext';
import { getLessonStatus } from '../utils/progressUtils';
```

#### 3. **Component Structure Pattern**
```javascript
const ComponentName = () => {
  // 1. Hooks and state
  const [state, setState] = useState();
  
  // 2. Data preparation
  const processedData = processData(rawData);
  
  // 3. Event handlers
  const handleAction = () => {
    // Handler logic
  };
  
  // 4. Render helpers (if needed)
  const renderHelper = () => (
    <div>Helper content</div>
  );
  
  // 5. Main render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};
```

---

## DATA MANAGEMENT PATTERNS

### User Data Structure
```javascript
// LocalStorage structure for user progress
{
  "user@example.com": {
    "lessonProgress": {
      "lesson-id": {
        "status": "completed|started|not-started",
        "exercises": { "exercise-id": { "completed": true, "attempts": 2 } },
        "quizzes": { "quiz-id": { "score": 85, "completed": true } },
        "timeSpent": 1200,
        "lastAccessed": "2025-06-09T10:30:00.000Z"
      }
    },
    "profile": {
      "name": "Student Name",
      "role": "student|teacher|admin",
      "class": "10th-grade-math"
    }
  }
}
```

### Progress Tracking Pattern
```javascript
// Always use utility functions for progress operations
import { getLessonStatus, updateLessonProgress, getProgressStats } from '../utils/progressUtils';

// Check lesson status
const status = getLessonStatus(lessonId, userEmail, userData);

// Update progress
updateLessonProgress(lessonId, userEmail, progressData);

// Get statistics
const stats = getProgressStats(lessonIds, userEmail, userData);
```

---

## STYLING & UI GUIDELINES

### TailwindCSS Patterns

#### 1. **Color Scheme**
- **Primary**: Blue (`blue-600`, `blue-500`) - Navigation, buttons
- **Success**: Green (`green-600`, `green-500`) - Completed status, success messages
- **Warning**: Yellow (`yellow-600`, `yellow-500`) - In-progress status
- **Error**: Red (`red-600`, `red-500`) - Error states
- **Purple**: Purple (`purple-600`, `purple-500`) - Learning sections
- **Orange**: Orange (`orange-600`, `orange-500`) - Quiz sections

#### 2. **Layout Patterns**
```javascript
// Container pattern
<div className="container mx-auto px-4 py-8">

// Card pattern
<div className="bg-white rounded-lg shadow-md p-6">

// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Responsive spacing
<div className="space-y-4 md:space-y-6">
```

#### 3. **RTL Support**
```javascript
// Use margin-right instead of margin-left for RTL
<span className="mr-2">Icon</span>

// Use right-based positioning
<div className="text-right">

// Use pr (padding-right) instead of pl
<ul className="list-disc pr-6">
```

---

## LESSON DEVELOPMENT WORKFLOW

### Creating New Lessons

#### 1. **File Setup**
```bash
# Create lesson file
src/lessons/NewTopicLesson.js

# Follow naming: [Subject][Topic]Lesson.js
# Examples: AlgebraLinearEquationOneVariableLesson.js, GeometryAreaPerimeterLesson.js
```

#### 2. **Lesson Template**
```javascript
import React from 'react';
import LessonLayout from '../components/LessonLayout';
import { LessonSection, ExampleBox, FormulaDefinition, StepByStep } from '../components/lesson';
import Exercise from '../components/Exercise';
import Quiz from '../components/Quiz';

const NewTopicLesson = () => {
  const lessonId = 'new-topic-lesson';
  const nextLessonPath = '/lessons/next-lesson';

  // Data structures for exercises, quizzes, solutions
  const exercises = [/* exercise data */];
  const quizQuestions = [/* quiz data */];
  
  return (
    <LessonLayout title="Lesson Title" lessonId={lessonId} nextLessonPath={nextLessonPath}>
      <LessonSection title="לומדים 📚" titleColor="purple" icon="📚">
        {/* Learning content */}
      </LessonSection>
      
      <LessonSection title="תרגול 💪" titleColor="green" icon="💪">
        {exercises.map(exercise => <Exercise key={exercise.id} {...exercise} />)}
      </LessonSection>
      
      <LessonSection title="בחינת ידע 🎯" titleColor="orange" icon="🎯">
        <Quiz questions={quizQuestions} />
      </LessonSection>
    </LessonLayout>
  );
};

export default NewTopicLesson;
```

#### 3. **Add to Navigation**
Update `src/components/Questionnaire35182.js`:
```javascript
const lessons = [
  // ... existing lessons
  {
    id: 'new-topic-lesson',
    title: 'New Topic Title',
    description: 'Lesson description',
    path: '/lessons/new-topic-lesson'
  }
];
```

#### 4. **Add Route**
Update `src/App.js`:
```javascript
import NewTopicLesson from './lessons/NewTopicLesson';

// Add route
<Route path="/lessons/new-topic-lesson" element={<NewTopicLesson />} />
```

---

## TESTING & DEBUGGING

### Local Development
```bash
# Start development server
npm start

# Build for production
npm run build

# Test components
# Access http://localhost:3000/component-showcase for component testing
```

### Debug Tools
- **Component Showcase**: `/component-showcase` - Test reusable components
- **Dev Dashboard**: Available for developer role users
- **Browser DevTools**: Check LocalStorage for user data inspection

### Common Issues & Solutions

#### 1. **MathJax Not Rendering**
```javascript
// Ensure MathJax is properly imported and configured
import '../components/MathJax'; // In main App.js

// Use FormulaBox for all math rendering
<FormulaBox>{`LaTeX formula here`}</FormulaBox>
```

#### 2. **Progress Not Saving**
```javascript
// Always use progress utility functions
import { updateLessonProgress } from '../utils/progressUtils';

// Don't directly manipulate localStorage
// Use the provided progress utilities
```

#### 3. **Component Import Errors**
```javascript
// Use the lesson component index for clean imports
import { LessonSection, ExampleBox } from '../components/lesson';

// Not individual imports:
// import LessonSection from '../components/lesson/LessonSection';
```

---

## PERFORMANCE OPTIMIZATION

### React Best Practices
1. **Use React.memo** for lesson components that don't change frequently
2. **Lazy load lessons** - Consider implementing React.lazy for lesson components
3. **Optimize re-renders** - Use useCallback and useMemo for complex calculations

### Bundle Optimization
1. **Component chunking** - Keep reusable components in separate chunks
2. **Math libraries** - MathJax is loaded asynchronously
3. **Image optimization** - Use appropriate image formats and sizes

---

## FUTURE DEVELOPMENT ROADMAP

### Phase 2 Components (Ready to Implement)
1. **MathTable** - Reusable table component for mathematical data
2. **DefinitionBox** - Standardized definition presentations
3. **Interactive** - Basic interactive mathematical elements

### Phase 3 Components (Advanced)
1. **GeometryVisual** - SVG-based geometry diagrams
2. **ProblemSolver** - Interactive step-by-step problem solving
3. **Advanced Interactive** - Complex mathematical simulations

### System Improvements
1. **Database Migration** - Move from LocalStorage to proper database
2. **Real-time Collaboration** - Teacher-student real-time interaction
3. **Advanced Analytics** - Learning pattern analysis
4. **Mobile App** - React Native implementation

---

## CRITICAL RULES FOR AI ASSISTANTS

### Code Modification Rules
1. **NEVER modify core utility functions** without understanding the full impact
2. **ALWAYS use reusable lesson components** instead of manual styling
3. **PRESERVE Hebrew text and RTL layout** patterns
4. **MAINTAIN progress tracking** functionality in all changes
5. **TEST component integration** before declaring completion

### File Safety Rules
1. **CREATE BACKUPS** before major refactoring (`.backup` extension)
2. **VERIFY syntax** using the error checking tools
3. **MAINTAIN import paths** when moving files
4. **PRESERVE user data structures** - never break localStorage compatibility

### Command Syntax Guidelines
**IMPORTANT**: When using terminal commands or command chaining:

1. **Use semicolon (;) for command sequencing**
   - ✅ CORRECT: `npm install; npm start`
   - ✅ CORRECT: `cd src; ls`
   - ❌ INCORRECT: `npm install && npm start` (only use && when second command should run only if first succeeds)

2. **Use && only for conditional execution**
   - ✅ CORRECT: `npm test && npm build` (build only if tests pass)
   - ✅ CORRECT: `mkdir temp && cd temp` (cd only if mkdir succeeds)

3. **PowerShell specific conventions**
   - Default shell is PowerShell on Windows
   - Use semicolon (;) as primary command separator
   - Use proper PowerShell syntax for file operations

4. **When in doubt, use semicolon (;)**
   - Semicolon works in most shells and scenarios
   - More predictable behavior across different environments

### Development Flow
1. **UNDERSTAND before modifying** - read existing code patterns
2. **USE existing patterns** rather than creating new ones
3. **DOCUMENT major changes** in markdown files
4. **TEST thoroughly** with the React development server

---

## CONTACT & MAINTENANCE

### Key Files for Understanding
- `LESSON_COMPONENTS_ANALYSIS.md` - Component reusability strategy
- `TEACHERS_DASHBOARD_REFACTORING_COMPLETE.md` - Architecture patterns
- `PROJECT_STATUS.md` - Current state overview

### When in Doubt
1. **Check existing patterns** in similar components
2. **Look for utility functions** before implementing from scratch  
3. **Maintain consistency** with established conventions
4. **Ask for clarification** rather than making assumptions

### Success Metrics
- **Code reusability**: 60-80% reduction in duplication
- **Maintainability**: Single source of truth for components
- **Developer experience**: Faster lesson creation (50%+ improvement)
- **User experience**: Consistent, professional interface

---

*This document should be treated as the definitive guide for understanding and working with this React math education platform. Always refer to this document before making significant changes to the codebase.*
