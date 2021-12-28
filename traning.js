// let mainobj = new Object();
// mainobj.firstname = "islam";
// mainobj.lastName = "sulaiman";
// mainobj.fullName = () =>
//   `the full name is ${mainobj.firstname} ${mainobj.lastName}`;
// console.log(mainobj.fullName());

let objMain = {
  name: "islam",
  age: 27,
  bio: () => `Iam ${objMain.name} and Iam ${this.age}`,
  debugger
};
console.log(objMain.bio());
