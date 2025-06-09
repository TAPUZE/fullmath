import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/lessons.css';

// Import debug utilities
import './utils/userDataDebug.js';
import './utils/testUserData.js';
import './utils/realStudentDataProvider.js';
import './utils/sampleDataGenerator.js';

// ============================================
// AUTHENTICATION COMPONENTS
// ============================================
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { UserDataProvider } from './contexts/UserDataContext';
import LoginScreen from './components/auth/LoginScreen';
import ProtectedRoute from './components/core/ProtectedRoute';
import UserHeader from './components/layout/UserHeader';
import UserInitializer from './components/core/UserInitializer';

// ============================================
// MAIN COMPONENTS
// ============================================
import HomePage from './components/layout/HomePage';
import LessonMenu from './components/lesson/LessonMenu';
import ProgressDashboard from './components/progress/ProgressDashboard';
import TeachersDashboard from './components/teachers/TeachersDashboard';

// ============================================
// SCHOOL ADMIN COMPONENTS
// ============================================
import SchoolAdminLogin from './components/auth/SchoolAdminLogin';
import SchoolAdminDashboard from './components/admin/SchoolAdminDashboard';

// ============================================
// DEV DASHBOARD COMPONENTS
// ============================================
import DevLogin from './components/auth/DevLogin';
import DevDashboard from './components/dev/DevDashboard';

// ============================================
// CHATBOT COMPONENTS
// ============================================
// import ChatbotTestPage from './components/ChatbotTestPage';

// ============================================
// QUESTIONNAIRE COMPONENTS
// ============================================
import Questionnaire35182 from './components/questionnaires/Questionnaire35182';
import Questionnaire35381 from './components/questionnaires/Questionnaire35381';
import Questionnaire35382 from './components/questionnaires/Questionnaire35382';

// ============================================
// GROUP 801 - ALGEBRA & BASIC MATH
// ============================================
import AlgebraLinearEquationOneVariableLesson from './lessons/801/AlgebraLinearEquationOneVariableLesson';
import AlgebraLinearEquationsTwoVariablesLesson from './lessons/801/AlgebraLinearEquationsTwoVariablesLesson';
import AlgebraPercentagesLesson from './lessons/801/AlgebraPercentagesLesson';
import AlgebraInequalitiesLesson from './lessons/801/AlgebraInequalitiesLesson';
import AlgebraQuadraticEquationsLesson from './lessons/801/AlgebraQuadraticEquationsLesson';
import AlgebraWordProblemsLesson from './lessons/801/AlgebraWordProblemsLesson';
import GeometryShapesPropertiesLesson from './lessons/801/GeometryShapesPropertiesLesson';
import GeometryAreaPerimeterLesson from './lessons/801/GeometryAreaPerimeterLesson';
import AnalyticGeometryPointsLesson from './lessons/801/AnalyticGeometryPointsLesson';
import AnalyticGeometrySlopeLesson from './lessons/801/AnalyticGeometrySlopeLesson';
import AnalyticGeometryDistanceLesson from './lessons/801/AnalyticGeometryDistanceLesson';
import AnalyticGeometryMidpointLesson from './lessons/801/AnalyticGeometryMidpointLesson';
import TrigonometryRightTriangleLesson from './lessons/801/TrigonometryRightTriangleLesson';
import ArithmeticSequencesIntroLesson from './lessons/801/ArithmeticSequencesIntroLesson';
import StatisticsIntroLesson from './lessons/801/StatisticsIntroLesson';
import ProbabilityIntroLesson from './lessons/801/ProbabilityIntroLesson';

// ============================================
// GROUP 802 - INTERMEDIATE MATH & FUNCTIONS
// ============================================
import FunctionsParabolaInvestigationLesson from './lessons/802/FunctionsParabolaInvestigationLesson';
import SequencesArithmeticSumLesson from './lessons/802/SequencesArithmeticSumLesson';
import GrowthDecayLesson from './lessons/802/GrowthDecayLesson';
import StatisticsDispersionLesson from './lessons/802/StatisticsDispersionLesson';
import ProbabilityTreeConditionalLesson from './lessons/802/ProbabilityTreeConditionalLesson';
import NormalDistributionLesson from './lessons/802/NormalDistributionLesson';
import GeometryShapesLesson from './lessons/802/GeometryShapesLesson';

