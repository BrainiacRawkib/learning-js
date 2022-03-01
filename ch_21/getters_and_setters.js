const USER_EMAIL = Symbol();
class User {
    setEmail(value){
        if (!/@/.test(value)) throw new Error(`Invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    getEmail(){
        return this[USER_EMAIL];
    }
}

const u = new User();

u.setEmail('joe@don.com');
console.log(`User email: ${u.getEmail()}`);

const u2 = new User();

u2.email = 'doe@jon.com'
console.log(`User email: ${u2.getEmail()}`);