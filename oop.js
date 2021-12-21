// Defining objects
//  1) object literals

let literals = {
  firstName: "islam",
  lastName: "Sulaiman",
  age: "25",
  getFullName: () => {
    return `${literals.firstName} ${literals.lastName}`;
  },
  getAge: () => {
    return literals.age;
  },
};

console.log(literals.firstName);
console.log(literals.getFullName());
