

import { User } from "./user.js";

export class Admin extends User {

    public manageNotes(): void {
        console.log("Admin is managing notes");
    }

}
