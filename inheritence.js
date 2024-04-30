// example of a constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

// a magazine onstructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype); //Prototypes contain all methods and these methods are accessible to all objects linked to this prototype. This is called Prototypal Inheritance (or Prototypal Delegation).

// Instantiate magazine Object
const mag1 = new Magazine('Mag One', 'Maina Kifee', '2022', 'Dec');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);