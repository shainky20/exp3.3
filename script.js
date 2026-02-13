class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, roll) {
        super(name, age);
        this.roll = roll;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

function showDetails() {
    let s = new Student("Girija", 19, 101);
    let t = new Teacher("Sharma", 40, "Math");

    document.getElementById("output").innerHTML =
        `Student: ${s.name}, Age: ${s.age}, Roll: ${s.roll}<br>
         Teacher: ${t.name}, Age: ${t.age}, Subject: ${t.subject}`;
}
