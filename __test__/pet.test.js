const Pet = require("../src/pet");

const pet = new Pet("Fido");


//Return the pet as an object. 
//test the pets name to be Fido. 
//pet to have an initial age of 0.

describe("Constructor", () => {
    it("Returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
    it("Returns the pets name", () => {
        expect(pet.name).toBe("Fido");
    });
    it("Has an initial ag of 0", () => {
        expect(pet.age).toBe(0);
    });
});

//Create a fuction called growUp. So Pet grows by one year. 

describe("growUp", () => {
    it("icrements the pets age by 1", () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});


