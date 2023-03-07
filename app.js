const arr = [10,20,35,45,59,60,75,80,9,101];

const getAverage = (numbers) => {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    return sum / numbers.length;
};

console.log(getAverage(arr));


const taskobjects = [
    {
        name: "java",
        age: 1990,
    },
    {
        name: "react",
        age: 20,
    },
    {
        name: "javascript",
        age: 1996,
    },
    {
        name: "node",
        age: 18,
    },
    {
        name: "HTML",
        age: 40,
    },
];

console.log(taskobjects);

