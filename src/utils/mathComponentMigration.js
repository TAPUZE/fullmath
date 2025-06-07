/**
 * Math Component Migration Utilities
 * Helps standardize FormulaBox and HebrewMathBox usage across lessons
 */

/**
 * Validates and normalizes math component props
 * @param {Object} props - The component props
 * @returns {Object} - Normalized props
 */
export const normalizeMathProps = (props) => {
  const {
    children,
    formula,
    inline = false,
    isInline = false,
    dir = 'ltr',
    className = '',
    ...otherProps
  } = props;

  return {
    children: children || formula || '',
    inline: inline || isInline,
    dir,
    className,
    ...otherProps
  };
};

/**
 * Detects if a formula contains Hebrew text
 * @param {string} content - The formula content
 * @returns {boolean} - True if contains Hebrew
 */
export const containsHebrew = (content) => {
  if (typeof content !== 'string') return false;
  return /[\u0590-\u05FF]/.test(content);
};

/**
 * Suggests the appropriate component based on content
 * @param {string} content - The formula content
 * @returns {string} - 'FormulaBox' or 'HebrewMathBox'
 */
export const suggestComponent = (content) => {
  return containsHebrew(content) ? 'HebrewMathBox' : 'FormulaBox';
};

/**
 * Migration patterns for common usage inconsistencies
 */
export const migrationPatterns = {
  // Legacy patterns to standardize
  LEGACY_PATTERNS: [
    {
      pattern: /FormulaBox.*formula=["']([^"']+)["']/g,
      replacement: 'FormulaBox',
      note: 'Use children instead of formula prop'
    },
    {
      pattern: /FormulaBox.*isInline/g,
      replacement: 'FormulaBox inline',
      note: 'Use inline instead of isInline prop'
    },
    {
      pattern: /FormulaBox.*dir=["']ltr["']/g,
      replacement: 'FormulaBox',
      note: 'dir="ltr" is default, can be omitted'
    }
  ],

  // Recommended patterns
  RECOMMENDED_PATTERNS: {
    inline: '<FormulaBox inline>{content}</FormulaBox>',
    block: '<FormulaBox>{content}</FormulaBox>',
    hebrewInline: '<HebrewMathBox inline>{content}</HebrewMathBox>',
    hebrewBlock: '<HebrewMathBox>{content}</HebrewMathBox>'
  }
};

/**
 * Performance optimization recommendations
 */
export const performanceOptimizations = {
  // Memoization for complex formulas
  memoizedFormula: `
    const MemoizedFormula = React.memo(({ children, ...props }) => (
      <FormulaBox {...props}>{children}</FormulaBox>
    ));
  `,

  // Lazy loading for heavy math content
  lazyMathLoader: `
    const LazyMathContent = React.lazy(() => 
      import('./components/MathContent')
    );
  `
};

/**
 * Best practices guide
 */
export const bestPractices = {
  DO: [
    'Use FormulaBox for pure mathematical expressions',
    'Use HebrewMathBox when formulas contain Hebrew text',
    'Use inline prop for inline math, omit for block math',
    'Pass formula content as children prop',
    'Use semantic HTML structure around math components'
  ],
  
  DONT: [
    'Mix different math component APIs in the same lesson',
    'Use formula prop when children prop is available',
    'Nest math components inside each other',
    'Apply conflicting CSS direction styles',
    'Forget to handle empty content cases'
  ],

  ACCESSIBILITY: [
    'Provide alt text for complex mathematical expressions',
    'Ensure proper reading order for screen readers',
    'Use semantic markup for mathematical relationships',
    'Test with screen readers for Hebrew content'
  ]
};

/**
 * Component usage examples for documentation
 */
export const usageExamples = {
  basic: {
    inline: `<FormulaBox inline>x^2 + y^2 = r^2</FormulaBox>`,
    block: `<FormulaBox>\\int_0^1 x^2 dx = \\frac{1}{3}</FormulaBox>`
  },
  
  hebrew: {
    inline: `<HebrewMathBox inline>\\text{מחיר} = \\text{כמות} \\times \\text{מחיר יחידה}</HebrewMathBox>`,
    block: `<HebrewMathBox>\\text{שטח} = \\frac{1}{2} \\times \\text{בסיס} \\times \\text{גובה}</HebrewMathBox>`
  },
  
  advanced: {
    withCustomClass: `<FormulaBox className="highlighted-formula" inline>f'(x) = 2x</FormulaBox>`,
    withDirection: `<HebrewMathBox dir="rtl">\\text{נוסחת השורשים}</HebrewMathBox>`
  }
};

export default {
  normalizeMathProps,
  containsHebrew,
  suggestComponent,
  migrationPatterns,
  performanceOptimizations,
  bestPractices,
  usageExamples
};
