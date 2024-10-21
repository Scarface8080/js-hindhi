class User {

    constructor(email, passwrod){
        this.email = email;
        this.passwrod = passwrod;
    }

    // if use geeter then wen must use a setter otherwise we get an error like => TypeError: Cannot set property passwrod of #<User> which has only a getter
    //  so we have to use a setter also 
    get passwrod(){
        // return this.passwrod.toUpperCase();
        // return this._passwrod.toUpperCase();  //we also hae to use a new property in getter


        return `${this._passwrod} hamza`
    }

    set passwrod(value){
        // this.passwrod = value   // RangeError: Maximum call stack size exceeded because th e constructor and both getter and setter are geting and setting the values at the same time 

        //  to fix this we have to use a new property for that
        this._passwrod = value    // never use return setter 
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email   = value      // never use return setter 
    }




}



const hamza = new User("hamza@google.com", "abc")

console.log(hamza.email);
console.log(hamza.passwrod);
