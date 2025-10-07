const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Backend!");
});


app.get("/hello", (req, res) => {
  res.send("Hello Backend!");
});


app.get("/branch", (req, res) => {
  res.send("branch");
});


app.get("/testttt", (req, res) => {
  res.send("testttt");
});

app.get("/Scroll", (req, res) => {
  res.send("Scroll");
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
