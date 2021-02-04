# Web App Template

### What is This?

Hello, I am Thomsen Cummings, and this is my basic template for web app development. I much prefer this setup to create-react-app as I know exactly what goes into it, and how to easily extend it.

**Tech stack:**

- React.js for frontend code (incl. a reset.css file, FontAwesome 5.14, and Google Fonts' Open Sans)
- Babel and Webpack 4.0 for the build pipeline
- A simple Express.js config for static serving
- Jest and Enzyme for testing, if needed

## How to Run

### In Production

1. run `npm install`
2. run `node server.js` — This will start up the mock backend server.
3. In a new tab, run `npm run prod` — This will build the project in production mode with Webpack.
4. Open `localhost:5000` in your browser, and et voilà!

### In Development

1. run `npm install` — You can skip this step if you've already installed the node modules.
2. run `npm run dev` — This concurrently run the server and start up a Webpack dev server to host the build on `localhost:8080`.

### Run the Test Suite

**NB: This test suite will only run on Node Version 10 or later**, which I believe is an issue with Jest. For the purposes of development I have been using Node Version 12.14.1.

1. run `npm run test` — This will run the Jest test suite, set up the Enzyme adapter, and run through all of the tests.
2. Look at all that green!
