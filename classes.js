class Book {
  Constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
  }
//getters example
  getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
      this.year = newYear;
      this.revised = true;
  }
//Static methods are bound to a class and not to the instances of class or object of the class. We can access static methods through classes only and not through the object of that class.
  static topBookStore() {
      return 'River & The Source';
  }
}

// Instance of a class(object)
const book1 = new Book('Book One', 'Jimmie kinuthia', '2010');

console.log(book1);
book1.revise('2018');
console.log(book1);

console.log(Book.topBookStore());//static method//access using the class and not instance of a class