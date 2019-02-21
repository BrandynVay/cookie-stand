'use strict';
var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12am',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];
// debugger;
var cookieStands = document.getElementById('cookiestands');
var shopList = [];

function header() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }

  var tdEl2 = document.createElement('td');
  tdEl2.textContent = 'Total';
  trEl.appendChild(tdEl2);

  cookieStands.appendChild(trEl);
}

function Locations(name, table, neighborhood, min, max, avgCookies) {
  this.name = name;
  this.table = table;
  this.neighborhood = neighborhood;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.cookiesPerHour = [];
  this.total = 0;

  for (var i = 0; i < hours.length; i++) {
    var customers = Math.floor(Math.random() * (this.max + this.min + 1) + this.min);
    var cookies = Math.floor(customers * avgCookies);
    this.cookiesPerHour.push(cookies);
    console.log('this is customers' + cookies);

  }

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var j = 0; j < this.cookiesPerHour.length; j++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[j];
    this.total = this.total + this.cookiesPerHour[j];
    trEl.appendChild(tdEl);
  }

  var tdEl2 = document.createElement('td');
  tdEl2.textContent = this.total;
  trEl.appendChild(tdEl2);

  cookieStands.appendChild(trEl);
  shopList.push(this);
}

header();

new Locations('1st And Pike', cookieStands, 'Downtown Seattle', 23, 65, 6.3);
new Locations('SeaTac Airport', cookieStands, 'SeaTac', 3, 24, 1.2);
new Locations('Seattle Center', cookieStands, 'Downtown Seattle', 11, 38, 3.7);
new Locations('Capitol Hill', cookieStands, 'Downtown Seattle', 20, 38, 2.3);
new Locations('alki', cookieStands, 'West Seattle', 2, 16, 4.6);


function footer() {
  var trEl = document.createElement('tr'); // Creates the table row element to be appended to the HTML page.
  var tdEl = document.createElement('td'); // Creates the table data element for the row.
  tdEl.textContent = 'Total'; // Creates first blank space in top left corner.
  trEl.appendChild(tdEl); // Creates first blank space in top left corner.
  var daysTotal = 0;
  for (var i = 0; i < hours.length; i++) { // For loop that pulls data from the array to make data for the row.
    var thisHoursTotal = 0;
    for (var j = 0; j < shopList.length; j++) {
      thisHoursTotal = thisHoursTotal + shopList[j].cookiesPerHour[i];
    }
    daysTotal = daysTotal + thisHoursTotal;
    var tdEl = document.createElement('td'); // Creates the table data element for the row.
    tdEl.textContent = thisHoursTotal; // grabs the data from the array that is to be the data element.
    trEl.appendChild(tdEl); // appends the data element that it created to the row.
  }
  var tdEl2 = document.createElement('td'); // Creates end Total row.
  tdEl2.textContent = daysTotal; // Creates end Total row.
  trEl.appendChild(tdEl2); // Creates end Total row.
  cookieStands.appendChild(trEl); // appends the entire row that was just created by the for loop.
}

footer();

var storeList = document.getElementById('list');
var storeForm = document.getElementById('store-form');
var allComments = [];

var Comment = function(username, text, min, max, avg) {
  this.username = username;
  this.text = text;
  this.min = min;
  this.max = max;
  this.avg = avg;
};

Comment.prototype.render = function(){
  var liEl = document.createElement('li');
  liEl.innerHTML = '<b>' + this.username + ': </b><em>' + this.text + '</em>';
  return liEl;
};

function handleCommentSubmit(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target.store);
  console.log(event.target.store.value);

  var commenter = event.target.store.value;
  var newComment = new Comment(commenter);

  event.target.store.value = null;

  allComments.unshift(newComment);
  renderAllComments();
}

function renderAllComments(){
  storeList.innerHTML = '';
  for(var i = 0; i < allComments.length; i++){
    storeList.appendChild(allComments[i].render());
  }
}

storeForm.addEventListener('submit', handleCommentSubmit);
