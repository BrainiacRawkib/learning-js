const input = "Regex pros know the difference between\n" +
    "<i>greedy</i> and <i>lazy</i> matching <i>ending</i>";

const out = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');

console.log(out);

const out2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(out2);