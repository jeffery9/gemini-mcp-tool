// Tool Registry Index - Registers all tools
import { toolRegistry } from './registry.js';
import { askQwenTool } from './ask-qwen.tool.js';
import { pingTool, helpTool } from './simple-tools.js';
import { brainstormTool } from './brainstorm.tool.js';
import { fetchChunkTool } from './fetch-chunk.tool.js';
import { timeoutTestTool } from './timeout-test.tool.js';
import { generateCodeTool, reviewCodeTool, refactorCodeTool, explainCodeTool } from './code-tools.js';

toolRegistry.push(
  askQwenTool,
  pingTool,
  helpTool,
  brainstormTool,
  fetchChunkTool,
  timeoutTestTool,
  generateCodeTool,
  reviewCodeTool,
  refactorCodeTool,
  explainCodeTool
);

export * from './registry.js';