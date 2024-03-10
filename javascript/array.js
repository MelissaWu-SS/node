const arr = ["I", "study", "JavaScript"];

const element = arr.splice(1, 1, 'master', 'love');

console.log(element);
console.log(arr);

let numbers = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
numbers.splice(-1, 0, 3, 4);
console.log(numbers);
console.log(numbers.at(-1));

const text = ["t", "e", "s", "t"];
const changedText = text.slice(1, 3);
console.log(text);
console.log(changedText);

let arr1 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log(arr1.concat(Object.entries(arrayLike)));

const count = function(){}
const arr2 = [1, 2, true, {name: 'book'}, count];

console.log(arr2.indexOf(1));
console.log(arr2.indexOf(count));
console.log(arr2.includes(count));

const arr3 = ["Bilbo", "Gandalf", "Nazgul"];
let lengths = arr3.map(item => item.length);
console.log(arr3);
console.log(lengths);


const arr4 = [ 1, 2, 15 ];

// the method reorders the content of arr
arr4.sort();
console.log(arr4);

arr4.sort((a, b) => {
    return b - a;
});
console.log(arr4);