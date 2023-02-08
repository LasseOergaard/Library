/* HTML Elements */
libraryTable = document.querySelector(".library-table")

class Book {
  constructor(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
  }

  addBookToLibrary () {
    myLibrary.push(this)
  }
}

myLibrary = [];

harryPotter = new Book("Harry Potter", "J.K Rowling", 700);
harryPotter.addBookToLibrary();
lordOfTheRings = new Book("Lord of The Rings", "J.R.R Tolkein", 700);
lordOfTheRings.addBookToLibrary();
peakMind = new Book("Peak Mind", "Amishi Jha", 300);
peakMind.addBookToLibrary();

myLibrary.forEach(book => {
  divElement = document.createElement("div")
  divElement.classList = "book"

  pNameElement = document.createElement("p")
  pNameElement.innerText = `"${book.name}"`
  divElement.appendChild(pNameElement)

  pAuthorElement = document.createElement("p")
  pAuthorElement.innerText = `By: ${book.author}`
  divElement.appendChild(pAuthorElement)

  pPagesElement = document.createElement("p")
  pPagesElement.innerText = `${book.pages} pages`
  divElement.appendChild(pPagesElement)

  libraryTable.appendChild(divElement)
});

