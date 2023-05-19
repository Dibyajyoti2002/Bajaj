const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
  



app.get("/bfhl", function(req, res) {
    res.json({
        "operation_code": "1",
    })
    console.log(res.statusCode);
});

app.post("/bfhl", function(req, res) {
    const jsonData = req.body;

    if (!jsonData || typeof jsonData !== 'string') {
    res.status(400).json({ error: 'Invalid JSON data' });
    }

  let data;
  try {
    data = JSON.parse(jsonData);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid JSON format' });
  }

  const numbers = [];
  const alphabets = [];

  for (const key in data) {
    if (typeof data[key] === 'number') {
      numbers.push(data[key]);
    } else if (typeof data[key] === 'string') {
      const alphanumeric = data[key].match(/[a-zA-Z0-9]+/g);
      if (alphanumeric) {
        alphabets.push(...alphanumeric);
      }
    }
  }

    res.json({ 
        "is_success": true,
        "user_id": "john_doe_17091999", 
        rollno: "17091999",
        email : "abc@gmail.com",
        numbers, 
        alphabets });

    });



app.listen(3000, function() {
    console.log("Server started on port 3000");
}
);
