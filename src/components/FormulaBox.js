import React, { useEffect, useRef } from 'react';
import { renderMathInElement } from './MathJax';
import '../styles/FormulaBox.css';

const FormulaBox = ({ children, inline = false }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      // Add a small delay to ensure MathJax is fully loaded
      const timeoutId = setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
          renderMathInElement(boxRef.current);
        } else {
          // Retry after MathJax loads
          const checkMathJax = () => {
            if (window.MathJax && window.MathJax.typesetPromise) {
              renderMathInElement(boxRef.current);
            } else {
              setTimeout(checkMathJax, 100);
            }
          };
          checkMathJax();
        }
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [children]);

  const Tag = inline ? 'span' : 'div';
  const content = children ? (typeof children === 'string' ? children.trim() : children) : '';

  return (
    <Tag
      ref={boxRef}
      className={`formula-box ${inline ? 'inline-formula' : 'block-formula'}`}
    >
      {inline ? `$${content}$` : `$$${content}$$`}
    </Tag>
  );
};

export default FormulaBox;
