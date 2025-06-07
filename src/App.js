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
import LoginScreen from './components/LoginScreen';
import ProtectedRoute from './components/ProtectedRoute';
import UserHeader from './components/UserHeader';
import UserInitializer from './components/UserInitializer';

// ============================================
// MAIN COMPONENTS
// ============================================
import HomePage from './components/HomePage';
import LessonMenu from './components/LessonMenu';
import ProgressDashboard from './components/ProgressDashboard';
import TeachersDashboard from './components/TeachersDashboard';

// ============================================
// QUESTIONNAIRE COMPONENTS
// ============================================
import Questionnaire35182 from './components/Questionnaire35182';
import Questionnaire35381 from './components/Questionnaire35381';
import Questionnaire35382 from './components/Questionnaire35382';

// ============================================
// GROUP 801 - ALGEBRA & BASIC MATH
// ============================================
import AlgebraLinearEquationOneVariableLesson from './lessons/AlgebraLinearEquationOneVariableLesson';
import AlgebraLinearEquationsTwoVariablesLesson from './lessons/AlgebraLinearEquationsTwoVariablesLesson';
import AlgebraPercentagesLesson from './lessons/AlgebraPercentagesLesson';
import AlgebraInequalitiesLesson from './lessons/AlgebraInequalitiesLesson';
import AlgebraQuadraticEquationsLesson from './lessons/AlgebraQuadraticEquationsLesson';
import AlgebraWordProblemsLesson from './lessons/AlgebraWordProblemsLesson';
import GeometryShapesLesson from './lessons/GeometryShapesLesson';
import GeometryShapesPropertiesLesson from './lessons/GeometryShapesPropertiesLesson';
import GeometryAreaPerimeterLesson from './lessons/GeometryAreaPerimeterLesson';

// ============================================
// GROUP 802 - GEOMETRY & FUNCTIONS
// ============================================
import AnalyticGeometryPointsLesson from './lessons/AnalyticGeometryPointsLesson';
import AnalyticGeometrySlopeLesson from './lessons/AnalyticGeometrySlopeLesson';
import AnalyticGeometryDistanceLesson from './lessons/AnalyticGeometryDistanceLesson';
import AnalyticGeometryMidpointLesson from './lessons/AnalyticGeometryMidpointLesson';
import AnalyticGeometryLineContinuedLesson from './lessons/AnalyticGeometryLineContinuedLesson';
import AnalyticGeometryCircleLesson from './lessons/AnalyticGeometryCircleLesson';
import AnalyticGeometryCircleTangentLesson from './lessons/AnalyticGeometryCircleTangentLesson';
import AnalyticGeometryCircleLineIntersectionLesson from './lessons/AnalyticGeometryCircleLineIntersectionLesson';
import TrigonometryRightTriangleLesson from './lessons/TrigonometryRightTriangleLesson';
import FunctionsParabolaInvestigationLesson from './lessons/FunctionsParabolaInvestigationLesson';

// ============================================
// GROUP 803 - ADVANCED MATH & STATISTICS
// ============================================
import CalculusPolynomialLesson from './lessons/CalculusPolynomialLesson';
import CalculusRationalLesson from './lessons/CalculusRationalLesson';
import CalculusSquareRootLesson from './lessons/CalculusSquareRootLesson';
import CalculusOptimizationLesson from './lessons/CalculusOptimizationLesson';
import CalculusIntegralPolynomialLesson from './lessons/CalculusIntegralPolynomialLesson';
import ArithmeticSequencesIntroLesson from './lessons/ArithmeticSequencesIntroLesson';
import SequencesArithmeticSumLesson from './lessons/SequencesArithmeticSumLesson';
import StatisticsIntroLesson from './lessons/StatisticsIntroLesson';
import StatisticsDispersionLesson from './lessons/StatisticsDispersionLesson';
import NormalDistributionLesson from './lessons/NormalDistributionLesson';
import ProbabilityIntroLesson from './lessons/ProbabilityIntroLesson';
import ProbabilityTreeConditionalLesson from './lessons/ProbabilityTreeConditionalLesson';
import ProblemsWorkRateLesson from './lessons/ProblemsWorkRateLesson';
import ProblemsMotionLesson from './lessons/ProblemsMotionLesson';
import ProblemsGeometricAlgebraicLesson from './lessons/ProblemsGeometricAlgebraicLesson';
import ProblemsBuySellLesson from './lessons/ProblemsBuySellLesson';
import GrowthDecayLesson from './lessons/GrowthDecayLesson';

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
  const { isAuthenticated, login, isLoading } = useAuth();

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
    return <LoginScreen onLogin={login} />;
  }  return (
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
        } />

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
