# Real-World Examples

Practical examples of using Qwen MCP Tool in development workflows.

## Code Review

### Reviewing a Pull Request
```
/qwen-code:analyze @feature/new-api/*.js review these changes for:
- Security issues
- Performance concerns  
- Code style consistency
- Missing error handling
```

### Pre-commit Check
```
"Qwen, check my staged changes before I commit"
```

## Debugging

### Analyzing Error Logs
```
/qwen-code:analyze @logs/error.log @src/api/handler.js 
why am I getting "undefined is not a function" errors?
```

### Stack Trace Analysis
```
@crash-report.txt qwen, what caused this crash and how do I fix it?
```

## Architecture Analysis

### Understanding a New Codebase
```
/qwen-code:analyze @package.json @src/**/*.js @README.md
give me an overview of this project's architecture
```

### Dependency Analysis
```
@package.json @package-lock.json are there any security vulnerabilities or outdated packages?
```

## Documentation

### Generating API Docs
```
/qwen-code:analyze @routes/api/*.js generate OpenAPI documentation for these endpoints
```

### README Creation
```
@src/**/*.js @package.json create a comprehensive README for this project
```

## Testing

### Writing Tests
```
/qwen-code:analyze @src/utils/validator.js write comprehensive Jest tests for this module
```

### Test Coverage Analysis
```
@src/**/*.js @test/**/*.test.js what's not being tested?
```

## Refactoring

### Code Optimization
```
/qwen-code:analyze @src/data-processor.js this function is slow, how can I optimize it?
```

### Pattern Implementation
```
@src/services/*.js refactor these to use the Repository pattern
```

## Learning

### Understanding Concepts
```
/qwen-code:sandbox show me how OAuth 2.0 works with a working example
```

### Best Practices
```
@src/auth/*.js does this follow security best practices?
```

## Migration

### Framework Upgrade
```
/qwen-code:analyze @package.json @src/**/*.js 
what changes are needed to upgrade from Express 4 to Express 5?
```

### Language Migration
```
@legacy/script.js convert this to TypeScript with proper types
```

## Security Audit

### Vulnerability Scan
```
/qwen-code:analyze @src/**/*.js @package.json 
perform a security audit and identify potential vulnerabilities
```

### OWASP Check
```
@src/api/**/*.js check for OWASP Top 10 vulnerabilities
```

## Performance Analysis

### Bottleneck Detection
```
/qwen-code:analyze @src/routes/*.js @src/middleware/*.js
identify performance bottlenecks in the request pipeline
```

### Memory Leaks
```
@src/**/*.js look for potential memory leaks or inefficient patterns
```

## Real Project Example

### Full Stack Review
```bash
# 1. Architecture overview
/qwen-code:analyze @package.json @src/index.js @client/App.jsx 
explain how the frontend and backend connect

# 2. API Security
/qwen-code:analyze @routes/api/*.js @middleware/auth.js 
review API security implementation

# 3. Database optimization
/qwen-code:analyze @models/*.js @db/queries/*.sql 
suggest database optimizations

# 4. Frontend performance
/qwen-code:analyze @client/**/*.jsx @client/**/*.css 
how can I improve frontend performance?

# 5. Test coverage
/qwen-code:analyze @src/**/*.js @test/**/*.test.js 
what critical paths lack test coverage?
```

### Programming Task Examples

```bash
# 1. Code Generation
/qwen-code:generate-code task="create a React component for a user profile card" language="javascript" framework="React"

# 2. Code Review
/qwen-code:review-code code="@src/auth/*.js" language="javascript" focus="security"

# 3. Code Refactoring
/qwen-code:refactor-code code="@legacy/script.js" language="javascript" goal="convert to modern ES6 syntax"

# 4. Code Explanation
/qwen-code:explain-code code="@complex-algorithm.js" language="javascript" detailLevel="comprehensive"
```

## Tips for Effective Usage

1. **Start Broad, Then Narrow**: Begin with overview, then dive into specifics
2. **Combine Related Files**: Include configs with source code
3. **Ask Follow-up Questions**: Build on previous responses
4. **Use Specific Criteria**: Tell Gemini what to look for
5. **Iterate on Solutions**: Refine based on suggestions