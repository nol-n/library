const myLibrary = [];

myLibrary.push({ title: 'Example Book', author: 'Example Author', pages: '500', read: true })

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBooktoLibrary(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    bookForm.reset();

    displayBooks();
}

function displayBooks() {
    const cardContainer = document.querySelector("#card-container");
    cardContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        const title = document.createElement("div");
        title.classList.add("card-title");
        title.textContent = book.title;
        newCard.appendChild(title);

        const author = document.createElement("div");
        author.classList.add("card-author");
        author.textContent = `by ${book.author}`;
        newCard.appendChild(author);

        const pages = document.createElement("div");
        pages.classList.add("card-pages");
        pages.textContent = `${book.pages} pages`;
        newCard.appendChild(pages);

        const read = document.createElement("div");
        read.classList.add("card-read");
        readText = book.read ? "Already Read" : "Unread";
        read.textContent = `Status: ${readText}`;
        newCard.appendChild(read);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-button");
        removeBtn.textContent = "Remove";
        newCard.appendChild(removeBtn);

        removeBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBooks();
        })

        const readBtn = document.createElement("button");
        readBtn.classList.add("read-button");
        readBtn.textContent = book.read ? "Unread" : "Read";
        newCard.appendChild(readBtn);

        readBtn.addEventListener("click", () => {
            if (readBtn.textContent === "Unread") {
                book.read = false;
            } else if (readBtn.textContent === "Read") {
                book.read = true;
            }

            displayBooks();
        })

        cardContainer.appendChild(newCard);
    }
    )
}

const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", addBooktoLibrary)

displayBooks();