const User = {
    _email: 'hamza@google.com',
    _password: 'abc',             // _ => underscore is used t odefine a private property



    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value 
    }

}

// factory function 


const tea = Object.create(User)
console.log(tea.email);
