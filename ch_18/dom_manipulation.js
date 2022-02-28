const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent);
console.log(para1.innerHTML);
para1.textContent = 'Modified HTML file';  // look for change in browser
para1.innerHTML = '<i>Modified</i> HTML file';  // look for change in browser