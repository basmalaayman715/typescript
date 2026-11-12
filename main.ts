
import { User } from "./user.js";
import { Admin } from "./Admin.js";
import { NoteBook } from "./NoteBook.js";
import { Storage } from "./Storage.js";

// Create User
const user1 = new User(
    1,
    "Ahmed",
    "ahmed@gmail.com",
    "123456",
    "01012345678",
    25
);

console.log("User Information:");
user1.displayInfo();

console.log("--------------------");

// Create Admin
const admin1 = new Admin(
    2,
    "Ali",
    "ali@gmail.com",
    "123456",
    "01098765432",
    30
);

console.log("Admin Information:");
admin1.displayInfo();
admin1.manageNotes();

console.log("--------------------");

// Create NoteBook
const book1 = new NoteBook();
const book2 = new NoteBook();

// Aggregation
user1.addNotebook(book1);
user1.addNotebook(book2);

console.log("Number of Notebooks:");
console.log(user1.notebooks.length);

console.log("--------------------");

// Composition and Association
book1.addNote(
    1,
    "Study",
    "Today I learned TypeScript and OOP concepts",
    user1
);

book1.addNote(
    2,
    "Programming",
    "Learning classes and objects in TypeScript",
    user1
);

console.log("Notebook Notes:");
book1.displayNotes();

console.log("--------------------");

// Remove Note
book1.removeNote(1);

console.log("After Removing Note:");
book1.displayNotes();

console.log("--------------------");

// Generics - Number Storage
const numberStorage = new Storage<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);

console.log("Number Storage:");
console.log(numberStorage.getAllItems());

// Generics - String Storage
const stringStorage = new Storage<string>();

stringStorage.addItem("Ahmed");
stringStorage.addItem("Ali");

console.log("String Storage:");
console.log(stringStorage.getAllItems());

// Remove Item
numberStorage.removeItem(20);

console.log("After Removing Number:");
console.log(numberStorage.getAllItems());
