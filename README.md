# Spendly

A personal spending app built on ideas from corporate spend tools like Ramp.

Upload your credit card statement and Spendly sorts every purchase into a category,
tracks budgets, flags things worth a second look (new subscriptions, duplicate charges,
unusually large purchases), and lets you ask an AI questions about your spending.

> 🚧 Early development.

## Planned features

- Transactions table with search, filters and sorting
- Overview dashboard: spending by category, month over month
- CSV import from your credit card statement
- Budgets and automatic flags
- "Ask AI" chat that works with Claude, GPT or Gemini through [LiteLLM](https://github.com/BerriAI/litellm)
- An MCP server, written in Rust, that gives the AI its data tools
- Public demo mode with sample data

## Tech stack

| Layer | Tools |
|---|---|
| Front end | React, TypeScript, Vite, Tailwind CSS, Recharts |
| Backend | Python, FastAPI |
| AI | LiteLLM; MCP server in Rust |
