let myMethod = (price = 0) => {
    if (typeof price !== "undefined") {
        price = price.toFixed(2);
    }
    return price;
}
myMethod();