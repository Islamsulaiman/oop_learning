// in this file iam going to learn about controlling edits on objects data and property

let obj1 = {
  c: 1,
  a: 2,
};

//Create a prop to the object using object descriptors.
Object.defineProperty(obj1, "b", {
  // 1st prop
  writable: true,
  enumerable: true,
  configurable: true,
  value: 3,
});

Object.defineProperty(obj1, "d", {
  //2nd prop
  writable: false, // this will make the prop un-editable
  enumerable: true,
  configurable: true,
  value: 4,
});

obj1.d = 5; // will not execute.

Object.defineProperty(obj1, "e", {
  // 3rd prop
  writable: true,
  enumerable: false, // this will make the prop dont appear in any loop
  configurable: true,
  value: 5,
});

for (let obj in obj1) {
  console.log(`${obj} : ${obj1[obj]}`); // prop "e" will not appear in this loop.
}

Object.defineProperty(obj1, "f", {
  // 4th prop
  writable: true,
  enumerable: true,
  configurable: false, // this will not allow deleting or changing the descriptors of this prop.
  value: 5,
});

console.log(obj1);

delete obj1.f; // this will never delete the f prop, because of it's descriptor setting.

// Object.defineProperty(obj1, "f", {
//   enumerable: false, // if this work, it will deny any loop of accessing f prop, but it will never work because of it prevues setting, it will cause a typeError.
// });

for (let obj in obj1) {
  console.log(`${obj} : ${obj1[obj]}`); // this will access the f prop
}

// to get the property descriptors for a specified prop.
console.log(
  "Props descriptor for obj f : ",
  Object.getOwnPropertyDescriptor(obj1, "f")
);

// Get all the keys in any object, even the ones that i cant loop over - with enumerable = false-
let allKeys = Object.getOwnPropertyNames(obj1);
console.log(
  "This is All the keys, even the ones with enumerable = false : ",
  allKeys
);

// to get all the key's inside the object that I cal loop over - with enumerable = true-
let keys = Object.keys(obj1);
console.log("This is the enumerable object Keys : ", keys);

// define multiple props in one step with their prop descriptors:
Object.defineProperties(obj1, {
  j: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 6,
  },
  z: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 7,
  },
});

console.log("this is the accessible object :  ", obj1);
