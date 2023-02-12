const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes/index.js");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }),
  cors({
    origin: "https://minhtrifit-pern-todolist.netlify.app",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route(app);

app.listen(port, () => {
  console.log(`Listening to port: http://localhost:${port}`);
});
