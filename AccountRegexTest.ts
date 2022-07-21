import {EmailRegex} from "./demo";

let emailRegex = new EmailRegex();

let validAccount: string[] = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidAccount: string[] = [".@", "12345", "1234_", "abcde"];

for (let email of validAccount){
    let isValid=emailRegex.validate(email);
    console.log(`Email ${email} is valid: ${isValid}`);
}

for (let email of invalidAccount){
    let isValid=emailRegex.validate(email);
    console.log(`Email ${email} is valid: ${isValid}`);
}