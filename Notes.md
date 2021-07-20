#For creating a new NodeJS Express project we need to:

1) Navigate to the directory where we want to place the project using the `cd` command.
2) After reaching the desired directory (double-check, it never hurts), run `mkdir directoryName`.
3) After a few seconds, the directory is created. Once that happens, run `touch fileName.js`. This will create a JS file which will be initialised as the server.
4) Run npm init and fill in the required information.
5) Confirm the entered options.
6) After a few seconds, a package.json will be created (this is the configuration file of the project).
7) To install Express for the project, run `npm install express`.
8) Check the package.json file, it should now contain a new dependency. The newly added dependency should look like :
   `"dependencies": {
   "express": "^4.17.1"
   }`
9) To run the server use `node serverName.js`.
10) To stop the server session, use `CTRL + C` in the terminal.
- Docs.: https://expressjs.com/en/starter/installing.html

# Initial run of the server
1) After setting up the server on a given port, while running the server
   `node serverName.js` in a terminal, if we try to access the server in the 
   browser `localhost:portNumber`, we get the following error `Cannot GET /` on the webpage and `Error` on the tab name. This is due to the browser making a request to our server and the server not providing any data.
   
2) `localhost:portNumber` is the equivalent of say `www.google.com` (root of any website/domain).
   `localhost:portNumber/` represents the homepage of the website.
3) When we type for example `www.google.com` in the browser tab, we make an HTTP request to the Google
servers to get some data for the specified domain. After receiving the request, the Google Servers will send a response containing
the `HTML, CSS and JS files needed to render the Google website`.   
   
# Installation and usage of Nodemon
- Nodemon (Node monitor) is a tool that aids the development process of
NodeJS applications by automatically restarting the server (on the specified port) when files are 
changed in the working/project directory. Docs:.https://www.npmjs.com/package/nodemon
  
1) Run `npm install --save-dev nodemon`, wait for it to finish.
2) Run `npx nodemon serverName.js` to run the server.

- If step 1) fails, run `npm uninstall -g nodemon`

# Calculator
- So far we've been making static websites where the browser makes a request to the server, the
server responds with the HTML, CSS and JS files and runs the JS in the browser (client side) when the user loads up the
  website.
  
- We'll be making our code run server-side, execute the JS on the server and only output/deliver the outcome. We 
abstract away (hide) the business logic from the user.