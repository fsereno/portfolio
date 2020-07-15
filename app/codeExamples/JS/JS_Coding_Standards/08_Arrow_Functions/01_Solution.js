function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the Person object
    }, 1000);
}

var person = new Person();