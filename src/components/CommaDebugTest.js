import React from 'react';
import FormulaBox from './FormulaBox';

const CommaDebugTest = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Comma Debug Test - Focused Investigation</h2>
      
      <h3 style={{ backgroundColor: '#ffebee', padding: '10px' }}>The Exact Problem Case</h3>
      
      <div style={{ marginBottom: '20px', padding: '15px', border: '2px solid red' }}>
        <h4>Original Problematic Line from AlgebraPercentagesLesson.js:</h4>
        <p>לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>\frac{25}{100}</FormulaBox> ששווה ל-<FormulaBox inline>\frac{1}{4}</FormulaBox> או 0.25.</p>
        <small style={{ color: 'red' }}>Check if any comma appears after the first fraction</small>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', border: '2px solid orange' }}>
        <h4>Fixed Version with Explicit Space:</h4>
        <p>לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>\frac{25}{100}</FormulaBox>{' '}ששווה ל-<FormulaBox inline>\frac{1}{4}</FormulaBox> או 0.25.</p>
        <small style={{ color: 'orange' }}>Using JSX space expression after FormulaBox</small>
      </div>

      <h3 style={{ backgroundColor: '#e3f2fd', padding: '10px' }}>LaTeX String Format Tests</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <strong>Test 1 - Direct string (original method):</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox>
        <br/><small>LaTeX as direct string in JSX</small>
      </div>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <strong>Test 2 - Double-quoted string:</strong><br/>
        <FormulaBox inline={"\\frac{25}{100}"}>
        </FormulaBox>
        <br/><small>LaTeX as double-quoted string with escaped backslashes</small>
      </div>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <strong>Test 3 - Template literal:</strong><br/>
        <FormulaBox inline={`\\frac{25}{100}`}>
        </FormulaBox>
        <br/><small>LaTeX as template literal with escaped backslashes</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <strong>Test 4 - Formula prop instead of children:</strong><br/>
        <FormulaBox inline formula="\\frac{25}{100}" />
        <br/><small>Using formula prop instead of children</small>
      </div>

      <h3 style={{ backgroundColor: '#fff3e0', padding: '10px' }}>Isolation Tests</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff8e1' }}>
        <strong>Test 5 - Single fraction isolated:</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox>
        <br/><small>Just the fraction, nothing else</small>
      </div>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff8e1' }}>
        <strong>Test 6 - Different numbers:</strong><br/>
        <FormulaBox inline>\frac{1}{2}</FormulaBox>
        <br/><small>Different numbers to see if the issue is specific to 25,100</small>
      </div>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff8e1' }}>
        <strong>Test 7 - Different LaTeX command:</strong><br/>
        <FormulaBox inline>x^2 + y^2</FormulaBox>
        <br/><small>Different LaTeX to see if issue is specific to \\frac</small>
      </div>

      <h3 style={{ backgroundColor: '#e8f5e8', padding: '10px' }}>Context Tests</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f1f8e9' }}>
        <strong>Test 8 - English context:</strong><br/>
        For example, 25% is 25 out of 100, or <FormulaBox inline>\frac{25}{100}</FormulaBox> which equals <FormulaBox inline>\frac{1}{4}</FormulaBox> or 0.25.
        <br/><small>Same content but in English</small>
      </div>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f1f8e9' }}>
        <strong>Test 9 - No context:</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox><FormulaBox inline>\frac{1}{4}</FormulaBox>
        <br/><small>Two formulas with no text between</small>
      </div>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f1f8e9' }}>
        <strong>Test 10 - Space separation:</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox> <FormulaBox inline>\frac{1}{4}</FormulaBox>
        <br/><small>Two formulas with a space between</small>
      </div>
    </div>
  );
};

export default CommaDebugTest;
