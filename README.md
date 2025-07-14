### SmartCart AI: Multi-Agent System for Personalized E-Commerce
I built a smart e-commerce system that gives personalized product recommendations using a multi-agent AI setup with Ollama LLMs and  SQLite database

##### working:

Here I used a 2 datasets  for customer_data_collection & product_recommendation_dataset in SQLite database

Customer Agent: Finds customer details like age, location, and browsing history using the Customer ID.

Product Agent: Loads product information like category, brand, price, and ratings.

Recommendation Agent: Uses both customer and product data to generate smart suggestions using an AI model (LLM).

#####  used:

Frontend: React (for user input and results display)

Backend: Node.js & Express (to connect everything)

Database: SQLite (to store customer and product data)

AI: Ollama (LLM used to generate personalized product ideas)

#####  What it does:

You enter a Customer ID.

The system fetches customer and product info.

The AI recommends products that match that customer’s behavior and preferences.

The results are shown clearly on the frontend.

##### Technologies:

###### Frontend:

 React.js – For building the user interface

 CSS – For styling components

######  AI & Multi-Agent Framework:

 Ollama – On-prem LLM for generating personalized recommendations

###### Multi-Agent System – Includes:

Customer Agent

Product Agent

Recommendation Agent

######  Backend:

 Node.js – JavaScript runtime for server-side logic

 Express.js – Web framework for handling API routes

######  Database:

 SQLite – Lightweight database for storing customer and product data (long-term memory)

#####  Other Tools:

 Fetch API – For making frontend-backend requests

 VS Code  – For development

 Thunder Client – For testing backend APIs 

 Git – For version control
