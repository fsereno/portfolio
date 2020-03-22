var array = [];
var i = 0;

while(i < 2000000){
    array.push(Math.random(5));
    i++;
}

var calc = (a) => a * 1000;
var getTime = () => new Date().getTime();
var timeDifference = (start, end) => end - start; 

var mapExample = () => {
    var start = getTime();
    array.map((item) => item = calc(item));
    var end = getTime();
    console.log(`Map example took: ${timeDifference(start,end)}`);
}

var forwardsExample = () => {
    var start = getTime();
    for(let i = 0; i < array.length; i++){
        array[i] = calc(array[i]);
    }
    var end = getTime();
    console.log(`Forward for loop example took: ${timeDifference(start,end)}`);
}

var backwardsExample = () => {
    var start = getTime();
    for(let i = array.length; i--;){
        array[i] = calc(array[i]);
    }
    var end = getTime();
    console.log(`Backward for loop example took: ${timeDifference(start,end)}`);
}

mapExample();
forwardsExample();
backwardsExample();