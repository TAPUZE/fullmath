/**
 * Triggers MathJax to typeset mathematical content within a given HTML element.
 * @param {HTMLElement} element The HTML element containing the math to be typeset.
 */
export const renderMathInElement = (element) => {
  if (window.MathJax && window.MathJax.typesetPromise && element) {
    window.MathJax.typesetPromise([element])
      .catch((err) => console.error('MathJax typesetting error:', err));
  } else if (!element) {
    console.warn('renderMathInElement called with no element.');
  } else if (!(window.MathJax && window.MathJax.typesetPromise)) {
    console.warn('MathJax or typesetPromise not available on window.');
  }
};
