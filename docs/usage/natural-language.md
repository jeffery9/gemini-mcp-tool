# Natural Language Usage

You don't need to memorize commands - just ask naturally!

## How It Works

Claude Code understands when you want to use Qwen and automatically routes your request.

## Examples

### File Analysis
Instead of: `/qwen-code:analyze @app.js explain`

Say:
- "Use qwen to explain app.js"
- "Ask qwen what this code does"
- "Have qwen analyze the main application file"

### Code Generation
Instead of: `/qwen-code:sandbox create a web server`

Say:
- "Get qwen to create a simple web server"
- "I need qwen to write a REST API example"
- "Can qwen show me how to build an Express server?"

### Debugging
Instead of: `/qwen-code:analyze @error.log @app.js debug`

Say:
- "Help me debug this error using qwen"
- "Qwen, why is my app crashing?"
- "Use qwen to find the bug in my code"

## Keywords That Trigger Qwen

Claude recognizes these patterns:
- "use qwen..."
- "ask qwen..."
- "qwen please..."
- "have qwen..."
- "get qwen to..."
- "with qwen..."

## Best Practices

### 1. Be Conversational
```
❌ /qwen-code:analyze @config.json validate

✅ "Hey, can qwen check if my config.json is valid?"
```

### 2. Provide Context
```
❌ "analyze the bug"

✅ "Qwen, I'm getting a null pointer error in my auth handler, can you help?"
```

### 3. Specify Files Naturally
```
❌ @src/utils.js @src/helpers.js relationship

✅ "How do utils.js and helpers.js work together? Ask qwen."
```

## Common Patterns

### Code Review
- "Qwen, review my latest changes"
- "Use qwen to check my pull request"
- "Is this code production-ready? Ask qwen"

### Learning
- "Qwen, explain how React hooks work"
- "Can qwen show me Python best practices?"
- "I want to learn about async/await with qwen"

### Refactoring
- "Qwen, how can I make this code cleaner?"
- "Use qwen to refactor this function"
- "Help me optimize this algorithm with qwen"

### Programming Tasks
- "Qwen, generate a Python script to process CSV files"
- "Use qwen to review this code for security vulnerabilities"
- "Can qwen refactor this JavaScript function to be more efficient?"
- "Explain how this machine learning algorithm works with qwen"

## Mixing Commands and Natural Language

You can combine both approaches:

```
"I need to debug this" → /qwen-code:analyze @app.js @error.log
```

Claude understands the context and uses the appropriate tool.

For programming tasks:
```
"I need to generate a new component" → /qwen-code:generate-code task="create a React component" language="javascript"
"Review this code for issues" → /qwen-code:review-code code="@file.js" language="javascript"
```

## Tips

1. **Just Ask**: Don't overthink the syntax
2. **Be Specific**: Include what you want to analyze
3. **Iterate**: Have a conversation with follow-up questions
4. **No Memorization**: Use whatever feels natural

Remember: The goal is to make AI assistance feel natural, not robotic!

