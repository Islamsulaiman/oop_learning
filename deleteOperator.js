// delete operator can delete properties of the object, that can help editing any object.

let obj = { name: "islam" };
// console.log(obj.name);
// // delete obj.name;
// console.log(obj.name); // in this line it will print undefined because the property is deleted.

// Object.freeze(obj);
console.log(delete obj.name);
