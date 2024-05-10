# AgizaApp - ReactJs, Python(Django)
A simple customer orders database that allows a user to input customer details, and their orders and send a message to the customer alerting them that their order has been added

The application has a REST API

## Auth Page
Allows authenticated users to register and login
![image](/frontend/src/assets/login.jpeg)
!![image](/frontend/src/assets/signup.jpeg)


## Home page/CLients List
Displays all customers available and allows user to enter new customers. 
A user can then click to view the order details of a particular customer. 
A user can also delete the customer details entirely
![image](/frontend/src/assets/client.jpeg)

## Orders List Page
Displays all orders available for a particular customer and allows user to enter new order details for the particular customer. 
A user can then click to send a message confirming the order a parrticular customer. 
A user can also delete the customer details entirely
![image](/frontend/src/assets/order.jpeg)

## Setup and Installation

### Prerequisites
Python 3.x installed on your system (Download Python)
Node.js installed on your system (Download Node.js)

Clone the repo to a local directory

### Backend Set up (Django)
To set up;
    1. Create a virtual environment 
    python3 -m venv env
    2.Activate the virtual environment:
    source env/bin/activate  (for ubuntu)
    .\env\Scripts\activate  (for windows)
    3. Install Django and other dependencies:
    pip install django
    4. Navigate to the backend directory and run migrations: 
    python manage.py migrate
    5. Start the django development server:
    python manage.py runserver

### Frontend Set up (Django)
To set up;
    1. On another terminal, navigate to frontend directory, and install dependencies (make sure to be on virtual env):
    npm install
    2. Start the Vite development server:
    npm run dev

## Setup and Installation
For production deployment, configure Django and Vite accordingly.
Make sure to keep your dependencies updated.

# Enjoy!

## Copyright

© [Ann Wanjiku], [2024]




