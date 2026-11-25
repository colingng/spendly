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

## Run it locally

You need two terminal windows, one for each half of the app.

```bash
# Terminal 1: backend (Python) on http://localhost:8000
cd backend
uv run uvicorn app.main:app --reload --port 8000

# Terminal 2: front end (React) on http://localhost:5173
cd frontend
npm install   # first time only
npm run dev
```

Open http://localhost:5173. You should see **✅ Backend connected**.
Interactive API docs: http://localhost:8000/docs

Run the backend tests with `cd backend && uv run pytest`.

## Tech stack

| Layer | Tools |
|---|---|
| Front end | React, TypeScript, Vite, Tailwind CSS, Recharts |
| Backend | Python, FastAPI |
| AI | LiteLLM; MCP server in Rust |
