/**
 * Triggers MathJax to typeset mathematical content within a given HTML element.
 * @param {HTMLElement} element The HTML element containing the math to be typeset.
 * @returns {Promise} A promise that resolves when typesetting is complete.
 */
export const renderMathInElement = (element) => {
  if (window.MathJax && window.MathJax.typesetPromise && element) {
    // Debug logging for comma issue investigation
    const originalContent = element.innerHTML;
    const hasTargetContent = originalContent.includes('frac{25}{100}');
    
    if (hasTargetContent) {
      console.log('MathJax Debug - Before typeset:', originalContent);
    }
    
    return window.MathJax.typesetPromise([element])
      .then(() => {
        if (hasTargetContent) {
          console.log('MathJax Debug - After typeset:', element.innerHTML);
          console.log('MathJax Debug - Text content:', element.textContent);
        }
        console.log('MathJax typesetting completed for element');
      })
      .catch((err) => {
        console.error('MathJax typesetting error:', err);
        if (hasTargetContent) {
          console.log('MathJax Debug - Error content:', element.innerHTML);
        }
      });
  } else if (!element) {
    console.warn('renderMathInElement called with no element.');
    return Promise.resolve();
  } else if (!(window.MathJax && window.MathJax.typesetPromise)) {
    console.warn('MathJax or typesetPromise not available on window. Retrying...');
    // Retry after a short delay
    return new Promise((resolve) => {
      setTimeout(() => {
        renderMathInElement(element).then(resolve);
      }, 500);
    });
  }
};

/**
 * Force re-render all math on the page
 */
export const refreshAllMath = () => {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise()
      .then(() => console.log('Global MathJax refresh completed'))
      .catch((err) => console.error('Global MathJax refresh error:', err));
  }
};
