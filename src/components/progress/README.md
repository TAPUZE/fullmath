# Progress Section Components Documentation

## Overview
The ProgressSection component has been refactored into a modular, organized structure with separate components handling different aspects of progress tracking functionality.

## Component Structure

### Main Component
- **`ProgressSection.js`** - Main component that orchestrates all progress functionality

### Progress Components (`./progress/` directory)

#### 1. **ProgressLayout.js**
Main layout wrapper that renders the complete progress section UI.
- Renders progress statistics
- Renders action buttons
- Includes lesson navigation
- Handles notification display

#### 2. **ProgressDataManager.js**
Custom hooks for data management and local storage operations.

**Hooks:**
- `useProgressData(lessonId)` - Manages progress data loading, saving, and resetting
- `useCompletionStatus(lessonId)` - Manages lesson completion status
- `formatTime(seconds)` - Utility function for time formatting

**Features:**
- Exercise statistics loading and saving
- Quiz results management
- Completion data persistence
- Progress data resetting
- Automatic lesson start time tracking

#### 3. **ProgressStatistics.js**
Displays detailed learning statistics and progress metrics.

**Features:**
- Total time spent display
- Exercise count and attempts
- Error tracking and display
- Quiz score presentation
- Detailed exercise breakdown

#### 4. **ProgressActions.js**
Action buttons for progress management.

**Actions:**
- Mark lesson as completed
- Mark lesson as not completed  
- Reset all progress data
- Navigation to next lesson
- Return to lesson menu

#### 5. **ProgressNotification.js**
Custom hook for managing notifications and user feedback.

**Hook:** `useProgressNotification()`
- `showSuccess(message)` - Success notifications
- `showError(message)` - Error notifications  
- `showInfo(message)` - Info notifications
- `NotificationElement` - React component for rendering notifications

#### 6. **index.js**
Centralized exports for clean importing.

## Usage

### Basic Usage
```jsx
import ProgressSection from './components/ProgressSection';

<ProgressSection 
  lessonId="lesson-id"
  nextLessonUrl="/next-lesson"
  menuUrl="/lesson-menu"
/>
```

### Individual Component Usage
```jsx
import { 
  ProgressLayout, 
  useProgressData, 
  useCompletionStatus, 
  useProgressNotification,
  formatTime 
} from './components/progress';

// In your component
const { progressData, resetProgressData } = useProgressData(lessonId);
const { isCompleted, markAsCompleted } = useCompletionStatus(lessonId);
const { showSuccess, NotificationElement } = useProgressNotification();
```

## Data Storage

### LocalStorage Keys
- `lesson_completed_{lessonId}` - Completion status
- `lesson_completion_data_{lessonId}` - Detailed completion data
- `lesson_start_time_{lessonId}` - Lesson start timestamp
- `exercise_{lessonId}_{exerciseId}` - Individual exercise data
- `lesson_quiz_score_{lessonId}` - Quiz results and timing

### Exercise Data Structure
```javascript
{
  exerciseId: string,
  attempts: number,
  wrongAnswers: string[],
  timeSpent: number, // seconds
  completed: boolean,
  sessionData: object
}
```

### Quiz Data Structure
```javascript
{
  score: number,
  total: number,
  timeSpent: number, // seconds
  completionTime: string, // ISO timestamp
  answers: object[]
}
```

### Completion Data Structure
```javascript
{
  completed: true,
  completionTime: string, // ISO timestamp
  progressSummary: {
    exerciseCount: number,
    totalAttempts: number,
    totalWrongAnswers: number,
    totalTimeSpent: number, // seconds
    quizScore: string, // "score/total"
    quizTimeSpent: number // seconds
  }
}
```

## Features

### Enhanced Tracking
- **Time Tracking**: Automatic time measurement for exercises and quizzes
- **Attempt Counting**: Track number of attempts per exercise
- **Error Collection**: Store wrong answers for analysis
- **Session Data**: Persistent session information

### Progress Statistics
- Real-time display of learning metrics
- Exercise completion overview
- Time spent analysis
- Error rate tracking
- Quiz performance metrics

### Data Management
- Comprehensive local storage management
- Data persistence across sessions
- Progress reset functionality
- Completion status tracking
- Detailed progress summaries

### User Experience
- Clean, organized UI components
- Responsive design
- Hebrew language support
- Accessibility features
- Intuitive navigation

## Integration

### With Exercise Components
Exercise components automatically save progress data:
```javascript
// Exercise component saves data like:
localStorage.setItem(`exercise_${lessonId}_${exerciseId}`, JSON.stringify({
  exerciseId,
  attempts,
  wrongAnswers,
  timeSpent,
  completed: true
}));
```

### With Quiz Components
Quiz components save detailed results:
```javascript
// Quiz component saves data like:
localStorage.setItem(`lesson_quiz_score_${lessonId}`, JSON.stringify({
  score,
  total,
  timeSpent,
  completionTime: new Date().toISOString()
}));
```

### With Navigation System
Integrates with `LessonNavigation` component for seamless lesson progression.

## Benefits of Modular Structure

1. **Maintainability** - Each component has a single responsibility
2. **Reusability** - Components can be used independently
3. **Testability** - Easier to test individual components
4. **Scalability** - Easy to add new features or modify existing ones
5. **Performance** - Better code splitting and lazy loading opportunities
6. **Developer Experience** - Clear separation of concerns and clean imports
