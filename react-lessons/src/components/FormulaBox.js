import React, { useEffect, useRef } from 'react';
import { renderMathInElement } from './MathJax'; // Corrected import path if necessary
import '../styles/FormulaBox.css'; // Make sure this path is correct

const FormulaBox = ({ children, inline = false }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      // Ensure MathJax is available before calling typeset
      if (window.MathJax && window.MathJax.typesetPromise) {
        renderMathInElement(boxRef.current);
      } else {
        // Optional: Add a small delay or a listener for MathJax readiness
        // if MathJax might not be loaded when this component first renders.
        // For now, we assume MathJax is loaded due to its placement in index.html.
        console.warn('MathJax not ready yet or renderMathInElement issue.');
      }
    }
  }, [children]); // Re-run when children (the math content) changes

  const Tag = inline ? 'span' : 'div';
  const content = children ? (typeof children === 'string' ? children.trim() : children) : '';

  return (
    <Tag
      ref={boxRef}
      className={`formula-box ${inline ? 'inline-formula' : 'block-formula'}`}
    >
      {/* Delimiters are added here. Pass raw TeX as children */}
      {inline ? `$${content}$` : `$$${content}$$`}
    </Tag>
  );
};

export default FormulaBox;
