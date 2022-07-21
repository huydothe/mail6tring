export class EmailRegex {
    private emailRegex:RegExp=/^[_|a-z|0-9|A-Z]{6,}$/;
    public validate(email:string):boolean{
        return this.emailRegex.test(email);
    }
}