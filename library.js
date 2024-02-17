const myLibrary = [];
const LIBRARY_PARENT = document.body;
const addBookBtn = document.querySelector("#addBookBtn");
const newBookDialog = document.querySelector("#dialog");
const submitBtn = document.querySelector("#submitBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const bookForm = document.querySelector("#bookForm");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //add form input validation
    const newBook = new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
    bookForm.reset();
    addBookToLibrary(newBook, myLibrary, cardContainer);
    newBookDialog.close();
});

cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newBookDialog.close();
    bookForm.reset();
});

function openDialog() {
    newBookDialog.showModal();
}
  
function closeDialog(event) {
    // If the target dialog is
    if (!event.target.contains(newBookDialog)) return;
    newBookDialog.close();
}
  
addBookBtn.addEventListener('click', openDialog);
document.addEventListener('click', closeDialog);

function createLibrary(location = LIBRARY_PARENT) {
    //create html div with class="library"
    const library = document.createElement("div");
    library.className = "library";
    location.appendChild(library);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getDetails = function() {
    return {title:this.title, author:this.author, pages:this.pages, read:this.read};
};

//on form submission add a new book to myLibrary, and display the new book card on page
function addBookToLibrary(book, myLibrary, cardContainer) { 
    //add Book object to myLibrary
    myLibrary.push(book);
    
    //create a Book card html element => getBookCard()
    const card = getBookCard(book);
    //append Book card to library in html
    cardContainer.appendChild(card);
}

//display existing books in myLibrary as cards
function showLibrary(myLibrary, cardContainer) {
    for (book of myLibrary) {
        const card = getBookCard(book);
        cardContainer.appendChild(card);
    }
}

//add read toggle
//add remove book button
function getBookCard(book) {
    const details = book.getDetails();
    const card = document.createElement("div");
    card.className = "book";
    for (property in details) {
        const prop = `${property}`[0].toUpperCase() + `${property}`.slice(1);
        const val = details[property];

        const p = document.createElement("p");
        p.className = property;
        p.textContent = prop + ": " + val;

        card.appendChild(p);
    }

    return card;
}

//existing books in library
const book1 = new Book("Book Title 1","Arthor Thor","172",true);
const book2 = new Book("Book Title 2","Arthur Tor","131",false);

myLibrary.push(book1);
myLibrary.push(book2);

createLibrary();
const cardContainer = document.querySelector(".library");
showLibrary(myLibrary, cardContainer);