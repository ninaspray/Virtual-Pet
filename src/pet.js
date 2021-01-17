const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;


function Pet(name, age, hunger, fitness) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype = {
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
            this.fitness = MAXIMUM_FITNESS;
        }
    },
    feed() {
        if ((this.hunger - 3) <= 0) {
            this.hunger = - 3;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
    },

    CheckUp() {
        const HUNGRY_PET = (this.hunger >= 5);
        const UNFIT_PET = (this.fitness <= 3);

        if (UNFIT_PET) {
            return "I need a walk";
        }
        if (HUNGRY_PET) {
            return "I am hungry";
        }
        if (HUNGRY_PET && UNFIT_PET); {
            return "I am hungry and I need a walk";
        }
        if (!HUNGRY_PET && !UNFIT_PET) {
            return "I feel great!"
        }
    },
}





//adding a prototype function means each object of the same type should behave the same.

module.exports =
    Pet,
    MAXIMUM_FITNESS,
    MINIMUM_HUNGER;