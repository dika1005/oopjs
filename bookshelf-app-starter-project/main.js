document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("bookForm");
    const searchForm = document.getElementById("searchBook");

    bookForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addBook();
    });

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        searchBook();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

const books = [];
const RENDER_EVENT = "render-book";
const STORAGE_KEY = "BOOKSHELF_APPS";

function addBook() {
    const title = document.getElementById("bookFormTitle").value;
    const author = document.getElementById("bookFormAuthor").value;
    const year = document.getElementById("bookFormYear").value;
    const isComplete = document.getElementById("bookFormIsComplete").checked;

    const bookForm = document.getElementById("bookForm");
    const editingId = bookForm.getAttribute("data-editing-id");

    if (editingId) {
        const bookTarget = findBook(parseInt(editingId));
        if (bookTarget) {
            bookTarget.title = title;
            bookTarget.author = author;
            bookTarget.year = year;
            bookTarget.isComplete = isComplete;
        }
        bookForm.removeAttribute("data-editing-id");
    } else {
        const generatedID = generateId();
        const bookObject = generateBookObject(generatedID, title, author, year, isComplete);
        books.push(bookObject);
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
    bookForm.reset();
}

function generateId() {
    return +new Date();
}

function generateBookObject(id, title, author, year, isComplete) {
    return { id, title, author, year, isComplete };
}

function makeBookElement(book) {
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = book.title;
    bookTitle.setAttribute("data-testid", "bookItemTitle");

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Penulis: ${book.author}`;
    bookAuthor.setAttribute("data-testid", "bookItemAuthor");

    const bookYear = document.createElement("p");
    bookYear.innerText = `Tahun: ${book.year}`;
    bookYear.setAttribute("data-testid", "bookItemYear");

    const textContainer = document.createElement("div");
    textContainer.append(bookTitle, bookAuthor, bookYear);

    const container = document.createElement("div");
    container.setAttribute("id", `book-${book.id}`);
    container.setAttribute("data-testid", "bookItem");
    container.append(textContainer);

    if (book.isComplete) {
        const undoButton = document.createElement("button");
        undoButton.innerText = "Belum selesai dibaca";
        undoButton.setAttribute("data-testid", "bookItemIsCompleteButton");
        undoButton.addEventListener("click", function () {
            undoBookFromCompleted(book.id);
        });

        const deleteButton = createDeleteButton(book.id);
        const editButton = createEditButton(book.id);

        container.append(undoButton, deleteButton, editButton);
    } else {
        const completeButton = document.createElement("button");
        completeButton.innerText = "Selesai dibaca";
        completeButton.setAttribute("data-testid", "bookItemIsCompleteButton");
        completeButton.addEventListener("click", function () {
            addBookToCompleted(book.id);
        });

        const deleteButton = createDeleteButton(book.id);
        const editButton = createEditButton(book.id);

        container.append(completeButton, deleteButton, editButton);
    }

    return container;
}

function createDeleteButton(bookId) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Hapus Buku";
    deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
    deleteButton.addEventListener("click", function () {
        deleteBook(bookId);
    });
    return deleteButton;
}

function createEditButton(bookId) {
    const editButton = document.createElement("button");
    editButton.innerText = "Edit Buku";
    editButton.setAttribute("data-testid", "bookItemEditButton");
    editButton.addEventListener("click", function () {
        editBook(bookId);
    });
    return editButton;
}

document.addEventListener(RENDER_EVENT, function () {
    const incompleteBookList = document.getElementById("incompleteBookList");
    incompleteBookList.innerHTML = "";

    const completeBookList = document.getElementById("completeBookList");
    completeBookList.innerHTML = "";

    for (const book of books) {
        const bookElement = makeBookElement(book);
        if (book.isComplete) {
            completeBookList.append(bookElement);
        } else {
            incompleteBookList.append(bookElement);
        }
    }
});

function addBookToCompleted(bookId) {
    const bookTarget = findBook(bookId);
    if (bookTarget == null) return;

    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function undoBookFromCompleted(bookId) {
    const bookTarget = findBook(bookId);
    if (bookTarget == null) return;

    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function deleteBook(bookId) {
    const bookIndex = findBookIndex(bookId);
    if (bookIndex === -1) return;

    books.splice(bookIndex, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function editBook(bookId) {
    const bookTarget = findBook(bookId);
    if (bookTarget == null) return;

    document.getElementById("bookFormTitle").value = bookTarget.title;
    document.getElementById("bookFormAuthor").value = bookTarget.author;
    document.getElementById("bookFormYear").value = bookTarget.year;
    document.getElementById("bookFormIsComplete").checked = bookTarget.isComplete;

    const bookForm = document.getElementById("bookForm");
    bookForm.setAttribute("data-editing-id", bookId);
}

function findBook(bookId) {
    return books.find((book) => book.id === bookId);
}

function findBookIndex(bookId) {
    return books.findIndex((book) => book.id === bookId);
}

function saveData() {
    if (isStorageExist()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
    }
}

function isStorageExist() {
    if (typeof Storage === undefined) {
        alert("Browser kamu tidak mendukung local storage");
        return false;
    }
    return true;
}

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    if (serializedData == null) return;

    const data = JSON.parse(serializedData);
    for (const book of data) {
        books.push(book);
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function searchBook() {
    const searchTitle = document.getElementById("searchBookTitle").value.toLowerCase();
    const incompleteBookList = document.getElementById("incompleteBookList");
    const completeBookList = document.getElementById("completeBookList");
    incompleteBookList.innerHTML = "";
    completeBookList.innerHTML = "";

    for (const book of books) {
        if (book.title.toLowerCase().includes(searchTitle)) {
            const bookElement = makeBookElement(book);
            if (book.isComplete) {
                completeBookList.append(bookElement);
            } else {
                incompleteBookList.append(bookElement);
            }
        }
    }
}
