# How It Works

## Natural Language Workflow Integration

The qwen-mcp-tool is designed to seamlessly integrate into your natural workflow with your preferred MCP compliant AI clients, achieved through carefully crafted tools and pipelines.

Claude automatically decides when to use `ask-qwen` based on context:

- `🔍 comparative analysis` - different AI perspectives for validation
- `🛠️ leveraging extra tools` - Qwen's search and memory functions  
- `📋 code review & big changes` - second opinions on implementation
- `💡 creative problem solving` - brainstorming and ideation

This intelligent selection enhances your workflow exactly when Qwen's capabilities add value.

<div align="center">⇣ when ask-qwen gets called ↴</div>
<DiagramModal>

```mermaid
---
config:
  flowchart:
    htmlLabels: false
    curve: cardinal
---
flowchart LR
    subgraph main
        direction TB
        A[You] --> |"ask qwen..."| B([**Claude**])
        B -..-> |"invokes 'ask-qwen'"| C["Qwen-MCP-Tool"]
        C --> |"spawn!"| D[Qwen-CLI]
        D e1@-.-> |"response"| C
        C -.-> |"response"| B
        B -.-> |"summary response"| A
        e1@{ animate: true }
    end
    subgraph Project
        B --> |"edits"| E["`**@*Files***`"]
        D -.-> |"reads"| E
    end
    classDef userNode fill:#1a237e,stroke:#fff,color:#fff,stroke-width:2px
    classDef claudeNode fill:#e64100,stroke:#fff,color:#fff,stroke-width:2px
    classDef qwenNode fill:#4285f4,stroke:#fff,color:#fff,stroke-width:2px
    classDef mcpNode fill:#37474f,stroke:#fff,color:#fff,stroke-width:2px
    classDef dataNode fill:#1b5e20,stroke:#fff,color:#fff,stroke-width:2px
    class A userNode
    class B claudeNode
    class C mcpNode
    class D qwenNode
    class E dataNode
```
</DiagramModal>
