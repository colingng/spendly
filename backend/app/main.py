from fastapi import FastAPI

app = FastAPI(title="Spendly API")


@app.get("/api/health")
def health_check():
    """Lets the front end (and us) confirm the backend is running."""
    return {"status": "ok"}
