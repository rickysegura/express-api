const express = require("express");

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Testing to see if this works." });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
