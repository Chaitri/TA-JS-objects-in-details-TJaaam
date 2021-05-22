class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        return `${this.name} is eating`;
    }

    sleep() {
        return `${this.name} is sleeping`;
    }

    walk() {
        return `${this.name} is walking`;
    }
}

class Player extends Person{
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }

    play(){
        return `${this.name} is playing ${this.sportsName}`;
    }
}

class Teacher extends Person{
    constructor(name, age, gender, instituteName) {
        super(name, age, gender);
        this.instituteName = instituteName;
    }

    teach(){
        return `${this.name} is teaching at ${this.instituteName}`;
    }
}

class Artist extends Person{
    constructor(name, age, gender, kind) {
        super(name, age, gender);
        this.kind = kind;
    }

    createArt(){
        return `${this.name} is an artish - ${this.kind}`;
    }
}

class Cricketer extends Player{
    constructor(name, age, gender, sportsName, teamName) {
        super(name, age, gender, sportsName);
        this.teamName = teamName;
    }

    playCricket(){
        return `${this.name} is playing ${this.sportsName} for ${this.teamName}`;
    }
}

let p1 = new Player('John', 28, 'M', 'Football');
let t1 = new Teacher('Jake', 30, 'M', 'Sangty');
let a1 = new Artist('Mary', 20, 'F', 'Poet');
let c1 = new Cricketer('Dia', 29, 'F', 'Cricket', 'JKD');