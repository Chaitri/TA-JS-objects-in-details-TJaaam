let animalMethods = {
    eat: function() {
        return `I live in ${this.location} and I can eat`;
    },

    changeLocation: function(newLocation) {
        this.location = newLocation;
    },

    summary: function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
};

let dogMethods = {
    bark: function() {
        return `I am ${this.name} and I can bark 🐶`;
    },

    changeName: function(newName) {
        this.name = newName;
    },

    changeColor: function(newColor) {
        this.color = newColor;
    },

    summary: function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
};

let catMethods = {
    meow: function() {
        return `I am ${this.name} and I can meow 😹`;
    },

    changeName: function(newName) {
        this.name = newName;
    },

    changeColorOfEyes: function(newColor) {
        this.colorOfEyes = newColor;
    },

    summary: function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also meow`;
    }
}

function createAnimal(location, numberOfLegs) {
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

function createDog(location, numberOfLegs, name, color) {
    let dog = Object.create(dogMethods);
    dog.location = location;
    dog.numberOfLegs = numberOfLegs;
    dog.name = name;
    dog.color = color;
    return dog;
}

function createCat(location, numberOfLegs, name, colorOfEyes) {
    let cat = Object.create(catMethods);
    cat.location = location;
    cat.numberOfLegs = numberOfLegs;
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}

Object.setPrototypeOf(dogMethods, animalMethods);
Object.setPrototypeOf(catMethods, animalMethods);

let animal = createAnimal('India', 4);
let dog = createDog('India', 4, 'Dennis', 'Black');
let cat = createCat('India', 4, 'Pix', 'Calico');