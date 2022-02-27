function sanitizeATag(aTag) {
    // get the parts of the tag...
    const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);

    // parts[1] are the attributes of the opening <a> tag
    // parts[2] are what's between the <a> and </a> tags
    const attributes = parts[1]
        // then we split into individual attributes
        .split(/\s+/);

    return '<a ' + attributes
            // we only want class, id, and href attributes
            .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
            // joined by spaces
            .join(' ')
        // close the opening <a> tag
        + '>'
        // add the contents
        + parts[2]
        // and the closing tag
        + '</a>';
}

const html =
    `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
    `<A href='/foo' Class="foo">Foo</a>\n` +
    `<a href="/foo">Foo</a>\n` +
    `<a onclick="javascript:alert('foo!')" href="/foo">Foo</a>`;

const output = html.match(/<a .*?>(.*?)<\/a>/ig);

const output2 = html.replace(/<a .*?>(.*?)<\/a>/ig, function(m, g1, offset) {
    console.log(`<a> tag found at ${offset}. contents: ${g1}`);
});

console.log(output);
console.log(output2);

const output3 = html.replace(/<a .*?<\/a>/ig, function (m) {
    return sanitizeATag(m);
})

console.log(output3);

const output4 = html.replace(/<a .*?<\/a>/ig, sanitizeATag);
console.log(output4);