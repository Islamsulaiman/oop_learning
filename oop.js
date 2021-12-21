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

// console.log(manObj.discount);
// console.log(manObj.hasDescount());

//    B. Create first copy of the main object

let secondObj = Object.create(manObj);
secondObj.discount = false;

// console.log(secondObj.discount);
// console.log(secondObj.hasDescount());

//  4) ByCreate objects with Object.assign(target, src1,src2,....) syntax
//    A. it dose two things:
// A.1 copy properties and methods from src obj to the target obj
let src1 = {
  prop1: "prop1",
  prop2: "prop2",
  prop3: "prop3",
  method1: () => {
    return "method1";
  },
};

let src2 = {
  prop3: "prop3",
  prop4: "prop4",
  prop5: "prop5",
  method2: () => {
    return "method2";
  },
};

let target = {
  prop6: "prop6",
};

Object.assign(target, src1, src2);
console.log(target);

// A.2 Can create new obj and copy props and methods from src by passing an empty obj as a target.

let target2 = Object.assign({}, target, { prop7: "prop7" }); // we can add new obj as a src object as well.
console.log(target2);
