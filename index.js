const express = require('express');
const mongoose = require('mongoose');  
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const dbURI = "mongodb+srv://nobitamfatehii143_db_user:VVIP_Success_2026@cluster0.4gbauam.mongodb.net/vvip_db?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(() => console.log("VVIP Sales Database Connected! 🟢"))
  .catch((err) => console.log("DB Error: ", err));

app.get('/', (req, res) => {
  res.send("Mr. G ka Backend Live Hai! 🚀");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});