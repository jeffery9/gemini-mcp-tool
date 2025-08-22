# Commands Reference

Complete list of available commands and their usage.

## Slash Commands

### `/qwen-code:analyze`
Analyze files or ask questions about code.

```
/qwen-code:analyze @file.js explain this code
/qwen-code:analyze @src/*.ts find security issues
/qwen-code:analyze how do I implement authentication?
```

### `/qwen-code:sandbox`
Execute code in a safe environment.

```
/qwen-code:sandbox create a Python fibonacci generator
/qwen-code:sandbox test this function: [code]
```

### `/qwen-code:help`
Show help information and available tools.

```
/qwen-code:help
/qwen-code:help analyze
```

### `/qwen-code:ping`
Test connectivity with Qwen.

```
/qwen-code:ping
/qwen-code:ping "Custom message"
```

### `/qwen-code:generate-code`
Generate code from natural language descriptions.

```
/qwen-code:generate-code task="create a React component" language="javascript" framework="React"
/qwen-code:generate-code task="write a Python function to sort a list" language="python"
```

### `/qwen-code:review-code`
Review code for quality, performance, and security issues.

```
/qwen-code:review-code code="function add(a, b) { return a + b; }" language="javascript" focus="all"
/qwen-code:review-code code="@file.js" language="javascript" focus="security"
```

### `/qwen-code:refactor-code`
Refactor code to improve its structure.

```
/qwen-code:refactor-code code="function add(a, b) { return a + b; }" language="javascript" goal="improve readability"
/qwen-code:refactor-code code="@file.js" language="javascript"
```

### `/qwen-code:explain-code`
Explain how code works.

```
/qwen-code:explain-code code="function add(a, b) { return a + b; }" language="javascript" detailLevel="detailed"
/qwen-code:explain-code code="@complex-function.js" language="javascript" detailLevel="comprehensive"
```

## Command Structure

```
/qwen-code:<tool> [options] <arguments>
```

- **tool**: The action to perform (analyze, sandbox, help, ping, generate-code, review-code, refactor-code, explain-code)
- **options**: Optional flags (coming soon)
- **arguments**: Input text, files, or questions

## Natural Language Alternative

Instead of slash commands, you can use natural language:

- "Use qwen to analyze index.js"
- "Ask qwen to create a test file"
- "Have qwen explain this error"

For programming tasks:
- "Use qwen to generate a React component"
- "Ask qwen to review this code for security issues"
- "Have qwen refactor this function to improve readability"
- "Can qwen explain how this algorithm works?"

## File Patterns

### Single File
```
@README.md
@src/index.js
@test/unit.test.ts
```

### Multiple Files
```
@file1.js @file2.js @file3.js
```

### Wildcards
```
@*.json           # All JSON files in current directory
@src/*.js         # All JS files in src
@**/*.test.js     # All test files recursively
```

### Directory
```
@src/             # All files in src
@test/unit/       # All files in test/unit
```

## Advanced Usage

### Combining Files and Questions
```
/gemini-cli:analyze @package.json @src/index.js is the entry point configured correctly?
```

### Complex Queries
```
/gemini-cli:analyze @src/**/*.js @test/**/*.test.js what's the test coverage?
```

### Code Generation
```
/gemini-cli:analyze @models/user.js generate TypeScript types for this model
```

## Tips

1. **Start Simple**: Begin with single files before using patterns
2. **Be Specific**: Clear questions get better answers
3. **Use Context**: Include relevant files for better analysis
4. **Iterate**: Refine your queries based on responses