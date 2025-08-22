## Getting Started

<div align="center">⇣ Find your setup ↴</div>

<ClientGrid>
  <div class="client-card client-card--recommended claude-code-card">
    <h3><span class="snowflake">❋</span> Claude Code</h3>
    <div class="client-badge">Power Users</div>
    <p>One-command setup</p>
    <a href="#claude-code-recommended" class="client-button">Get Started →</a>
  </div>
  
  <div class="client-card">
    <h3>🖥️ <br>Claude Desktop</h3>
    <div class="client-badge">Everyday users</div>
    <p>JSON configuration</p>
    <a href="#claude-desktop" class="client-button">Setup Guide →</a>
  </div>
  
  <div class="client-card">
    <h3>📂 Other Clients</h3>
    <div class="client-badge">40+ Options</div>
    <p>Warp, Copilot, and More</p>
    <a href="#other-mcp-clients" class="client-button">More →</a>
  </div>
</ClientGrid>

## Client Setup

## Prerequisites

Before installing, ensure you have:

- **[Node.js](https://nodejs.org/)** v16.0.0 or higher
- **[Qwen Code](https://help.aliyun.com/zh/qwen/)** installed and configured on your system
- **[Claude Desktop](https://claude.ai/download)** or **[Claude Code](https://www.anthropic.com/claude-code)** with MCP support


## Claude Code (Recommended)
::: warning 💡 qwen-mcp-tool is tested extensively with claude code
:::
Claude Code offers the smoothest experience.

```bash
# install for claude code
claude mcp add qwen-code -- npx -y qwen-mcp-tool

# Start Claude Code - it's automatically configured!
claude
```

## Claude Desktop
---
#### Configuration File Locations

<ConfigModal>

*Where are my Claude Desktop Config Files?:*

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/claude/claude_desktop_config.json`

</ConfigModal>

---

For Claude Desktop users, add this to your configuration file:

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

::: warning
You must restart Claude Desktop ***completely*** for changes to take effect.
:::
## Other MCP Clients

Gemini MCP Tool works with 40+ MCP clients! Here are the common configuration patterns:

### STDIO Transport (Most Common)
```json
{
  "transport": {
    "type": "stdio",
    "command": "npx",
    "args": ["-y", "qwen-mcp-tool"]
  }
}
```

### Popular Clients

<details>
<summary><strong>Warp</strong> - Modern terminal with AI features</summary>

**Configuration Location:** Terminal Settings → AI Settings → MCP Configuration

```json
{
  "qwen-code": {
    "command": "npx",
    "args": [
      "-y",
      "qwen-mcp-tool"
    ],
    "env": {},
    "working_directory": null,
    "start_on_launch": true
  }
}
```

**Features:** Terminal-native MCP integration, AI-powered command suggestions
</details>
### Generic Setup Steps

1. **Install Prerequisites**: Ensure [Qwen Code](https://help.aliyun.com/zh/qwen/) is installed
2. **Add Server Config**: Use the STDIO transport pattern above
3. **Restart Client**: Most clients require restart after config changes
4. **Test Connection**: Try `/qwen-code:ping` or natural language commands

## Verify Your Setup

Once configured, test that everything is working:

### 1. Basic Connectivity Test
Type in Claude:
```
/qwen-code:ping "Hello from Qwen MCP!"
```

### 2. Test File Analysis
```
/qwen-code:analyze @README.md summarize this file
```

### 3. Test Sandbox Mode
```
/qwen-code:sandbox create a simple Python hello world script
```

## Quick Command Reference

Once installed, you can use natural language or slash commands:

### Natural Language Examples
- "use qwen to explain index.html"
- "understand the massive project using qwen"
- "ask qwen to search for latest news"

### Slash Commands in Claude Code
Type `/qwen-code` and these commands will appear:
- `/qwen-code:analyze` - Analyze files or ask questions
- `/qwen-code:sandbox` - Safe code execution
- `/qwen-code:help` - Show help information
- `/qwen-code:ping` - Test connectivity

### Enhanced Programming Commands
Qwen MCP Tool also provides specialized programming commands:
- `/qwen-code:generate-code` - Generate code from natural language descriptions
- `/qwen-code:review-code` - Review code for quality, performance, and security
- `/qwen-code:refactor-code` - Refactor code to improve its structure
- `/qwen-code:explain-code` - Explain how code works

## Need a Different Client?

Don't see your MCP client listed? Gemini MCP Tool uses standard MCP protocol and works with any compatible client.

::: tip Find More MCP Clients
- **Official List**: [modelcontextprotocol.io/clients](https://modelcontextprotocol.io/clients)
- **Configuration Help**: Most clients follow the STDIO transport pattern above
- **Community**: Join discussions on GitHub for client-specific tips
:::

## Common Issues

### "Command not found: qwen"
Make sure you've installed Qwen Code:
```bash
# Install Qwen Code CLI
# Please refer to the official Qwen documentation for installation instructions
```

### "MCP server not responding"
0. run claude code --> /doctor
1. Check your configuration file path
2. Ensure JSON syntax is correct
3. Restart your MCP client completely
4. Verify Gemini CLI works: `gemini -help`


### Client-Specific Issues
- **Claude Desktop**: Must restart completely after config changes
- **Other Clients**: Check their specific documentation for MCP setup

## Next Steps

Now that you're set up:
- Learn about file analysis with @ syntax
- Explore sandbox mode for safe code execution
- Check out real-world examples in the README
- Join the community for support

::: info Need Help?
If you run into issues, [open an issue](https://github.com/jamubc/gemini-mcp-tool/issues) on GitHub.
:::