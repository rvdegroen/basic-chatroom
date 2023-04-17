const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
	res.send("Hello World");
});

app.listen(3000);
