export class userData {
    constructor(private firstName: string, private lastName: string, private email: string, private token: string){

    }
}

interface user {
    firstName: string,
    lastName: string,
    email: string,
    token?: string
}