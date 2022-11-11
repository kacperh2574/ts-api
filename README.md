Simple API created using TypeScript, Nest.js and Mongoose.

1. Clone the repository and go to it:

`git clone https://github.com/kacperh2574/ts-api.git`

2. Install Nest.js:

`npm i -g @nestjs/cli`

3. Install required dependencies:

`npm i @nestjs/common @nestjs/mongoose mongoose`

4. Run API:

`npm run start:dev`

5. Open:

`localhost:3000/products`

API returns files in JSON format. When sending request to specific ID, specify the field/fields in the body (JSON format). Possible fields to use: name (string) and price (number).

**GET** /products - returns a list of all products in the database

**POST** /products - creates a new product with the specified fields

**GET** /products/{id} - returns the specified product

**PATCH** /products/{id} - updates the product with the specified fields

**DELETE** /products/{id} - deletes the specified product
