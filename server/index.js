var api = require('./src/api.js').app;
const fs = require('fs');
const classesFilepath = './src/classes.json';

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/classes', function (request, response) {
  response.json(getClasses());
});

api.get('/classes/:id', function (request, response) {
  let classs = getClasssById(request.params.id);
  if (classs) response.json(classs);
  response.json('not found');
});

api.put('/classes', function (request, response) {
  response.json(request.body);
  saveClasss(request.body);
  
});

api.post('/classes', function (request, response) {
  let classes = [];
  try {
    classes = JSON.parse(fs.readFileSync(classesFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  var selclasss=getClasssById(request.body.id);
  if (selclasss != null) {classes[request.body.id-1]=request.body};
  try {
    fs.writeFileSync(classesFilepath, JSON.stringify(classes));
  } catch (err) {
    console.error(err)
  }
  response.json('Class was updated succesfully');
});

api.delete('/classes/:index', function (request, response) {
  let classes = [];
  try {
    classes = JSON.parse(fs.readFileSync(classesFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }

  var oof = 0;
  for (var i = 0; i < classes.length; i++)
  {
    if (classes[i].id == request.params.index)
      oof = i;
  }
  classes.splice(oof, 1);
  if (classes==null) console.log();
  else{
  try {
    fs.writeFileSync(classesFilepath, JSON.stringify(classes));
  } catch (err) {
    console.error(err)
  }
}
   response.json('Class with index ' + request.params.index + ' was deleted');
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});

function getClasses() {
  let classes = [];
  try {
    classes = JSON.parse(fs.readFileSync(classesFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  return classes;
}

function saveClasss(classs) {
  let classes = getClasses();
  let maxId = getMaxId(classes);
  classs.id = maxId+1;
  classes.push(classs);
  try {
    fs.writeFileSync(classesFilepath, JSON.stringify(classes));
  } catch (err) {
    console.error(err)
  }
}

function getMaxId(classes) {
  let max = 0;
  for (var i=0; i<classes.length;i++) {
    if(max < classes[i].id) {
      max = classes[i].id;
    }
  }
  return max;
}

function getClasssById(id){
  let classes = getClasses();// citire json din fisier
  let selectedClasss = null;
  for(var i=0; i<classes.length; i++) {
    if(id == classes[i].id) selectedClasss = classes[i];
  }
  return selectedClasss;
}







const seatsFilepath = './src/seatsDb.json';

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/seats', function (request, response) {
  response.json(getSeats());
});

api.get('/seats/:id', function (request, response) {
  let seat = getSeatById(request.params.id);
  if (seat) response.json(seat);
  response.json('not found');
});

api.put('/seats', function (request, response) {
  response.json(request.body);
  saveSeat(request.body);
  
});

api.post('/seats', function (request, response) {
  let seats = [];
  try {
    seats = JSON.parse(fs.readFileSync(seatsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  var selSeat=getSeatById(request.body.id);
  if (selSeat != null) {seats[request.body.id-1]=request.body};
  try {
    fs.writeFileSync(seatsFilepath, JSON.stringify(seats));
  } catch (err) {
    console.error(err)
  }
  response.json('Class was updated succesfully');
});

api.delete('/seats/:index', function (request, response) {
  let seats = [];
  try {
    seats = JSON.parse(fs.readFileSync(seatsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }

  var oof = 0;
  for (var i = 0; i < seats.length; i++)
  {
    if (seats[i].id == request.params.index)
      oof = i;
  }
  seats.splice(oof, 1);
  if (seats==null) console.log();
  else{
  try {
    fs.writeFileSync(seatsFilepath, JSON.stringify(seats));
  } catch (err) {
    console.error(err)
  }
}
   response.json('Seat with index ' + request.params.index + ' was deleted');
});

api.listen(3001, function () {
  console.log('Server running @ localhost:3000');
});

function getSeats() {
  let seats = [];
  try {
    seats = JSON.parse(fs.readFileSync(seatsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  return seats;
}

function saveSeat(seat) {
  let seats = getSeats();
  let maxId = getMaxId(seats);
  seat.id = maxId+1;
  seats.push(seat);
  try {
    fs.writeFileSync(seatsFilepath, JSON.stringify(seats));
  } catch (err) {
    console.error(err)
  }
}

function getMaxId(seats) {
  let max = 0;
  for (var i=0; i<seats.length;i++) {
    if(max < seats[i].id) {
      max = seats[i].id;
    }
  }
  return max;
}

function getSeatById(id){
  let seats = getSeats();// citire json din fisier
  let selectedSeat = null;
  for(var i=0; i<seats.length; i++) {
    if(id == seats[i].id) selectedSeat = seats[i];
  }
  return selectedSeat;
}