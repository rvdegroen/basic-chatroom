// IMPORTS
const express = require("express");
const http = require("http");

// VARIABLES
const app = express();
const server = http.createServer(app);

// MIDDLEWARE
app.set("port", process.env.PORT || 3000);
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
	res.render("index");
});

app.listen(3000);
