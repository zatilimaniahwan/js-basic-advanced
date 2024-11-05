/**
 * Q1. Write a code to create a new object named car
 * and display the following properties in the console
 * The car object should have the following properties:
 * name
 * color
 * price
 * brand
 */
const car = {
  name: "WRV",
  color: "White",
  price: 100000,
  brand: "Honda",
};
console.log("Q1:", car);

/**
 * Q2. Based on the above car object,
 * write a code to add a new property with the name "type"
 */
Object.assign(car, { type: "SUV" });
console.log("Q2:", car);

/**
 * Q3. Based on the above car object,
 * create a prototype object named car2
 */
const obj2 = Object.create(car);
console.log("Q3:", obj2.name);

/**
 * Q4. Create a new object that contains property named
 * import and local car
 */
const carObj = new Object({
  local: {
    value: {
      name: "kancil",
      brand: "perodua",
    },
  },
  import: {
    value: {
      name: "WRV",
      brand: "honda",
    },
  },
});
console.log("Q4:", carObj);

/**
 * Q5: Modified the property of the local
 */

// modified local cannot be deleted, writable and hidden in the loop

// create new object with the same property as carObj
const copyCarObj = carObj;

Object.defineProperty(copyCarObj, "local", {
  configurable: false,
  writable: false,
  enumerable: false,
});

// test delete
delete copyCarObj.local;

// test modified the value
copyCarObj.local = {
  name: "saga",
  brand: "proton",
};

// test enumarable
Object.keys(copyCarObj).map((key) => {
  console.log("Q5:", key);
});

/**
 * Q6: Check the property existed in the object
 */
const iseExisted = Object.hasOwn(carObj, "local");
console.log("Q6:", iseExisted);

/**
 * Q7: Seal the object
 */
const sealedObj = carObj;
Object.seal(sealedObj);
console.log("Q7:", Object.isSealed(sealedObj));

/**
 * Q8: Freeze the object
 */
const frozenObj = carObj;
Object.freeze(frozenObj);
console.log("Q8:", Object.isFrozen(frozenObj));

/**
 * Q9: Prevent extensible of the object
 */
const extensibleObj = carObj;
Object.preventExtensions(extensibleObj);
console.log("Q9:", Object.isExtensible(extensibleObj));

/**
 * Q10: Display a descriptor of object
 */
console.log("Q10:", Object.getOwnPropertyDescriptor(carObj, "local"));

/**
 * Q11: Display all the descriptor of an object
 */
console.log("Q11:", Object.getOwnPropertyDescriptors(carObj));
