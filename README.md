# ALTERnative Routes App

An experimental, playful app exploring the use of the OpenAI API following completing a short course on OpenAI by Shaun Pelling (The Net Ninja) - [OpenAI... The Basics](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ipdXMDVcGimIVMG_Z6-Vsu)

## Installation

Clone the repo to your local machine:
```bash
gh repo clone pablisch/alternative-tube-names-with-openai # GutHub CLI
git clone https://github.com/pablisch/alternative-tube-names-with-openai.git # HTTPS
git clone git@github.com:pablisch/alternative-tube-names-with-openai.git # SSH
```
Install dependencies:
```bash
npm install
```
Create a `.env` file in the root directory and add your OpenAI API key and a port number of your choosing:
```bash
PORT=4000
OPENAI_API_KEY=<you-openai-api-key>
MONGO_USER_PW=<db-password>
MONGO_USER_NAME=<db-username>
MONGO_DB_NAME=alternative-routes
SMTP_USERNAME=alternative.routes.app@gmail.com
SMTP_PASSWORD=<smtp-password>
EMAIL_SERVICE=Gmail
EMAIL_TO=<recipient-email>
```
Run the app in development mode:
```bash
# to start the backend server
cd backend
npm run backend 
# the server will be listening on the port you specified in the .env file or 4000 by default
```
```bash
# to start the frontend server
cd frontend
npm run frontend 
# index.html is usually served on [localhost:8080](http://localhost:8080)
```
```bash
# to start both servers concurrently
cd backend
npm start
# index.html is usually served on [localhost:8080](http://localhost:8080)
```

## Usage
This current version of the app has no database and so no changes made or station names are persistent and will be lost on refresh. The app is currently only a proof of concept and is not intended for use in production.

1. Select the line you wish to generate alternative names for using the radio buttons.
2. The names of the current stations on the line will be displayed.
3. Enter the theme for the alternative names in the input field.
4. Click the 'Generate Station Names' button to generate the names.
5. Once generated, the new names will be displayed and the theme indicated next to the line name.
6. You may switch to another line and as long as the page is not refreshed, any generated names and themes will be remembered.

## App Structure
v1.The original version of the app was built entirely on a Node.js and Express.js backend with no database which inlcuded the use of a static public folder and all browser pages and logic were served from the backend server.

v2. The second iteration introduced a separate frontend server using vanilla js and a simple html page. The backend server became used only for the API calls to OpenAI and the frontend server used to serve the html page and the static assets.

v3. This third iteration has moved the frontend and backend into separate folders to provide a clear separation and structure in preparation for the introduction of a database and later the use of a framework such as React.

v4. The fourth iteration has introduced a database using MongoDB and Mongoose. The database is used to store the generated names and themes and the station names for each line. The frontend and backend servers have been updated to use the database and the frontend has been updated to display the station names from the database.

This iteration also introduces additional pages for 'about' and 'contact'.