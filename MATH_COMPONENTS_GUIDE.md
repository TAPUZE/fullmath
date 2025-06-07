# Math Components Usage Guide

## Overview

This guide provides standardized patterns for using `FormulaBox` and `HebrewMathBox` components across all lessons to ensure consistent math rendering and maintainability.

## Component APIs

### FormulaBox

Enhanced component for rendering mathematical expressions using MathJax.

#### Props
```typescript
interface FormulaBoxProps {
  children?: string;           // LaTeX formula content (PREFERRED)
  formula?: string;           // Alternative prop (DEPRECATED)
  inline?: boolean;           // Render inline (default: false)
  isInline?: boolean;         // Backward compatibility (use inline instead)
  dir?: 'ltr' | 'rtl';       // Text direction (default: 'ltr')
  className?: string;         // Additional CSS classes
}
```

#### Usage Examples

**Inline Math:**
```jsx
<FormulaBox inline>x^2 + y^2 = r^2</FormulaBox>
```

**Block Math:**
```jsx
<FormulaBox>
  \int_0^1 x^2 dx = \frac{1}{3}
</FormulaBox>
```

### HebrewMathBox

Specialized component for mathematical expressions containing Hebrew text.

#### Props
```typescript
interface HebrewMathBoxProps {
  children?: string;           // LaTeX formula content (PREFERRED)
  formula?: string;           // Alternative prop (DEPRECATED)
  inline?: boolean;           // Render inline (default: false)
  className?: string;         // Additional CSS classes
  dir?: 'ltr' | 'rtl';       // Text direction (default: 'rtl')
}
```

#### Usage Examples

**Hebrew Inline Math:**
```jsx
<HebrewMathBox inline>
  \text{שטח} = \text{אורך} \times \text{רוחב}
</HebrewMathBox>
```

**Hebrew Block Math:**
```jsx
<HebrewMathBox>
  \text{נוסחת השורשים: } x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
</HebrewMathBox>
```

## Migration Patterns

### ✅ RECOMMENDED Patterns

#### 1. Use children prop instead of formula prop
```jsx
// ✅ Good
<FormulaBox inline>{formula}</FormulaBox>

// ❌ Deprecated
<FormulaBox inline formula={formula} />
```

#### 2. Use inline prop instead of isInline
```jsx
// ✅ Good
<FormulaBox inline>f(x) = x^2</FormulaBox>

// ❌ Deprecated
<FormulaBox isInline>f(x) = x^2</FormulaBox>
```

#### 3. Choose the right component for content
```jsx
// ✅ For pure math
<FormulaBox inline>\frac{dy}{dx} = 2x</FormulaBox>

// ✅ For Hebrew + math
<HebrewMathBox inline>\text{שטח} = \pi r^2</HebrewMathBox>
```

### 🔄 Migration Examples

#### Before (Inconsistent)
```jsx
// Mixed patterns - needs standardization
<FormulaBox formula="x^2" inline />
<FormulaBox isInline formula={`y = mx + b`} />
<FormulaBox dir="ltr">\int f(x) dx</FormulaBox>
```

#### After (Standardized)
```jsx
// Consistent patterns
<FormulaBox inline>x^2</FormulaBox>
<FormulaBox inline>y = mx + b</FormulaBox>
<FormulaBox>\int f(x) dx</FormulaBox>
```

## Best Practices

### 1. Content Selection
- **FormulaBox**: Use for pure mathematical expressions
- **HebrewMathBox**: Use when formulas contain Hebrew text in `\text{}` commands

### 2. Inline vs Block
- **Inline**: For math within text paragraphs
- **Block**: For standalone formulas, equations, and mathematical statements

### 3. Performance Considerations
```jsx
// ✅ Good: Memoize complex formulas
const ComplexFormula = React.memo(({ children }) => (
  <FormulaBox>{children}</FormulaBox>
));

// ✅ Good: Extract repeated formulas
const QUADRATIC_FORMULA = "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}";
<FormulaBox>{QUADRATIC_FORMULA}</FormulaBox>
```

### 4. Accessibility
```jsx
// ✅ Good: Provide context for screen readers
<p>
  הנוסחה הריבועית היא{' '}
  <FormulaBox inline>x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}</FormulaBox>
</p>
```

## Common Patterns by Subject

### Algebra
```jsx
// Linear equations
<FormulaBox inline>y = mx + b</FormulaBox>

// Quadratic formula
<FormulaBox>x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}</FormulaBox>
```

### Geometry
```jsx
// Area formulas with Hebrew
<HebrewMathBox inline>\text{שטח} = \pi r^2</HebrewMathBox>

// Pythagorean theorem
<FormulaBox>a^2 + b^2 = c^2</FormulaBox>
```

### Calculus
```jsx
// Derivatives
<FormulaBox inline>f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}</FormulaBox>

// Integrals
<FormulaBox>\int_a^b f(x) dx = F(b) - F(a)</FormulaBox>
```

### Word Problems (Hebrew)
```jsx
// Hebrew formulas for problems
<HebrewMathBox inline>
  \text{מחיר מכירה} = \text{מחיר קנייה} \times (1 + \frac{\text{רווח}}{100})
</HebrewMathBox>
```

## Error Handling

### Common Issues and Solutions

#### 1. Missing Content
```jsx
// ❌ Will log warning
<FormulaBox></FormulaBox>

// ✅ Always provide content
<FormulaBox>x = 0</FormulaBox>
```

#### 2. Hebrew Character Issues
```jsx
// ❌ May cause rendering issues
<FormulaBox>מתמטיקה</FormulaBox>

// ✅ Use HebrewMathBox for Hebrew
<HebrewMathBox>\text{מתמטיקה}</HebrewMathBox>
```

#### 3. Nested Components
```jsx
// ❌ Don't nest math components
<FormulaBox>
  <FormulaBox>x</FormulaBox> + y
</FormulaBox>

// ✅ Use single component
<FormulaBox>x + y</FormulaBox>
```

## Testing Checklist

When implementing math components, verify:

- [ ] Math renders correctly in both inline and block modes
- [ ] Hebrew text displays properly with RTL direction
- [ ] Components don't cause layout shifts
- [ ] Math expressions are accessible to screen readers
- [ ] Performance is acceptable with multiple formulas
- [ ] Component props follow the standardized API

## Tools and Utilities

### Migration Helper
Use the migration utility to help standardize existing lessons:

```javascript
import { suggestComponent, normalizeMathProps } from '../utils/mathComponentMigration';

// Automatically suggest the right component
const componentType = suggestComponent(formula); // 'FormulaBox' or 'HebrewMathBox'

// Normalize component props
const standardProps = normalizeMathProps(props);
```

## Future Improvements

### Planned Enhancements
1. **Auto-detection**: Automatically detect Hebrew content and suggest component
2. **Performance**: Lazy loading for lessons with many formulas
3. **Accessibility**: Enhanced screen reader support
4. **Validation**: Development-time validation of LaTeX syntax

### Contribution Guidelines
When adding new math components:
1. Follow the standardized API patterns
2. Add tests for new functionality
3. Update this documentation
4. Ensure Hebrew support is maintained
