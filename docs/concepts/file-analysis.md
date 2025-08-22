# File Analysis with @ Syntax

One of the most powerful features of Qwen MCP Tool is the ability to analyze files using the `@` syntax.

## Basic Usage

```
/qwen-code:analyze @index.js explain this code
```
```
ask qwen to analyze the entire codebase and a comment block 
to the top of every script, explaining that script. Use turbo.
```
```
Ask qwen to explain @index.js by reading the entire codebase first
```
```
Ask qwen to analyze @src/ and provide bug fixes
```
```
Ask gemini what the weather is like in new york
```
```
...then use qwen to review your recent modifications
```
## Multiple Files

Analyze multiple files in one request:
```
/qwen-code:analyze @src/server.js @src/client.js how do these interact?
```
```
analyze @src/server.js @src/client.js and provide bug fixes
```

## Entire Directories

Analyze whole directories:
```
/qwen-code:analyze @src/**/*.ts summarize the TypeScript architecture
```
```
analyze @main using qwen and determine the top 3 optimizations
```

## Why @ Syntax?

- **Familiar**: Both Claude and Gemini natively support it
- **Explicit**: Clear which files are being analyzed
- **Flexible**: Works with single files, multiple files, or patterns

## Best Practices

### 1. Be Specific
```
// Good
@src/auth/login.js explain the authentication flow

// Too vague
@src explain everything
```

### 2. Use Patterns Wisely
```
// Analyze all test files
@**/*.test.js are all tests passing?

// Analyze specific module
@modules/payment/*.js review payment logic
```

### 3. Combine with Questions
```
@package.json @src/index.js is this properly configured?
```

### 4. Speak Naturally
```
What does qwen think about that?
```
```
ask qwen to get a second opinion
```

## Token Optimization

Qwen's massive context window allows analyzing entire codebases, saving claude tokens.

## Examples

### Code Review
```
@feature/new-api.js review this PR changes
```

### Documentation
```
@src/utils/*.js generate JSDoc comments
```

### Debugging
```
@error.log @src/handler.js why is this error occurring?
```