class Book {
    constructor(title, category, author, isRead = false, finishedDate) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }

    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

class BookList {
    constructor(bookArr, currentBookIndex) {
        this.bookArr = bookArr;
        this.currentBookIndex = currentBookIndex;
    }

    add(bookArr) {
        bookArr.forEach(book => this.bookArr.push(book));
    }

    getCurrentBook() {
        return this.bookArr[this.currentBookIndex];
    }

    getNextBook() {
        return this.bookArr[this.currentBookIndex + 1];
    }

    getPrevBook() {
        return this.bookArr[this.currentBookIndex - 1];
    }

    changeCurrentBook(newIndex) {
        this.currentBookIndex = newIndex;
    }
}

let trulyDevious = new Book('Truly Devious', 'Mystery', 'Maureen Johnson', false, undefined);
let vanishingStair = new Book('Vanishing Stair', 'Mystery', 'Maureen Johnson');
let handOnTheWall = new Book('The Hand on the Wall', 'Mystery', 'Maureen Johnson');
let sixOfCrows = new Book('Six Of Crows', 'Fantasy', 'Leigh Bardugo');
let crookedKingdom = new Book('Crooked Kingdom', 'Fantasy', 'Leigh Bardugo');

let myBooks = [trulyDevious, vanishingStair, handOnTheWall, sixOfCrows];
let myCurrentReads = new BookList(myBooks, 3);