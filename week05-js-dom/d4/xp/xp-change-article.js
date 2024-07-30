document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    console.log(h1);

    const article = document.querySelector('article');
    const paragraphs = article.querySelectorAll('p');
    if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove();
    }

    const h2 = document.querySelector('h2');
    h2.addEventListener('click', () => {
        h2.style.backgroundColor = 'red';
    });

    const h3 = document.querySelector('h3');
    h3.addEventListener('click', () => {
        h3.style.display = 'none';
    });

    const boldButton = document.getElementById('bold-text');
    boldButton.addEventListener('click', () => {
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.fontWeight = 'bold';
        });
    });

    h1.addEventListener('mouseover', () => {
        const randomSize = Math.floor(Math.random() * 101); // Random number between 0 and 100
        h1.style.fontSize = `${randomSize}px`;
    });
});
