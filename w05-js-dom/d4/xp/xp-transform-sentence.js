document.addEventListener('DOMContentLoaded', () => {
    let allBold = [];

    function getBoldItems() {
        allBold = document.querySelectorAll('#paragraph strong');
    }

    function highlightBold() {
        allBold.forEach(item => {
            item.style.color = 'blue';
        });
    }

    function returnItemsToDefault() {
        allBold.forEach(item => {
            item.style.color = 'black';
        });
    }

    getBoldItems();


    const paragraph = document.getElementById('paragraph');

    paragraph.addEventListener('mouseover', highlight);
    paragraph.addEventListener('mouseout', returnItemsToDefault);
});
