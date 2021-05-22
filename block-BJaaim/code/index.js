class Question {
    constructor(title, options, correctAnsIndex) {
        this.title = title;
        this.options = options;
        this.correctAnsIndex = correctAnsIndex;
    }

    isCorrect(answer) {
        return this.options[this.correctAnsIndex] === answer;
    }

    getCorrectAnswer(){
        return this.options[this.correctAnsIndex];
    }
}

class Quiz {
    constructor(allQuestions = [], score = 0) {
        this.allQuestions = allQuestions;
        this.activeIndex = 0;
        this.score = score;
    }

    addQuestion(title, options, correctAnsIndex){
        let questionObj = new Question(title, options, correctAnsIndex);
        this.allQuestions.push(questionObj);
    }

    nextQuestion() {
        this.activeIndex += 1;
        this.createUI();
    }

    prevQuestion() {
        this.activeIndex -= 1;
        this.createUI();
    }

    handleButtons() {
        if(this.activeIndex === 0) {
            prev.style.visibility = 'hidden';
        } else if(this.activeIndex === this.allQuestions.length - 1) {
            next.style.visibility = 'hidden';
            resultBtn.style.display = 'inline';
        } else {
            prev.style.visibility = 'visible';
            next.style.visibility = 'visible';
            resultBtn.style.display = 'none';
        }
    }

    incScore() {
        this.score += 1;
    }

    createUI() {
        quizElm.innerHTML = '';
        let activeQuestion = this.allQuestions[this.activeIndex];
        let form = document.createElement('form');
        let h3 = document.createElement('h3');
        let optionsDiv =  document.createElement('div');
        optionsDiv.classList.add('options');
        let button = document.createElement('button');
        button.type = 'submit';
        button.innerText = 'Submit';

        h3.innerText = activeQuestion.title;

        activeQuestion.options.forEach((option, index) => {
            let input = document.createElement('input');
            input.id = `option-${index}`;
            input.type = 'radio';
            input.value = option;
            input.name = 'options';

            let label = document.createElement('label');
            label.for = `option-${index}`;
            label.innerText = option;

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                if(input.checked) {
                    if(activeQuestion.isCorrect(input.value)) {
                        this.incScore();
                    }
                }
            })

            optionsDiv.append(input, label);
        });

        

        this.handleButtons();
        totalQuestions.innerText = `Total Questions: ${this.allQuestions.length}`;
        form.append(h3, optionsDiv, button);
        quizElm.append(form);
    }

    
}


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let totalQuestions = document.querySelector('.questionCount');
let quizElm = document.querySelector('.quiz');
let resultBtn = document.querySelector('.show_result');

let quiz = new Quiz();
questions.forEach(question => {
    quiz.addQuestion(question.title, question.options, question.answerIndex);
});

quiz.createUI();

next.addEventListener('click', quiz.nextQuestion.bind(quiz));
prev.addEventListener('click', quiz.prevQuestion.bind(quiz));
resultBtn.addEventListener('click', () => {
    alert(`Your score is ${quiz.score}`);
})