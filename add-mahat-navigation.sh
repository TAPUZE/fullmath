#!/bin/bash

# Script to add LessonNavigation to all MAHAT lessons
# This script adds the import and component to all MAHAT lesson files

# List of all MAHAT lesson files
MAHAT_LESSONS=(
    "Mahat13PowersBasic.js"
    "Mahat14AlgebraicExpressions.js"
    "Mahat15MultiplicationFormulas.js"
    "Mahat16AlgebraicFractions.js"
    "Mahat21AdvancedPowers.js"
    "Mahat22RootsRational.js"
    "Mahat23ScientificNotation.js"
    "Mahat31GraphReading.js"
    "Mahat41LinearEquations.js"
    "Mahat42LinearSystems.js"
    "Mahat43QuadraticEquations.js"
    "Mahat44MixedSystems.js"
    "Mahat51FormulaSubject.js"
    "Mahat61PlaneShapes.js"
    "Mahat62CoordinateGeometry.js"
    "Mahat71FunctionLine.js"
    "Mahat72SlopeParallel.js"
    "Mahat73MidpointDistance.js"
    "Mahat74ImplicitFunction.js"
    "Mahat75ComplexGeometry.js"
    "Mahat81QuadraticIntro.js"
    "Mahat82ParabolaAnalysis.js"
    "Mahat83LineParabola.js"
    "Mahat91PurchaseProblems.js"
    "Mahat92GeometryProblems.js"
    "Mahat101TrigBasics.js"
    "Mahat102TrigFunctions.js"
    "Mahat103ComplexShapes.js"
)

BASE_DIR="c:\\Users\\נס מולטימדיה\\Desktop\\math\\fullmath\\fullmath\\src\\lessons"

for lesson in "${MAHAT_LESSONS[@]}"; do
    lesson_file="$BASE_DIR\\$lesson"
    
    echo "Processing $lesson..."
    
    # Check if file exists
    if [ ! -f "$lesson_file" ]; then
        echo "  Warning: $lesson_file not found, skipping..."
        continue
    fi
    
    # Add import if not already present
    if ! grep -q "LessonNavigation" "$lesson_file"; then
        echo "  Adding LessonNavigation import..."
        # Add import after Quiz import line
        sed -i "/import Quiz from '\.\.\/components\/Quiz';/a import LessonNavigation from '../components/LessonNavigation';" "$lesson_file"
    fi
    
    # Add navigation component before closing div if not already present
    if ! grep -q "<LessonNavigation" "$lesson_file"; then
        echo "  Adding LessonNavigation component..."
        # Add navigation before the closing </div> of LessonLayout
        sed -i '/<\/div>/{N; s/<\/div>\s*<\/LessonLayout>/<LessonNavigation lessonId={lessonId} \/>\n      <\/div>\n    <\/LessonLayout>/}' "$lesson_file"
    fi
    
    echo "  ✅ Completed $lesson"
done

echo ""
echo "🎉 All MAHAT lessons have been updated with navigation!"
echo ""
echo "Summary of changes:"
echo "- Added LessonNavigation import to all MAHAT lesson files"
echo "- Added <LessonNavigation lessonId={lessonId} /> component before lesson closing"
echo "- Navigation provides previous/next lesson functionality"
echo "- Progress tracking integrated with MAHAT curriculum"
echo ""
echo "Next steps:"
echo "1. Test the navigation in development: npm start"
echo "2. Check a few lessons to ensure navigation works correctly"
echo "3. Build and deploy: npm run build"
