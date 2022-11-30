/*
 Development build...
 Developer: Ricky Segura
 Note: I can't believe I figured out how to configure a backend.
*/

// Init
const express = require("express");
const mongoose = require("mongoose")
const path = require("path")

const app = express();
const port = process.env.PORT || 3000

const cors = require("cors")

app.use(
  cors({
    origin: "http://localhost:8080",
  })
)

app.use(express.json());

// Connect to database
mongoose.connect("mongodb+srv://rickysegura:1qaz2wsxXSW2ZAQ1@nodetuts.kwaygg4.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true})
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

/*
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "If this changes...it works...." });
});
*/

// Init Routes
// Homepage

// Posts Router
const postsRouter = require("./routes/posts")
app.use("/posts", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
