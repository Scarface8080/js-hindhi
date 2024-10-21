//  function based get & Set


function User(email, passwrod){
    this._email = email;
    this._password = passwrod;
    
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },

        set: function(value){
            this._email = value 
        }
    })
     
    Object.defineProperty(this, 'passwrod', {
        get: function(){
            return this._passwrod.toUpperCase();
        },

        set: function(value){
            this._passwrod = value 
        }
    })
}

const chai = new User('chai@chai.com', 'chai')

console.log(chai.email);
