let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    title.value == null ||
    title.value == "" ||
    author.value == null ||
    author.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
    myLibrary.push(book);
    render();
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display")

  clearBooksTable(table);
  createBooksTable(table);
}

function clearBooksTable(table) {
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

function createBooksTable(table) {
  for (const book of myLibrary) {
    createBookRow(table, book);
  }
}

function createBookRow(table, book) {
  const row = table.insertRow(1);
  createTitleCell(row, book);
  createAuthorCell(row, book);
  createPagesCell(row, book);
  let wasReadCell = row.insertCell(3);
  let deleteCell = row.insertCell(4);

  //add and wait for action for read/unread button
  let changeBut = document.createElement("button");
  changeBut.id = table.rows.length;
  changeBut.className = "btn btn-success";
  wasReadCell.appendChild(changeBut);
  let readStatus = "";
  if (book.check) {
    readStatus = "Yes";
  } else {
    readStatus = "No";
  }
  changeBut.innerText = readStatus;

  changeBut.addEventListener("click", function () {
    book.check = !book.check;
    render();
  });

  //add delete button to every row and render again
  let delBut = document.createElement("button");
  delBut.id = table.rows.length + 5;
  deleteCell.appendChild(delBut);
  delBut.className = "btn btn-warning";
  delBut.innerHTML = "Delete";
  delBut.addEventListener("click", function () {
    alert(`You've deleted title: ${book.title}`);
    myLibrary.splice(myLibrary.indexOf(book), 1);
    render();
  });
}

function createTitleCell(row, book) {
  row.insertCell(0).innerHTML = book.title;
}

function createAuthorCell(row, book) {
  row.insertCell(1).innerHTML = book.author;
}

function createPagesCell(row, book) {
  row.insertCell(2).innerHTML = book.pages;
}
