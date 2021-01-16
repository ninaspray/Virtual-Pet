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
    }
};



//adding a prototype function means each object of the same type should behave the same.



module.exports = Pet;

