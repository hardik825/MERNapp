const connectToMongo = require("./db/db");
const express = require("express");

connectToMongo();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json())

//Available Routes
app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})