import { z } from 'zod';
import { UnifiedTool } from './registry.js';
import { executeQwenCLI } from '../utils/qwenExecutor.js';
import { 
  ERROR_MESSAGES, 
  STATUS_MESSAGES
} from '../constants.js';

// 代码生成工具
const generateCodeArgsSchema = z.object({
  task: z.string().min(1).describe("The coding task to perform (e.g., 'create a React component', 'write a Python function to sort a list')"),
  language: z.string().optional().describe("Programming language to use (e.g., 'python', 'javascript', 'java', 'cpp'). If not specified, Qwen will choose the most appropriate language."),
  framework: z.string().optional().describe("Framework or library to use (e.g., 'React', 'Vue', 'Django', 'Express')"),
  requirements: z.string().optional().describe("Specific requirements or constraints for the code"),
  model: z.string().optional().describe("Optional model to use (e.g., 'qwen-turbo'). If not specified, uses the default model (qwen-plus)."),
});

export const generateCodeTool: UnifiedTool = {
  name: "generate-code",
  description: "Generates code based on a natural language description of the task",
  zodSchema: generateCodeArgsSchema,
  prompt: {
    description: "Generate code from a natural language task description",
  },
  category: 'gemini',
  execute: async (args, onProgress) => {
    const { task, language, framework, requirements, model } = args;
    
    if (!task || (typeof task === 'string' && !task.trim())) {
      throw new Error("You must provide a coding task to perform");
    }
    
    let prompt = `# CODE GENERATION REQUEST

## Task
${task}
`;
    
    if (language) {
      prompt += `
## Language
${language}
`;
    }
    
    if (framework) {
      prompt += `
## Framework/Library
${framework}
`;
    }
    
    if (requirements) {
      prompt += `
## Requirements/Constraints
${requirements}
`;
    }
    
    prompt += `
## Instructions
Please generate clean, well-documented code to accomplish the task above. Include:
1. Any necessary imports or setup
2. The main implementation
3. Example usage if applicable
4. Comments explaining key parts of the code

Follow best practices for the chosen language and framework. Ensure the code is production-ready and follows common conventions.`;
    
    // Report progress to user
    onProgress?.(`Generating code for: ${task}...`);
    
    // Execute with Qwen
    const result = await executeQwenCLI(prompt, model as string | undefined, false, false, onProgress);
    return `${STATUS_MESSAGES.GEMINI_RESPONSE}
${result}`;
  }
};

// 代码审查工具
const reviewCodeArgsSchema = z.object({
  code: z.string().min(1).describe("The code to review"),
  language: z.string().optional().describe("Programming language of the code (e.g., 'python', 'javascript', 'java', 'cpp'). If not specified, Qwen will try to detect it."),
  focus: z.enum(['quality', 'performance', 'security', 'maintainability', 'all']).default('all').describe("Focus area for the review"),
  styleGuide: z.string().optional().describe("Specific style guide to follow (e.g., 'PEP8', 'Google JavaScript Style Guide')"),
  model: z.string().optional().describe("Optional model to use (e.g., 'qwen-turbo'). If not specified, uses the default model (qwen-plus)."),
});

export const reviewCodeTool: UnifiedTool = {
  name: "review-code",
  description: "Reviews code for quality, performance, security, and maintainability issues",
  zodSchema: reviewCodeArgsSchema,
  prompt: {
    description: "Review code for issues and improvements",
  },
  category: 'gemini',
  execute: async (args, onProgress) => {
    const { code, language, focus, styleGuide, model } = args;
    
    if (!code || (typeof code === 'string' && !code.trim())) {
      throw new Error("You must provide code to review");
    }
    
    let prompt = `# CODE REVIEW REQUEST

## Code to Review
\`\`\`${language || ''}
${code}
\`\`\`
`;
    
    prompt += `
## Review Focus
${focus}
`;
    
    if (styleGuide) {
      prompt += `
## Style Guide
${styleGuide}
`;
    }
    
    prompt += `
## Instructions
Please perform a comprehensive review of the code above. Address the following:
1. **Correctness**: Are there any bugs or logical errors?
2. **Performance**: Are there any performance bottlenecks or inefficiencies?
3. **Security**: Are there any security vulnerabilities?
4. **Maintainability**: Is the code readable, well-structured, and easy to maintain?
5. **Best Practices**: Does the code follow language-specific best practices?

For each issue found, provide:
- A clear description of the problem
- The line number(s) where the issue occurs
- A suggested fix or improvement

If the code is good and you find no issues in the specified focus areas, please state that clearly.`;
    
    // Report progress to user
    onProgress?.(`Reviewing code (${focus} focus)...`);
    
    // Execute with Qwen
    const result = await executeQwenCLI(prompt, model as string | undefined, false, false, onProgress);
    return `${STATUS_MESSAGES.GEMINI_RESPONSE}
${result}`;
  }
};

