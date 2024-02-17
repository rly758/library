const myLibrary = [];

function createLibrary() {
    //create html div with class="library"
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getDetails = function() {
    return {title, author, pages, read};
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