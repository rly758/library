const myLibrary = [];
const LIBRARY_PARENT = document.body;
const addBookBtn = document.querySelector("#addBookBtn");
const newBookDialog = document.querySelector("#dialog");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newBookDialog.close(); //on submit return an object with all values
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

//get book details from form submit button
//create new book object
//pass book details to addBookToLibrary()


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
function addBookToLibrary(myLibrary, cardContainer) { //add book parameter to get book details
    //get new book details from user input
    const title = "test title";
    const author = "test author";
    const pages = "100";
    const read = true;
    //create new Book object to store details
    const book = new Book(title,author,pages,read);
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
showLibrary(myLibrary, cardContainer);
//addBookToLibrary(myLibrary, cardContainer);