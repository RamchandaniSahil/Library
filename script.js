let myLibrary = [];
let book;

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('checkbox');

function Book(title, author, pages, read) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.checked;
}

function addBookToLibrary () {
    book = new Book(title, author, pages, read);
    myLibrary.push(book);
    // setData();
    displayBook(title, author, pages, read);
    console.log(myLibrary);
}

function toggleDisplay () {
    const plusButton = document.querySelector('.button_plus');
    const popupScreen = document.querySelector('.displaynone');
    const form = document.getElementById('form');
    const submit = document.getElementById('submit');
    const closeButton = document.querySelector('.button_close');
    plusButton.addEventListener('click', (e) => {
        e.preventDefault();
        popupScreen.style.display = 'block';
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        popupScreen.style.display = 'none';
        addBookToLibrary();
        form.reset();
    });
    closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        popupScreen.style.display = 'none';
        form.reset();
    })
}

function displayBook (title, author, pages, read) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const container = document.querySelector('.container');
    cardDiv.setAttribute('id', myLibrary.indexOf(myLibrary[myLibrary.length - 1]))
    container.appendChild(cardDiv);
    console.log(cardDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    cardDiv.appendChild(titleDiv);
    titleDiv.innerText = `Title: ${title.value}`;

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    cardDiv.appendChild(authorDiv);
    authorDiv.innerText = `Author: ${author.value}`;

    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages');
    cardDiv.appendChild(pagesDiv);
    pagesDiv.innerText = `Pages: ${pages.value}`;

    const firstButton = document.createElement('button');
    firstButton.classList.add('spacing');
    firstButton.classList.add('bottem');
    cardDiv.appendChild(firstButton);
    firstButton.innerText = `${readOrNotRead()}`;
    if (book.read === true) {
        firstButton.style.backgroundColor = 'green';
    }
    else if (book.read === false) {
        firstButton.style.backgroundColor = 'red';
    }

    firstButton.addEventListener('click', () => {
        if (book.read === true) {
            firstButton.innerText = 'Not Read';
            firstButton.style.backgroundColor = 'red';
            book.read = false;
            // setData();
        }
        else if (book.read === false) {
            firstButton.innerText = 'Read';
            firstButton.style.backgroundColor = 'green';
            book.read = true;
            // setData();
        }
    })

    const secondButton = document.createElement('button');
    secondButton.classList.add('spacing');
    cardDiv.appendChild(secondButton);
    secondButton.innerText = `Remove`;

    secondButton.addEventListener('click', () => {
        container.removeChild(cardDiv)
        myLibrary.splice(cardDiv, 1);
        // setData();
    })
}

function readOrNotRead () {
    if (book.read === true) {
        return 'Read';
    }
    else {
        return 'Not Read';
    }
}

// function setData () {
//     localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
//     const add = JSON.parse(localStorage.getItem("myLibrary"));
//     myLibrary = add;
//     // const data = localStorage.getItem("myLibrary");
//     // let arr = JSON.parse(localStorage.getItem("myLibrary"));
//     // console.log(arr);
// }

// function add () {
//     // myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
//     if (localStorage.myLibrary) {
//         const data = localStorage.getItem("myLibrary");
//         myLibrary = JSON.parse(data);
        
//     }
// }

// Check localStorage on page load
// add();
// if (localStorage.getItem("myLibrary")) {
//   toggleDisplay();
// } else {
//   myLibrary = DEFAULT;
//   toggleDisplay();
// }

toggleDisplay();