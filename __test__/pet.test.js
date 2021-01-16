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

//Pet should have an initial hunger of 0. 

describe("Hunger", () => {
    it("pet should have an initial hunger of 0", () => {
        expect(pet.hunger).toEqual(0);
    });
});

//Pet should have an intial fitness of 10. 
describe("Fitness", () => {
    it("pet should have an initial fitness level of 10", () => {
        expect(pet.fitness).toEqual(10);
    });
});

//Create a fuction called growUp. So Pet grows by one year. 

describe("growUp", () => {
    it("icrements the pets age by 1", () => {
        pet.age = 0;
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});

//Grow up should increas hunger by 5 and decrease fitness by 3.
describe("Pet becomes older and less fit", () => {
    it("check the hunger", () => {
        expect(pet.hunger).toBe(0);
    });
    it("Becomes hungrier", () => {
        pet.growUp();
        pet.becomesHungry();

        expect(pet.hunger).toBe(5);
    });
    it("Becomes less fit", () => {
        pet.growUp();
        pet.becomesHungry();
        pet.becomesUnfit();

        expect(pet.fitness).toBe(7);
    });
})