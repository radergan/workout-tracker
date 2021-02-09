const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/routes.js"));

require("./seeders/seed.js");

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
