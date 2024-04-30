const book1 = {
  title: 'Book one',
  author: 'Jimmie kinuthia',
  year: '2010',
  getSummary: function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: 'Book two',
  author: 'Tony kifee',
  year: '2011',
  getSummary: function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

console.log(book1.title);
// Book one

console.log(book2.getSummary());
// Book Two was written by Tony kifee in 2011

console.log(Object.values(book2));
// ["Book Two", "Tony kifee", "2011"]

console.log(Object.keys(book2));
// ["title", "author", "year", "getSummary"]