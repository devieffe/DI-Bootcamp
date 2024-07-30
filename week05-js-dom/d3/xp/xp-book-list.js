const allBooks = [
    {
        title: 'Web Design',
        author: 'Jacob Nielsen',
        image: 'https://example.com/web-design-book.jpg',
        alreadyRead: true
    },
    {
        title: 'I - Brand',
        author: 'Tom Pieters',
        image: 'https://example.com/i-brand.jpg',
        alreadyRead: false
    }
];

function renderBooks() {
    const section = document.querySelector('.listBooks');

    allBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookContent = `
            <h2>${book.title}</h2>
            <p>Written by ${book.author}</p>
            <img src="${book.image}" alt="${book.title}">
        `;

        bookDiv.innerHTML = bookContent;

        if (book.alreadyRead) {
            bookDiv.style.color = 'red';
        }

        section.appendChild(bookDiv);
    });
}

renderBooks();
