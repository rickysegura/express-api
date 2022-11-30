/*
 Development build...
 Developer: Ricky Segura
 Note: I can't believe I figured out how to configure a backend.
*/

// Init
const express = require("express");
const mongoose = require("mongoose")

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

// Connect to database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

app.get("/", async (req, res) => {
  res.json({ message: "If this changes...it works...." });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
