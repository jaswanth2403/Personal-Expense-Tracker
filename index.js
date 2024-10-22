const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

const dbPath = path.join(__dirname, "finance.db");
let db = null;

app.use(express.json()); // Middleware to parse JSON bodies

// Initialize Database and Server
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    // Create tables if not existing
    await db.exec(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT CHECK(type IN ('income', 'expense')) NOT NULL
      );
    `);

    await db.exec(`
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT CHECK(type IN ('income', 'expense')) NOT NULL,
        category TEXT,
        amount INTEGER NOT NULL,
        date TEXT NOT NULL,
        description TEXT,
        FOREIGN KEY (category) REFERENCES categories (id)
      );
    `);

    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// 1. POST /transactions: Add a new transaction (income or expense)
app.post("/addTransactions", async (req, res) => {
  const { type, category, amount, date, description } = req.body;
  try {
    const result = await db.run(
      `
      INSERT INTO transactions (type, category, amount, date, description)
      VALUES (?, ?, ?, ?, ?);
    `,
      [type, category, amount, date, description]
    );

    res.status(201).json({ transactionId: result.lastID });
  } catch (error) {
    res.status(500).json({ error: "Error adding transaction" });
  }
});

// 2. GET /transactions: Get all transactions
app.get("/transactions", async (req, res) => {
  try {
    const transactions = await db.all("SELECT * FROM transactions;");
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving transactions" });
  }
});

// 3. GET /transactions/:id: Get a transaction by ID
app.get("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await db.get(
      "SELECT * FROM transactions WHERE id = ?;",
      [id]
    );
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving transaction" });
  }
});

// 4. PUT /transactions/:id: Update a transaction by ID
app.put("/updateTransactions/:id", async (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;

  try {
    const result = await db.run(
      `
      UPDATE transactions
      SET type = ?, category = ?, amount = ?, date = ?, description = ?
      WHERE id = ?;
    `,
      [type, category, amount, date, description, id]
    );

    if (result.changes > 0) {
      res.json({ message: "Transaction updated successfully" });
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating transaction" });
  }
});

// 5. DELETE /transactions/:id: Delete a transaction by ID
app.delete("/deleteTransactions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.run("DELETE FROM transactions WHERE id = ?;", [id]);
    if (result.changes > 0) {
      res.json({ message: "Transaction deleted successfully" });
    } else {
      res.status(404).json({ error: "Transaction not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting transaction" });
  }
});

// 6. GET /summary: Get a summary of transactions (total income, expenses, balance)
app.get("/summary", async (req, res) => {
  let summaryQuery = `
    SELECT 
      SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS totalIncome,
      SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS totalExpenses,
      (SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) -
       SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END)) AS balance
    FROM transactions
  `;

  try {
    const summary = await db.get(summaryQuery);
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving summary" });
  }
});
