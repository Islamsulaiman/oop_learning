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
  value: 6,
});

console.log(obj1);

delete obj1.f; // this will never delete the f prop, because of it's descriptor setting.

// Object.defineProperty(obj1, "f", {
//   enumerable: false, // if this work, it will deny any loop of accessing f prop, but it will never work because of it prevues setting, it will cause a typeError.
// });

for (let obj in obj1) {
  console.log(`${obj} : ${obj1[obj]}`); // this will access the f prop
}

console.log(obj1);
