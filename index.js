const http = require('http');
const path = require('path');
const fs = require('fs');


const Person = require('./person'); ///This is common JS
const person1 = new Person('John Doe', 30);

person1.greeting();