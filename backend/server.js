const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const quotes = [];
let nextId = 1;
app.post("/api/quotes", (req, res) => {
  const { authorName, quote } = req.body;
  console.log("Received POST request:", req.body);

  if (!authorName && !quote) {
    return res
      .status(400)
      .json({ message: "Author name and quote are required" });
  }
  const newQuote = {
    id: nextId++,
    authorName,
    quote,
    timestamp: new Date().toISOString(),
  };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
  console.log(newQuote);
});

app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

app.delete("/api/quotes/:id", (req, res) => {
  const { id } = req.params;
  const quoteIndex = quotes.findIndex((q) => q.id === parseInt(id, 10));

  if (quoteIndex === -1) {
    return res.status(404).json({ message: "Quote not found" });
  }

  // Remove quote from the array
  const deletedQuote = quotes.splice(quoteIndex, 1);
  res.status(200).json(deletedQuote[0]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
