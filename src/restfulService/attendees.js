var express = require('express');
var app = express();

    var employees = [
{"id": "6", "firstName": "John", "lastName": "Resig", "intro": "Host" },
{"id": "7", "firstName": "Paul", "lastName": "Irish", "intro": "Speaker" },
{"id": "8", "firstName": "Jeremy", "lastName": "Ashkenas", "intro": "Interactive Developer" },
{"id": "9", "firstName": "Ryan", "lastName": "Dahl", "intro": "Web developer since 1998 using a variety of languages..." },
{"id": "10", "firstName": "Douglas", "lastName": "Crockford", "intro": "Using just four or so APIs" }   ];



app.enable("jsonp callback");
app.get('/', function(req, res) {
  res.set('Content-Type', 'text/javascript');
  if(req.query.name !== undefined){ 
    var name = req.query.name;
    var filtered = employees.filter(function(e){
      var fullName = e.firstName + " " + e.lastName;
      return fullName.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
    res.json(filtered); 
  }
  else {
    res.send(employees);
  }
 
});

app.get('/:id', function(req, res) {
  var filtered = employees.filter(function (e) {
    return e.id === req.params.id;
  });
  res.json(filtered);
});

var port = process.env.PORT || 3412
app.listen(port);
console.log("Listening at http://localhost:" + port);
