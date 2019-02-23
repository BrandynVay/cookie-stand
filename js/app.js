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
var storeForm = document.getElementById('store-form');
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

function Locations(name, min, max, avgCookies, text, table) {
  this.name = name;
  this.table = table;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.text = text;
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

new Locations('1st And Pike', 23, 65, 6.3, cookieStands);
new Locations('SeaTac Airport', 3, 24, 1.2, cookieStands);
new Locations('Seattle Center', 11, 38, 3.7, cookieStands);
new Locations('Capitol Hill', 20, 38, 2.3, cookieStands);
new Locations('alki', 2, 16, 4.6, cookieStands);


function footer() {
  var trEl = document.createElement('tr'); // Creates the table row element to be appended to the HTML page.
  var tdEl = document.createElement('td'); // Creates the table data element for the row.
  trEl.setAttribute('id', 'footer');
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

function deleteRow(){
  var element = document.getElementById('footer');
  element.parentNode.removeChild(element);  
}

function newStore(event){
  event.preventDefault();
  var location = event.target.store.value;
  var min = event.target.min.value;
  console.log(min);
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  new Locations(location, min, max, avg);

  deleteRow();
  footer();
}

storeForm.addEventListener('submit', newStore);
