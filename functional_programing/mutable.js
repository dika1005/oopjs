function max(arrayOfNumber) {
    return[...arrayOfNumber]
        .sort((a, b) => a - b)
        .pop();
}

function registerEmail(person, email) {
    return {...person, email};
}

const numbers = [22, 44, 34, 22, 66, 67];
const largest = max(numbers);

console.log(largest);
console.log(numbers);

const person = {
    name: 'dika',
    username: 'rmadan123',
};

const personWithEmail = registerEmail(person,  'dika123@gmail.com');

console.log(person);
console.log(personWithEmail);