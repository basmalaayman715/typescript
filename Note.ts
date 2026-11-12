
import { User } from "./user.js";

export class Note {
    public Id: number;
    public title: string;
    public content: string;

    // Association
    public author: User;

    constructor(
        Id: number,
        title: string,
        content: string,
        author: User
    ) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public preview(): string {
        return this.content.substring(0, 30) + "...";
    }
}
