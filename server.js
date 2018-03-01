const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
//app.use(express.static('public'));
//app.use(express.static(__dirname + '/src'));
app.set(process.env.PORT || 3000);
//app.listen(process.env.PORT || 3000);
//Start Server
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

// PathLocationStrategy

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('Console listening!');
