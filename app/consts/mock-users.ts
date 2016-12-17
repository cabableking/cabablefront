import {User} from "../models/user";
let demoUsers = [];
for(let i=1;i<10;i++){
    demoUsers.push({
        email : 'email'+i+'@gmail.com',
        password : 'password'
    })
}
export const USERS : User[] = demoUsers;