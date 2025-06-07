import React, { useEffect, useRef } from 'react';
import FormulaBox from './FormulaBox';

// Global Hebrew text detection and styling for KaTeX
const applyHebrewTextStyling = () => {
  // Inject CSS if not already injected
  if (!document.getElementById('hebrew-katex-styles')) {
    const style = document.createElement('style');
    style.id = 'hebrew-katex-styles';
    style.textContent = `
      /* Hebrew text direction in KaTeX */
      .katex .mord.text {
        direction: ltr;
      }
      
      .katex .mord.text.hebrew-text {
        direction: rtl !important;
        unicode-bidi: bidi-override !important;
        display: inline-block;
      }
      
      /* Force Hebrew direction for any text containing Hebrew characters */
      .katex .mord.text:has(span:contains('\u05D0')), 
      .katex .mord.text:has(span:contains('\u05D1')),
      .katex .mord.text:has(span:contains('\u05D2')),
      .katex .mord.text:has(span:contains('\u05D3')),
      .katex .mord.text:has(span:contains('\u05D4')),
      .katex .mord.text:has(span:contains('\u05D5')),
      .katex .mord.text:has(span:contains('\u05D6')),
      .katex .mord.text:has(span:contains('\u05D7')),
      .katex .mord.text:has(span:contains('\u05D8')),
      .katex .mord.text:has(span:contains('\u05D9')),
      .katex .mord.text:has(span:contains('\u05DA')),
      .katex .mord.text:has(span:contains('\u05DB')),
      .katex .mord.text:has(span:contains('\u05DC')),
      .katex .mord.text:has(span:contains('\u05DD')),
      .katex .mord.text:has(span:contains('\u05DE')),
      .katex .mord.text:has(span:contains('\u05DF')),
      .katex .mord.text:has(span:contains('\u05E0')),
      .katex .mord.text:has(span:contains('\u05E1')),
      .katex .mord.text:has(span:contains('\u05E2')),
      .katex .mord.text:has(span:contains('\u05E3')),
      .katex .mord.text:has(span:contents('\u05E4')),
      .katex .mord.text:has(span:contains('\u05E5')),
      .katex .mord.text:has(span:contains('\u05E6')),
      .katex .mord.text:has(span:contains('\u05E7')),
      .katex .mord.text:has(span:contains('\u05E8')),
      .katex .mord.text:has(span:contains('\u05E9')),
      .katex .mord.text:has(span:contains('\u05EA')) {
        direction: rtl !important;
        unicode-bidi: bidi-override !important;
      }
    `;
    document.head.appendChild(style);
  }
};

/**
 * Enhanced HebrewMathBox component for mathematical formulas with Hebrew text
 * Properly handles Hebrew text within LaTeX \text{} commands
 * 
 * Props:
 * - formula: The LaTeX formula content
 * - children: Alternative to formula prop
 * - inline: Boolean to render inline (default: false for block)
 * - className: Additional CSS classes
 * - dir: Text direction (automatically set to 'rtl' for Hebrew support)
 */
const HebrewMathBox = ({ 
  formula,
  children,
  inline = false,
  className = "",
  dir = 'rtl',
  ...otherProps
}) => {
  const containerRef = useRef(null);
  
  // Get content from either formula or children prop
  const content = formula || children || '';
  
  useEffect(() => {
    // Apply global Hebrew styling
    applyHebrewTextStyling();
    
    // After component mounts and KaTeX renders, fix Hebrew text direction
    const fixHebrewTextDirection = () => {
      if (containerRef.current) {
        // Find all text elements in KaTeX that contain Hebrew characters
        const textElements = containerRef.current.querySelectorAll('.katex .mord.text');
        textElements.forEach(element => {
          const text = element.textContent;
          // Check if text contains Hebrew characters (Unicode range 0590-05FF)
          if (text && /[\u0590-\u05FF]/.test(text)) {
            element.classList.add('hebrew-text');
            element.style.direction = 'rtl';
            element.style.unicodeBidi = 'bidi-override';
            element.setAttribute('dir', 'rtl');
          }
        });
      }
    };
    
    // Run immediately and after a short delay to ensure KaTeX has rendered
    fixHebrewTextDirection();
    const timeoutId = setTimeout(fixHebrewTextDirection, 200);
    
    return () => clearTimeout(timeoutId);
  }, [content]);
  
  // Handle empty content
  if (!content) {
    console.warn('HebrewMathBox: No content provided');
    return null;
  }
  
  const containerClasses = inline 
    ? `inline-math-hebrew ${className}` 
    : `text-center my-4 math-hebrew ${className}`;
  
  if (inline) {
    return (
      <span ref={containerRef} className={containerClasses} dir={dir}>
        <FormulaBox inline dir={dir} {...otherProps}>{content}</FormulaBox>
      </span>
    );
  }

  return (
    <div ref={containerRef} className={containerClasses} dir={dir}>
      <FormulaBox dir={dir} {...otherProps}>{content}</FormulaBox>
    </div>
  );
};

export default HebrewMathBox;
