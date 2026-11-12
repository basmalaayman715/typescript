
import { NoteBook } from "./NoteBook.js";

export class User {
    public Id: number;
    public name: string;
    public email: string;

    private Password: string;
    protected Phone: string;
    private age: number;

    // Aggregation
    public notebooks: NoteBook[] = [];

    constructor(
        Id: number,
        name: string,
        email: string,
        Password: string,
        Phone: string,
        age: number
    ) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.Password = Password;
        this.Phone = Phone;

        if (age >= 18 && age <= 60) {
            this.age = age;
        } else {
            throw new Error("Age must be between 18 and 60");
        }
    }

    public displayInfo(): void {
        console.log("ID:", this.Id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Phone:", this.Phone);
        console.log("Age:", this.age);
    }

    public addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}

