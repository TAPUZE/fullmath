import React from 'react';
import FormulaBox from './FormulaBox';

// Variables for Fix #4
const fraction1 = "\\frac{25}{100}";
const fraction2 = "\\frac{1}{4}";

const MathTest = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>🧪 Comma Fix Tests - 5 Different Approaches</h2>
      
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#ffebee', border: '2px solid #f44336' }}>
        <h3>❌ PROBLEM CASE - Original with comma artifacts:</h3>
        <p>לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>\frac{25}{100}</FormulaBox>ששווה ל-<FormulaBox inline>\frac{1}{4}</FormulaBox>או 0.25.</p>
        <small>Should show unwanted commas inside the fractions</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e8', border: '1px solid #4caf50' }}>
        <h4>✅ FIX #1 - Add explicit spaces with {'{'}' {'}'}{':'}</h4>
        <p>לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>\frac{25}{100}</FormulaBox>{' '}ששווה ל-<FormulaBox inline>\frac{1}{4}</FormulaBox>{' '}או 0.25.</p>
        <small>Using JSX space expressions</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e8', border: '1px solid #4caf50' }}>
        <h4>✅ FIX #2 - Wrap LaTeX in template literals:</h4>
        <p>לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>{`\\frac{25}{100}`}</FormulaBox>ששווה ל-<FormulaBox inline>{`\\frac{1}{4}`}</FormulaBox>או 0.25.</p>
        <small>Using template literals with escaped backslashes</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e8', border: '1px solid #4caf50' }}>
        <h4>✅ FIX #3 - Use formula prop with double quotes:</h4>
        <p>לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline formula="\\frac{25}{100}" />ששווה ל-<FormulaBox inline formula="\\frac{1}{4}" />או 0.25.</p>
        <small>Using formula prop with double quotes and self-closing tags</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e8', border: '1px solid #4caf50' }}>
        <h4>✅ FIX #4 - Store formula in variables:</h4>
        <p>לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>{fraction1}</FormulaBox>ששווה ל-<FormulaBox inline>{fraction2}</FormulaBox>או 0.25.</p>
        <small>Using JavaScript variables to store formulas</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e8', border: '1px solid #4caf50' }}>
        <h4>✅ FIX #5 - Split into separate elements with explicit spacing:</h4>
        <p>
          לדוגמה, 25% הם 25 מתוך 100, או{' '}
          <FormulaBox inline>\frac{25}{100}</FormulaBox>
          {' '}ששווה ל-{' '}
          <FormulaBox inline>\frac{1}{4}</FormulaBox>
          {' '}או 0.25.
        </p>
        <small>Explicit line breaks and spacing</small>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3e0', border: '2px solid #ff9800' }}>
        <h3>🔍 ISOLATED TESTS - Check each fraction alone:</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Test A - Just the fraction (problematic way):</strong><br/>
          <FormulaBox inline>\frac{25}{100}</FormulaBox>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Test B - Fraction with template literal:</strong><br/>
          <FormulaBox inline>{`\\frac{25}{100}`}</FormulaBox>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Test C - Simple fraction (different):</strong><br/>
          <FormulaBox inline>\frac{1}{4}</FormulaBox>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Test D - Different LaTeX command:</strong><br/>
          <FormulaBox inline>25 \cdot 100</FormulaBox>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <strong>Test E - Block formula (should be fine):</strong><br/>
          <FormulaBox>\frac{25}{100}</FormulaBox>
        </div>
      </div>      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e3f2fd', border: '2px solid #2196f3' }}>
        <h3>🎯 EXACT REPRODUCTION of lesson problem:</h3>
        
        <div style={{ marginBottom: '10px', padding: '8px', backgroundColor: '#ffcdd2' }}>
          <strong>Before fix:</strong><br/>
          לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>\frac{25}{100}</FormulaBox> ששווה ל-<FormulaBox inline>\frac{1}{4}</FormulaBox> או 0.25.
        </div>
        
        <div style={{ marginBottom: '10px', padding: '8px', backgroundColor: '#c8e6c9' }}>
          <strong>After fix (method to be determined):</strong><br/>
          Will be updated based on which fix works
        </div>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff8e1', border: '2px solid #ffc107' }}>
        <h3>🔧 VALUE FORMULA TESTS:</h3>
        
        <div style={{ marginBottom: '10px', padding: '8px', backgroundColor: '#ffcdd2' }}>
          <strong>Problematic formula with text commands:</strong><br/>
          <FormulaBox inline>{`\\text{Value} = (\\text{Decimal}) \\cdot N`}</FormulaBox>
        </div>
        
        <div style={{ marginBottom: '10px', padding: '8px', backgroundColor: '#fff3e0' }}>
          <strong>Without parentheses:</strong><br/>
          <FormulaBox inline>{`\\text{Value} = \\text{Decimal} \\cdot N`}</FormulaBox>
        </div>
        
        <div style={{ marginBottom: '10px', padding: '8px', backgroundColor: '#e8f5e8' }}>
          <strong>Without text commands:</strong><br/>
          <FormulaBox inline>{`Value = Decimal \\cdot N`}</FormulaBox>
        </div>

        <div style={{ marginBottom: '10px', padding: '8px', backgroundColor: '#e3f2fd' }}>
          <strong>Using math variables:</strong><br/>
          <FormulaBox inline>{`V = D \\cdot N`}</FormulaBox>
        </div>
      </div>
    </div>
  );
};

export default MathTest;
