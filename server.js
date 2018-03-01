const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
//app.use(express.static('public'));
//app.use(express.static(__dirname + '/src'));
app.listen(process.env.PORT || 3000);

// PathLocationStrategy

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
})

console.log('Console listening!');
