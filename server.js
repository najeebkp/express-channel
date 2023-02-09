const express = require("express");
const app = express();
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
app.use(cors());

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

const router = express.Router();

router.get("/api/:id", (req, res) => {
  fetch(
    `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${req.params.id}`,
  )
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.use("/", router);
