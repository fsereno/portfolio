let convertIntToDay = (dayNumber = 0) => {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    if(days.length < dayNumber) {
        throw new Error("Must be in range of days");
    }
    return days[dayNumber];
}

let day = convertIntToDay(2);
console.log(day);