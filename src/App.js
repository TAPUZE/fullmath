import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/lessons.css';

// Import new main components
import HomePage from './components/HomePage';
import Questionnaire35182 from './components/Questionnaire35182';
import Questionnaire35381 from './components/Questionnaire35381';
import Questionnaire35382 from './components/Questionnaire35382';
import LessonMenu from './components/LessonMenu';
import ProgressDashboard from './components/ProgressDashboard';

// Import all lesson components
import GeometryShapesLesson from './lessons/GeometryShapesLesson';
import AnalyticGeometryCircleLesson from './lessons/AnalyticGeometryCircleLesson';
import AnalyticGeometryCircleTangentLesson from './lessons/AnalyticGeometryCircleTangentLesson';
import AnalyticGeometryCircleLineIntersectionLesson from './lessons/AnalyticGeometryCircleLineIntersectionLesson';
import AnalyticGeometryLineContinuedLesson from './lessons/AnalyticGeometryLineContinuedLesson';
import ProblemsWorkRateLesson from './lessons/ProblemsWorkRateLesson';
import ProblemsMotionLesson from './lessons/ProblemsMotionLesson';
import ProblemsGeometricAlgebraicLesson from './lessons/ProblemsGeometricAlgebraicLesson';
import ProblemsBuySellLesson from './lessons/ProblemsBuySellLesson';
import CalculusSquareRootLesson from './lessons/CalculusSquareRootLesson';
import CalculusOptimizationLesson from './lessons/CalculusOptimizationLesson';
import CalculusRationalLesson from './lessons/CalculusRationalLesson';
import CalculusPolynomialLesson from './lessons/CalculusPolynomialLesson';
import CalculusIntegralPolynomialLesson from './lessons/CalculusIntegralPolynomialLesson';

// Import new lesson components from שאלון 35381 and 35182
import FunctionsParabolaInvestigationLesson from './lessons/FunctionsParabolaInvestigationLesson';
import AlgebraLinearEquationOneVariableLesson from './lessons/AlgebraLinearEquationOneVariableLesson';
import AlgebraPercentagesLesson from './lessons/AlgebraPercentagesLesson';
import AlgebraInequalitiesLesson from './lessons/AlgebraInequalitiesLesson';
import AlgebraQuadraticEquationsLesson from './lessons/AlgebraQuadraticEquationsLesson';
import AlgebraWordProblemsLesson from './lessons/AlgebraWordProblemsLesson';
import AlgebraLinearEquationsTwoVariablesLesson from './lessons/AlgebraLinearEquationsTwoVariablesLesson';
import AnalyticGeometryDistanceLesson from './lessons/AnalyticGeometryDistanceLesson';
import AnalyticGeometryMidpointLesson from './lessons/AnalyticGeometryMidpointLesson';
import AnalyticGeometryPointsLesson from './lessons/AnalyticGeometryPointsLesson';
import AnalyticGeometrySlopeLesson from './lessons/AnalyticGeometrySlopeLesson';
import GeometryAreaPerimeterLesson from './lessons/GeometryAreaPerimeterLesson';
import StatisticsIntroLesson from './lessons/StatisticsIntroLesson';
import GrowthDecayLesson from './lessons/GrowthDecayLesson';
import StatisticsDispersionLesson from './lessons/StatisticsDispersionLesson';
import SequencesArithmeticSumLesson from './lessons/SequencesArithmeticSumLesson';
import ArithmeticSequencesIntroLesson from './lessons/ArithmeticSequencesIntroLesson';
import NormalDistributionLesson from './lessons/NormalDistributionLesson';
import ProbabilityTreeConditionalLesson from './lessons/ProbabilityTreeConditionalLesson';

