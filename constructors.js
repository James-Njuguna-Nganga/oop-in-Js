// an example of a constructor 
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// a new instance of class
const book1 = new Book('Book One', 'Jimmie kinuthia', '2013');
const book2 = new Book('Book Two', 'Tony kifee', '2011');

console.log(book1.title);
// will log book1

console.log(book1.getSummary());
// Book One was written by Jimmie kinuthia in 2013