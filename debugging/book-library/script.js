const CHECK_BTN_ID_PREFIX = "check-btn-";
const CHECK_BTN_CLASS = "btn btn-success";
const CHECK_BTN_TRUE_TEXT = "Yes";
const CHECK_BTN_FALSE_TEXT = "No";
const DELETE_BTN_ID_PREFIX = "delete-btn-";
const DELETE_BTN_CLASS = "btn btn-warning";
const DELETE_BTN_TEXT = "Delete";

const MY_LIBRARY = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (MY_LIBRARY.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    MY_LIBRARY.push(book1);
    MY_LIBRARY.push(book2);
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
    MY_LIBRARY.push(book);
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
  const table = document.getElementById("display");

  clearBooksTable(table);
  createBooksTable(table);
}

function clearBooksTable(table) {
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

function createBooksTable(table) {
  for (const book of MY_LIBRARY) {
    createBookRow(table, book);
  }
}

function createBookRow(table, book) {
  const row = table.insertRow(1);
  createTitleCell(row, book);
  createAuthorCell(row, book);
  createPagesCell(row, book);
  createCheckBtn(table, row, book);
  createDeleteBtn(table, row, book);
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

function createCheckBtn(table, row, book) {
  const checkBtn = document.createElement("button");
  checkBtn.id = CHECK_BTN_ID_PREFIX + table.rows.length;
  checkBtn.className = CHECK_BTN_CLASS;
  if (book.check) {
    checkBtn.innerText = CHECK_BTN_TRUE_TEXT;
  } else {
    checkBtn.innerText = CHECK_BTN_FALSE_TEXT;
  }
  checkBtn.addEventListener("click", () => onClickCheckBtn(book));
  row.insertCell(3).appendChild(checkBtn);
}

function createDeleteBtn(table, row, book) {
  const deleteBtn = document.createElement("button");
  deleteBtn.id = DELETE_BTN_ID_PREFIX + table.rows.length;
  deleteBtn.className = DELETE_BTN_CLASS;
  deleteBtn.innerHTML = DELETE_BTN_TEXT;
  deleteBtn.addEventListener("click", () => onClickCheckBtn(book));
  row.insertCell(4).appendChild(deleteBtn);
}

function onClickCheckBtn(book) {
  book.check = !book.check;
  render();
}

function onClickCheckBtn(book) {
    alert(`You've deleted title: ${book.title}`);
    MY_LIBRARY.splice(MY_LIBRARY.indexOf(book), 1);
    render();
  }