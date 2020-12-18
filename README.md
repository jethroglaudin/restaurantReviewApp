## Restaurant Review App - Yelp 2.0

Full stack web application that allows users to submit, review, and leave comments on restaurants 
they've been too.

Users must register and login to leave a review or submit a restuarant.

### Prerequisites

You must create a config file with your environment variables.

1. Create a new file: .env

2. Add variables

```
NODE_ENV=YOUR_ENV
PORT=YOUR_PORT

MONGO_URI=YOUR_MONGO_URI
JWT_PRIVATE_KEY = YOUR_KEY

PGUSER=YOUR_USER
PGHOST=YOUR_HOST
PGPASSWORD=YOUR_PASSWORD
PGDATABASE= YOUR_DB_NAME
PGPORT=YOUR_PORT

```

## Installation

1. Install dependencies in main project folder.

```
npm install
```

2. Install dependencies in client folder.

```
cd client

npm install
```

## Running the servers

This projects uses concurrently to run the Node and React servers together.

Make sure you are in the project root directory before executing any of these commands.

Start development server.

```
npm run dev
```

Start production server.

```
npm start
## Built With

- React
- JavaScript
- NodeJS
- ExpressJS
- MongoDB Atlas
- PostgreSQL
- VSCode