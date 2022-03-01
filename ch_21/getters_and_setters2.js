const USER_EMAIL = Symbol();
class User {
    set email(value){
        if (!/@/.test(value)) throw new Error(`Invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    get email(){
        return this[USER_EMAIL];
    }
}

const u = new User();

u.email = 'doe@jon.com'
console.log(`User email: ${u.email}`);

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get perimeter(){
        return this.width*2 + this.height*2;
    }
}

const r = new Rectangle(2, 3);

console.log(r.perimeter);