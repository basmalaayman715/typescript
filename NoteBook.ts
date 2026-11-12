
import { Note } from "./Note.js";
import { User } from "./user.js";

export class NoteBook {

    // Composition
    private notes: Note[] = [];

    // Create a new Note inside NoteBook
    public addNote(
        Id: number,
        title: string,
        content: string,
        author: User
    ): void {
        const note = new Note(Id, title, content, author);
        this.notes.push(note);
    }

    public removeNote(Id: number): void {
        this.notes = this.notes.filter(
            note => note.Id !== Id
        );
    }

    public displayNotes(): void {
        this.notes.forEach(note => {
            console.log("Title:", note.title);
            console.log("Preview:", note.preview());
            console.log("Author:", note.author.name);
        });
    }
}
