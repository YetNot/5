type Person = {
    name: string,
    age: number
}

type Bridge = {
    city: string,
    age: number
}

type Wine = {
    manufacturer: string,
    age: number,
    grade: string
}

function getOldest<T extends {age: number}>(items: T[]): T {
    return items.sort((a, b) => b.age - a.age)[0];
}

const people: Person[] = [
    { name: "Иван", age: 25 },
    { name: "Петр", age: 30 },
    { name: "Кевин", age: 20 }
];

const bridges: Bridge[] = [
    { city: "Москва", age: 50 },
    { city: "Санкт-Петербург", age: 40 },
    { city: "Екатеринбург", age: 60 }
];

const wines: Wine[] = [
    { manufacturer: "First", age: 10, grade: "A" },
    { manufacturer: "Second", age: 5, grade: "B" },
    { manufacturer: "Third", age: 15, grade: "C" }
];

const oldestPerson = getOldest(people);
const oldestBridge = getOldest(bridges);
const oldestWine = getOldest(wines)

console.log(oldestPerson)
console.log(oldestBridge)
console.log(oldestWine)