// 代码重构工具
const refactorCodeArgsSchema = z.object({
  code: z.string().min(1).describe("The code to refactor"),
  language: z.string().optional().describe("Programming language of the code (e.g., 'python', 'javascript', 'java', 'cpp'). If not specified, Qwen will try to detect it."),
  goal: z.string().optional().describe("The goal of the refactoring (e.g., 'improve readability', 'optimize performance', 'reduce complexity')"),
  model: z.string().optional().describe("Optional model to use (e.g., 'qwen-turbo'). If not specified, uses the default model (qwen-plus)."),
});

export const refactorCodeTool: UnifiedTool = {
  name: "refactor-code",
  description: "Refactors code to improve its structure, readability, or performance",
  zodSchema: refactorCodeArgsSchema,
  prompt: {
    description: "Refactor code to improve its quality",
  },
  category: 'gemini',
  execute: async (args, onProgress) => {
    const { code, language, goal, model } = args;
    
    if (!code || (typeof code === 'string' && !code.trim())) {
      throw new Error("You must provide code to refactor");
    }
    
    let prompt = `# CODE REFACTORING REQUEST

## Code to Refactor
\`\`\`${language || ''}
${code}
\`\`\`
`;
    
    if (goal) {
      prompt += `
## Refactoring Goal
${goal}
`;
    }
    
    prompt += `
## Instructions
Please refactor the code above to improve its quality. Focus on:
1. Improving readability and maintainability
2. Reducing complexity and duplication
3. Optimizing performance where possible
4. Following best practices for the language

Provide the refactored code and explain:
1. What changes you made
2. Why you made those changes
3. How the changes improve the code

Use the OLD/NEW format for showing changes:
**FILE: [filename]:[line_number]**
\`\`\`
OLD:
[exact code to be replaced - must match file content precisely]
NEW:
[new code to insert - complete and functional]
\`\`\``;
    
    // Report progress to user
    onProgress?.(`Refactoring code${goal ? ` with goal: ${goal}` : ''}...`);
    
    // Execute with Qwen
    const result = await executeQwenCLI(prompt, model as string | undefined, false, true, onProgress);
    return `${STATUS_MESSAGES.GEMINI_RESPONSE}
${result}`;
  }
};

// 代码解释工具
const explainCodeArgsSchema = z.object({
  code: z.string().min(1).describe("The code to explain"),
  language: z.string().optional().describe("Programming language of the code (e.g., 'python', 'javascript', 'java', 'cpp'). If not specified, Qwen will try to detect it."),
  detailLevel: z.enum(['brief', 'detailed', 'comprehensive']).default('detailed').describe("Level of detail for the explanation"),
  model: z.string().optional().describe("Optional model to use (e.g., 'qwen-turbo'). If not specified, uses the default model (qwen-plus)."),
});

export const explainCodeTool: UnifiedTool = {
  name: "explain-code",
  description: "Explains what a piece of code does and how it works",
  zodSchema: explainCodeArgsSchema,
  prompt: {
    description: "Explain what a piece of code does",
  },
  category: 'gemini',
  execute: async (args, onProgress) => {
    const { code, language, detailLevel, model } = args;
    
    if (!code || (typeof code === 'string' && !code.trim())) {
      throw new Error("You must provide code to explain");
    }
    
    let prompt = `# CODE EXPLANATION REQUEST

## Code to Explain
\`\`\`${language || ''}
${code}
\`\`\`
`;
    
    prompt += `
## Detail Level
${detailLevel}
`;
    
    prompt += `
## Instructions
Please explain the code above in a clear and understandable way. Your explanation should include:
1. **Overview**: A brief summary of what the code does
2. **Components**: Explanation of key functions, classes, or modules
3. **Logic Flow**: How the code works step by step
4. **Key Concepts**: Any important programming concepts or patterns used
5. **Potential Use Cases**: Where and why this code might be used

Structure your response in a way that would be helpful to someone learning the language or trying to understand this specific code.`;
    
    // Report progress to user
    onProgress?.(`Explaining code (${detailLevel} level)...`);
    
    // Execute with Qwen
    const result = await executeQwenCLI(prompt, model as string | undefined, false, false, onProgress);
    return `${STATUS_MESSAGES.GEMINI_RESPONSE}
${result}`;
  }
};