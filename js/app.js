'use strict';
var hours = [
  '',
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
  'Daily Location Total',
];

var totalNum = '';
var standsPerHourTotal = [0, 0, 0, 0, 0];

function footer(){
  var table = document.getElementById('tfoot');
  for (var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    table.appendChild(tdEl);
  }
}

footer();

function header(){
  var table = document.getElementById('thead');
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    table.appendChild(thEl);
  }
}

header();

var firstAndPikeUl = document.getElementById('1st and Pike');
var seatacAirportUl = document.getElementById('SeaTac Airport');
var seattleCenterUl = document.getElementById('Seattle Center');
var capitolHillUl = document.getElementById('Capitol Hill');
var alkiUl = document.getElementById('Alki');

function Locations (name, table, neighborhood, min, max, avgCookies) {
  this.name = name;
  this.neighborhood = neighborhood;
  this.table = table;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.cusPerHour = [];
  this.cookiesPerHour = [];
  this.total = 0;

  this.randomCustomer = function(){
    for (var i = 0; i < hours.length; i++){
      var customers = Math.floor(Math.random() * (this.max + this.min + 1) + this.min);
      this.cusPerHour.push(customers);
      console.log('this is customers' + customers);

    }
  };
  this.totalCookiesPerHour = function(){
    for (var i = 0; i < hours.length; i++){
      var cookies = Math.floor(this.cusPerHour[i] * avgCookies);
      // console.log('this is cookies' + cookies);
      this.cookiesPerHour.push(cookies);
      // console.log('cookies per hour : ' + cookies);
    }
  };
  this.render = function(){
    this.randomCustomer();
    this.totalCookiesPerHour();
    var titleEl = document.createElement('td');
    this.table.appendChild(titleEl);
    titleEl.textContent = `${name}`;

    for (var i = 1; i < hours.length - 1; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = `${this.cookiesPerHour[i]}`;
      this.table.appendChild(tdEl);
      this.total = this.total + this.cookiesPerHour[i];
    }
    var total = document.createElement('td');
    total.textContent = `${totalNum}${this.total}`;
    this.table.appendChild(total);
  };
}

var firstAndPike = new Locations('1st And Pike', firstAndPikeUl, 'Downtown Seattle', 23, 65, 6.3);
var seatacAirport = new Locations('SeaTac Airport', seatacAirportUl, 'SeaTac', 3, 24, 1.2, [], []);
var seattleCenter = new Locations('Seattle Center', seattleCenterUl, 'Downtown Seattle', 11, 38, 3.7, [], []);
var capitolHill = new Locations('Capitol Hill', capitolHillUl,'Downtown Seattle', 20, 38, 2.3, [], []);
var alki = new Locations('alki', alkiUl, 'West Seattle', 2, 16, 4.6, [], []);

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
