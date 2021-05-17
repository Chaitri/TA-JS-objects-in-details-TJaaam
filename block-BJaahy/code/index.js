// Class - Square

class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
        this.numberOfTimes = 0;
    }

    description() {
        alert(`The square is ${this.width} x ${this.height}`);
    }

    calcArea() {
        return this.width * this.height;
    }

    get area() {
        if(this.numberOfTimes >= 4) {
            alert(`Upper Limit Reached`);
        } else {
            this.numberOfTimes += 1;
            return this.calcArea();
        }
        
    }

    set area(area) {
        if(area !== this.calcArea()) {
            alert('Not a Valid Input');
        } else {
            this.width = this.height = Math.sqrt(area);
        }
    }

    static isEqual(sq1, sq2) {
        return sq1.area === sq2.area;
    }
}

let sq1 = new Square(4);
let sq2 = new Square(8);

console.log(sq1.area);
console.log(sq2.area);

console.log(Square.isEqual(sq1, sq2));



// Class - User

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        if(fullName.length < 5) {
            alert(`Full name should be more than 5 characters`);
            return;
        }

        let nameArr = fullName.split(' ');
        this.firstName = nameArr[0];
        this.lastName = nameArr[1];
    }

    nameContains(str) {
        return this.fullName.includes(str);
    }
}

let jane = new User('Jane', 'Austen');
let leigh = new User('Leigh', 'Bardugo');

jane.fullName = 'Michael Crichton';
jane.fullName = 'Dane';
console.log(jane.fullName);
console.log(jane.nameContains('chae'));