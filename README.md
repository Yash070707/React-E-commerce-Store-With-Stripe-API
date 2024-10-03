# React E-commerce Store With Stripe API

This is a full-stack e-commerce web application developed with **React** on the frontend and **Node.js/Express.js** on the backend. The application integrates **Stripe API** to handle secure payments, enabling users to add products to their cart and complete purchases.

## Features
- **Product Catalog**: A list of products available for purchase.
- **Shopping Cart**: Add and remove products, update quantities, and view the total price.
- **Checkout Process**: Redirects users to the Stripe interface for payment processing.
- **Success/Cancel Pages**: Display a message after successful payment or canceled transaction.
- **Backend**: Node.js/Express.js server handling Stripe API interactions for creating checkout sessions.

## Technologies Used
- **Frontend**: React, Bootstrap for UI
- **Backend**: Node.js, Express.js
- **Payment Integration**: Stripe API (Test mode)
- **State Management**: React Context API
- **Development Environment**: Visual Studio Code


## How to Run the Project

### Prerequisites

Before running the project, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- A **Stripe account** with test mode activated.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Yash070707/React-E-commerce-Store-With-Stripe-API.git
   cd React-E-commerce-Store-With-Stripe-API/store

2. Install backend dependencies:
    ```bash
    npm install

3. Install frontend dependencies:
    ```bash
    cd src
    npm install

4. Update stripe secret keys and product price keys in server.js and productsStore.js

### Running the Application
1. Start the backend server:
    ```bash
    npm run server

2. Start the frontend development server:
    ```bash
    npm start


