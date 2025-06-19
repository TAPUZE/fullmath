import React, { useEffect, useRef } from 'react';
import { renderMathInElement } from './MathJax';
import '../styles/FormulaBox.css';

/**
 * Enhanced FormulaBox component for rendering mathematical expressions
 * Supports both inline and block math with consistent API
 * 
 * Props:
 * - children: The LaTeX formula content (preferred method)
 * - formula: Alternative prop for formula content (deprecated, use children)
 * - inline: Boolean to render inline (default: false for block)
 * - dir: Text direction ('ltr' or 'rtl')
 * - className: Additional CSS classes
 * - isInline: Alternative to inline prop (for backward compatibility)
 */
const FormulaBox = ({ 
  children, 
  formula, 
  inline = false, 
  isInline = false,
  dir = 'ltr',
  className = '',
  ...otherProps 
}) => {
  const boxRef = useRef(null);
  
  // Support both 'inline' and 'isInline' props for backward compatibility
  const shouldRenderInline = inline || isInline;
    // Get content from either children or formula prop
  const content = children || formula || '';
  const cleanContent = typeof content === 'string' ? content.trim() : content;
  // Ensure proper LaTeX formatting
  const processedContent = React.useMemo(() => {
    if (typeof cleanContent === 'string') {
      // Clean up any potential issues with content
      return cleanContent
        .replace(/\s+/g, ' ') // normalize whitespace
        .trim();
    }
    return cleanContent;
  }, [cleanContent]);

  useEffect(() => {
    if (boxRef.current && processedContent) {
      // Clear any previous error styling
      boxRef.current.classList.remove('error');
      
      // Add a small delay to ensure MathJax is fully loaded
      const renderMath = () => {
        if (window.MathJax && window.MathJax.typesetPromise) {
          renderMathInElement(boxRef.current);
        } else {
          // Fallback: wait for MathJax to load with multiple retries
          let retries = 0;
          const maxRetries = 10;
          const checkMathJax = () => {
            if (window.MathJax && window.MathJax.typesetPromise) {
              renderMathInElement(boxRef.current);
            } else if (retries < maxRetries) {
              retries++;
              setTimeout(checkMathJax, 200);
            } else {
              console.error('MathJax failed to load after multiple retries');
            }
          };
          checkMathJax();
        }
      };
      
      // Small delay to ensure DOM is ready
      setTimeout(renderMath, 50);    }
  }, [processedContent, shouldRenderInline]); // Re-run when content or display mode changes

  // Handle empty content
  if (!processedContent) {
    console.warn('FormulaBox: No content provided');
    return null;
  }

  const Tag = shouldRenderInline ? 'span' : 'div';
  const mathDelimiters = shouldRenderInline ? `$${processedContent}$` : `$$${processedContent}$$`;
  
  const cssClasses = [
    'formula-box',
    shouldRenderInline ? 'inline-formula' : 'block-formula',
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag
      ref={boxRef}
      className={cssClasses}
      dir={dir}
      {...otherProps}
    >
      {mathDelimiters}
    </Tag>
  );
};

export default FormulaBox;
