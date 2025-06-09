import React from 'react';
import '../../styles/HtmlMathBox.css';

/**
 * HtmlMathBox - Custom HTML-based mathematical expression renderer
 * Specifically designed for Hebrew mathematical content
 * Handles fractions, roots, powers, and Hebrew text properly
 */

// Helper function to parse and render mathematical expressions
const parseMathExpression = (expression) => {
  if (!expression) return '';
  
  // Handle string expressions wrapped in braces
  const cleanExpression = typeof expression === 'string' 
    ? expression.replace(/^{(.*)}$/, '$1') 
    : expression;
  
  return renderMathParts(cleanExpression);
};

// Main parsing function
const renderMathParts = (expr) => {
  if (!expr) return '';
  
  const parts = [];
  let currentIndex = 0;
  
  while (currentIndex < expr.length) {
    // Look for mathematical patterns
    const fractionMatch = expr.substring(currentIndex).match(/^\\frac\{([^}]*)\}\{([^}]*)\}/);
    const simpleFractionMatch = expr.substring(currentIndex).match(/^(\d+)\/(\d+)/);
    const sqrtMatch = expr.substring(currentIndex).match(/^\\sqrt\{([^}]*)\}/);
    const simpleSqrtMatch = expr.substring(currentIndex).match(/^√(\d+)/);
    const powerMatch = expr.substring(currentIndex).match(/^([^\\{}\s]+)\^(\{[^}]*\}|\w+)/);
    const subscriptMatch = expr.substring(currentIndex).match(/^([^\\{}\s]+)_(\{[^}]*\}|\w+)/);
    const textMatch = expr.substring(currentIndex).match(/^\\text\{([^}]*)\}/);
    const functionMatch = expr.substring(currentIndex).match(/^\\?(sin|cos|tan|log|ln)\(/);
    const angleMatch = expr.substring(currentIndex).match(/^([0-9]+)\^?\\circ/);
    const pmMatch = expr.substring(currentIndex).match(/^\\pm/);
    const leftMatch = expr.substring(currentIndex).match(/^\\left\(/);
    const rightMatch = expr.substring(currentIndex).match(/^\\right\)/);
    const cdotMatch = expr.substring(currentIndex).match(/^\\cdot/);
    const timesMatch = expr.substring(currentIndex).match(/^\\times/);
    const ldotsMatch = expr.substring(currentIndex).match(/^\\ldots/);
    
    if (fractionMatch) {
      parts.push(renderFraction(fractionMatch[1], fractionMatch[2]));
      currentIndex += fractionMatch[0].length;
    } else if (simpleFractionMatch) {
      parts.push(renderFraction(simpleFractionMatch[1], simpleFractionMatch[2]));
      currentIndex += simpleFractionMatch[0].length;
    } else if (sqrtMatch) {
      parts.push(renderSquareRoot(sqrtMatch[1]));
      currentIndex += sqrtMatch[0].length;
    } else if (simpleSqrtMatch) {
      parts.push(renderSquareRoot(simpleSqrtMatch[1]));
      currentIndex += simpleSqrtMatch[0].length;    } else if (powerMatch) {
      const base = powerMatch[1];
      const power = powerMatch[2].replace(/[{}]/g, '');
      parts.push(renderPower(base, power));
      currentIndex += powerMatch[0].length;
    } else if (subscriptMatch) {
      const base = subscriptMatch[1];
      const subscript = subscriptMatch[2].replace(/[{}]/g, '');
      parts.push(renderSubscript(base, subscript));
      currentIndex += subscriptMatch[0].length;
    } else if (textMatch) {
      parts.push(renderText(textMatch[1]));
      currentIndex += textMatch[0].length;
    } else if (functionMatch) {
      parts.push(renderFunction(functionMatch[1]));
      currentIndex += functionMatch[0].length - 1; // -1 because we don't want to skip the opening parenthesis
    } else if (angleMatch) {
      parts.push(renderAngle(angleMatch[1]));
      currentIndex += angleMatch[0].length;
    } else if (pmMatch) {
      parts.push(<span key={currentIndex} className="math-operator"> ± </span>);
      currentIndex += pmMatch[0].length;
    } else if (leftMatch) {
      parts.push(<span key={currentIndex} className="math-paren">(</span>);
      currentIndex += leftMatch[0].length;
    } else if (rightMatch) {
      parts.push(<span key={currentIndex} className="math-paren">)</span>);
      currentIndex += rightMatch[0].length;
    } else if (cdotMatch) {
      parts.push(<span key={currentIndex} className="math-operator"> · </span>);
      currentIndex += cdotMatch[0].length;
    } else if (timesMatch) {
      parts.push(<span key={currentIndex} className="math-operator"> × </span>);
      currentIndex += timesMatch[0].length;
    } else if (ldotsMatch) {
      parts.push(<span key={currentIndex} className="math-operator">...</span>);
      currentIndex += ldotsMatch[0].length;
    } else {
      // Regular character
      const char = expr[currentIndex];
      if (char === ' ') {
        parts.push(<span key={currentIndex} className="math-space"> </span>);
      } else if (char === '=') {
        parts.push(<span key={currentIndex} className="math-operator"> = </span>);
      } else if (char === '+') {
        parts.push(<span key={currentIndex} className="math-operator"> + </span>);
      } else if (char === '-') {
        parts.push(<span key={currentIndex} className="math-operator"> - </span>);
      } else if (char === '·' || char === '*') {
        parts.push(<span key={currentIndex} className="math-operator"> · </span>);
      } else if (char === '≈') {
        parts.push(<span key={currentIndex} className="math-operator"> ≈ </span>);
      } else if (char === '\\' && currentIndex + 1 < expr.length) {
        // Skip backslash commands we haven't handled
        currentIndex++; // Skip the backslash
        while (currentIndex < expr.length && /[a-zA-Z]/.test(expr[currentIndex])) {
          currentIndex++; // Skip the command name
        }
        currentIndex--; // Back up one since the main loop will increment
      } else if (char !== '\\') {
        parts.push(<span key={currentIndex} className="math-regular">{char}</span>);
      }
      currentIndex++;
    }
  }
  
  return parts;
};

