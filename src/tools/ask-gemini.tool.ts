import { z } from 'zod';
import { UnifiedTool } from './registry.js';
import { executeGeminiCLI, processChangeModeOutput } from '../utils/geminiExecutor.js';
import { 
  ERROR_MESSAGES, 
  STATUS_MESSAGES
} from '../constants.js';

const askQwenArgsSchema = z.object({
  prompt: z.string().min(1).describe("Analysis request. Use @ syntax to include files (e.g., '@largefile.js explain what this does') or ask general questions"),
  model: z.string().optional().describe("Optional model to use (e.g., 'qwen-turbo'). If not specified, uses the default model (qwen-plus)."),
  sandbox: z.boolean().default(false).describe("Use sandbox mode (-s flag) to safely test code changes, execute scripts, or run potentially risky operations in an isolated environment"),
  changeMode: z.boolean().default(false).describe("Enable structured change mode - formats prompts to prevent tool errors and returns structured edit suggestions that Claude can apply directly"),
  chunkIndex: z.union([z.number(), z.string()]).optional().describe("Which chunk to return (1-based)"),
  chunkCacheKey: z.string().optional().describe("Optional cache key for continuation"),
});

export const askQwenTool: UnifiedTool = {
  name: "ask-qwen",
  description: "model selection [-m], sandbox [-s], and changeMode:boolean for providing edits",
  zodSchema: askQwenArgsSchema,
  prompt: {
    description: "Execute 'qwen -p <prompt>' to get Qwen AI's response. Supports enhanced change mode for structured edit suggestions.",
  },
  category: 'gemini',
  execute: async (args, onProgress) => {
    const { prompt, model, sandbox, changeMode, chunkIndex, chunkCacheKey } = args; if (!prompt?.trim()) { throw new Error(ERROR_MESSAGES.NO_PROMPT_PROVIDED); }
  
    if (changeMode && chunkIndex && chunkCacheKey) {
      return processChangeModeOutput(
        '', // empty for cache...
        chunkIndex as number,
        chunkCacheKey as string,
        prompt as string
      );
    }
    
    const result = await executeGeminiCLI(
      prompt as string,
      model as string | undefined,
      !!sandbox,
      !!changeMode,
      onProgress
    );
    
    if (changeMode) {
      return processChangeModeOutput(
        result,
        args.chunkIndex as number | undefined,
        undefined,
        prompt as string
      );
    }
    return `${STATUS_MESSAGES.GEMINI_RESPONSE}\n${result}`; // changeMode false
  }
};