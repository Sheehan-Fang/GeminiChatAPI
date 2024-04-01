const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { textResponse } = require("./api/text.js");

dotenv.config();

const app = express();
const port = process.env.PORT;

//文本问答
app.use(bodyParser.json());
app.post("/api/text", textResponse);
app.get("/api/text", (req, res) => {
  res.send("get done");
});
//监听请求
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;