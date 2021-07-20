// add/require the express module
const express = require("express");

/**
 * Bind the express module to the word `app`.
 * - `app` is usually used when servers/web apps are built with Express. This is
 * recalled as best practice.
 * @type {*|Express}
 */
const app = express();

/**
 * - `.get()` is a function provided by Express and used to specify what should happen when the browser
 * interacts with server and makes a Get Request. The interaction is defined for the root/homepage (on the website URL route).
 * - The callback function defines the desired behavior when the request occurs. The callback triggers
 * once we navigate to "http://localhost:4200/".
 * - The request object is the browser request to the server,
 * this object contains a multitude of descriptive information related to the request.
 * - The response object represents what will be sent to the browser once the HTTP Get request is made.
 * By using `response.send(data)` we specify the response that will be sent to the browser (and afterwards rendered).
 */
// handle homepage
app.get("/", function (req, res) {
    //response.send("Hello");
    res.send("<h1>Hello World !</h1>");
});

// handle contact page
app.get("/contact", function (req, res) {
    res.send("Contact me at: eduard@gmail.com");
});

// handle about page
app.get("/about", function (req, res) {
    res.send("<body><ul>" +
        "<h2>Who am I ?</h2>" +
        "<li><h3>Name: Eduard</h3></li>" +
        "<li><h3>Age: 23</h3></li>" +
        "<li><h3>Interests: Programming</h3></li>" +
        "<li><h3>Hobbies: Coding, PC games, Cars</h3></li>" +
        "</ul></body>");
});


/**
 * app.listen(portNumber);
 * - Will listen for HTTP requests sent to the server on port 4200.
 * - A port is just a communication channel that we use. (similar to a radio channel,
 * 101.1 FM).
 */
const port = 4200;
app.listen(port, function () {
    console.log("Server started on port: " + port);
});

