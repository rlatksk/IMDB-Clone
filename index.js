const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {    
    res.render("index.ejs", { title: "homepage"})
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  