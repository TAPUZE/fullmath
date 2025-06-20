# PowerShell script to add LessonNavigation to all MAHAT lessons
# This script adds the import and component to all MAHAT lesson files

$BaseDir = "c:\Users\נס מולטימדיה\Desktop\math\fullmath\fullmath\src\lessons"

$MahatLessons = @(
    "Mahat13PowersBasic.js",
    "Mahat14AlgebraicExpressions.js",
    "Mahat15MultiplicationFormulas.js",
    "Mahat16AlgebraicFractions.js",
    "Mahat21AdvancedPowers.js",
    "Mahat22RootsRational.js",
    "Mahat23ScientificNotation.js",
    "Mahat31GraphReading.js",
    "Mahat41LinearEquations.js",
    "Mahat42LinearSystems.js",
    "Mahat43QuadraticEquations.js",
    "Mahat44MixedSystems.js",
    "Mahat51FormulaSubject.js",
    "Mahat61PlaneShapes.js",
    "Mahat62CoordinateGeometry.js",
    "Mahat71FunctionLine.js",
    "Mahat72SlopeParallel.js",
    "Mahat73MidpointDistance.js",
    "Mahat74ImplicitFunction.js",
    "Mahat75ComplexGeometry.js",
    "Mahat81QuadraticIntro.js",
    "Mahat82ParabolaAnalysis.js",
    "Mahat83LineParabola.js",
    "Mahat91PurchaseProblems.js",
    "Mahat92GeometryProblems.js",
    "Mahat101TrigBasics.js",
    "Mahat102TrigFunctions.js",
    "Mahat103ComplexShapes.js"
)

Write-Host "🚀 Starting MAHAT Navigation Update Process..." -ForegroundColor Green
Write-Host ""

$successCount = 0
$errorCount = 0

foreach ($lesson in $MahatLessons) {
    $lessonFile = Join-Path $BaseDir $lesson
    
    Write-Host "Processing $lesson..." -ForegroundColor Yellow
    
    # Check if file exists
    if (-not (Test-Path $lessonFile)) {
        Write-Host "  ⚠️  Warning: $lessonFile not found, skipping..." -ForegroundColor Red
        $errorCount++
        continue
    }
    
    try {
        # Read the file content
        $content = Get-Content $lessonFile -Raw
        
        # Check if LessonNavigation import already exists
        if ($content -notmatch "import LessonNavigation") {
            Write-Host "  📝 Adding LessonNavigation import..." -ForegroundColor Cyan
            # Add import after Quiz import line
            $content = $content -replace "(import Quiz from '.\/components\/Quiz';)", "`$1`nimport LessonNavigation from '../components/LessonNavigation';"
        }
        
        # Check if LessonNavigation component already exists
        if ($content -notmatch "<LessonNavigation") {
            Write-Host "  🔧 Adding LessonNavigation component..." -ForegroundColor Cyan
            # Add navigation before the closing div of LessonLayout
            $content = $content -replace "(\s*)<\/div>\s*<\/LessonLayout>", "`n`n        <LessonNavigation lessonId={lessonId} />`$1</div>`n    </LessonLayout>"
        }
        
        # Write the updated content back to the file
        Set-Content $lessonFile $content -Encoding UTF8
        
        Write-Host "  ✅ Completed $lesson" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host "  ❌ Error processing $lesson`: $_" -ForegroundColor Red
        $errorCount++
    }
}

Write-Host ""
Write-Host "🎉 MAHAT Navigation Update Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Summary:" -ForegroundColor White
Write-Host "  ✅ Successfully updated: $successCount lessons" -ForegroundColor Green
Write-Host "  ❌ Errors encountered: $errorCount lessons" -ForegroundColor Red
Write-Host ""
Write-Host "📋 Changes made to each lesson:" -ForegroundColor White
Write-Host "  • Added LessonNavigation import statement" -ForegroundColor Cyan
Write-Host "  • Added <LessonNavigation lessonId={lessonId} /> component" -ForegroundColor Cyan
Write-Host "  • Navigation provides previous/next lesson functionality" -ForegroundColor Cyan
Write-Host "  • Progress tracking integrated with MAHAT curriculum" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔄 Next steps:" -ForegroundColor White
Write-Host "  1. Test navigation in development: npm start" -ForegroundColor Yellow
Write-Host "  2. Check a few lessons to ensure navigation works correctly" -ForegroundColor Yellow  
Write-Host "  3. Build and deploy: npm run build" -ForegroundColor Yellow
Write-Host ""
