import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/lessons.css';

// Import debug utilities
import './utils/userDataDebug.js';
import './utils/testUserData.js';

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
        
        {/* Student Routes */}
        <Route path="/lessons" element={
          <ProtectedRoute requireRole="student">
            <LessonMenu />
          </ProtectedRoute>
        } />
        <Route path="/menu" element={
          <ProtectedRoute requireRole="student">
            <LessonMenu />
          </ProtectedRoute>
        } />
        
        <Route path="/progress" element={
          <ProtectedRoute requireRole="student">
            <ProgressDashboard />
          </ProtectedRoute>
        } />

        {/* Teacher Routes */}
        <Route path="/teachers" element={
          <ProtectedRoute requireRole="teacher">
            <TeachersDashboard />
          </ProtectedRoute>
        } />

        {/* Questionnaire Routes - Available to Students */}
        <Route path="/questionnaire/35182" element={
          <ProtectedRoute requireRole="student">
            <Questionnaire35182 />
          </ProtectedRoute>
        } />
        <Route path="/questionnaire/35381" element={
          <ProtectedRoute requireRole="student">
            <Questionnaire35381 />
          </ProtectedRoute>
        } />
        <Route path="/questionnaire/35382" element={
          <ProtectedRoute requireRole="student">
            <Questionnaire35382 />
          </ProtectedRoute>
        } />
          {/* Lesson Routes - Available to Students */}
        <Route path="/lessons/algebra-linear-equation-one-variable" element={
          <ProtectedRoute requireRole="student">
            <AlgebraLinearEquationOneVariableLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-linear-equations-two-variables" element={
          <ProtectedRoute requireRole="student">
            <AlgebraLinearEquationsTwoVariablesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-percentages" element={
          <ProtectedRoute requireRole="student">
            <AlgebraPercentagesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-inequalities" element={
          <ProtectedRoute requireRole="student">
            <AlgebraInequalitiesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-quadratic-equations" element={
          <ProtectedRoute requireRole="student">
            <AlgebraQuadraticEquationsLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/algebra-word-problems" element={
          <ProtectedRoute requireRole="student">
            <AlgebraWordProblemsLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/geometry-shapes" element={
          <ProtectedRoute requireRole="student">
            <GeometryShapesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/geometry-shapes-properties" element={
          <ProtectedRoute requireRole="student">
            <GeometryShapesPropertiesLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/geometry-area-perimeter" element={
          <ProtectedRoute requireRole="student">
            <GeometryAreaPerimeterLesson />
          </ProtectedRoute>
        } />
        
        {/* Additional lesson routes with protection... */}
        <Route path="/lessons/analytic-geometry-points" element={
          <ProtectedRoute requireRole="student">
            <AnalyticGeometryPointsLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/analytic-geometry-slope" element={
          <ProtectedRoute requireRole="student">
            <AnalyticGeometrySlopeLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/analytic-geometry-distance" element={
          <ProtectedRoute requireRole="student">
            <AnalyticGeometryDistanceLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/analytic-geometry-midpoint" element={
          <ProtectedRoute requireRole="student">
            <AnalyticGeometryMidpointLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/analytic-geometry-line-continued" element={
          <ProtectedRoute requireRole="student">
            <AnalyticGeometryLineContinuedLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/analytic-geometry-circle" element={
          <ProtectedRoute requireRole="student">
            <AnalyticGeometryCircleLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/analytic-geometry-circle-tangent" element={
          <ProtectedRoute requireRole="student">
            <AnalyticGeometryCircleTangentLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/analytic-geometry-circle-line-intersection" element={
          <ProtectedRoute requireRole="student">
            <AnalyticGeometryCircleLineIntersectionLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/trigonometry-right-triangle" element={
          <ProtectedRoute requireRole="student">
            <TrigonometryRightTriangleLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/functions-parabola-investigation" element={
          <ProtectedRoute requireRole="student">
            <FunctionsParabolaInvestigationLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-polynomial" element={
          <ProtectedRoute requireRole="student">
            <CalculusPolynomialLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-rational" element={
          <ProtectedRoute requireRole="student">
            <CalculusRationalLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-square-root" element={
          <ProtectedRoute requireRole="student">
            <CalculusSquareRootLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-optimization" element={
          <ProtectedRoute requireRole="student">
            <CalculusOptimizationLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/calculus-integral-polynomial" element={
          <ProtectedRoute requireRole="student">
            <CalculusIntegralPolynomialLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/sequences-arithmetic-intro" element={
          <ProtectedRoute requireRole="student">
            <ArithmeticSequencesIntroLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/sequences-arithmetic-sum" element={
          <ProtectedRoute requireRole="student">
            <SequencesArithmeticSumLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/statistics-intro" element={
          <ProtectedRoute requireRole="student">
            <StatisticsIntroLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/statistics-dispersion" element={
          <ProtectedRoute requireRole="student">
            <StatisticsDispersionLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/normal-distribution" element={
          <ProtectedRoute requireRole="student">
            <NormalDistributionLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/probability-intro" element={
          <ProtectedRoute requireRole="student">
            <ProbabilityIntroLesson />
          </ProtectedRoute>
        } />
        <Route path="/lessons/probability-tree-conditional" element={
          <ProtectedRoute requireRole="student">
            <ProbabilityTreeConditionalLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/problems-work-rate" element={
          <ProtectedRoute requireRole="student">
            <ProblemsWorkRateLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/problems-motion" element={
          <ProtectedRoute requireRole="student">
            <ProblemsMotionLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/problems-geometric-algebraic" element={
          <ProtectedRoute requireRole="student">
            <ProblemsGeometricAlgebraicLesson />
          </ProtectedRoute>
        } />
        <Route path="/lesson/problems-buy-sell" element={
          <ProtectedRoute requireRole="student">
            <ProblemsBuySellLesson />
          </ProtectedRoute>
        } />        <Route path="/lessons/growth-decay" element={
          <ProtectedRoute requireRole="student">
            <GrowthDecayLesson />
          </ProtectedRoute>
        } />
      </Routes>
      </UserInitializer>
    </div>
  );
}

export default App;
