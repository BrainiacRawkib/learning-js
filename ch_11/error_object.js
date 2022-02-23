function validateEmail(email) {
    return email.match(/@/) ? email : new Error(`invalid email: ${email}`);
}

const email = 'bob@doe.com';

const validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error){
    console.log(`Error: ${validatedEmail.message}`);
} else {
    console.log(`Valid email: ${validatedEmail}`);
}