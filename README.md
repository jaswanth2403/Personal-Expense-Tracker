#  Personal Expense Tracker

A simple expenses tracking system built with Node.js, Express, and SQLite for managing income and expense transactions.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Setup Instructions

1. Clone the repository:
   --- git clone <repository-url> repository url.
   
2. Navigate to the project directory:
   --- cd Personal-Expense-Tracker
    
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
- Description: GET all transactions initially its a empty list
![1](https://github.com/user-attachments/assets/41aa3c0f-8ce2-4922-9dc6-cdfa3f6ff32f)


- Description: Add a new transaction of type (income).
![post1](https://github.com/user-attachments/assets/72ef9717-6356-4ad2-a77e-1010101d678a)

- Description: Add a new transaction of type (expense).
![post 2](https://github.com/user-attachments/assets/c499b14c-5769-47cb-9bdc-3974bc7f6d4f)

- Description: Add a new transaction of type (expense).
![post3](https://github.com/user-attachments/assets/28f9ec86-156f-49b3-a44c-a8c4a51c1d71)

- Description: GET all transaction details.
![getalltransactions](https://github.com/user-attachments/assets/867a9ac4-80ba-4df4-89f3-66bdba88c379)

- Description: UPDATE a transaction by id which is 1.
![updated transaction1](https://github.com/user-attachments/assets/90679461-0083-4f33-b88f-745f9195aab9)

- Description: GET transaction details of specific id which is 1.
![get transaction by id 1](https://github.com/user-attachments/assets/ca28ad48-ae10-4273-96a5-83729ee300c9)

- Description: GET summary which is total income , total expenses , remaining amount.
![get summary](https://github.com/user-attachments/assets/4a0295ad-3014-437c-9148-4e949c79e23d)

- Description: DELETE a transaction based on id which is 3.
![deleted transaction 3](https://github.com/user-attachments/assets/709a431b-68c6-4366-8e9b-f2d88c2fad02)

- Description: GET summary after deleting transaction by id 3.
![get summary after deletion of transaction 3](https://github.com/user-attachments/assets/6e9b71f6-e206-4d00-9304-da19cca64926)















