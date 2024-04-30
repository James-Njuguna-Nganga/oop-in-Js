// Object of Protos
const bookProtos = {
  getSummary: function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} years old`;
  }
}

// The object.create() method returns a new object with the specified prototype object and properties.
const book2 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'Jimmie njugush';
book1.year = '2014';

const book1 = Object.create(bookProtos, {
  title: { value: 'Book One'},
  author: { value: 'Jimmie njugush'},
  year: { value: '2014'}
});

console.log(book1);