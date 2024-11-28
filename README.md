# Skillex Backend Task

## Project Overview
This project is a Node.js API using MySQL that generates valid combinations of items based on a given rule. The combinations are stored in a MySQL database and returned in the response.

### Features:
- Generate valid combinations (items with the same prefix are not allowed in the same combination).
- Store combinations in a MySQL database using transactions.
- Return combinations in a JSON response.

## Installation

1. Clone the repository:
   git clone <your-repo-url>
   cd backend-task-skillex

2. Install dependencies:
   npm install

3. Set up environment variables by creating a `.env` file:
   touch .env

   Add the following variables:

   DB_HOST=localhost
   DB_USER=<your_db_user>
   DB_PASS=<your_db_password>
   DB_NAME=skillex_task
   PORT=3000

4. Run the MySQL database schema setup:
   mysql -u <username> -p < schema.sql

## Running the Project

1. Start the server:
   npm start

2. Use Postman or any API testing tool to make a POST request to:
   POST http://localhost:3000/api/generate

   Example body:
   {
     "items": ["A1", "B1", "C1", "A2"],
     "length": 2
   }

## Project Structure
/backend-task-skillex
├── controllers
│   └── generateController.js
├── db
│   ├── connection.js
│   └── queries.js
├── routes
│   └── generateRoutes.js
├── utils
│   └── combinationGenerator.js
├── app.js
├── server.js
├── package.json
└── schema.sql

## Notes
- Make sure MySQL is running.
- Insertions into the database use transactions for consistency.
- The project avoids using ORMs and relies on raw SQL queries.
