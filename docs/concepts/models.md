# Model Selection

Choose the right Qwen model for your task.

The Qwen models used by this tool are part of the [Qwen3-Coder](https://github.com/QwenLM/Qwen3-Coder) series, which are specifically designed for code-related tasks.

## Available Models

### qwen3-coder-plus
- **Best for**: Complex analysis, large codebases
- **Context**: Large context window
- **Use when**: Analyzing entire projects, architectural reviews, stronger reasoning

### qwen3-coder
- **Best for**: Quick responses, routine tasks
- **Context**: Large context window  
- **Use when**: Fast code reviews, Analyzing entire projects, simple explanations

## Setting Models
```bash
You need use natural language: "...using qwen3-coder"
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
        "QWEN_MODEL": "qwen3-coder"
      }
    }
  }
}
```

### Per Request (Coming Soon)
```
/qwen-code:analyze --model=qwen3-coder @file.js quick review
```

## Model Comparison

| Model | Speed | Context | Best Use Case |
|-------|-------|---------|---------------|
| qwen3-coder-plus | Slower | Large context | big ideas |
| qwen3-coder | Fast | Large context | quick, specific changes |

## Cost Optimization

1. **Start with qwen3-coder** for most tasks
2. **Use qwen3-coder-plus** only when you need the full context

## Recommendations

- **Code Review**: qwen3-coder
- **Architecture Analysis**: qwen3-coder-plus
- **Quick Fixes**: qwen3-coder
- **Documentation**: qwen3-coder
- **Security Audit**: qwen3-coder-plus