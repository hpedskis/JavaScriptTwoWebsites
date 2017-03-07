const numbers = [1, 2, 3, 4];
console.log(Object.getPrototypeOf(Object.getPrototypeOf(numbers)) === Object.prototype);

function User(username) {
    this.username = username;
}

User.prototype.save = function() {
    // assuming that saveToDatabase function exists
    saveToDatabase();
    console.log('saving ' + this.username);
};

const user = User('pizza4life');

console.log(username);