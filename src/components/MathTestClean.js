import React from 'react';
import FormulaBox from './FormulaBox';

const MathTestClean = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>MathJax Comma Artifact Test</h2>
      <p><strong>Testing the specific comma issue with \frac{25}{100}</strong></p>
      
      <h3 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px', marginTop: '30px' }}>Basic Fraction Tests</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <strong>Test 1 - Simple fraction (inline):</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox>
        <br/><small>Should render as: 25/100</small>
      </div>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <strong>Test 2 - Same fraction (block):</strong><br/>
        <FormulaBox>\frac{25}{100}</FormulaBox>
        <small>Should render as: 25/100 (centered)</small>
      </div>
      
      <h3 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px', marginTop: '30px' }}>Comma Placement Tests</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#ffebee', border: '2px solid #f44336' }}>
        <strong>Test 3a - ❌ PROBLEMATIC: Math immediately followed by Hebrew:</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox>ששווה
        <br/><small>❌ No space between math and Hebrew - expect comma artifact</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e8', border: '2px solid #4caf50' }}>
        <strong>Test 3b - ✅ FIXED: Space after math:</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox> ששווה
        <br/><small>✅ Space between math and Hebrew - should be clean</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#ffebee', border: '2px solid #f44336' }}>
        <strong>Test 4a - ❌ PROBLEMATIC: Math + comma + Hebrew (no space):</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox>,ששווה
        <br/><small>❌ Comma directly attached - expect double comma</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e8', border: '2px solid #4caf50' }}>
        <strong>Test 4b - ✅ FIXED: Comma with proper spacing:</strong><br/>
        <FormulaBox inline>\frac{25}{100}</FormulaBox>, ששווה
        <br/><small>✅ Comma with space - should show single comma</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#ffebee', border: '2px solid #f44336' }}>
        <strong>Test 5a - ❌ ORIGINAL LESSON CONTEXT (problematic):</strong><br/>
        לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>\frac{25}{100}</FormulaBox> ששווה ל-<FormulaBox inline>\frac{1}{4}</FormulaBox> או 0.25.
        <br/><small>❌ Original Hebrew context - check for unwanted commas</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e8', border: '2px solid #4caf50' }}>
        <strong>Test 5b - ✅ FIXED LESSON CONTEXT:</strong><br/>
        לדוגמה, 25% הם 25 מתוך 100, או <FormulaBox inline>\frac{25}{100}</FormulaBox>{' '}ששווה ל-<FormulaBox inline>\frac{1}{4}</FormulaBox>{' '}או 0.25.
        <br/><small>✅ Using explicit JSX spaces {'{'}' '{'}'} - should be clean</small>
      </div>

      <h3 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px', marginTop: '30px' }}>Verification Tests</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e7f3ff' }}>
        <strong>Test 6 - English context (control):</strong><br/>
        This is <FormulaBox inline>\frac{25}{100}</FormulaBox>, and this continues.
        <br/><small>English with comma - should render normally</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e7f3ff' }}>
        <strong>Test 7 - Complex math expression:</strong><br/>
        <FormulaBox inline>\frac{25}{100} \cdot 120 = 0.25 \cdot 120 = 30</FormulaBox>
        <br/><small>Complex expression - check for artifacts</small>
      </div>

      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff3cd' }}>
        <strong>Instructions:</strong><br/>
        Look at the visual output above. Tests marked with ❌ should show unwanted commas or artifacts. 
        Tests marked with ✅ should render cleanly without extra punctuation.
      </div>
    </div>
  );
};

export default MathTestClean;
