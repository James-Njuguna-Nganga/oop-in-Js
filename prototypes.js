// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getSummary
Book.prototype.getAge = function() {
  const years = new Date().getFullYear - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function() {
  this.year = newYear;
  this.revised =  true;
}

// Instatiate an Object
const book1 = new Book('Book One', 'Jimmie kinuthia', '2010');
const book2 = new Book('Book Two', 'Tony kifee', '2008');

console.log(book1.title);
// Book one

console.log(book1.getSummary());
// Book One was written by Jimmie kinuthia in 2010

console.log(book2.getAge());
