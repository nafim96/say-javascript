console.log(parseInt("hello", 10));
console.log(Number.isNaN("0"));

console.log(isNaN([1, 2]));
console.log(+"234");
console.log("nasir".toUpperCase());

var name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
console.log(name);

// for of
const array = ["name address"];
for (const value of array) {
  console.log(value[1]);
}
let a = ["hen", " cat"];
a[99] = "dog";
console.log(a.length);
a.toLocaleString();
console.log(a);
let b = "name";
b.toLocaleString();
console.log(b);

function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

console.log(avg(2, 3, 4, 5));

function makePerson(first, last) {
  return {
    first: first,
    last: last,
  };
}
function personFullName(person) {
  return person.first + " " + person.last;
}
function personFullNameReversed(person) {
  return person.last + ", " + person.first;
}

var s = makePerson("Simon", "Willison");
console.log(personFullName(s)); // "Simon Willison"
console.log(personFullNameReversed(s)); // "Willison, Simon"

function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function () {
    return this.first + " " + this.last;
  };
  this.fullNameReversed = function () {
    return this.last + ", " + this.first;
  };
}
var s = new Person("Simon", "Willison");

function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function () {
  return this.first + " " + this.last;
};
Person.prototype.fullNameReversed = function () {
  return this.last + ", " + this.first;
};

var s = "Simon";
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function () {
  var r = "";
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
