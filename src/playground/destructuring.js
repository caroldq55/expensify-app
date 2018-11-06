// object


const person = {
    name: "carol",
    age: 18,
    location: {
        city: "melbourne",
        temp: 17
    }
};

const { name : firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age} years old.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It is ${temperature} in ${city}`);
}



// array

// const address = ["4/9 Robinson Road", "Melbourne", "VIC", "3122"];

// const [ street, city, state, zip] = address;

// console.log(`You are in ${street} ${city}`);


const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, , price] = item;
console.log(`A medium ${coffee} costs ${price}`);

