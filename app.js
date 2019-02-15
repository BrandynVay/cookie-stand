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
  'total',
];

var firstAndPikeUl = document.getElementById('1st and Pike');
var seatacAirportUl = document.getElementById('SeaTac Airport');
var seattleCenterUl = document.getElementById('Seattle Center');
var capitolHillUl = document.getElementById('Capitol Hill');
var AlkiUl = document.getElementById('Alki');

var firstAndPike = {
  name: 'First and Pike',
  neighborhood: 'Downtown Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  cusPerHour:[],
  cookiesPerHour:[],

  randomCustomer: function (){
    for (var i = 0; i < hours.length; i++){
      var customers = Math.floor(Math.random() * (this.max + this.min + 1) + this.min);
      this.cusPerHour.push(customers);
      console.log('this is customers' + customers);
      
    }
  },
  totalCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      // console.log('this is cookies' + cookies);
      this.cookiesPerHour.push(cookies);
      // console.log('cookies per hour : ' + cookies);
    }
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      firstAndPikeUl.appendChild(liEl);
    }
  }
};

firstAndPike.randomCustomer();
firstAndPike.totalCookiesPerHour();
firstAndPike.render();

var seatacAirport = {
  name: 'SeaTac Airport',
  neighborhood: 'SeaTac',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  cusPerHour:[],
  cookiesPerHour:[],

  randomCustomer: function (){
    for (var i = 0; i < hours.length; i++){
      var customers = Math.floor(Math.random() * (this.max + this.min + 1) + this.min);
      this.cusPerHour.push(customers);
      console.log('this is customers' + customers);
      
    }
  },
  totalCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      // console.log('this is cookies' + cookies);
      this.cookiesPerHour.push(cookies);
      // console.log('cookies per hour : ' + cookies);
    }
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      seatacAirportUl.appendChild(liEl);
    }
  }
};

seatacAirport.randomCustomer();
seatacAirport.totalCookiesPerHour();
seatacAirport.render();

var seattleCenter = {
  name: 'Seattle Center',
  neighborhood: 'Downtown Seattle',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  cusPerHour:[],
  cookiesPerHour:[],

  randomCustomer: function (){
    for (var i = 0; i < hours.length; i++){
      var customers = Math.floor(Math.random() * (this.max + this.min + 1) + this.min);
      this.cusPerHour.push(customers);
      console.log('this is customers' + customers);
      
    }
  },
  totalCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      // console.log('this is cookies' + cookies);
      this.cookiesPerHour.push(cookies);
      // console.log('cookies per hour : ' + cookies);
    }
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      seattleCenterUl.appendChild(liEl);
    }
  }
};

seattleCenter.randomCustomer();
seattleCenter.totalCookiesPerHour();
seattleCenter.render();

var capitolHill = {
  name: 'First and Pike',
  neighborhood: 'Downtown Seattle',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  cusPerHour:[],
  cookiesPerHour:[],

  randomCustomer: function (){
    for (var i = 0; i < hours.length; i++){
      var customers = Math.floor(Math.random() * (this.max + this.min + 1) + this.min);
      this.cusPerHour.push(customers);
      console.log('this is customers' + customers);
      
    }
  },
  totalCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      // console.log('this is cookies' + cookies);
      this.cookiesPerHour.push(cookies);
      // console.log('cookies per hour : ' + cookies);
    }
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      capitolHillUl.appendChild(liEl);
    }
  }
};

capitolHill.randomCustomer();
capitolHill.totalCookiesPerHour();
capitolHill.render();

var Alki = {
  name: 'First and Pike',
  neighborhood: 'Downtown Seattle',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  cusPerHour:[],
  cookiesPerHour:[],

  randomCustomer: function (){
    for (var i = 0; i < hours.length; i++){
      var customers = Math.floor(Math.random() * (this.max + this.min + 1) + this.min);
      this.cusPerHour.push(customers);
      console.log('this is customers' + customers);
      
    }
  },
  totalCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      // console.log('this is cookies' + cookies);
      this.cookiesPerHour.push(cookies);
      // console.log('cookies per hour : ' + cookies);
    }
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies.`;
      AlkiUl.appendChild(liEl);
    }
  }
};

Alki.randomCustomer();
Alki.totalCookiesPerHour();
Alki.render();
