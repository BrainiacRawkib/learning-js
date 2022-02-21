const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse())

const arr2 = [5, 3, 2, 4, 1];
console.log(arr2.sort());

const arrobj = [{name: 'Suzanne'}, {name: 'Jim'}, {name: 'Trevor'}, {name: 'Amanda'}];
arrobj.sort((a, b) => a.name > b.name);
console.log(arrobj);

arrobj.sort((a, b) => a.name[1] < b.name[1]);
console.log(arrobj);