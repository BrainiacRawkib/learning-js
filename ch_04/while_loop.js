let funds = 50;

while (funds > 1 && funds < 100){
    funds = funds + 2 // two steps forward

    funds = funds - 1; // one step backward

    console.log(funds);
}

// no newline
while (funds > 1 && funds < 100) funds = funds + 2;

// no newline, block with one statement
while (funds > 1 && funds < 100) {funds = funds + 2}
