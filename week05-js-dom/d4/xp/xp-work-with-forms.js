document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    console.log('Form:', form);

    const fnameInp = document.getElementById('fname');
    const lnameInp = document.getElementById('lname');
    console.log('First name:', fnameInp);
    console.log('Last name:', lnameInp);

    const fnameInpName = document.getElementsByName('firstname')[0];
    const lnameInpName = document.getElementsByName('lastname')[0];
    console.log('First name by Name:', fnameInpName);
    console.log('Last name by Name:', lnameInpName);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstNameValue = fnameInp.value.trim();
        const lastNameValue = lnameInp.value.trim();

        const userAnswerList = document.querySelector('.usersAnswer');
        userAnswerList.innerHTML = '';

        if (firstNameValue && lastNameValue) {
            const firstNameLi = document.createElement('li');
            firstNameLi.textContent = firstNameValue;
            const lastNameLi = document.createElement('li');
            lastNameLi.textContent = lastNameValue;

            userAnswerList.appendChild(firstNameLi);
            userAnswerList.appendChild(lastNameLi);
        } else {
            alert('All fields required.');
        }
    });
});
