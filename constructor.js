// function Phone(name, price, year) {
//   this.name = name;
//   this.price = price;
//   this.year = year;
//   this.offer = () => {
//     this.price = price - 100;
//   };
//   this.country = "Egypt";
// }
// let p1 = new Phone("note 8", 2000, 2019);
// let p2 = Phone("note 8", 2000, 2019);

// console.log(p1.constructor);
// console.log(p1.country);
// console.log(p1);
// console.log(p1.price);
// p1.offer();
// console.log(p1.price);

// function People(fname, lname, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.fname = `The full name is ${this.fname} ${this.lname}`;
//   this.ageInfo = () => {
//     if (this.age >= 25) {
//       return "minor";
//     } else {
//       return "major";
//     }
//   };
// }

// let p1 = new People("islam", "sulaiman", 27);
// let p2 = new People("sara", "sulaiman", 24);

// console.log(p1.ageInfo());
// console.log(p2.fname);

// function User(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
//   this.newName = (newName) => {
//     if (this.age >= 21) {
//       this.name = newName;
//     } else {
//       return console.log("this user is minor");
//     }
//   };
// }

// let u1 = new User("islam mostafa", 27, "ma.eslam@yahoo.com");
// let u2 = new User("sara mostafa", 20, "ma.eslam@yahoo.com");

// // console.log(u2.name);
// // u2.newName("rahma");
// // console.log(u2.name);

// pets and humans example.

// function Owner(fname, lname, age, pet) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.pet = pet;
//   this.petName = function () {
//     if (this.age >= 20) {
//       return this.pet.type;
//     } else {
//       return `${this.fname} cant have a pet due to age restrictions.`;
//     }
//   };
// }

// let o1 = new Owner("islam", "sulaiamn", 27, "dog");
// Owner.prototype.go = function () {
//   let de = this;
//   return `hello ${de}`;
// };
// console.log(o1.go());

// console.log(Owner.prototype);

// function Pet(type, age) {
//   this.type = type;
//   this.age = age;
// }

// var p1 = new Pet("labrador", 2);
// var p2 = new Pet("german shepard", 5);
// var p3 = new Pet("cat", 9);

// let o1 = new Owner("islam", "sulaiman", 27, p1);
// let o2 = new Owner("sara", "mostafa", 24, p2);
// let o3 = new Owner("rahma", "abohashim", 19, p3);

// console.log(o1.petName());
// console.log(o2.petName());
// console.log(o3.petName());
