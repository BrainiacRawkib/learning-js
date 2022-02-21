const x = 3;

function f() {
    console.log(x);
    // console.log(y); // ReferenceError: y is not defined
}

{
    //new scope
    const y = 5;
    console.log(f());
}