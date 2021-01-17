const { TestScheduler } = require("jest");
const Pet = require("../src/pet");


const pet = new Pet("Fido");
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;


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

//Create a function called walk that increases the pets fitness level.
//Pets fitness level should never go above 10. 

describe("Walk", () => {
    it("icrements the pets fitness level", () => {
        pet.walk();
        expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
    });
});

describe("Feed", () => {
    it("decreases the pets hunger levels", () => {
        pet.feed();
        expect(pet.hunger).toEqual(MINIMUM_HUNGER);
    });
});


//Check Up - if the pet's fitness is 3 or less, it should return 'I need a walk'.

describe("Check Up", () => {
    it("Pet lets you know how it needs a walk", () => {
        const pet = new Pet("Fido");
        pet.fitness = 3
        expect(pet.CheckUp()).toBe("I need a walk");
    });
    it("Pet lets you know it's hungry", () => {
        const pet = new Pet("Fido");
        pet.hunger = 6
        expect(pet.CheckUp()).toBe("I am hungry");
    });
    xit("Pet lets you know it's hungry and needs a walk", () => {
        const pet = new Pet("Fido");
        pet.fitness = 2;
        pet.hunger = 5;
        expect(pet.CheckUp()).toBe("I am hungry and I need a walk");
    });
});

describe("Is Alive", () => {
    it("Your pet is alive", () => {
        const pet = new Pet("Fido");
        expect(pet.isAlive).toBe(true);
    });
    it("Your pet isn't alive", () => {
        const pet = new Pet("Fido");
        pet.age = 30
        expect(pet.isAlive).toBe(false);
    });
    it("If pets hunger is above 10 it should return false", () => {
        const pet = new Pet("Fido");
        pet.hunger = 30
        expect(pet.isAlive).toBe(false);
    });
    it("Error Message Appears", () => {
        const pet = new Pet("Fido");
        pet.age = 32
        pet.CheckUp;
        pet.isAlive;

        expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });
    it("Error Message Appears", () => {
        const pet = new Pet("Fido");
        pet.age = 32
        pet.CheckUp;
        pet.isAlive;

        expect(() => pet.walk()).toThrowErrorMatchingSnapshot("Your pet is no longer alive :(");
    });

});