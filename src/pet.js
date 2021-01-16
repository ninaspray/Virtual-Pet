function Pet(name) {
    this.name = name;
    this.age = 0;
};

Pet.prototype.growUp = function () {
    this.age++;
};

//adding a prototype function means each object of the same type should behave the same.



module.exports = Pet;

