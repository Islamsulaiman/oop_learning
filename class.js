//  the Es6 syntax of creating classes and constructors.

// User class with some properties.
// class User {
//   static instances = 0; // static will create this function only for the constructor User
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     User.instances++;
//   }
//   fullName() {
//     return `My full name is: ${this.fname} ${this.lname}`;
//   }
//   changeName(newFname) {
//     this.fname = newFname;
//     return this.fname;
//   }
//   static numOfInstances() {
//     // static will create this function only for the constructor User
//     return `This is the num of instances: ${User.instances}`;
//   }
// }

// let u1 = new User("islam", "sulaiman", 26);
// let u2 = new User("sara", "sulaiman", 26);
// let u3 = new User("sara", "sulaiman", 26);
// let u4 = new User("sara", "sulaiman", 26);
// let u5 = new User("sara", "sulaiman", 26);
// let u6 = new User("sara", "sulaiman", 26);

// console.log(u1.fullName());
// console.log(u1.changeName("sara"));
// console.log(u1.fullName());
// console.log(User.numOfInstances());

// // inherit User to admin class
// console.log("This is admin class");

// class Admin extends User {
//   // extend to inherit properties and methods from parent class
//   constructor(fname, lname, age) {
//     super(fname, lname, age); // to copy the assignment lines from parent class to not assign again.
//   }
//   admin() {
//     return `This is the new admin: ${this.name}`;
//   }
// }
// let a1 = new Admin("islam", "admin looma", 26);
// console.log(a1.fullName());
// console.log(Admin.numOfInstances()); //this will print the instances no. of the User -parent-

// class Car {
//   static instances = 0;
//   constructor(brand, color, year) {
//     this.brand = brand;
//     this.color = color;
//     this.year = year;
//     Car.instances++;
//   }
//   hunk() {
//     return `Huunk Huunk`;
//   }
//   changeColor(newColor) {
//     this.color = newColor;
//     return 1;
//   }
//   who() {
//     return `this car is the ${this.brand}and it's from ${this.year}`;
//   }
//   static instancesNo = () => `${Car.instances}`;
// }

// let c1 = new Car("toyota", "red", 1999);
// let c2 = new Car("hynday", "black", 1998);
// let c3 = new Car("cheve", "blue", 2000);

// console.log(c1.color);
// console.log(c1.changeColor("yellow"));
// console.log(c1.color);
// console.log(Car.instancesNo());
// console.log(c1.who());

// class Motor extends Car {
//   constructor(brand, color, year) {
//     super(brand, color, year);
//   }
//   who() {
//     return `this Motor is the ${this.brand}and it's from ${this.year}`;
//   }
// }

// let m1 = new Motor("spider", "pink", 2020);

// console.log(m1.who());

// class Building {
//   constructor(name, floor, color) {
//     this.name = name;
//     this.floor = floor;
//     this.color = color;
//   }
//   fire() {
//     return `please evacuate the ${this.name} building`;
//   }
//   info() {
//     return `this is the ${this.name} building, containing ${this.floor} floors, and its ${this.color}!!`;
//   }
//   func() {
//     console.log(`this is the main class`);
//   }
//   changeName(newName) {
//     this.name = newName;
//   }
// }

// class School extends Building {
//   constructor(name, floor, color) {
//     super(name, floor, color);
//   }
//   func() {
//     super.func();
//     return `this is the school class`;
//   }
// }

// let school1 = new School("maadi", 4, "red");
// let school2 = new School("nasr city", 6, "blue");

// School.prototype.addedFunc = function () {
//   return `this is the added func, and the color of the school is ${this.color}`;
// };

// console.log(school1.func());
// console.log(school1.fire());
// console.log(school1.fire());
// console.log(school1.name);
// school1.changeName("KSA");
// console.log(school1.name);
// console.log(school1.addedFunc());

//we can define two classe with the same name
// class person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class person {
//   constructor(age) {
//     this.name = age;
//   }
// }

// console.log(person.constructor);
