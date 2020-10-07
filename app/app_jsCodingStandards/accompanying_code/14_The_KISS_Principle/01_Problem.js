let convertIntToDay = (dayNumber = 0) => {
    let result = "";
    if(dayNumber === 0) {
        result = "Monday";
    } else if(dayNumber === 1) {
        result = "Tuesday";
    } else if(dayNumber === 2) {
        result = "Wednesday";
    } else if(dayNumber === 3) {
        result = "Thursday";
    } else if(dayNumber === 4) {
        result = "Friday";
    } else if(dayNumber === 5) {
        result = "Saturday";
    } else if(dayNumber === 6) {
        result = "Sunday";
    }
    return result;
}

let day = convertIntToDay(2);
console.log(day);