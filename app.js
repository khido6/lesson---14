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

const ProductName = {
    productTitle: "PC i5",
    productDescription: "computer",
    productPrice: 2350,
    shopAddresses: "pekini 1",
    productMemoryinGB: 128,
    productResolution: "1920x1024",
};

console.log("Product name is", ProductName["PC i5"]);
console.log("Product price is", ProductName["2350"]);
console.log("Product  resolution  is", ProductName["1920x1024"]);
console.log("and you can buy it at ", ProductName["pekini 1"]);