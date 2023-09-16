# totalitycorp-frontend-challenge

EchoShop is an e-commerce platform that allows users to browse a variety of products, add them to their cart, and proceed to checkout. It also provides estimated delivery times based on location data.

## Table of Contents
* Demo
* Features
* Technologies Used
* Getting Started
* Usage
* Contributing

## Demo
https://echo-shop.netlify.app/

## Features
1. Product Browsing
EchoShop provides users with a seamless browsing experience, allowing them to explore a diverse range of products available on the platform.
Each product is presented with detailed information, including the title, price, seller location, and a rating based on user reviews.
2. Add to Cart
Users have the ability to add products to their shopping cart with a single click. The cart updates in real time, providing immediate feedback to the user.
The cart functionality allows users to review their selected items, adjust quantities, and remove products before proceeding to checkout.
3. Estimated Delivery Time
EchoShop leverages location data to offer users an estimated delivery time for their selected products.
By inputting both the buyer's and seller's locations, the platform calculates an approximate delivery timeframe, ensuring transparency and convenience for the user.
4. User Authentication
EchoShop provides a secure user authentication system, enabling users to create accounts and log in to the platform.
Registered users benefit from features such as order history tracking, personalized recommendations, and a seamless shopping experience tailored to their preferences.
5. Order History
Authenticated users can access their order history, providing a comprehensive record of past purchases.
This feature allows users to review previous transactions, track deliveries, and facilitate easy reordering of favorite products.
6. Product Search and Filtering
EchoShop incorporates a robust search and filtering system, allowing users to quickly locate specific products or narrow down options based on categories, price ranges, ratings, and other relevant attributes.
7. Responsive Design
The platform is designed to be fully responsive, ensuring an optimal user experience across various devices, including desktops, tablets, and mobile phones.
8. User Reviews and Ratings
EchoShop encourages user engagement by enabling product reviews and ratings. This feature empowers customers to share their experiences, helping others make informed purchasing decisions.
9. Secure Payment Processing
The platform integrates with the Stripe API to facilitate secure and seamless payment processing.
Users can confidently complete their transactions knowing that their payment information is handled with the highest level of security.

## Technologies Used

### Frontend:
* React
* HTML
* CSS
* JavaScript

### Backend:
* Node.js
* Express
* Firebase (for authentication and database)

### Payment Processing:
* Stripe API

### Deployment:
* Netlify Hosting (for frontend)
* Backend deployed on Render

## Getting Started
To run this project locally, follow these steps:

Clone the repository:
```
git clone https://github.com/your-username/echoshop.git
```

Navigate to the project directory:
```
cd echoshop
```

Install dependencies:
```
npm install
```

Start the development server:
```
npm start
```

## Usage
* Browse products on the homepage.
* Click on a product to view details.
* Add products to the cart and proceed to checkout.
* If registered, view order history in the "Orders" section.

## Contributing
Contributions are welcome! To contribute to EchoShop, follow these steps:

* Fork the repository
* Create a new branch for your feature: git checkout -b feature-name
* Make your changes and commit them: git commit -m 'Description of changes'
* Push to the branch: git push origin feature-name
* Submit a pull request
