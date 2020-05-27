function sayHello(person: string): string {
    return "Hello, " + person;
}

var user = "Jordan Ivy ";

document.getElementById("para").innerHTML = sayHello(user);

class Person {
    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNumber: string;
    private state: string;
    private zipCode: number;
    private occupation: string;
    private company: string;
    private hourlyWage: number;
    private hours: number;
    private certifications: string[]=[];

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, state: string, zipCode: number, occupation?: string, company?: string, hourlyWage?: number, hours?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;

    }

    // Accessors & mutators 
    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number) {
        this.age = age;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    getState(): string {
        return this.state;
    }

    setState(state: string) {
        this.state = state;
    }

    getZipCode(): number {
        return this.zipCode;
    }

    setZipCode(zipCode: number) {
        this.zipCode = zipCode;
    }

    getOccupation(): string {
        return this.occupation;
    }

    setOccupation(occupation: string) {
        this.occupation = occupation;
    }

    getCompany(): string {
        return this.company;
    }

    setCompany(company: string) {
        this.company = company;
    }

    getHourlyWage(): number {
        return this.hourlyWage;
    }

    setHourlyWage(hourlyWage: number) {
        this.hourlyWage = hourlyWage;
    }

    getHours(): number {
        return this.hours;
    }

    setHours(hours: number) {
        this.hours = hours;
    }

    
    
    getFullName(): string {
        return this.getFirstName() + " " + this.getLastName();
    }


    personDetails(): string {
        if ((this.getOccupation() === "Student") || (this.getOccupation() === "student")) {
            return this.getFirstName() + " " + this.getLastName() + " is a " 
            + this.getOccupation() + " currently."
        } else {
            return this.getFirstName() + " " + this.getLastName() + " works as a " + this.getOccupation() + " at " + this.getCompany() + ".";
        }
    }
    weeklyWage(hours?: number): string {
        if (hours) {
            this.hours = hours;
        } else {
            this.hours = 40;
        }
        return "Weekly wage is $" + this.hours * this.getHourlyWage() + ".";
    }

    addCerts(certifications: string[]){
        this.certifications.push(...certifications);
        for(var i = 0; i<certifications.length, i++;){
            console.log(certifications[i]);
        }
        return "Certifications: " + this.certifications.join(", ");
        }

}

let person1 = new Person("Jordan", "Ivy", 28, "000-000-0000", "NC", 28269, "Software Developer", "BofA",);

let person2 = new Person("Basilio", "Pahang", 27, "000-000-0000", "NC", 28262, "Personal Banker", "BofA");

let person3 = new Person("Jermey", "Manning", 25, "000-000-0000", "NC", 28213, "IT Specialist", "Wells Fargo", 53, 40);

let person$ = new Person("Jamese", "Pinkston",28, "000-000-000" , "Nc",28269,"Community Engagement Officer","Renissance West",20,40)

document.getElementById("person1").innerHTML = person1.personDetails();
document.getElementById("person2").innerHTML = person2.personDetails();
document.getElementById("person3").innerHTML = person3.personDetails();

document.getElementById("pay1").innerHTML = person1.weeklyWage();
document.getElementById("pay2").innerHTML = person2.weeklyWage(0);

document.getElementById("certs").innerHTML = person1.addCerts("Java")