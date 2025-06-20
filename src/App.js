import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/lessons.css';

// ============================================
// MAIN COMPONENTS
// ============================================
import HomePage from './components/HomePage';
import LessonMenu from './components/LessonMenu';
import MahatLessonMenu from './components/MahatLessonMenu';
import ProgressDashboard from './components/ProgressDashboard';
import TeachersDashboard from './components/TeachersDashboard';
import MathTest from './components/MathTest';
import MathTestClean from './components/MathTestClean';

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

// ============================================
// MAHAT - TECHNOLOGICAL PREPARATORY COURSE
// ============================================
// Topic 1: Algebraic Techniques (30 hours)
import Mahat11Basics from './lessons/Mahat11Basics';
import Mahat12Fractions from './lessons/Mahat12Fractions';
import Mahat13PowersBasic from './lessons/Mahat13PowersBasic';
import Mahat14AlgebraicExpressions from './lessons/Mahat14AlgebraicExpressions';
import Mahat15MultiplicationFormulas from './lessons/Mahat15MultiplicationFormulas';
import Mahat16AlgebraicFractions from './lessons/Mahat16AlgebraicFractions';

// Topic 2: Powers and Roots (25 hours)
import Mahat21AdvancedPowers from './lessons/Mahat21AdvancedPowers';
import Mahat22RootsRational from './lessons/Mahat22RootsRational';
import Mahat23ScientificNotation from './lessons/Mahat23ScientificNotation';

// Topic 3: Graph Reading (20 hours)
import Mahat31GraphReading from './lessons/Mahat31GraphReading';

// Topic 4: Equations and Systems (25 hours)
import Mahat41LinearEquations from './lessons/Mahat41LinearEquations';
import Mahat42LinearSystems from './lessons/Mahat42LinearSystems';
import Mahat43QuadraticEquations from './lessons/Mahat43QuadraticEquations';
import Mahat44MixedSystems from './lessons/Mahat44MixedSystems';

// Topic 5: Formula Subject Change (20 hours)
import Mahat51FormulaSubject from './lessons/Mahat51FormulaSubject';

// Topic 6: Introduction to Geometry (20 hours)
import Mahat61PlaneShapes from './lessons/Mahat61PlaneShapes';
import Mahat62CoordinateGeometry from './lessons/Mahat62CoordinateGeometry';

// Topic 7: Analytic Geometry (40 hours)
import Mahat71FunctionLine from './lessons/Mahat71FunctionLine';
import Mahat72SlopeParallel from './lessons/Mahat72SlopeParallel';
import Mahat73MidpointDistance from './lessons/Mahat73MidpointDistance';
import Mahat74ImplicitFunction from './lessons/Mahat74ImplicitFunction';
import Mahat75ComplexGeometry from './lessons/Mahat75ComplexGeometry';

// Topic 8: Parabolas (30 hours)
import Mahat81QuadraticIntro from './lessons/Mahat81QuadraticIntro';
import Mahat82ParabolaAnalysis from './lessons/Mahat82ParabolaAnalysis';
import Mahat83LineParabola from './lessons/Mahat83LineParabola';

// Topic 9: Word Problems (30 hours)
import Mahat91PurchaseProblems from './lessons/Mahat91PurchaseProblems';
import Mahat92GeometryProblems from './lessons/Mahat92GeometryProblems';

// Topic 10: Trigonometry (30 hours)
import Mahat101TrigBasics from './lessons/Mahat101TrigBasics';
import Mahat102TrigFunctions from './lessons/Mahat102TrigFunctions';
import Mahat103ComplexShapes from './lessons/Mahat103ComplexShapes';

