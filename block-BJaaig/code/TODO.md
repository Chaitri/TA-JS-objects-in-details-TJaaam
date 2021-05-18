## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John ; as default argument message is taken with this pointing to user object
console.log(user2.sayHello()); // Hello Arya ; as default argument message is taken with this pointing to user2 object
console.log(user.sayHello.call(user2)); // Hello Arya ; as this is bound to user2 through call binding
console.log(user.sayHello.call(user2, 'Hey')); // Hey Arya ; this -> user2, default message -> Hey
console.log(user.sayHello.apply(user2, ['Hey'])); // Hey Arya ; this points to user2, and message value passed is Hey
console.log(typeof user.sayHello.bind(user2)); // function ; bind() returns a function reference
console.log(user.sayHello.bind(user2)()); // Hello Arya ; bind() returns a function reference where this points to user2, this reference is immediately executed.
console.log(userSayHello()); // Hello undefined ; here, this points to window object which does not have username property
console.log(typeof userSayHello.bind(user2)); // function ; bind() returns a function reference
console.log(userSayHello.bind(user2)()); // Hello Arya ; here, in userSayHello() this points to user2
console.log(user3.sayHello()); // error ; user3 does not have any property sayHello, and thus cannot be invoked.
console.log(userSayHello.apply(user3)); // Hello Bran ; this points to user3
console.log(userSayHello.call(user3)); // Hello Bran ; this points to user3
console.log(typeof new MainUser()); // object ; new creates an object
console.log(typeof new MainUser()); // object ; new creates an object
console.log(new MainUser().sayHello()); // Hello Tyrion ; new object has username as Tyrion
console.log(new MainUser().sayHello.call(user2)); // Hello Arya ; this in sayHello() points to user2
console.log(new MainUser().sayHello.call(user)); // Hello John ; this points to user
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // Welcome! John ; message - Welcome! , and this points to user object.
```
