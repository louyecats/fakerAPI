const { faker } = require('@faker-js/faker'); //import faker module
const express = require("express"); //import express module
const app = express(); //use express to create app
const port = 8000; //optional port pick localhost://8000

const user = () => ({
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
});

const company = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.buildingNumber(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCodeByState(),
        country: faker.address.country()
    }
});

//backend takes in requests(req) and gives respone(res)
//so we create routes and send data
//localhost://8000/ is request
//sends response of json object
app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
    });

app.get("/api/users/new", (req, res) => {
    const createNewUser = user();
    res.json(createNewUser);
    });

app.get("/api/companies/new", (req, res) => {
    const createNewCompany = company();
    res.json(createNewCompany);
    });

app.get("/api/user/company", (req, res) => {
    createUser = user();
    createCompany = company();
    const createUserAndCompany = {
        ... createUser,
        ... createCompany
    }
    res.json(createUserAndCompany);
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );