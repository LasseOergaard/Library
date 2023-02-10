/* Variables */
var myLibrary = [];

/* HTML Elements */
const libraryTable = document.querySelector(".library-table");

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", BookForm)

const bookForm = document.querySelector(".book-form")

const overlay = document.querySelector(".overlay")

const submitBookFormButton = document.querySelector(".submit-book-form")
submitBookFormButton.addEventListener("click", saveFormValues)




/* Methods */
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





/* Functions */
function RenderBooks() {
  libraryTable.innerText = ""
  let i = 0;
myLibrary.forEach(book => {
  divElement = document.createElement("div")
  divElement.classList = "book"

  pNameElement = document.createElement("p")
  pNameElement.classList = "book-title"
  pNameElement.innerText = `"${book.name}"`
  divElement.appendChild(pNameElement)

  pAuthorElement = document.createElement("p")
  pAuthorElement.innerText = `By: ${book.author}`
  divElement.appendChild(pAuthorElement)

  pPagesElement = document.createElement("p")
  pPagesElement.innerText = `${book.pages} pages`
  divElement.appendChild(pPagesElement)

  removeButtonElement = document.createElement("button")
  removeButtonElement.classList = "remove-book-button"
  removeButtonElement.innerText = "Remove"
  divElement.appendChild(removeButtonElement)

  libraryTable.appendChild(divElement)


});
}

function BookForm() {
  overlay.classList = "overlay overlay-active"
  bookForm.classList = "book-form book-form-active"
}

function saveFormValues() {
  bookTitle = document.querySelector("#book-title").value
  bookAuthor = document.querySelector("#book-author").value
  bookPages = document.querySelector("#book-pages").value

  new Book(`${bookTitle}`, `${bookAuthor}`, `${bookPages}`).addBookToLibrary();
  console.log(myLibrary)
  event.preventDefault()
  overlay.classList = "overlay overlay-inactive"
  bookForm.classList = "book-form book-form-inactive"
  RenderBooks()
}
