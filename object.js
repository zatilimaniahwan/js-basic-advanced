// Object in js is a collection of properties
/** Data property in objects
 * value (data property) - retrieved by a get access of the property
 * configurable -
 * enumerable
 * writable
 * get
 * set
 * **/

// Example coding accessing object for value (data property)
const car = {
  name: "BMW",
  color: "Black",
  price: 100000,
  isAvailable: true,
};
// console.log(car.name); // accessing data property

// Object constructor
const obj = new Object();
//obj.name = "BMW";

// assign the object using Obj.assign()
Object.assign(obj, {
  color: "Yellow",
});

// add custom property using Object.defineProperty()
Object.defineProperty(obj, "isAvailable", {
  value: true,
  writable: false, // descriptor controls whether thevalue of a property can be modified
  enumerable: false, // descriptor controls whether the property is visible or not
  configurable: false, // descriptor controls whether the property can be deleted
});

/**
 * Object.defineProperties used to define multiple properties for the object
 * Benefit: The object can be redefined
 * */

Object.defineProperties(obj, {
  property1: {
    value: {
      name: "kancil",
    },
  },
  property2: {
    value: {
      name: "wrv",
    },
  },
});

console.log("kancil", obj.property1);
console.log("wrv", obj.property2);

// Object.entries is a method to return an array of key-value pairs
Object.entries(obj.property1).map((entry) => {
  console.log("entry", entry);
});

// Object.freeze() is used to make an object immutable
Object.freeze(obj.property1);
obj.property1.name = "honda";

console.log("should freeze", obj.property1.name);

// Object.fromEntries() is used to convert an array of key-value pairs into an object
const convertedEnntries = Object.fromEntries(Object.entries(obj.property2));
console.log("convertedEnntries", convertedEnntries);

/**
 * Object.getOwnPropertyDescriptor() is used to retrieve the descriptor of a property.
 * Usage: To check the descriptor of a property when debugging or checking the condition
 */
const descriptor = Object.getOwnPropertyDescriptor(obj, "property1");
console.log("descriptor", descriptor);

/**
 * Object.getOwnPropertyDescriptors() is used to retrieve the descriptor of all properties.
 * Usage: To check the descriptor of a property when debugging or checking the condition
 */
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log("descriptors", descriptors);

/**
 * Object.getOwnPropertyNames() is used to retrieve the names of all properties
 * Usage: To get the keys in the object
 */
const names = Object.getOwnPropertyNames(obj);
console.log("names", names);

/**
 * Object.getOwnPropertySymbols() is used to retrieve the symbols of all properties
 * Usage: To hide the property when accessing the object
 */

// creating a unique symbol
const uniqueId = Symbol("uniqueId");
const password = Symbol("password");

// creating an object with symbol
const objWithSymbol = Object.defineProperty(obj, "symbol", {
  value: {
    [uniqueId]: 12345,
    [password]: "rahsia",
  },
});
// Get property with symbol
const symbols = Object.getOwnPropertySymbols(objWithSymbol.symbol);
console.log("symbols", symbols);

// Get the value of symbol
Object.getOwnPropertySymbols(objWithSymbol.symbol).map((symbol) => {
  console.log(`${symbol.toString()}: ${objWithSymbol.symbol[symbol]}`);
});

// Object.getPrototypeOf() is used to retrieve the prototype of an object
const prototype = {
  name: "kancil",
};
const prototypeObj = Object.create(prototype);
console.log(Object.getPrototypeOf(prototypeObj) === prototype);

// Object.groupBy is used to group an array of objects by a specified property
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 800 },
  { id: 3, name: "Table", category: "Furniture", price: 300 },
  { id: 4, name: "Chair", category: "Furniture", price: 150 },
  { id: 5, name: "Notebook", category: "Stationery", price: 5 },
];

const groupedProducts = Object.groupBy(products, (product) => product.category);
console.log("groupedProducts", groupedProducts["Electronics"]);

// Object.hasOwn() is a replacement for Object.prototype.hasOwnProperty()
const hasOwn = Object.hasOwn(obj, "property3");
console.log("hasOwn", hasOwn);