// New lesson components from שאלון 35182
import GeometryShapesPropertiesLesson from './lessons/GeometryShapesPropertiesLesson';
import ProbabilityIntroLesson from './lessons/ProbabilityIntroLesson';
import TrigonometryRightTriangleLesson from './lessons/TrigonometryRightTriangleLesson';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<LessonMenu />} />
          <Route path="/progress" element={<ProgressDashboard />} />
          <Route path="/questionnaire/35182" element={<Questionnaire35182 />} />
          <Route path="/questionnaire/35381" element={<Questionnaire35381 />} />
          <Route path="/questionnaire/35382" element={<Questionnaire35382 />} />
          
          {/* Geometry Lessons */}
          <Route path="/lesson/geometry-shapes" element={<GeometryShapesLesson />} />
          
          {/* Analytic Geometry Lessons */}
          <Route path="/lesson/analytic-geometry-circle" element={<AnalyticGeometryCircleLesson />} />
          <Route path="/lesson/analytic-geometry-circle-tangent" element={<AnalyticGeometryCircleTangentLesson />} />
          <Route path="/lesson/analytic-geometry-circle-line-intersection" element={<AnalyticGeometryCircleLineIntersectionLesson />} />
          <Route path="/lesson/analytic-geometry-line-continued" element={<AnalyticGeometryLineContinuedLesson />} />
          
          {/* Problems Lessons */}
          <Route path="/lesson/problems-work-rate" element={<ProblemsWorkRateLesson />} />
          <Route path="/lesson/problems-motion" element={<ProblemsMotionLesson />} />
          <Route path="/lesson/problems-geometric-algebraic" element={<ProblemsGeometricAlgebraicLesson />} />
          <Route path="/lesson/problems-buy-sell" element={<ProblemsBuySellLesson />} />
            {/* Calculus Lessons */}
          <Route path="/lesson/calculus-square-root" element={<CalculusSquareRootLesson />} />
          <Route path="/lesson/calculus-optimization" element={<CalculusOptimizationLesson />} />
          <Route path="/lesson/calculus-rational" element={<CalculusRationalLesson />} />
          <Route path="/lesson/calculus-polynomial" element={<CalculusPolynomialLesson />} />
          <Route path="/lesson/calculus-integral-polynomial" element={<CalculusIntegralPolynomialLesson />} />
            {/* New Lessons from שאלון 35381 */}
          <Route path="/lessons/functions-parabola-investigation" element={<FunctionsParabolaInvestigationLesson />} />
          <Route path="/lessons/growth-decay" element={<GrowthDecayLesson />} />
          <Route path="/lessons/statistics-dispersion" element={<StatisticsDispersionLesson />} />
          <Route path="/lessons/sequences-arithmetic-sum" element={<SequencesArithmeticSumLesson />} />
            {/* New Lessons from שאלון 35182 */}
          <Route path="/lessons/algebra-linear-equation-one-variable" element={<AlgebraLinearEquationOneVariableLesson />} />
          <Route path="/lessons/algebra-percentages" element={<AlgebraPercentagesLesson />} />
          <Route path="/lessons/algebra-inequalities" element={<AlgebraInequalitiesLesson />} />
          <Route path="/lessons/algebra-quadratic-equations" element={<AlgebraQuadraticEquationsLesson />} />
          <Route path="/lessons/algebra-word-problems" element={<AlgebraWordProblemsLesson />} />
          <Route path="/lessons/algebra-linear-equations-two-variables" element={<AlgebraLinearEquationsTwoVariablesLesson />} />
          <Route path="/lessons/analytic-geometry-distance" element={<AnalyticGeometryDistanceLesson />} />
          <Route path="/lessons/analytic-geometry-midpoint" element={<AnalyticGeometryMidpointLesson />} />
          <Route path="/lessons/analytic-geometry-points" element={<AnalyticGeometryPointsLesson />} />
          <Route path="/lessons/analytic-geometry-slope" element={<AnalyticGeometrySlopeLesson />} />
          <Route path="/lessons/geometry-area-perimeter" element={<GeometryAreaPerimeterLesson />} />
          <Route path="/lessons/geometry-shapes-properties" element={<GeometryShapesPropertiesLesson />} />
          <Route path="/lessons/statistics-intro" element={<StatisticsIntroLesson />} />
          <Route path="/lessons/probability-intro" element={<ProbabilityIntroLesson />} />
          <Route path="/lessons/probability-tree-conditional" element={<ProbabilityTreeConditionalLesson />} />
          <Route path="/lessons/sequences-arithmetic-intro" element={<ArithmeticSequencesIntroLesson />} />
          <Route path="/lessons/normal-distribution" element={<NormalDistributionLesson />} />
          <Route path="/lessons/trigonometry-right-triangle" element={<TrigonometryRightTriangleLesson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
