function unique(arr) {
    /* your code */
    console.log(arguments);
    const set = new Set(arr);
    return Array.from(set);
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));