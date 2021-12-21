// Defining objects
//  1) object literals

let user = {
  firstName: "islam",
  lastName: "Sulaiman",
  age: "25",
  location: {
    egypt: "cairo",
    KSA: "khobar",
    mainLocation: () => {
      return `Your main city is ${user.location.egypt}`;
    },
  },
  getFullName: () => {
    return `${user.firstName} ${user.lastName}`;
  },
};

// console.log(user["firstName"]);
// console.log(user.getFullName());
// console.log(user.location.mainLocation());

// 2)Create objects with new Object() syntax

let userr = new Object();

userr.firstName = "Islam";
userr.LastName = "Sulaiman";
userr.age = 27;
userr.location = {
  egypt: "cairo",
  KSA: "khobar",
};
userr.location.getLocation = () => `the main city is ${userr.location.egypt}`;
userr.getFullName = () => {
  return `my full name is ${userr.firstName} ${user.lastName}`;
};

// console.log(userr.location.getLocation());
// console.log(userr.getFullName());

//  3) ByCreate objects with Object.create(baseObject) syntax

//    A. create the main object that we will make copy from later
let manObj = {
  discount: true,
  hasDescount: () => {
    return `${this.discount ? "You have a discount" : "Dont have a discount"}`; //this key word will be subbed with the object its in.
  },
};

console.log(manObj.discount);
console.log(manObj.hasDescount());

//    B. Create first copy of the main object

let secondObj = Object.create(manObj);
secondObj.discount = false;

console.log(secondObj.discount);
console.log(secondObj.hasDescount());
