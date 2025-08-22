

// Logging
export const LOG_PREFIX = "[QMCPT]";

// Error messages
export const ERROR_MESSAGES = {
  QUOTA_EXCEEDED: "Quota exceeded for quota metric 'Qwen Plus Requests'",
  QUOTA_EXCEEDED_SHORT: "⚠️ Qwen Plus daily quota exceeded. Please retry with model: 'qwen-turbo'",
  TOOL_NOT_FOUND: "not found in registry",
  NO_PROMPT_PROVIDED: "Please provide a prompt for analysis. Use @ syntax to include files (e.g., '@largefile.js explain what this does') or ask general questions",
} as const;

// Status messages
export const STATUS_MESSAGES = {
  QUOTA_SWITCHING: "🚫 Qwen Plus quota exceeded, switching to Turbo model...",
  FLASH_RETRY: "⚡ Retrying with Qwen Turbo...",
  FLASH_SUCCESS: "✅ Turbo model completed successfully",
  SANDBOX_EXECUTING: "🔒 Executing Qwen CLI command in sandbox mode...",
  GEMINI_RESPONSE: "Qwen response:",
  // Timeout prevention messages
  PROCESSING_START: "🔍 Starting analysis (may take 5-15 minutes for large codebases)",
  PROCESSING_CONTINUE: "⏳ Still processing... Qwen is working on your request",
  PROCESSING_COMPLETE: "✅ Analysis completed successfully",
} as const;

// Models
export const MODELS = {
  PRO: "qwen-plus",
  FLASH: "qwen-turbo",
} as const;

// MCP Protocol Constants
export const PROTOCOL = {
  // Message roles
  ROLES: {
    USER: "user",
    ASSISTANT: "assistant",
  },
  // Content types
  CONTENT_TYPES: {
    TEXT: "text",
  },
  // Status codes
  STATUS: {
    SUCCESS: "success",
    ERROR: "error",
    FAILED: "failed",
    REPORT: "report",
  },
  // Notification methods
  NOTIFICATIONS: {
    PROGRESS: "notifications/progress",
  },
  // Timeout prevention
  KEEPALIVE_INTERVAL: 25000, // 25 seconds
} as const;


// CLI Constants
export const CLI = {
  // Command names
  COMMANDS: {
    GEMINI: "qwen",
    ECHO: "echo",
  },
  // Command flags
  FLAGS: {
    MODEL: "-m",
    SANDBOX: "-s",
    PROMPT: "-p",
    HELP: "-help",
  },
  // Default values
  DEFAULTS: {
    MODEL: "default", // Fallback model used when no specific model is provided
    BOOLEAN_TRUE: "true",
    BOOLEAN_FALSE: "false",
  },
} as const;


// (merged PromptArguments and ToolArguments)
export interface ToolArguments {
  prompt?: string;
  model?: string;
  sandbox?: boolean | string;
  changeMode?: boolean | string;
  chunkIndex?: number | string; // Which chunk to return (1-based)
  chunkCacheKey?: string; // Optional cache key for continuation
  message?: string; // For Ping tool -- Un-used.
  
  // --> new tool
  methodology?: string; // Brainstorming framework to use
  domain?: string; // Domain context for specialized brainstorming
  constraints?: string; // Known limitations or requirements
  existingContext?: string; // Background information to build upon
  ideaCount?: number; // Target number of ideas to generate
  includeAnalysis?: boolean; // Include feasibility and impact analysis
  
  [key: string]: string | boolean | number | undefined; // Allow additional properties
}