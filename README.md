# Hebrew Math Learning Platform - React Lessons

A comprehensive interactive Hebrew mathematics learning platform built with React. This application provides engaging lessons, quizzes, and exercises covering various mathematical topics from algebra to calculus.

## 🌟 Features

- **Interactive Lessons**: 50+ mathematical lessons with step-by-step explanations
- **RTL Support**: Full Hebrew language support with proper right-to-left text flow
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Progress Tracking**: Built-in progress dashboard to track learning advancement
- **Interactive Exercises**: Hands-on practice problems with instant feedback
- **Mathematical Visualization**: Dynamic graphs and coordinate systems
- **MathJax Integration**: Proper mathematical notation rendering

## 📚 Lesson Categories

### Algebra (אלגברה)
- Linear Equations (משוואות ליניאריות)
- Quadratic Equations (משוואות ריבועיות)
- Inequalities (אי-שוויונות)
- Percentages (אחוזים)
- Word Problems (בעיות מילוליות)

### Analytic Geometry (גאומטריה אנליטית)
- Points and Coordinates (נקודות וקואורדינטות)
- Distance and Midpoint (מרחק ונקודת אמצע)
- Slope and Line Equations (שיפוע ומשוואות ישר)
- Circles (מעגלים)
- Circle-Line Intersections (חיתוכי מעגל-ישר)

### Calculus (חשבון אינפיניטסימלי)
- Polynomial Functions (פונקציות פולינום)
- Rational Functions (פונקציות רציונליות)
- Square Root Functions (פונקציות שורש)
- Integration (אינטגרציה)
- Optimization (אופטימיזציה)

### Statistics & Probability (סטטיסטיקה והסתברות)
- Statistical Introduction (מבוא לסטטיסטיקה)
- Data Dispersion (פיזור נתונים)
- Normal Distribution (התפלגות נורמלית)
- Probability Trees (עצי הסתברות)

### Sequences & Series (סדרות וטורים)
- Arithmetic Sequences (סדרות חשבוניות)
- Arithmetic Series (טורים חשבוניים)

### Geometry (גאומטריה)
- Shapes and Properties (צורות ותכונות)
- Area and Perimeter (שטח והיקף)

### Applied Problems (בעיות יישומיות)
- Work Rate Problems (בעיות קצב עבודה)
- Motion Problems (בעיות תנועה)
- Buy/Sell Problems (בעיות קנייה/מכירה)
- Geometric-Algebraic Problems (בעיות גאומטרי-אלגבריות)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-lessons
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
react-lessons/
├── public/
│   └── index.html
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── HomePage.js
│   │   ├── LessonLayout.js
│   │   ├── LessonMenu.js
│   │   ├── ProgressDashboard.js
│   │   └── ...
│   ├── lessons/          # Individual lesson components
│   │   ├── AlgebraLinearEquationOneVariableLesson.js
│   │   ├── AnalyticGeometryPointsLesson.js
│   │   └── ...
│   ├── styles/           # CSS stylesheets
│   │   └── lessons.css
│   ├── App.js           # Main application component
│   └── index.js         # Application entry point
└── package.json
```

## 🎨 Styling & Design

- **CSS Framework**: Custom CSS with Tailwind-inspired utility classes
- **RTL Support**: Proper Hebrew text flow with `dir="rtl"` attributes
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Color Scheme**: Professional blue-gray palette with accessible contrast
- **Typography**: Hebrew-friendly fonts with proper line spacing

## 🧪 Key Components

### LessonLayout
Main layout wrapper providing consistent structure and navigation for all lessons.

### Interactive Exercises
Dynamic components with:
- Input validation
- Immediate feedback
- Step-by-step solutions
- Visual demonstrations

### Progress Tracking
Comprehensive dashboard showing:
- Lesson completion status
- Quiz scores
- Learning streaks
- Achievement badges

## 🌐 Internationalization

- **Primary Language**: Hebrew (עברית)
- **Text Direction**: Right-to-Left (RTL)
- **Mathematical Notation**: Proper Hebrew mathematical terminology
- **User Interface**: Fully localized Hebrew interface

## 🔧 Technical Features

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for single-page application
- **MathJax**: Professional mathematical notation rendering
- **SVG Graphics**: Interactive coordinate systems and geometric visualizations
- **Responsive Images**: Optimized graphics for all screen sizes

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Learning Objectives

This platform aims to help students:
- Master fundamental mathematical concepts
- Develop problem-solving skills
- Build confidence in mathematical reasoning
- Prepare for standardized mathematics exams
- Apply mathematical knowledge to real-world problems

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Advanced analytics and learning insights
- [ ] Collaborative learning features
- [ ] Integration with external math tools
- [ ] Offline learning capabilities
- [ ] Accessibility improvements (WCAG compliance)

---

**Built with ❤️ for Hebrew mathematics education**
