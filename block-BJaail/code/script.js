class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.read = false;
        this.id = `id-${Date.now()}`;
    }

    handleReadChange() {
        this.read = !this.read;
        this.createUI();
    }

    createUI() {
        let tr = document.createElement('tr');
        let isReadCheck = document.createElement('td');
        let input = document.createElement('input');
        let title = document.createElement('td');
        let author = document.createElement('td');
        let isbn = document.createElement('td');
        let deleteIcn = document.createElement('td');

        input.type = "checkbox";
        input.checked = this.read;
        input.addEventListener('click', this.handleReadChange.bind(this));
        isReadCheck.append(input);
        title.innerText = this.title;
        author.innerText = this.author;
        isbn.innerText = this.isbn;
        deleteIcn.innerText = '❌';
        deleteIcn.classList.add('deleteIcn');
        if(this.read) {
            alert(`${this.title} has been marked as read!`);
        }   
        
        table.style.visibility = 'visible';
        tr.append(isReadCheck, title, author, isbn, deleteIcn);
        return tr; 
    }
}

class BookList {
    constructor(root, books = []) {
        this.root = root;
        this.bookList = books;
    }

    add(title, author, isbn) {
        let book = new Book(title, author, isbn);
        this.bookList.push(book);
        this.createUI();
    }

    delete(id) {
        let index = this.bookList.findIndex(todo => todo.id === id);
        let deletedItem = this.bookList.splice(index, 1);
        this.createUI();
        return deletedItem;
    }

    createUI() {
        this.root.innerHTML = '';
        this.bookList.forEach(book => {
            let elm = book.createUI();
            let deleteIcn = elm.querySelector('.deleteIcn');
            deleteIcn.addEventListener('click', this.delete.bind(this, book.id));
            this.root.append(elm);
        })
    }
}

let table = document.querySelector('table');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let isbn = document.querySelector('#isbn');
let btn = document.querySelector('.btn');
let root = document.querySelector('tbody');

let lib = new BookList(root);

btn.addEventListener('click', () => {
   lib.add(title.value, author.value, isbn.value);
   title.value = author.value = isbn.value = '';
})

