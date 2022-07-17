const express = require("express");
const app = express();


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/home.html");


});
app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");

});
app.get("/works", (request, response) => {
    response.sendFile(__dirname + "/views/works.html");


});
app.listen(8080, () => {
    console.log("running on localhost 8080");
});