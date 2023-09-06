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
OPENAI_API_KEY=your-api-key-here
PORT=4000 or whatever port you want
```
Run the app in development mode:
```bash
npm run dev
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
The original version of the app was built entirely on a Node.js and Express.js backend with no database which inlcuded the use of a static public folder and all browser pages and logic were served from the backend server.

This second iteration introduces a separate frontend server using vanilla js and a simple html page. The backend server is now used only for the API calls to OpenAI and the frontend server is used to serve the html page and the static assets.