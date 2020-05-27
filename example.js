function sayHello(person) {
    return "Hello, " + person;
}
var user = "Jordan Ivy ";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, company, hourlyWage, hours) {
        this.certifications = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
    }
    // Accessors & mutators 
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Person.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Person.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Person.prototype.getCompany = function () {
        return this.company;
    };
    Person.prototype.setCompany = function (company) {
        this.company = company;
    };
    Person.prototype.getHourlyWage = function () {
        return this.hourlyWage;
    };
    Person.prototype.setHourlyWage = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    Person.prototype.getHours = function () {
        return this.hours;
    };
    Person.prototype.setHours = function (hours) {
        this.hours = hours;
    };
    Person.prototype.getFullName = function () {
        return this.getFirstName() + " " + this.getLastName();
    };
    Person.prototype.personDetails = function () {
        if ((this.getOccupation() === "Student") || (this.getOccupation() === "student")) {
            return this.getFirstName() + " " + this.getLastName() + " is a "
                + this.getOccupation() + " currently.";
        }
        else {
            return this.getFirstName() + " " + this.getLastName() + " works as a " + this.getOccupation() + " at " + this.getCompany() + ".";
        }
    };
    Person.prototype.weeklyWage = function (hours) {
        if (hours) {
            this.hours = hours;
        }
        else {
            this.hours = 40;
        }
        return "Weekly wage is $" + this.hours * this.getHourlyWage() + ".";
    };
    Person.prototype.addCerts = function (certifications) {
        var _a;
        (_a = this.certifications).push.apply(_a, certifications);
        for (var i = 0; i < certifications.length, i++;) {
            console.log(certifications[i]);
        }
        return "Certifications: " + this.certifications.join(", ");
    };
    return Person;
}());
var person1 = new Person("Jordan", "Ivy", 28, "000-000-0000", "NC", 28269, "Software Developer", "BofA");
var person2 = new Person("Basilio", "Pahang", 27, "000-000-0000", "NC", 28262, "Personal Banker", "BofA");
var person3 = new Person("Jermey", "Manning", 25, "000-000-0000", "NC", 28213, "IT Specialist", "Wells Fargo", 53, 40);
var person$ = new Person("Jamese", "Pinkston", 28, "000-000-000", "Nc", 28269, "Community Engagement Officer", "Renissance West", 20, 40);
document.getElementById("person1").innerHTML = person1.personDetails();
document.getElementById("person2").innerHTML = person2.personDetails();
document.getElementById("person3").innerHTML = person3.personDetails();
document.getElementById("pay1").innerHTML = person1.weeklyWage();
document.getElementById("pay2").innerHTML = person2.weeklyWage(0);
document.getElementById("certs").innerHTML = person1.addCerts("Java");
