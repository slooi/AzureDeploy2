const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("<h1>azureDeploy2 working! trying tsx again</h1>");
});

app.listen(PORT, () => console.log("LISTENING ON PORT " + PORT));
