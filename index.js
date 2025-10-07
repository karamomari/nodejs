const express = require("express");
const app = express();
const PORT = 3000;
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const mongoose =require("mongoose")

app.use(express.json());

const Article=require("./models/Article")

mongoose.connect("mongodb+srv://karam:karam123@cluster0.j713nlv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("conntion success");
})
.catch((err)=>{console.log(err);
})

// mongodb+srv://karam:karam123@cluster0.j713nlv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


app.get("/", (req, res) => {
  res.send("Hello Backend!");
});

// استخدم API Key من ملف .env
const ai = new GoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function gimni(prompt = "Explain how AI works in a few words") {
  const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

app.get("/gimni", async (req, res) => {
  try {
    const q = req.query.q || "Explain how AI works in a few words";
    const response = await gimni(q);
    res.send(response);
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).send("Something went wrong!");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
