import pkg from 'lodash';
const {isEmpty} = pkg;

const data = {
    firstName: 'Ramsey',
    lastName: 'Anderson',
    age: 20,
    gender: 'M',
    email: 'randerson@gmail.com',
    hobbies: []
}

const { firstName, lastName, age, gender, email, ...resto} = data;

const message = isEmpty(resto) ? 'ok': 'Los datos ingresados no coinciden con la collecion.';

console.log(message);