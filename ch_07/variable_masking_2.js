{
// outer block
    let x = { color: "blue" };
    let y = x; // y and x refer to the same object
    let z = 3;
    {
// inner block
        let x = 5; // outer x now masked
        console.log(x); // logs 5
        console.log(y.color); // logs "blue"; object pointed to by
// y (and x in the outer scope) is
// still in scope
        y.color = "red";
        console.log(z); // logs 3; z has not been masked
    }
    console.log(x.color); // logs "red"; object modified in
                          // inner scope
    console.log(y.color); // logs "red"; x and y point to the
// same object
    console.log(z); // logs 3
}