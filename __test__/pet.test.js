const Pet = require("../src/pet");

const pet = new Pet("Fido");


//Return the pet as an object. 
//test the pets name to be Fido. 

describe("Constructor", () => {
    it("Returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
    it("Returns the pets name", () => {
        expect(pet.name).toBe("Fido");
    });
});


