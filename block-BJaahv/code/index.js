// Factory pattern - using functions

function createUser(name, id, noOfProjects) {
    let user = {};

    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;

    user.getProjects = function () {
        return user.noOfProjects;
    }

    user.changeName = function(newName) {
        let prevName = user.name;
        user.name = newName;
        return prevName;
    }

    user.incrementProject = function(projectNum = 1) {
        user.noOfProjects += projectNum;
        return user.noOfProjects;
    }

    user.decrementProject = function(projectNum = 1) {
        user.noOfProjects -= projectNum;
        return user.noOfProjects;
    }

    return user;
}

let jane = createUser('Jane', 1, 3);
let mist = createUser('Mist', 2, 1);



// Prototypal Pattern

let userMethods = {
    getProjects: function () {
        return this.noOfProjects;
    },

    changeName: function (newName) {
        let prevName = this.name;
        this.name = newName;
        return prevName;
    },

    incrementProject: function (projectNum = 1) {
        this.noOfProjects += projectNum;
        return this.noOfProjects;
    },

    decrementProject: function (projectNum = 1) {
        this.noOfProjects -= projectNum;
        return this.noOfProjects;
    },
}


function createUser(name, id, noOfProjects) {
    let user = Object.create(userMethods);

    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;

    return user;
}

let jane = createUser('Jane', 1, 3);
let mist = createUser('Mist', 2, 1);



// Pseudoclassical Pattern

function CreateUser(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {

    getProjects: function () {
        return this.noOfProjects;
    },

    changeName: function (newName) {
        let prevName = this.name;
        this.name = newName;
        return prevName;
    },

    incrementProject: function (projectNum = 1) {
        this.noOfProjects += projectNum;
        return this.noOfProjects;
    },

    decrementProject: function (projectNum = 1) {
        this.noOfProjects -= projectNum;
        return this.noOfProjects;
    },

}

jane = new CreateUser('Jane', 1, 3);
mist = new CreateUser('Mist', 2, 1);



// Using Class

class User {

    constructor (name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }

    getProjects() {
        return this.noOfProjects;
    }

    changeName(newName) {
        let prevName = this.name;
        this.name = newName;
        return prevName;
    }

    incrementProject(projectNum = 1) {
        this.noOfProjects += projectNum;
        return this.noOfProjects;
    }

    decrementProject(projectNum = 1) {
        this.noOfProjects -= projectNum;
        return this.noOfProjects;
    }
}

jane = new User('Jane', 1, 3);
mist = new User('Mist', 2, 1);