// Prototypal pattern

let questionMethods = {
    isAnswerCorrect: function(index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function() {
        return this.options[this.correctAnswerIndex];
    }
}

function createQuestion(title, options, correctAnswerIndex) {
    let question = Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    return question;
}

// Prototypal pattern - Test

let questionOne = createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);

questionOne.isAnswerCorrect(1);
questionOne.getCorrectAnswer();



// Pseudoclassical Pattern

function CreateQuestion(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

CreateQuestion.prototype = {
    isAnswerCorrect: function (index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function () {
        return this.options[this.correctAnswerIndex];
    }
}

// Pseudoclassical Pattern - Test

let questionTwo = new CreateQuestion('Where is the capital of Jamaica' , ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'], 2);

questionTwo.isAnswerCorrect(2);
questionTwo.getCorrectAnswer();



// Using Class

class Question {

    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isAnswerCorrect (index) {
        return index === this.correctAnswerIndex;
    }

    getCorrectAnswer () {
        return this.options[this.correctAnswerIndex];
    }
}

// Using Class - Test

let questionThree = new Question('What is the name of the largest moon of Saturn',['Mimas', 'Titan' , 'Dione' , 'Enceladus'], 1);