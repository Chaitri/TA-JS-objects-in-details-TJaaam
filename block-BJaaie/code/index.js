//  Pseudoclassical Pattern

function CreateAnimal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
    eat: function() {
        console.log(`I live in ${this.location} and I can eat`);
    },

    changeLocation: function(newLocation) {
        this.location = newLocation;
        return this.location;
    },

    summary: function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

function CreateDog(location, numberOfLegs, name, color) {
    CreateAnimal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;
}

CreateDog.prototype = {
    bark: function() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },

    changeName: function(newName) {
        this.name = newName;
        return this.name;
    },

    changeColor: function(newColor) {
        this.color = newColor;
        return this.color;
    },

    summary: function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

function CreateCat(location, numberOfLegs, name, colorOfEyes) {
    CreateAnimal.call(this, location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
    meow: function() {
        alert(`I am ${this.name} and I can meow 😹`);
    },

    changeName: function(newName) {
        this.name = newName;
        return this.name;
    },

    changeColorOfEyes: function(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },

    summary: function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also meow`;
    }
}

Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

let dog1 = new CreateDog('India', 4, 'Piz', 'Black');
let cat1 = new CreateCat('India', 4, 'Zane', 'Green');

// Using Class

class Animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }

    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }

    changeLocation(newLocation) {
        this.location = newLocation;
        return this.location;
    }

    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

class Dog extends Animal {
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs)
        this.name = name;
        this.color = color;
    }

    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    }

    changeName(newName) {
        this.name = newName;
        return this.name;
    }

    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    }

    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

class Cat extends Animal {
    constructor(location, numberOfLegs, name, colorOfEyes) {
        super(location, numberOfLegs)
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }

    meow() {
        alert(`I am ${this.name} and I can meow 😹`);
    }

    changeName(newName) {
        this.name = newName;
        return this.name;
    }

    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }

    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also meow`;
    }
}

let dog2 = new Dog('India', 4, 'Zaw', 'Brown');
let cat2 = new Cat('India', 4, 'Miz', 'Grey');