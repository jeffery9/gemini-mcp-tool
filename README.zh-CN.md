# Qwen MCP 工具

<div align="center">

[![GitHub Release](https://img.shields.io/github/v/release/jamubc/qwen-mcp-tool?logo=github&label=GitHub)](https://github.com/jamubc/qwen-mcp-tool/releases)
[![npm version](https://img.shields.io/npm/v/qwen-mcp-tool)](https://www.npmjs.com/package/qwen-mcp-tool)
[![npm downloads](https://img.shields.io/npm/dt/qwen-mcp-tool)](https://www.npmjs.com/package/qwen-mcp-tool)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Open Source](https://img.shields.io/badge/Open%20Source-❤️-red.svg)](https://github.com/jamubc/qwen-mcp-tool)

</div>

> 📚 **[查看完整文档](./docs/index.md)** - 搜索功能、示例、常见问题、故障排除、最佳实践

此项目是 [gemini-mcp-tool](https://github.com/jamubc/gemini-mcp-tool) 的一个分支，由 jamubc 开发，已适配 Qwen Code。

## 超强编程能力的 Qwen Code

Qwen Code 专为编程任务而设计，提供代码生成、审查、重构和解释等高级功能。通过此 MCP 工具，您可以直接在 Claude 中使用 Qwen Code 的强大编程功能。

## 先决条件

在使用此工具之前，请确保您已安装：

1. **[Node.js](https://nodejs.org/)** (v16.0.0 或更高版本)
2. **[Qwen Code](https://github.com/QwenLM/qwen-code.git)** 已安装并配置（命令行工具：`qwen`）

## 安装选项

有几种方式可以安装和使用此工具：

### 1. 使用 npx 直接运行（推荐）
无需安装，直接从 GitHub 运行：
```bash
claude mcp add qwen-code -- npx jamubc/qwen-mcp-tool
```

### 2. 克隆并本地安装
```bash
# 克隆仓库
git clone https://github.com/jamubc/qwen-mcp-tool.git
cd qwen-mcp-tool

# 安装依赖
npm install

# 构建项目
npm run build

# 全局链接（或安装）
npm link
```

### 3. 下载发布版本
访问我们的 [GitHub Releases](https://github.com/jamubc/qwen-mcp-tool/releases) 页面下载最新版本。

### Qwen Code 编程能力

Qwen Code 提供高级编程能力：

- **代码生成**：根据自然语言描述创建代码
- **代码审查**：分析代码的质量、性能和安全问题
- **代码重构**：改进代码结构和可读性
- **代码解释**：详细了解复杂代码的工作原理

## 一行命令安装

```bash
claude mcp add qwen-code -- npx -y qwen-mcp-tool
```

## 验证安装

在 Claude Code 中输入 `/mcp` 来验证 qwen-code MCP 是否激活。

---

### 替代方案：从 Claude Desktop 导入

如果您已在 Claude Desktop 中配置：

1. 添加到您的 Claude Desktop 配置：
```json
"qwen-code": {
  "command": "npx",
  "args": ["-y", "qwen-mcp-tool"]
}
```

2. 导入到 Claude Code：
```bash
claude mcp add-from-claude-desktop
```

## 配置

将 MCP 服务器注册到您的 MCP 客户端：

### 使用 NPX（推荐）

将以下配置添加到您的 Claude Desktop 配置文件：

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

### 全局安装

如果您是全局安装的，请使用以下配置：

```json
{
  "mcpServers": {
    "qwen-code": {
      "command": "qwen-mcp"
    }
  }
}
```

**配置文件位置：**

- **Claude Desktop**：
  - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
  - **Linux**: `~/.config/claude/claude_desktop_config.json`

更新配置后，请重启终端会话。

## 示例工作流程

- **自然语言**："use qwen to explain index.html"，"understand the massive project using qwen"，"ask qwen to search for latest news"
- **Claude Code**：在 Claude Code 界面中输入 `/qwen-code`，命令将出现在 Claude Code 的界面中。

## 使用示例

### 使用文件引用（使用 @ 语法）

- `ask qwen to analyze @src/main.js and explain what it does`
- `use qwen to summarize @. the current directory`
- `analyze @package.json and tell me about dependencies`

### 一般问题（无文件）

- `ask qwen to search for the latest tech news`
- `use qwen to explain div centering`
- `ask qwen about best practices for React development related to @file_im_confused_about`

### 使用 Qwen Code 的沙箱模式 (-s)

沙箱模式允许您在隔离环境中安全地测试代码更改、运行脚本或执行潜在风险操作。

- `use qwen sandbox to create and run a Python script that processes data`
- `ask qwen to safely test @script.py and explain what it does`
- `use qwen sandbox to install numpy and create a data visualization`
- `test this code safely: Create a script that makes HTTP requests to an API`

## 工具（供 AI 使用）

这些工具专为 AI 助手设计。

- **`ask-qwen`**：向 Qwen 询问其观点。可用于一般问题或复杂文件分析。
  - **`prompt`**（必填）：分析请求。使用 `@` 语法包含文件或目录引用（例如，`@src/main.js explain this code`）或提出一般问题（例如，`Please use a web search to find the latest news stories`）。
  - **`model`**（可选）：要使用的 Qwen 模型。默认为 `qwen-plus`。
  - **`sandbox`**（可选）：设置为 `true` 以在沙箱模式下运行以进行安全代码执行。
- **`generate-code`**：根据自然语言描述生成代码。
  - **`task`**（必填）：要执行的编码任务（例如，'create a React component'，'write a Python function to sort a list'）
  - **`language`**（可选）：要使用的编程语言（例如，'python'，'javascript'，'java'，'cpp'）
  - **`framework`**（可选）：要使用的框架或库（例如，'React'，'Vue'，'Django'，'Express'）
  - **`requirements`**（可选）：代码的特定要求或约束
  - **`model`**（可选）：要使用的 Qwen 模型。默认为 `qwen-plus`。
- **`review-code`**：审查代码的质量、性能、安全性和可维护性问题。
  - **`code`**（必填）：要审查的代码
  - **`language`**（可选）：代码的编程语言（例如，'python'，'javascript'，'java'，'cpp'）
  - **`focus`**（可选）：审查的重点领域（'quality'，'performance'，'security'，'maintainability'，'all'）。默认为 'all'。
  - **`styleGuide`**（可选）：要遵循的特定风格指南（例如，'PEP8'，'Google JavaScript Style Guide'）
  - **`model`**（可选）：要使用的 Qwen 模型。默认为 `qwen-plus`。
- **`refactor-code`**：重构代码以改进其结构、可读性或性能。
  - **`code`**（必填）：要重构的代码
  - **`language`**（可选）：代码的编程语言（例如，'python'，'javascript'，'java'，'cpp'）
  - **`goal`**（可选）：重构的目标（例如，'improve readability'，'optimize performance'，'reduce complexity'）
  - **`model`**（可选）：要使用的 Qwen 模型。默认为 `qwen-plus`。
- **`explain-code`**：解释一段代码的作用和工作原理。
  - **`code`**（必填）：要解释的代码
  - **`language`**（可选）：代码的编程语言（例如，'python'，'javascript'，'java'，'cpp'）
  - **`detailLevel`**（可选）：解释的详细级别（'brief'，'detailed'，'comprehensive'）。默认为 'detailed'。
  - **`model`**（可选）：要使用的 Qwen 模型。默认为 `qwen-plus`。
- **`sandbox-test`**：在 Qwen 的沙箱环境中安全地执行代码或命令。始终在沙箱模式下运行。
  - **`prompt`**（必填）：代码测试请求（例如，`Create and run a Python script that...` 或 `@script.py Run this safely`）。
  - **`model`**（可选）：要使用的 Qwen 模型。
- **`Ping`**：一个简单的测试工具，回显消息。
- **`Help`**：显示 Qwen Code 帮助文本。

## Slash 命令（供用户使用）

您可以直接在 Claude Code 界面中使用这些命令（与其他客户端的兼容性尚未测试）。

- **/analyze**：使用 Qwen 分析文件或目录，或提出一般问题。
  - **`prompt`**（必填）：分析提示。使用 `@` 语法包含文件（例如，`/analyze prompt:@src/ summarize this directory`）或提出一般问题（例如，`/analyze prompt:Please use a web search to find the latest news stories`）。
- **/sandbox**：在 Qwen 的沙箱环境中安全地测试代码或脚本。
  - **`prompt`**（必填）：代码测试请求（例如，`/sandbox prompt:Create and run a Python script that processes CSV data` 或 `/sandbox prompt:@script.py Test this script safely`）。
- **/help**：显示 Qwen Code 帮助信息。
- **/ping**：测试与服务器的连接。
  - **`message`**（可选）：要回显的消息。

### 编程相关的 Slash 命令

- **/generate-code**：根据自然语言描述生成代码。
  - **`task`**（必填）：要执行的编码任务
  - **`language`**（可选）：要使用的编程语言
  - **`framework`**（可选）：要使用的框架或库
  - **`requirements`**（可选）：特定要求或约束
- **/review-code**：审查代码的问题和改进。
  - **`code`**（必填）：要审查的代码
  - **`language`**（可选）：代码的编程语言
  - **`focus`**（可选）：审查的重点领域（'quality'，'performance'，'security'，'maintainability'，'all'）
  - **`styleGuide`**（可选）：要遵循的特定风格指南
- **/refactor-code**：重构代码以提高其质量。
  - **`code`**（必填）：要重构的代码
  - **`language`**（可选）：代码的编程语言
  - **`goal`**（可选）：重构的目标
- **/explain-code**：解释一段代码的作用。
  - **`code`**（必填）：要解释的代码
  - **`language`**（可选）：代码的编程语言
  - **`detailLevel`**（可选）：解释的详细级别（'brief'，'detailed'，'comprehensive'）

## 贡献

欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.md)了解如何提交拉取请求、报告问题和为项目做出贡献的详细信息。

## 许可证

本项目基于 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

**免责声明：** 这是一个非官方的第三方工具，与阿里巴巴云无关。