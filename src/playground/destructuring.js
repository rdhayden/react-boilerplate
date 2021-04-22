// Object destructing

const person = {
  name: 'Robin',
  age: 25,
  location: {
    city: 'Johannesburg',
    temp: 15,
  },
};

const { city: cityName = 'London', temp: temperature } = person.location;

console.log(`${cityName} is ${temperature} degrees today.`);

// Array destructuring

const address = ['41 Derwent Drive', 'Purley', 'London', 'CR8 1ER'];

const [, town, city, , country = 'UK'] = address;

console.log(`You are in ${town} ${city} ${country}`);
