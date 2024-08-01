import people from './xp2-data.mjs';

function calculateAverageAge(personArray) {
    const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / personArray.length;
    return averageAge;
}

const averageAge = calculateAverageAge(people);
console.log(`The average age is: ${averageAge}`);
