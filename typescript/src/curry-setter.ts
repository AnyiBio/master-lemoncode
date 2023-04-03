type Person = {
    name: string;
    surname: string;
    age: number;
}

const set = (person: Person, keyName: string, value: string | number): Person => {
    return {
        ...person,
        [keyName]: value
    }
}

const julia: Person = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia: Person = set(julia, "age", 25);

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

console.log("********** CURRY SETTERS ***********");
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

const setName = (person: Person, value: string): Person => {
    return {
        ...person,
        "name": value
    }
}

const setSurname = (person: Person, value: string): Person => {
    return {
        ...person,
        "surname": value
    }
}

const setAge = (person: Person, value: number): Person => {
    return {
        ...person,
        "age": value
    }
}

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }