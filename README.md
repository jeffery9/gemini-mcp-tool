
# Qwen MCP Tool

<div align="center">

[![GitHub Release](https://img.shields.io/github/v/release/jamubc/qwen-mcp-tool?logo=github&label=GitHub)](https://github.com/jamubc/qwen-mcp-tool/releases)
[![npm version](https://img.shields.io/npm/v/qwen-mcp-tool)](https://www.npmjs.com/package/qwen-mcp-tool)
[![npm downloads](https://img.shields.io/npm/dt/qwen-mcp-tool)](https://www.npmjs.com/package/qwen-mcp-tool)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Open Source](https://img.shields.io/badge/Open%20Source-❤️-red.svg)](https://github.com/jamubc/qwen-mcp-tool)

</div>

> 📚 **[View Full Documentation](./docs/index.md)** - Search me!, Examples, FAQ, Troubleshooting, Best Practices

This project is a fork of [gemini-mcp-tool](https://github.com/jamubc/gemini-mcp-tool) by jamubc, adapted for Qwen Code.

## 🌏 Languages

- [English](README.md)
- [中文](README.zh-CN.md)

## Supercharged Programming with Qwen Code

Qwen Code is specifically designed for programming tasks, offering advanced capabilities in code generation, review, refactoring, and explanation. With this MCP tool, you can harness Qwen Code's powerful programming features directly from Claude.

This is a simple Model Context Protocol (MCP) server that allows AI assistants to interact with the [Qwen Code](https://github.com/QwenLM/qwen-code.git). It enables the AI to leverage the power of Qwen's massive token window for large analysis, especially with large files and codebases using the `@` syntax for direction.

- Ask Qwen natural questions, through claude or Brainstorm new ideas in a party of 3!

<a href="https://glama.ai/mcp/servers/@jamubc/qwen-mcp-tool">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@jamubc/qwen-mcp-tool/badge" alt="Qwen Tool MCP server" />
</a>

## TLDR: [![Claude](https://img.shields.io/badge/Claude-D97757?logo=claude&logoColor=fff)](#) + [![Qwen](https://img.shields.io/badge/Qwen-886FBF?logo=qwen&logoColor=fff)](#)


**Goal**: Use Qwen's powerful analysis capabilities directly in Claude Code to save tokens and analyze large files.

## Prerequisites

Before using this tool, ensure you have:

1. **[Node.js](https://nodejs.org/)** (v16.0.0 or higher)
2. **[Qwen Code](https://github.com/QwenLM/qwen-code.git)** installed and configured (command-line tool: `qwen`)

### Qwen Code Programming Capabilities

Qwen Code offers advanced programming capabilities:

- **Code Generation**: Create code from natural language descriptions
- **Code Review**: Analyze code for quality, performance, and security issues
- **Code Refactoring**: Improve code structure and readability
- **Code Explanation**: Understand complex code with detailed explanations


### One-Line Setup

```bash
claude mcp add qwen-code -- npx -y qwen-mcp-tool
```

### Verify Installation

Type `/mcp` inside Claude Code to verify the Qwen Code MCP is active.

---

### Alternative: Import from Claude Desktop

If you already have it configured in Claude Desktop:

1. Add to your Claude Desktop config:
```json
"qwen-code": {
  "command": "npx",
  "args": ["-y", "qwen-mcp-tool"]
}
```

2. Import to Claude Code:
```bash
claude mcp add-from-claude-desktop
```

## Configuration

Register the MCP server with your MCP client:

### For NPX Usage (Recommended)

Add this configuration to your Claude Desktop config file:

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

### For Global Installation

If you installed globally, use this configuration instead:

```json
{
  "mcpServers": {
    "qwen-code": {
      "command": "qwen-mcp"
    }
  }
}
```

**Configuration File Locations:**

- **Claude Desktop**:
  - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
  - **Linux**: `~/.config/claude/claude_desktop_config.json`

After updating the configuration, restart your terminal session.

## Example Workflow

- **Natural language**: "use qwen to explain index.html", "understand the massive project using qwen", "ask qwen to search for latest news"
- **Claude Code**: Type `/qwen-code` and commands will populate in Claude Code's interface.

## Usage Examples

### With File References (using @ syntax)

- `ask qwen to analyze @src/main.js and explain what it does`
- `use qwen to summarize @. the current directory`
- `analyze @package.json and tell me about dependencies`

### General Questions (without files)

- `ask qwen to search for the latest tech news`
- `use qwen to explain div centering`
- `ask qwen about best practices for React development related to @file_im_confused_about`

### Using Qwen Code's Sandbox Mode (-s)

The sandbox mode allows you to safely test code changes, run scripts, or execute potentially risky operations in an isolated environment.

- `use qwen sandbox to create and run a Python script that processes data`
- `ask qwen to safely test @script.py and explain what it does`
- `use qwen sandbox to install numpy and create a data visualization`
- `test this code safely: Create a script that makes HTTP requests to an API`

### Tools (for the AI)

These tools are designed to be used by the AI assistant, with enhanced programming capabilities.

- **`ask-qwen`**: Asks Qwen for its perspective. Can be used for general questions or complex analysis of files.
  - **`prompt`** (required): The analysis request. Use the `@` syntax to include file or directory references (e.g., `@src/main.js explain this code`) or ask general questions (e.g., `Please use a web search to find the latest news stories`).
  - **`model`** (optional): The Qwen model to use. Defaults to `qwen-plus`.
  - **`sandbox`** (optional): Set to `true` to run in sandbox mode for safe code execution.
- **`generate-code`**: Generates code based on a natural language description of the task.
  - **`task`** (required): The coding task to perform (e.g., 'create a React component', 'write a Python function to sort a list')
  - **`language`** (optional): Programming language to use (e.g., 'python', 'javascript', 'java', 'cpp')
  - **`framework`** (optional): Framework or library to use (e.g., 'React', 'Vue', 'Django', 'Express')
  - **`requirements`** (optional): Specific requirements or constraints for the code
  - **`model`** (optional): The Qwen model to use. Defaults to `qwen-plus`.
- **`review-code`**: Reviews code for quality, performance, security, and maintainability issues.
  - **`code`** (required): The code to review
  - **`language`** (optional): Programming language of the code (e.g., 'python', 'javascript', 'java', 'cpp')
  - **`focus`** (optional): Focus area for the review ('quality', 'performance', 'security', 'maintainability', 'all'). Defaults to 'all'.
  - **`styleGuide`** (optional): Specific style guide to follow (e.g., 'PEP8', 'Google JavaScript Style Guide')
  - **`model`** (optional): The Qwen model to use. Defaults to `qwen-plus`.
- **`refactor-code`**: Refactors code to improve its structure, readability, or performance.
  - **`code`** (required): The code to refactor
  - **`language`** (optional): Programming language of the code (e.g., 'python', 'javascript', 'java', 'cpp')
  - **`goal`** (optional): The goal of the refactoring (e.g., 'improve readability', 'optimize performance', 'reduce complexity')
  - **`model`** (optional): The Qwen model to use. Defaults to `qwen-plus`.
- **`explain-code`**: Explains what a piece of code does and how it works.
  - **`code`** (required): The code to explain
  - **`language`** (optional): Programming language of the code (e.g., 'python', 'javascript', 'java', 'cpp')
  - **`detailLevel`** (optional): Level of detail for the explanation ('brief', 'detailed', 'comprehensive'). Defaults to 'detailed'.
  - **`model`** (optional): The Qwen model to use. Defaults to `qwen-plus`.
- **`sandbox-test`**: Safely executes code or commands in Qwen's sandbox environment. Always runs in sandbox mode.
  - **`prompt`** (required): Code testing request (e.g., `Create and run a Python script that...` or `@script.py Run this safely`).
  - **`model`** (optional): The Qwen model to use.
- **`Ping`**: A simple test tool that echoes back a message.
- **`Help`**: Shows the Qwen Code help text.

### Slash Commands (for the User)

You can use these commands directly in Claude Code's interface (compatibility with other clients has not been tested).

- **/analyze**: Analyzes files or directories using Qwen, or asks general questions.
  - **`prompt`** (required): The analysis prompt. Use `@` syntax to include files (e.g., `/analyze prompt:@src/ summarize this directory`) or ask general questions (e.g., `/analyze prompt:Please use a web search to find the latest news stories`).
- **/sandbox**: Safely tests code or scripts in Qwen's sandbox environment.
  - **`prompt`** (required): Code testing request (e.g., `/sandbox prompt:Create and run a Python script that processes CSV data` or `/sandbox prompt:@script.py Test this script safely`).
- **/help**: Displays the Qwen Code help information.
- **/ping**: Tests the connection to the server.
  - **`message`** (optional): A message to echo back.

### Programming-Focused Slash Commands

- **/generate-code**: Generates code from a natural language description.
  - **`task`** (required): The coding task to perform
  - **`language`** (optional): Programming language to use
  - **`framework`** (optional): Framework or library to use
  - **`requirements`** (optional): Specific requirements or constraints
- **/review-code**: Reviews code for issues and improvements.
  - **`code`** (required): The code to review
  - **`language`** (optional): Programming language of the code
  - **`focus`** (optional): Focus area for the review ('quality', 'performance', 'security', 'maintainability', 'all')
  - **`styleGuide`** (optional): Specific style guide to follow
- **/refactor-code**: Refactors code to improve its quality.
  - **`code`** (required): The code to refactor
  - **`language`** (optional): Programming language of the code
  - **`goal`** (optional): The goal of the refactoring
- **/explain-code**: Explains what a piece of code does.
  - **`code`** (required): The code to explain
  - **`language`** (optional): Programming language of the code
  - **`detailLevel`** (optional): Level of detail for the explanation ('brief', 'detailed', 'comprehensive')

## Contributing

Contributions are welcome! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

**Disclaimer:** This is an unofficial, third-party tool and is not affiliated with, endorsed, or sponsored by Alibaba Cloud.
