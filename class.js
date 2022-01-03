//  the Es6 syntax of creating classes and constructors.

// User class with some properties.
class User {
  static instances = 0; // static will create this function only for the constructor User
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    User.instances++;
  }
  fullName() {
    return `My full name is: ${this.fname} ${this.lname}`;
  }
  changeName(newFname) {
    this.fname = newFname;
    return this.fname;
  }
  static numOfInstances() {
    // static will create this function only for the constructor User
    return `This is the num of instances: ${User.instances}`;
  }
}

let u1 = new User("islam", "sulaiman", 26);
let u2 = new User("sara", "sulaiman", 26);
let u3 = new User("sara", "sulaiman", 26);
let u4 = new User("sara", "sulaiman", 26);
let u5 = new User("sara", "sulaiman", 26);
let u6 = new User("sara", "sulaiman", 26);

console.log(u1.fullName());
console.log(u1.changeName("sara"));
console.log(u1.fullName());
console.log(User.numOfInstances());

// inherit User to admin class
console.log("This is admin class");

class Admin extends User {
  // extend to inherit properties and methods from parent class
  constructor(fname, lname, age) {
    super(fname, lname, age); // to copy the assignment lines from parent class to not assign again.
  }
  admin() {
    return `This is the new admin: ${this.name}`;
  }
}
let a1 = new Admin("islam", "admin looma", 26);
console.log(a1.fullName());
console.log(Admin.numOfInstances()); //this will print the instances no. of the User -parent-
