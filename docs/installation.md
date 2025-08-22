# Installation

Multiple ways to install Qwen MCP Tool, depending on your needs.

## Prerequisites

- Node.js v16.0.0 or higher
- Claude Desktop or Claude Code with MCP support
- Qwen CLI installed (Please refer to the official Qwen documentation for installation instructions)

## Method 1: NPX (Recommended)

No installation needed - runs directly:

```json
{
  "mcpServers": {
    "qwen-code": {
      "command": "npx",
      "args": ["-y", "qwen-mcp-tool"]
    }
  }
}
```

## Method 2: Global Installation

```bash
claude mcp add qwen-code -- npx -y qwen-mcp-tool
```

Then configure:
```json
{
  "mcpServers": {
    "qwen-code": {
      "command": "qwen-mcp"
    }
  }
}
```

## Method 3: Local Project

```bash
npm install qwen-mcp-tool
```

See [Getting Started](/getting-started) for full setup instructions.