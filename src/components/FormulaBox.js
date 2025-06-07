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

  useEffect(() => {
    if (boxRef.current && cleanContent) {
      // Ensure MathJax is available before calling typeset
      if (window.MathJax && window.MathJax.typesetPromise) {
        renderMathInElement(boxRef.current);
      } else {
        // Fallback: wait for MathJax to load
        const checkMathJax = () => {
          if (window.MathJax && window.MathJax.typesetPromise) {
            renderMathInElement(boxRef.current);
          } else {
            setTimeout(checkMathJax, 100);
          }
        };
        checkMathJax();
      }
    }
  }, [cleanContent, shouldRenderInline]); // Re-run when content or display mode changes

  // Handle empty content
  if (!cleanContent) {
    console.warn('FormulaBox: No content provided');
    return null;
  }

  const Tag = shouldRenderInline ? 'span' : 'div';
  const mathDelimiters = shouldRenderInline ? `$${cleanContent}$` : `$$${cleanContent}$$`;
  
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