// ============================================
// GROUP 803 - ADVANCED MATH & CALCULUS
// ============================================
import AnalyticGeometryLineContinuedLesson from './lessons/803/AnalyticGeometryLineContinuedLesson';
import AnalyticGeometryCircleLesson from './lessons/803/AnalyticGeometryCircleLesson';
import AnalyticGeometryCircleTangentLesson from './lessons/803/AnalyticGeometryCircleTangentLesson';
import AnalyticGeometryCircleLineIntersectionLesson from './lessons/803/AnalyticGeometryCircleLineIntersectionLesson';
import CalculusPolynomialLesson from './lessons/803/CalculusPolynomialLesson';
import CalculusRationalLesson from './lessons/803/CalculusRationalLesson';
import CalculusSquareRootLesson from './lessons/803/CalculusSquareRootLesson';
import CalculusOptimizationLesson from './lessons/803/CalculusOptimizationLesson';
import CalculusIntegralPolynomialLesson from './lessons/803/CalculusIntegralPolynomialLesson';
import ProblemsWorkRateLesson from './lessons/803/ProblemsWorkRateLesson';
import ProblemsMotionLesson from './lessons/803/ProblemsMotionLesson';
import ProblemsGeometricAlgebraicLesson from './lessons/803/ProblemsGeometricAlgebraicLesson';
import ProblemsBuySellLesson from './lessons/803/ProblemsBuySellLesson';

