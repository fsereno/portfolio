// Lets setup an example to loop against
let array = [];
let i = 0;

while(i < 2000000){
    array.push(Math.random(5));
    i++;
}

let calc = (a) => a * 1000;
let getTime = () => new Date().getTime();
let timeDifference = (start, end) => end - start;

// Now lets run the below looping methods to see which is more performant.
let mapExample = () => {
    let start = getTime();
    array.map((item) => item = calc(item));
    let end = getTime();
    console.log(`Map example took: ${timeDifference(start,end)}`);
}

let forEachExample = () => {
    let start = getTime();
    array.forEach((item) => item = calc(item));
    let end = getTime();
    console.log(`ForEach example took: ${timeDifference(start,end)}`);
}

let forwardsForExample = () => {
    let start = getTime();
    for(let i = 0; i < array.length; i++){
        array[i] = calc(array[i]);
    }
    let end = getTime();
    console.log(`Forward for loop example took: ${timeDifference(start,end)}`);
}

let forwardsForCachingExample = () => {
    let start = getTime();
    let length = array.length;
    let i;
    for(i = 0; i < length; i++){
        array[i] = calc(array[i]);
    }
    let end = getTime();
    console.log(`Forward for loop, w/ cached length example took: ${timeDifference(start,end)}`);
}

let backwardsForExample = () => {
    let start = getTime();
    for(let i = array.length; i--;){
        array[i] = calc(array[i]);
    }
    let end = getTime();
    console.log(`Backward for loop example took: ${timeDifference(start,end)}`);
}

let backwardsForCachingExample = () => {
    let start = getTime();
    let length = array.length;
    let i = length;
    for(i; i--;){
        array[i] = calc(array[i]);
    }
    let end = getTime();
    console.log(`Backward for loop example took: ${timeDifference(start,end)}`);
}

let whileExample = () => {
    let start = getTime();
    let i = 0;
    let length = array.length;
    while(i < length) {
        array[i] = calc(array[i]);
        i++;
    }
    let end = getTime();
    console.log(`While loop example took: ${timeDifference(start,end)}`);
}

mapExample();
forEachExample();
forwardsForExample();
forwardsForCachingExample();
backwardsForExample();
backwardsForCachingExample();
whileExample();