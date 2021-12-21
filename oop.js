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

console.log(user.firstName);
console.log(user.getFullName());
console.log(user.location.mainLocation());
