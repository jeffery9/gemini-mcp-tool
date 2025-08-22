# Model Selection

Choose the right Qwen model for your task.

## Available Models

### Qwen-Plus
- **Best for**: Complex analysis, large codebases
- **Context**: Large context window
- **Use when**: Analyzing entire projects, architectural reviews, stronger reasoning

### Qwen-Turbo
- **Best for**: Quick responses, routine tasks
- **Context**: Large context window  
- **Use when**: Fast code reviews, Analyzing entire projects, simple explanations

## Setting Models
```bash
You need use natural language: "...using qwen turbo"
```
```bash
You can also append with '-m' or ask specifically with 
```

### In Configuration
```json
{
  "mcpServers": {
    "gemini-cli": {
      "command": "gemini-mcp",
      "env": {
        "QWEN_MODEL": "qwen-turbo"
      }
    }
  }
}
```

### Per Request (Coming Soon)
```
/qwen-code:analyze --model=turbo @file.js quick review
```

## Model Comparison

| Model | Speed | Context | Best Use Case |
|-------|-------|---------|---------------|
| Plus | Slower | Large context | big ideas |
| Turbo | Fast | Large context | quick, specific changes |

## Cost Optimization

1. **Start with Turbo** for most tasks
2. **Use Plus** only when you need the full context

## Recommendations

- **Code Review**: Turbo
- **Architecture Analysis**: Plus
- **Quick Fixes**: Turbo
- **Documentation**: Turbo
- **Security Audit**: Plus