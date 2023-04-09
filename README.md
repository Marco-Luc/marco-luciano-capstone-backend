# NBA - My Starting Five

**_NBA - My Starting Five is a fully responsive, fun and interactive application for comparing NBA Player stats with custom-made digital NBA Player cards_**

**--- Please note that the only pages that are available are the Toronto Raptors team page, the Boston Celtics team page, and the Compare Stats page ---**

This is my capstone project for BrainStation's full-stack bootcamp. Students were tasked to create their very own full-stack application within a two week time frame.

NBA - My Starting Five was made using create-react-app, react-router and SASS for the front end.

I used Node/Express to create a backend API with data I retrieved myself.

🏀 Thank you for checking out my application, I hope you have fun! 🏀

-- Marco Luciano (April, 2023)

![Screenshot of NBA - My Starting Five App](./src/assets/Images/app-screenshot.png)

# Installation

You will need to follow these steps to run NBA - My Starting Five (locally)

_*Note: You will need node and npm already installed*_

#### Setting up the backend

1. Clone or download the backend server from this repo: https://github.com/Marco-Luc/nba-my-starting-five-backend

2. Run `npm install` from inside the backend server directory.

   ```bash
   cd nba-my-starting-five-backend
   $ npm install

   ```

**Ensure you have the following dependencies in your JSON files:** `cors, dotenv, express and uniqid`

**If you do not have these dependencies, run** `npm i cors dotenv express uniqid` **inside the server directory**

3. Create a .env file and fill the following fields with your own values:

   ```shell
   PORT= <PORT_NUMBER>

   CLIENT_URL= <http://localhost:3000>
   ```

4. Start the server:

   ```bash
   $ node index.js
   ```

#### Setting up the frontend

5. Clone or download the frontend server from this repo: https://github.com/Marco-Luc/nba-my-starting-five

6. Run `npm install` from inside the client directory.

   ```bash
   $ cd nba-my-starting-five
   $ npm install

   ```

**Ensure you have the following dependencies in your JSON files:** `axios, react-router-dom, and sass`

**If you do not have these dependencies, run** `npm i axios react-router-dom sass` **inside the client directory**

6. Start the React app:

   ```bash
   $ npm start
   ```

7. Enjoy 😎
