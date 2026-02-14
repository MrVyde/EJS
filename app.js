const express = require("express");
const path = require("node:path");

const app = express(); // ← create the app FIRST

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Tell Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!", links: links, users: users });
});
app.get("/about", (req, res) => {
    res.render("about", {links})
})



// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});