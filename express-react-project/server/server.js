var express = require('express');
var app = express(); 
var PORT = process.env.PORT || 5000;
  
app.enable('trust proxy')
app.get("/api", (req, res) => {
  console.log(typeof req.ip, req.ip);
  res.json({"ip": req.ip})
  // res.json({"ip": "1.112.0.0"}) <-- This is a test with a Japanese ip

});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});