function App() {
  return (
    <AuthProvider>
      <UserDataProvider>
        <Router>
          <AppContent />
        </Router>
      </UserDataProvider>
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated, login, isLoading, currentUser } = useAuth();

  // Debug: Log authentication state
  console.log('Debug - Auth state:', { isAuthenticated, isLoading, currentUser });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">טוען את המערכת...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('Debug - Showing login screen');
    return <LoginScreen onLogin={login} />;
  }return (
    <div className="min-h-screen bg-gray-50">
      <UserInitializer>
        <UserHeader />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          {/* Educational Routes - Available to Students and Teachers */}
        <Route path="/lessons" element={
          <ProtectedRoute>
            <LessonMenu />
          </ProtectedRoute>
        } />
        <Route path="/menu" element={
          <ProtectedRoute>
            <LessonMenu />
          </ProtectedRoute>
        } />
        
        <Route path="/progress" element={
          <ProtectedRoute>
            <ProgressDashboard />
          </ProtectedRoute>
        } />

        {/* Teacher-Only Routes */}
        <Route path="/teachers" element={
          <ProtectedRoute requireRole="teacher">
            <TeachersDashboard />
          </ProtectedRoute>
        } />        {/* School Admin Routes */}
        <Route path="/admin/login" element={<SchoolAdminLogin />} />
        <Route path="/admin" element={<SchoolAdminDashboard />} />
        <Route path="/admin/*" element={<SchoolAdminDashboard />} />        {/* Dev Dashboard Routes */}
        <Route path="/dev/login" element={<DevLogin />} />
        <Route path="/dev" element={<DevDashboard />} />
        <Route path="/dev/*" element={<DevDashboard />} />        {/* Chatbot Test Routes */}
        {/* <Route path="/chatbot/test" element={
          <ProtectedRoute>
            <ChatbotTestPage />
          </ProtectedRoute>
        } /> */}

        {/* Questionnaire Routes - Available to Students and Teachers */}
        <Route path="/questionnaire/35182" element={
          <ProtectedRoute>
            <Questionnaire35182 />
          </ProtectedRoute>
        } />
        <Route path="/questionnaire/35381" element={
          <ProtectedRoute>
            <Questionnaire35381 />
          </ProtectedRoute>
        } />
        <Route path="/questionnaire/35382" element={
          <ProtectedRoute>
            <Questionnaire35382 />
          </ProtectedRoute>
        } />          {/* Lesson Routes - Available to Students and Teachers */}
        <Route path="/lessons/algebra-linear-equation-one-variable" element={
          <ProtectedRoute>
            <AlgebraLinearEquationOneVariableLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-linear-equations-two-variables" element={
          <ProtectedRoute>
            <AlgebraLinearEquationsTwoVariablesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-percentages" element={
          <ProtectedRoute>
            <AlgebraPercentagesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-inequalities" element={
          <ProtectedRoute>
            <AlgebraInequalitiesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-quadratic-equations" element={
          <ProtectedRoute>
            <AlgebraQuadraticEquationsLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-word-problems" element={
          <ProtectedRoute>
            <AlgebraWordProblemsLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/geometry-shapes" element={
          <ProtectedRoute>
            <GeometryShapesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/geometry-shapes-properties" element={
          <ProtectedRoute>
            <GeometryShapesPropertiesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/geometry-area-perimeter" element={
          <ProtectedRoute>
            <GeometryAreaPerimeterLesson />
          </ProtectedRoute>
        } />        
        {/* Additional lesson routes available to both students and teachers */}
        <Route path="/lessons/analytic-geometry-points" element={
          <ProtectedRoute>
            <AnalyticGeometryPointsLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/analytic-geometry-slope" element={
          <ProtectedRoute>
            <AnalyticGeometrySlopeLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/analytic-geometry-distance" element={
          <ProtectedRoute>
            <AnalyticGeometryDistanceLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/analytic-geometry-midpoint" element={
          <ProtectedRoute>
            <AnalyticGeometryMidpointLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/analytic-geometry-line-continued" element={
          <ProtectedRoute>
            <AnalyticGeometryLineContinuedLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/analytic-geometry-circle" element={
          <ProtectedRoute>
            <AnalyticGeometryCircleLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/analytic-geometry-circle-tangent" element={
          <ProtectedRoute>
            <AnalyticGeometryCircleTangentLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/analytic-geometry-circle-line-intersection" element={
          <ProtectedRoute>
            <AnalyticGeometryCircleLineIntersectionLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/trigonometry-right-triangle" element={
          <ProtectedRoute>
            <TrigonometryRightTriangleLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/functions-parabola-investigation" element={
          <ProtectedRoute>
            <FunctionsParabolaInvestigationLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-polynomial" element={
          <ProtectedRoute>
            <CalculusPolynomialLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-rational" element={
          <ProtectedRoute>
            <CalculusRationalLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-square-root" element={
          <ProtectedRoute>
            <CalculusSquareRootLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-optimization" element={
          <ProtectedRoute>
            <CalculusOptimizationLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-integral-polynomial" element={
          <ProtectedRoute>
            <CalculusIntegralPolynomialLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/sequences-arithmetic-intro" element={
          <ProtectedRoute>
            <ArithmeticSequencesIntroLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/sequences-arithmetic-sum" element={
          <ProtectedRoute>
            <SequencesArithmeticSumLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/statistics-intro" element={
          <ProtectedRoute>
            <StatisticsIntroLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/statistics-dispersion" element={
          <ProtectedRoute>
            <StatisticsDispersionLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/normal-distribution" element={
          <ProtectedRoute>
            <NormalDistributionLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/probability-intro" element={
          <ProtectedRoute>
            <ProbabilityIntroLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/probability-tree-conditional" element={
          <ProtectedRoute>
            <ProbabilityTreeConditionalLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/problems-work-rate" element={
          <ProtectedRoute>
            <ProblemsWorkRateLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/problems-motion" element={
          <ProtectedRoute>
            <ProblemsMotionLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/problems-geometric-algebraic" element={
          <ProtectedRoute>
            <ProblemsGeometricAlgebraicLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/problems-buy-sell" element={
          <ProtectedRoute>
            <ProblemsBuySellLesson />
          </ProtectedRoute>
        } />        <Route path="/lessons/growth-decay" element={
          <ProtectedRoute>
            <GrowthDecayLesson />
          </ProtectedRoute>
        } />
      </Routes>
      </UserInitializer>
    </div>
  );
}

export default App;
