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

var totalNum = 'total';

var firstAndPikeUl = document.getElementById('1st and Pike');
var seatacAirportUl = document.getElementById('SeaTac Airport');
var seattleCenterUl = document.getElementById('Seattle Center');
var capitolHillUl = document.getElementById('Capitol Hill');
var alkiUl = document.getElementById('Alki');

function Locations (name, list, neighborhood, min, max, avgCookies) {
  this.name = name;
  this.neighborhood = neighborhood;
  this.list = list;
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
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      this.list.appendChild(liEl);
      this.total = this.total + this.cookiesPerHour[i];
    }
    var total = document.createElement('li');
    total.textContent = `${totalNum}: ${this.total} cookies`;
    this.list.appendChild(total);
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
