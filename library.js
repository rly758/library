const myLibrary = [];
const libContainer = document.body;

function createLibrary(libContainer) {
    //create html div with class="library"
    const lib = document.createElement("div");
    lib.className = "library";
    libContainer.appendChild(lib);
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
function showLibrary() {
    //for each Book in myLibrary
    //create a Book card (html div element) with Book details listed
    //append Book card element to library (html div element)
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

const book1 = new Book("Book Title","Arthor Thor","172",true);
myLibrary.push(book1);

createLibrary(libContainer);
const lib = document.querySelector(".library");
const testCard = getBookCard(book1);
lib.appendChild(testCard);