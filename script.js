/* Variables */
var myLibrary = [];
let Id;


/* HTML Elements */
const libraryTable = document.querySelector(".library-table");

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", BookForm);

const bookForm = document.querySelector(".book-form");

const overlay = document.querySelector(".overlay");

const submitBookFormButton = document.querySelector(".submit-book-form");
submitBookFormButton.addEventListener("click", saveFormValues);




/* Methods */
class Book {
  constructor(name, author, pages, id) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
  }

  addBookToLibrary() {
    myLibrary.push(this);
  }
}

/* Functions */
function RenderBooks() {
 
  libraryTable.innerText = "";
  myLibrary.forEach((book) => {
    divElement = document.createElement("div");
    divElement.classList = "book"

    pNameElement = document.createElement("p");
    pNameElement.innerText = `"${book.name}"`;
    divElement.appendChild(pNameElement);

    pAuthorElement = document.createElement("p");
    pAuthorElement.innerText = `By: ${book.author}`;
    divElement.appendChild(pAuthorElement);

    pPagesElement = document.createElement("p");
    pPagesElement.innerText = `${book.pages} pages`;
    divElement.appendChild(pPagesElement);


    removeButtonElement = document.createElement("button");
    removeButtonElement.classList = "remove-book-button " + book.id;
    removeButtonElement.innerText = "Remove";
    removeButtonElement.addEventListener("click", removeBook);
    divElement.appendChild(removeButtonElement);

    readButtonElement = document.createElement("button");
    readButtonElement.classList = "read-button read-button-red"
    readButtonElement.innerText = "Not Read"
    readButtonElement.addEventListener("click", ChangeRead)
    divElement.appendChild(readButtonElement)

    libraryTable.appendChild(divElement);
  });

}

function BookForm() {
  overlay.classList = "overlay overlay-active";
  bookForm.classList = "book-form book-form-active";
}

function saveFormValues() {
  Id = "a" + new Date().getTime();  
  bookTitle = document.querySelector("#book-title").value;
  bookAuthor = document.querySelector("#book-author").value;
  bookPages = document.querySelector("#book-pages").value;

  new Book(
    `${bookTitle}`,
    `${bookAuthor}`,
    `${bookPages}`,
    `${Id}`
  ).addBookToLibrary();
  event.preventDefault();
  overlay.classList = "overlay overlay-inactive";
  bookForm.classList = "book-form book-form-inactive";
  RenderBooks();

  document.querySelector("#book-title").value = "";
  document.querySelector("#book-author").value = "";
  document.querySelector("#book-pages").value = "";
}

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id == id);
  console.log(objWithIdIndex);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }
  return arr;
}

function removeBook() {
  event.target.classList.forEach((classToRemove) => {
    document.querySelector(`.${classToRemove}`).remove();
    removeObjectWithId(myLibrary, classToRemove);
    RenderBooks();
  });
}

function ChangeRead() {
  event.target.classList.toggle("read-button-red") 
  event.target.classList.toggle("read-button-green") 
  if (event.target.innerText == "Not Read") {
    event.target.innerText = "Read"
  } else if (event.target.innerText == "Read") {
    event.target.innerText = "Not Read"
  }
}