function sum(s1, s2) {
  if (typeof s1 !== "number" || typeof s2 !== "number") {
    throw new Error("arguments must be numbers");
  }

  return s1 + s2;
}

// function f1(txt) {
//   console.log(txt)
// }



function logWithDate(arg, date) {
  let toBeLogged = `${arg} - ${date}`;

  // console.log(toBeLogged);
  // let value = Math.round(10.3)

  // return toBeLogged + value;
  return toBeLogged;
}

function getRandomElements(nElements) {
  return Array(nElements)
    .fill()
    .map(() => Math.random());
}

function getEmployee(isAdmin = false) {
  const obj = {
    name: "Paul",
    surname: "Anka",
    salary: 53000,
  };

  if (isAdmin) {
    obj.isAdmin = true;
  }

  return obj;
}

class Product {
  constructor(name, price, category) {
    if (typeof price !== "number")
      throw new TypeError("price must be a number");
    if (price < 0) throw new TypeError("price must be positive");

    this.name = name;
    this.price = price;
    this.category = category;
  }

  updateCategory(newCategory) {
    if (typeof newCategory === "string") this.category = newCategory;
    else throw new TypeError("new category must be a string");
  }
}

class Square {
  constructor(size, x, y) {
    this.size = size;
    this.x = x;
    this.y = y;
  }

  getArea() {
    return this.size ** 2;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  setX(x) {
    if (typeof x === "number") this.x = x;
  }

  setY(y) {
    if (typeof y === "number") this.y = y;
  }
}
