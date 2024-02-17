const myLibrary = [];
const LIBRARY_PARENT = document.body;

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
function addBookToLibrary() {
    //get new book details from user input
    //create new Book object to store details
    //add Book object to myLibrary
    //create a Book card html element
    //append Book card to library in html
}

//display existing library in myLibrary
function showLibrary(myLibrary, cardContainer) {
    //for each Book in myLibrary
    //create a Book card (html div element) with Book details listed => getBookCard() returns div element
    //append Book card element to library (html div element)
    for (book of myLibrary) {
        const card = getBookCard(book);
        cardContainer.appendChild(card);
    }
}

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

const book1 = new Book("Book Title 1","Arthor Thor","172",true);
const book2 = new Book("Book Title 2","Arthur Tor","131",false);

myLibrary.push(book1);
myLibrary.push(book2);

createLibrary();
const cardContainer = document.querySelector(".library");
//const testCard = getBookCard(book1);
//lib.appendChild(testCard);

showLibrary(myLibrary, cardContainer);