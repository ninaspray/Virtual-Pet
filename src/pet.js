const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;


function Pet(name, age, hunger, fitness, alive) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.isAlive = alive;
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },
    growUp() {
        this.age++;
    },
    becomesHungry() {
        this.hunger += 5;
    },
    becomesUnfit() {
        this.fitness -= 3;
    },
    walk() {
        if ((this.fitness + 4) <= 10) {
            this.fitness = + 4;
        } else {
            this.fitness = MAXIMUM_FITNESS
        }
        if (!this.isAlive) {
            throw ('Your pet is no longer alive :(');
        }

    },
    feed() {
        if ((this.hunger - 3) <= 0) {
            this.hunger = - 3;
        } else {
            this.hunger = MINIMUM_HUNGER
        }
        if (!this.isAlive) {
            throw ('Your pet is no longer alive :(')
        };
    },

    CheckUp() {
        const HUNGRY_PET = (this.hunger >= 5);
        const UNFIT_PET = (this.fitness <= 3);

        if (HUNGRY_PET && UNFIT_PET) {
            return ("I am hungry and I need a walk")
        }
        else if (HUNGRY_PET) {
            return "I am hungry"
        }
        else if (UNFIT_PET) {
            return "I need a walk"
        }
        else if (!HUNGRY_PET && !UNFIT_PET) {
            return "I feel great!"
        }
        else {
            throw new Error("Your pet is no longer alive :(")
        }
    },

}






//adding a prototype function means each object of the same type should behave the same.

module.exports =
    Pet,
    MAXIMUM_FITNESS,
    MINIMUM_HUNGER;