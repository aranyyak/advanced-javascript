const students = [
    {id: 41, name: 'Rahim'},
    {id: 51, name: 'Karim'},
    {id: 61, name: 'Sahil'},
    {id: 71, name: 'Rahil'},

];

const output = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const nameOnly = element.name;
    output.push(nameOnly);
}

const names = students.map(s => s.name);
const bigger = students.filter(s => (s.id)>40);
const biggerOne = students.find(s => (s.id)>40);
console.log(biggerOne);