function App() {
  return (
    <Router>
      <div className="App">        <Routes>          {/* ============================================ */}
          {/* MAIN PAGES */}
          {/* ============================================ */}          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<LessonMenu />} />
          <Route path="/mahat-menu" element={<MahatLessonMenu />} />
          <Route path="/progress" element={<ProgressDashboard />} />
          <Route path="/teachers" element={<TeachersDashboard />} />
          <Route path="/math-test" element={<MathTest />} />
          <Route path="/math-test-clean" element={<MathTestClean />} />
          
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
          <Route path="/lesson/problems-buy-sell" element={<ProblemsBuySellLesson />} />          <Route path="/lessons/growth-decay" element={<GrowthDecayLesson />} />          {/* ============================================ */}
          {/* MAHAT - TECHNOLOGICAL PREPARATORY COURSE */}
          {/* ============================================ */}
          
          {/* Topic 1: Algebraic Techniques (30 hours) */}
          <Route path="/lessons/mahat-1-1-basics" element={<Mahat11Basics />} />
          <Route path="/lessons/mahat-1-2-fractions" element={<Mahat12Fractions />} />
          <Route path="/lessons/mahat-1-3-powers-basic" element={<Mahat13PowersBasic />} />
          <Route path="/lessons/mahat-1-4-algebraic-expressions" element={<Mahat14AlgebraicExpressions />} />
          <Route path="/lessons/mahat-1-5-multiplication-formulas" element={<Mahat15MultiplicationFormulas />} />
          <Route path="/lessons/mahat-1-6-algebraic-fractions" element={<Mahat16AlgebraicFractions />} />

          {/* Topic 2: Powers and Roots (25 hours) */}
          <Route path="/lessons/mahat-2-1-advanced-powers" element={<Mahat21AdvancedPowers />} />
          <Route path="/lessons/mahat-2-2-roots-rational" element={<Mahat22RootsRational />} />
          <Route path="/lessons/mahat-2-3-scientific-notation" element={<Mahat23ScientificNotation />} />

          {/* Topic 3: Graph Reading (20 hours) */}
          <Route path="/lessons/mahat-3-1-graph-reading" element={<Mahat31GraphReading />} />

          {/* Topic 4: Equations and Systems (25 hours) */}
          <Route path="/lessons/mahat-4-1-linear-equations" element={<Mahat41LinearEquations />} />
          <Route path="/lessons/mahat-4-2-linear-systems" element={<Mahat42LinearSystems />} />
          <Route path="/lessons/mahat-4-3-quadratic-equations" element={<Mahat43QuadraticEquations />} />
          <Route path="/lessons/mahat-4-4-mixed-systems" element={<Mahat44MixedSystems />} />

          {/* Topic 5: Formula Subject Change (20 hours) */}
          <Route path="/lessons/mahat-5-1-formula-subject" element={<Mahat51FormulaSubject />} />

          {/* Topic 6: Introduction to Geometry (20 hours) */}
          <Route path="/lessons/mahat-6-1-plane-shapes" element={<Mahat61PlaneShapes />} />
          <Route path="/lessons/mahat-6-2-coordinate-geometry" element={<Mahat62CoordinateGeometry />} />

          {/* Topic 7: Analytic Geometry (40 hours) */}
          <Route path="/lessons/mahat-7-1-function-line" element={<Mahat71FunctionLine />} />
          <Route path="/lessons/mahat-7-2-slope-parallel" element={<Mahat72SlopeParallel />} />
          <Route path="/lessons/mahat-7-3-midpoint-distance" element={<Mahat73MidpointDistance />} />
          <Route path="/lessons/mahat-7-4-implicit-function" element={<Mahat74ImplicitFunction />} />
          <Route path="/lessons/mahat-7-5-complex-geometry" element={<Mahat75ComplexGeometry />} />

          {/* Topic 8: Parabolas (30 hours) */}
          <Route path="/lessons/mahat-8-1-quadratic-intro" element={<Mahat81QuadraticIntro />} />
          <Route path="/lessons/mahat-8-2-parabola-analysis" element={<Mahat82ParabolaAnalysis />} />
          <Route path="/lessons/mahat-8-3-line-parabola" element={<Mahat83LineParabola />} />

          {/* Topic 9: Word Problems (30 hours) */}
          <Route path="/lessons/mahat-9-1-purchase-problems" element={<Mahat91PurchaseProblems />} />
          <Route path="/lessons/mahat-9-2-geometry-problems" element={<Mahat92GeometryProblems />} />

          {/* Topic 10: Trigonometry (30 hours) */}
          <Route path="/lessons/mahat-10-1-trig-basics" element={<Mahat101TrigBasics />} />
          <Route path="/lessons/mahat-10-2-trig-functions" element={<Mahat102TrigFunctions />} />
          <Route path="/lessons/mahat-10-3-complex-shapes" element={<Mahat103ComplexShapes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
