import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("<h1>azureDeploy2 working!</h1>");
});

app.listen(PORT, () => console.log("LISTENING ON PORT " + PORT));
