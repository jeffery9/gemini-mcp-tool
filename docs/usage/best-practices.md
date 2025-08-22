# Best Practices

Get the most out of Qwen MCP Tool with these proven practices.

## File Selection

### Start Specific
Begin with individual files before expanding scope:
```bash
# Good progression
@auth.js                    # Start here
@auth.js @user.model.js     # Add related files
@src/auth/*.js              # Expand to module
@src/**/*.js                # Full codebase analysis
```

### Group Related Files
Include configuration with implementation:
```bash
# Good
@webpack.config.js @src/index.js  # Config + entry point
@.env @config/*.js                # Environment + config
@schema.sql @models/*.js          # Database + models

# Less effective
@**/*.js                         # Too broad without context
```

## Query Optimization

### Be Specific About Intent
```bash
# Vague
"analyze this code"

# Specific
"identify performance bottlenecks and suggest optimizations"
"check for SQL injection vulnerabilities"
"explain the authentication flow step by step"
"generate a React component for user authentication"
"review this code for security best practices"
```

### Provide Success Criteria
```bash
# Good
"refactor this to be more testable, following SOLID principles"
"optimize for readability, targeting junior developers"
"make this TypeScript-strict compliant"
```

## Token Management

### Qwen Model Selection
- **Quick tasks**: Use Turbo
- **Full analysis**: Use Plus

### Efficient File Inclusion
```bash
# Inefficient
@node_modules/**/*.js  # Don't include dependencies

# Efficient
@src/**/*.js @package.json  # Source + manifest
```

## Iterative Development

### Build on Previous Responses
```bash
1. "analyze the architecture"
2. "focus on the authentication module you mentioned"
3. "show me how to implement the improvements"
4. "write tests for the new implementation"
```

### Save Context Between Sessions
```bash
# Create a context file
/gemini-cli:analyze @previous-analysis.md @src/new-feature.js 
continue from our last discussion
```

## Error Handling

### Include Error Context
```bash
# Good
@error.log @src/api.js "getting 500 errors when calling /user endpoint"

# Better
@error.log @src/api.js @models/user.js @.env 
"500 errors on /user endpoint after deployment"
```

### Include Code for Review
```bash
# Good
@src/auth/*.js "review for security vulnerabilities"

# Better
@src/auth/*.js @package.json @.env.example
"review for security vulnerabilities, including dependency checks"
```

### Provide Stack Traces
Always include full error messages and stack traces when debugging.

## Code Generation

### Specify Requirements Clearly
```bash
# Vague
"create a user service"

# Clear
"create a user service with:
- CRUD operations
- input validation
- error handling
- TypeScript types
- Jest tests"
```

### Include Examples
```bash
@existing-service.js "create a similar service for products"
```

### Programming Task Examples
```bash
# Code Generation
"generate a Python function that:
- takes a list of dictionaries
- sorts them by a specified key
- handles edge cases
- includes docstring and type hints"

# Code Review
"review this JavaScript code for:
- potential security vulnerabilities
- performance issues
- code style consistency
- adherence to best practices"

# Code Refactoring
"refactor this code to:
- improve readability
- reduce complexity
- follow SOLID principles
- add proper error handling"
```

## Security Reviews

### Comprehensive Security Checks
```bash
/qwen-code:analyze @src/**/*.js @package.json @.env.example
- Check for hardcoded secrets
- Review authentication logic
- Identify OWASP vulnerabilities
- Check dependency vulnerabilities
- Review input validation
```

## Performance Optimization

### Measure Before Optimizing
```bash
@performance-profile.json @src/slow-endpoint.js 
"optimize based on this profiling data"
```

### Consider Trade-offs
```bash
"optimize for speed, but maintain readability"
"reduce memory usage without sacrificing features"
```

### Programming Task Trade-offs
```bash
"generate code that is easy to understand, even if it's slightly less efficient"
"refactor this code to improve performance, but keep it maintainable"
```

## Documentation

### Context-Aware Documentation
```bash
@src/api/*.js @README.md 
"update README with accurate API documentation"
```

### Maintain Consistency
```bash
@docs/style-guide.md @src/new-feature.js 
"document following our conventions"
```

### Programming Documentation
```bash
@src/new-module.js @docs/style-guide.md
"document this new module following our conventions"
"generate API documentation for this Python module"
```

## Common Pitfalls to Avoid

### 1. Over-broad Queries
❌ `@**/* "fix all issues"`
✅ `@src/auth/*.js "fix security issues in authentication"`

### 2. Missing Context
❌ `"why doesn't this work?"`
✅ `@error.log @config.js "why doesn't database connection work?"`

### 3. Ignoring Model Limits
❌ Trying to analyze 5M tokens with Flash model
✅ Using Pro for large codebases, Flash for single files

### 4. Vague Success Criteria
❌ "make it better"
✅ "improve performance to handle 1000 requests/second"

### 5. Unclear Programming Tasks
❌ "generate code"
✅ "generate a Python function to validate email addresses with proper error handling"

## Workflow Integration

### Pre-commit Reviews
```bash
alias gemini-review='/gemini-cli:analyze @$(git diff --staged --name-only) review staged changes'
```

### Daily Development
1. Morning: Architecture review
2. Before PR: Code review
3. When stuck: Debugging help
4. End of day: Documentation updates

## Advanced Tips

### 1. Create Analysis Templates
Save common queries for reuse:
```bash
# security-check.txt
Check for:
- SQL injection
- XSS vulnerabilities
- Authentication bypasses
- Rate limiting
- Input validation
```

### 2. Create Programming Templates
Save common programming task templates:
```bash
# code-review-template.txt
Review this code for:
- Security vulnerabilities
- Performance issues
- Code style consistency
- Best practices
- Potential bugs
```

### 3. Chain Operations
```bash
"First analyze the bug" → 
"Now write a fix" → 
"Create tests for the fix" →
"Update documentation"
```

### 4. Learn from Patterns
When Qwen suggests improvements, ask:
```bash
"explain why this approach is better"
"show me more examples of this pattern"
```

### 2. Chain Operations
```bash
"First analyze the bug" → 
"Now write a fix" → 
"Create tests for the fix" →
"Update documentation"
```

### 3. Learn from Patterns
When Gemini suggests improvements, ask:
```bash
"explain why this approach is better"
"show me more examples of this pattern"
```