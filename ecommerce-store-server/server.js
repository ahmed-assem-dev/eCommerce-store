import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const news = [
  {
    key: 1,
    name: "10% discount!",
    description: "new users get 10% discount on all items at check out!",
    cta: "Shop now!",
  },
  {
    key: 2,
    name: "Crocs weekend discount",
    description: "Enjoy discounts on all crocs products this weekend",
    cta: "Get Offer!",
  },
  {
    key: 3,
    name: "Up to 40% off women sneakers",
    description: "discounts on women sneakers up to 40% OFF!",
    cta: "Explore more!",
  },
  {
    key: 4,
    name: "20% OFF with code SAVE20!",
    description: "Apply code SAVE20 at check-out to get a 20% OFF your order!",
    cta: "Apply now!",
  },
];

app.get("/api/news", (req, res) => {
  res.json(news);
});

app.listen(8000, () => {
  console.log("server running on port 8000");
});
