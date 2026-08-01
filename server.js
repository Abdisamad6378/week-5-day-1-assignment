const express = require("express");

const app = express();

app.use(express.json());

let cities = [
  { id: 1, name: "Nairobi", county: "Nairobi", population: 4397073 },
  { id: 2, name: "Mombasa", county: "Mombasa", population: 1208333 },
  { id: 3, name: "Kisumu", county: "Kisumu", population: 610082 },
  { id: 4, name: "Nakuru", county: "Nakuru", population: 570674 },
  { id: 5, name: "Eldoret", county: "Uasin Gishu", population: 475716 },
  { id: 6, name: "Thika", county: "Kiambu", population: 279429 },
  { id: 7, name: "Malindi", county: "Kilifi", population: 207253 },
  { id: 8, name: "Kitale", county: "Trans-Nzoia", population: 220111 }
];

app.get("/api/cities", (req, res) => {
  const { county, minPopulation } = req.query;

  let result = [...cities];

  if (county) {
    result = result.filter(
      (city) => city.county.toLowerCase() === county.toLowerCase()
    );
  }

  if (minPopulation) {
    result = result.filter((city) => city.population > Number(minPopulation));
  }

  res.status(200).json({ success: true, count: result.length, data: result });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
