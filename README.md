#  Personal Expense Tracker

A simple expenses tracking system built with Node.js, Express, and SQLite for managing income and expense transactions.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Setup Instructions

1. Clone the repository:
   --- git clone <repository-url>
   
2. Navigate to the project directory:
   --- cd finance-tracker
    
3. Install the dependencies: It will install all necessary dependencies-[express, sqlite, sqlite3, path, nodemon]
    --- npm install

4. Ensure SQLite is installed on your machine, or use the included SQLite database file (`finance.db`).

5. The SQLite database will automatically be created and initialized with the required tables when the app is started for the first time.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Run Instructions

1. Start the application:
   --- node index.js

2. The server will run on `http://localhost:3000`.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## API Documentation

### 1.a  Add a Transaction

- Endpoint: `POST /addTransactions`
- Description: Add a new transaction of type (income).
- Request Body:
  ```json
  {
    "type":"income",
    "category":"salary",
    "amount":50000,
    "date":"2024-10-22",
    "description":"salary credited"
}

### 1.b Add a Transaction

- Endpoint: `POST /addTransactions`
- Description: Add a new transaction of type (expense).
- Request Body:
  ```json
  {
    "type":"expense",
    "category":"rent",
    "amount":20000,
    "date":"2024-10-24",
    "description":"rent"
  }


### 1.c Add a Transaction

- Endpoint: `POST /addTransactions`
- Description: Add a new transaction of type (expense).
- Request Body:
  ```json
  {
    "type":"expense",
    "category":"recharge",
    "amount":5000,
    "date":"2024-10-24",
    "description":"payed for recharge"
  }
Response:
Created: Transaction added successfully.
Internal Server Error: Error adding transaction.




### 2. Get all transactions 

- Endpoint: `GET /transactions`
- Description: Get all transactions.
Response:
OK: List of all transactions.
Internal Server Error: Error retrieving transactions.




### 3. Get transactions by id

- Endpoint: `GET /transactions/1`
- Description: Get a transaction by id which is 1.

- Endpoint: `GET /transactions/2`
- Description: Get a transaction by id which is 2.2

- Endpoint: `GET /transactions/2`
- Description: Get a transaction by id which is 3.
- 
Response:
OK: The transaction details.
Not Found: Transaction not found.
Internal Server Error: Error retrieving transaction.




### 4. Update transactions by id
- Endpoint: `PUT /transactions/1`
- Description: Update a transaction by id which is 1.
  ```json
  {
    "type":"income",
    "category":"salary",
    "amount":80000,
    "date":"2024-10-22",
    "description":"salary credited"
  }
Response:
OK: Transaction updated successfully.
Not Found: Transaction not found.
Internal Server Error: Error updating transaction.




### 5. Delete transactions by id
- Endpoint: `DELETE /transactions/1`
- Description: Delete a transaction by id which is 1.
Response:
OK: Transaction deleted successfully.
Not Found: Transaction not found.
Internal Server Error: Error deleting transaction.




### 6. Get summary of all transactions
- Endpoint: `GET /summary`
- Description: Get summary which is total income , total expenses , remaining amount.
Response:
```json
  {
  "totalIncome": 80000,
  "totalExpenses": 25000,
  "balance": 55000
   }
```




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Postman screenshots demonstrating each API call.








