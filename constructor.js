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
