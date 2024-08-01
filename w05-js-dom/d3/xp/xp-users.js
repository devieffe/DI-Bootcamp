const containerDiv = document.getElementById('container');
console.log(containerDiv);

const lists = document.querySelectorAll('.list');
lists[0].children[1].textContent = 'Richard';

lists[1].children[1].remove();

lists.forEach(list => {
    list.children[0].textContent = 'Dave';
});

lists.forEach(list => {
    list.classList.add('student_list');
});

lists[0].classList.add('university', 'attendance');

containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';

Array.from(lists[1].children).forEach(li => {
    if (li.textContent === 'Dan') {
        li.style.display = 'none';
    }
});

Array.from(lists[0].children).forEach(li => {
    if (li.textContent === 'Richard') {
        li.style.border = '2px solid black';
    }
});

document.body.style.fontSize = '18px';

if (containerDiv.style.backgroundColor === 'lightblue') {
    const users = Array.from(lists[0].children).map(li => li.textContent).join(' and ');
    alert(`Hello ${users}`);
}
