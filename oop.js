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

console.log(userr.location.getLocation());
console.log(userr.getFullName());
