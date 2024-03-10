let initial = 0;

function createCounter() {
    let number = initial;
    initial++;
    console.log(arguments);

    function counter() {
        return number++;
    }

    return counter;
}

const firstCounter = createCounter()();
console.log(firstCounter);

const secondCounter = createCounter()();
console.log(secondCounter);

const thirdCounter = createCounter(10);
console.log(thirdCounter.name);
console.log(thirdCounter());
console.log(thirdCounter());