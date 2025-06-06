/**
 * Triggers MathJax to typeset mathematical content within a given HTML element.
 * @param {HTMLElement} element The HTML element containing the math to be typeset.
 */
export const renderMathInElement = (element) => {
  if (!element) {
    console.warn('renderMathInElement called with no element.');
    return;
  }

  if (window.MathJax && window.MathJax.typesetPromise) {
    try {
      window.MathJax.typesetPromise([element])
        .then(() => {
          console.log('MathJax typesetting completed successfully');
        })
        .catch((err) => {
          console.error('MathJax typesetting error:', err);
          // Fallback: try to reinitialize MathJax if there's a package error
          if (err.message && err.message.includes('Package')) {
            console.log('Attempting MathJax reinitialization...');
            setTimeout(() => {
              if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([element])
                  .catch((retryErr) => console.error('MathJax retry failed:', retryErr));
              }
            }, 100);
          }
        });
    } catch (syncError) {
      console.error('Synchronous MathJax error:', syncError);
    }
  } else {
    console.warn('MathJax or typesetPromise not available on window.');
  }
};
