const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {    
    res.render("index", { title: "homepage"})
});

app.listen(port, () => {
    console.log(`IMDB-Clone is running on http://localhost:${port}`);
  });
  