// Fraction renderer
const renderFraction = (numerator, denominator) => {
  return (
    <span className="math-fraction">
      <span className="fraction-numerator">{renderMathParts(numerator)}</span>
      <span className="fraction-line"></span>
      <span className="fraction-denominator">{renderMathParts(denominator)}</span>
    </span>
  );
};

// Square root renderer
const renderSquareRoot = (content) => {
  return (
    <span className="math-sqrt">
      <span className="sqrt-symbol">√</span>
      <span className="sqrt-content">{renderMathParts(content)}</span>
    </span>
  );
};

// Power/superscript renderer
const renderPower = (base, power) => {
  return (
    <span className="math-power">
      <span className="power-base">{renderMathParts(base)}</span>
      <span className="power-exponent">{renderMathParts(power)}</span>
    </span>
  );
};

// Subscript renderer
const renderSubscript = (base, subscript) => {
  return (
    <span className="math-subscript">
      <span className="subscript-base">{renderMathParts(base)}</span>
      <span className="subscript-text">{renderMathParts(subscript)}</span>
    </span>
  );
};

// Text renderer (for Hebrew and other text)
const renderText = (text) => {
  const isHebrew = /[\u0590-\u05FF]/.test(text);
  return (
    <span className={`math-text ${isHebrew ? 'hebrew-text' : ''}`} dir={isHebrew ? 'rtl' : 'ltr'}>
      {text}
    </span>
  );
};

// Function renderer (sin, cos, etc.)
const renderFunction = (func) => {
  return <span className="math-function">{func}</span>;
};

// Angle renderer (degrees)
const renderAngle = (angle) => {
  return (
    <span className="math-angle">
      <span className="angle-value">{angle}</span>
      <span className="angle-symbol">°</span>
    </span>
  );
};

// Main component
const HtmlMathBox = ({ 
  children, 
  inline = false, 
  className = '', 
  dir = 'ltr',
  ...props 
}) => {
  const content = children || '';
  
  if (!content) {
    return null;
  }
  
  const Tag = inline ? 'span' : 'div';
  const cssClasses = [
    'html-math-box',
    inline ? 'inline-math' : 'block-math',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <Tag className={cssClasses} dir={dir} {...props}>
      {parseMathExpression(content)}
    </Tag>
  );
};

export default HtmlMathBox;
