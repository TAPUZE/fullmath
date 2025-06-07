import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/lessons.css';

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
    <Router>
      <div className="App">        <Routes>          {/* ============================================ */}
          {/* MAIN PAGES */}
          {/* ============================================ */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<LessonMenu />} />
          <Route path="/progress" element={<ProgressDashboard />} />
          <Route path="/teachers" element={<TeachersDashboard />} />
          
          {/* ============================================ */}
          {/* QUESTIONNAIRES */}
          {/* ============================================ */}
          <Route path="/questionnaire/35182" element={<Questionnaire35182 />} />
          <Route path="/questionnaire/35381" element={<Questionnaire35381 />} />
          <Route path="/questionnaire/35382" element={<Questionnaire35382 />} />
          
          {/* ============================================ */}
          {/* GROUP 801 - ALGEBRA & BASIC MATH */}
          {/* ============================================ */}
          <Route path="/lessons/algebra-linear-equation-one-variable" element={<AlgebraLinearEquationOneVariableLesson />} />
          <Route path="/lessons/algebra-linear-equations-two-variables" element={<AlgebraLinearEquationsTwoVariablesLesson />} />
          <Route path="/lessons/algebra-percentages" element={<AlgebraPercentagesLesson />} />
          <Route path="/lessons/algebra-inequalities" element={<AlgebraInequalitiesLesson />} />
          <Route path="/lessons/algebra-quadratic-equations" element={<AlgebraQuadraticEquationsLesson />} />
          <Route path="/lessons/algebra-word-problems" element={<AlgebraWordProblemsLesson />} />
          <Route path="/lesson/geometry-shapes" element={<GeometryShapesLesson />} />
          <Route path="/lessons/geometry-shapes-properties" element={<GeometryShapesPropertiesLesson />} />
          <Route path="/lessons/geometry-area-perimeter" element={<GeometryAreaPerimeterLesson />} />
          
          {/* ============================================ */}
          {/* GROUP 802 - GEOMETRY & FUNCTIONS */}
          {/* ============================================ */}
          <Route path="/lessons/analytic-geometry-points" element={<AnalyticGeometryPointsLesson />} />
          <Route path="/lessons/analytic-geometry-slope" element={<AnalyticGeometrySlopeLesson />} />
          <Route path="/lessons/analytic-geometry-distance" element={<AnalyticGeometryDistanceLesson />} />
          <Route path="/lessons/analytic-geometry-midpoint" element={<AnalyticGeometryMidpointLesson />} />
          <Route path="/lesson/analytic-geometry-line-continued" element={<AnalyticGeometryLineContinuedLesson />} />
          <Route path="/lesson/analytic-geometry-circle" element={<AnalyticGeometryCircleLesson />} />
          <Route path="/lesson/analytic-geometry-circle-tangent" element={<AnalyticGeometryCircleTangentLesson />} />
          <Route path="/lesson/analytic-geometry-circle-line-intersection" element={<AnalyticGeometryCircleLineIntersectionLesson />} />
          <Route path="/lessons/trigonometry-right-triangle" element={<TrigonometryRightTriangleLesson />} />
          <Route path="/lessons/functions-parabola-investigation" element={<FunctionsParabolaInvestigationLesson />} />
          
          {/* ============================================ */}
          {/* GROUP 803 - ADVANCED MATH & STATISTICS */}
          {/* ============================================ */}
          <Route path="/lesson/calculus-polynomial" element={<CalculusPolynomialLesson />} />
          <Route path="/lesson/calculus-rational" element={<CalculusRationalLesson />} />
          <Route path="/lesson/calculus-square-root" element={<CalculusSquareRootLesson />} />
          <Route path="/lesson/calculus-optimization" element={<CalculusOptimizationLesson />} />
          <Route path="/lesson/calculus-integral-polynomial" element={<CalculusIntegralPolynomialLesson />} />
          <Route path="/lessons/sequences-arithmetic-intro" element={<ArithmeticSequencesIntroLesson />} />
          <Route path="/lessons/sequences-arithmetic-sum" element={<SequencesArithmeticSumLesson />} />
          <Route path="/lessons/statistics-intro" element={<StatisticsIntroLesson />} />
          <Route path="/lessons/statistics-dispersion" element={<StatisticsDispersionLesson />} />
          <Route path="/lessons/normal-distribution" element={<NormalDistributionLesson />} />
          <Route path="/lessons/probability-intro" element={<ProbabilityIntroLesson />} />
          <Route path="/lessons/probability-tree-conditional" element={<ProbabilityTreeConditionalLesson />} />
          <Route path="/lesson/problems-work-rate" element={<ProblemsWorkRateLesson />} />
          <Route path="/lesson/problems-motion" element={<ProblemsMotionLesson />} />
          <Route path="/lesson/problems-geometric-algebraic" element={<ProblemsGeometricAlgebraicLesson />} />
          <Route path="/lesson/problems-buy-sell" element={<ProblemsBuySellLesson />} />
          <Route path="/lessons/growth-decay" element={<GrowthDecayLesson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
