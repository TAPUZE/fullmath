# Gemini AI Integration Guide for Teachers Dashboard

## Overview
The TeachersDashboard component has been enhanced with comprehensive AI analysis capabilities powered by Google's Gemini API. This guide explains how to integrate the AI functionality.

## Current AI Features

### 1. Individual Student Analysis
- **Location**: Students tab → "נתח" button
- **Functionality**: Detailed AI analysis of individual student performance
- **Prompt**: Analyzes performance, learning patterns, and provides personalized recommendations

### 2. Class Analysis
- **Location**: Classes tab → "🤖 ניתוח AI" button  
- **Functionality**: Comprehensive class performance analysis
- **Prompt**: Evaluates class dynamics, identifies at-risk students, suggests teaching strategies

### 3. AI-Powered Reports
All reports in the Reports tab now include AI analysis:
- **Weekly Progress Report**: AI-generated insights on weekly performance
- **Difficult Topics Analysis**: AI identification of challenging subjects
- **Digital Attendance Report**: AI analysis of engagement patterns
- **Performance Comparison**: AI-powered cross-class analysis
- **Detailed Activity Report**: AI insights on learning behaviors
- **Data Export**: AI-generated executive summaries

## Integration Steps

### 1. Install Gemini API Dependencies
```bash
npm install @google/generative-ai
```

### 2. Set Up Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Create Gemini Service
Create `src/services/geminiService.js`:

```javascript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const analyzeWithGemini = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};
```

### 4. Update TeachersDashboard Functions
Replace the mock functions in TeachersDashboard.js:

```javascript
import { analyzeWithGemini } from '../services/geminiService';

// Replace the analyzeStudent function
const analyzeStudent = async (student) => {
  setAiAnalysisLoading(true);
  try {
    const prompt = aiPrompts.studentAnalysis(student);
    const analysis = await analyzeWithGemini(prompt);
    
    // Parse the AI response and structure it
    const structuredAnalysis = parseStudentAnalysis(analysis);
    
    setAiAnalysisResults(prev => ({
      ...prev,
      [student.id]: structuredAnalysis
    }));
  } catch (error) {
    console.error('Error analyzing student:', error);
    alert('שגיאה בניתוח התלמיד');
  } finally {
    setAiAnalysisLoading(false);
  }
};

// Replace the generateReport function
const generateReport = async (reportType, data) => {
  setAiAnalysisLoading(true);
  try {
    const prompt = aiPrompts[reportType](data);
    const report = await analyzeWithGemini(prompt);
    
    // Create and download the report
    downloadReport(reportType, report);
  } catch (error) {
    console.error('Error generating report:', error);
    alert('שגיאה ביצירת הדוח');
  } finally {
    setAiAnalysisLoading(false);
  }
};
```

### 5. Add Helper Functions
Add these helper functions to parse and format AI responses:

```javascript
const parseStudentAnalysis = (aiResponse) => {
  // Parse the AI response into structured format
  // This will depend on how Gemini formats its responses
  return {
    overview: extractSection(aiResponse, 'הערכה כללית'),
    strengths: extractListItems(aiResponse, 'נקודות חוזק'),
    recommendations: extractListItems(aiResponse, 'המלצות'),
    prediction: extractSection(aiResponse, 'תחזית')
  };
};

const downloadReport = (reportType, content) => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${reportType}_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
```

## AI Prompts Structure

The system includes comprehensive Hebrew prompts for each analysis type:

### Student Analysis Prompt
- Student details and performance metrics
- Requests for performance evaluation, learning patterns, improvement recommendations, teaching strategies, and progress predictions

### Class Analysis Prompt  
- Class statistics and performance data
- Requests for class evaluation, at-risk student identification, improvement recommendations, and teaching strategies

### Report Prompts
- Customized prompts for each report type
- Structured requests for specific insights and recommendations

## Security Considerations

1. **API Key Protection**: Never expose API keys in client-side code
2. **Rate Limiting**: Implement proper rate limiting to avoid API quota issues
3. **Error Handling**: Robust error handling for API failures
4. **Data Privacy**: Ensure student data privacy compliance

## Testing

1. Test with mock data first
2. Verify AI responses are properly formatted
3. Test error scenarios (API failures, network issues)
4. Validate Hebrew text handling in AI responses

## Future Enhancements

1. **Real-time Analytics**: Continuous AI monitoring of student progress
2. **Predictive Models**: Early warning system for at-risk students  
3. **Personalized Learning Paths**: AI-generated custom lesson sequences
4. **Automated Reporting**: Scheduled AI report generation
5. **Multi-language Support**: Extend AI prompts to additional languages

## Support

For technical support with Gemini AI integration, refer to:
- [Google AI Studio Documentation](https://ai.google.dev/)
- [Gemini API Reference](https://ai.google.dev/api)
