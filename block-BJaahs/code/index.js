// Without Objects

let question1_title = 'Where is the capital of Jordan';
let question1_options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let question1_correctAnswerIndex = 1;

function question1_isAnswerCorrect(index) {
    return index === question1_correctAnswerIndex;
}

function question1_getCorrectAnswer() {
    return question1_options[question1_correctAnswerIndex];
}

//Organized using Objects

let question1 = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,

    isAnswerCorrect(index) {
        return question1.index === question1.correctAnswerIndex;
    },
    
    getCorrectAnswer() {
        return question1.options[question1.correctAnswerIndex];
    }
}

// Function to create objects

function createQuestionObjs(title, options, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    question.isAnswerCorrect = function (index) {
        return index === question.correctAnswerIndex;
    }

    question.getCorrectAnswer = function() {
        return question.options[question.correctAnswerIndex];
    }

    return question;
}

// Convert the function to use `this` keyword

function createQuestionObjs(title, options, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    question.isAnswerCorrect = function (index) {
        return index === this.correctAnswerIndex;
    }

    question.getCorrectAnswer = function() {
        return question.options[this.correctAnswerIndex];
    }

    return question;
}

// Testing Object Methods

let ques = createQuestionObjs('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);

function test(message, cb ) {
    try {
        cb()
        console.log(message, '- success');
    } catch(error) {
        console.log(message, '- error');
        console.log(error);
    }
}

function testIsAnswerCorrect() {
    let result = ques.isAnswerCorrect(1);
    let expected = true;
    if(result != expected) {
        throw new Error (`${result} was not expected.`)
    }
}

function testGetCorrectAnswer() {
    let result = ques.getCorrectAnswer();
    let expected = 'Amaan';
    console.log(result,'result here')
    if(result != expected) {
        throw new Error (`${result} was not expected.`)
    }
}


test('Checking is answer correct', ques.isAnswerCorrect);
test('Getting the correct answer', ques.getCorrectAnswer);