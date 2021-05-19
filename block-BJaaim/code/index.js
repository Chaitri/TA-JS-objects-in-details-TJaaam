class Question {
    constructor(title, options, correctAns) {
        this.title = title;
        this.options = options;
        this.correctAns = correctAns;
    }

    isCorrect(answer) {
        return this.correctAns === answer;
    }

    getCorrectAnswer(){
        return this.correctAns;
    }

    createUI() {
        let h3 = document.createElement('h3');
        h3.innerText = this.title;
        return h3;
    }
}

class Quiz {
    constructor(root,activeIndex, score,  allQuestions = []) {
        this.root = root;
        this.allQuestions = allQuestions;
        this.activeIndex = activeIndex;
        this.score = score;
    }

    nextQuestion() {
        this.activeIndex += 1;
        return this.allQuestions[this.activeIndex];
    }

    createUI() {
        this.root.innderHTML = '';
        this.allQuestions(question => {
            let elm = question.createUI();
            this.root.append(elm);
        });
    }

    updateScore() {
        this.score += 1;
        return this.score;
    }
}