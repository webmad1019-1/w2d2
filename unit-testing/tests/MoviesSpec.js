describe("sum()", () => {
  //remember you can use xit to cancel this test or fit to focus only on this test
  it("adding two numbers must return their addition", () => {
    expect(sum(5, 10)).toBe(15);
  });

  it("adding two numbers (including negatives) must return their addition", () => {
    expect(sum(5, -10)).toBe(-5);
  });

  it("adding two numbers (including decimals) must return their addition", () => {
    expect(sum(5.8, 10.2)).toBe(16);
  });

  it("passing one argument not being a number must be detected", () => {
    expect(() => {
      sum("5", 10);
    }).toThrow();
  });

  it("passing two arguments not being a number must be detected", () => {
    expect(() => {
      sum("5", "10");
    }).toThrow();
  });
});

describe("logWithDate()", () => {
  xit("console.log must be called by logWithDate", () => {
    spyOn(Math, "round");
    logWithDate("testing");

    console.log(Math.round.calls.argsFor(0)[0]);

    expect(Math.round.calls.argsFor(0)[0]).toBe(10.3)
    expect(Math.round).toHaveBeenCalled();
  });

  it("must return the passed string and date", () => {
    let currentDate = "Mon Oct 28 2019 20:48:45";
    expect(logWithDate("testing", currentDate)).toBe(
      `testing - ${currentDate}`,
    );
  });
});

describe("getRandomElements()", () => {
  it("must return 5 random elements when requesting 5 elements as argument", () => {
    expect(getRandomElements(5).length).toBe(5);
  });

  it("must return 10 random elements lower than 1", () => {
    let randomElements = getRandomElements(10);

    randomElements.forEach(element => {
      expect(element).toBeLessThan(1);
    });
  });
});

describe("getEmployee()", () => {
  it("must return an employee", () => {
    expect(getEmployee()).toEqual({
      name: "Paul",
      surname: "Anka",
      salary: 53000,
    });
  });

  it("must return a fully qualified employee with all their properties", () => {
    expect(getEmployee().name).toBeDefined();
    expect(getEmployee().surname).toBeDefined();
    expect(getEmployee().salary).toBeDefined();
  });

  it("must return an administrator employee", () => {
    expect(getEmployee(true).isAdmin).toBeDefined();
  });
});

describe("Product class", () => {
  it("must return a product when instantiated", () => {
    let product1 = new Product("roomba", 400, "home products");

    expect(product1.name).toBe("roomba");
    expect(product1.price).toBe(400);
    expect(product1.category).toBe("home products");
  });

  it("must throw an error when passing a wrong price", () => {
    expect(() => {
      new Product("roomba", -400, "home products");
    }).toThrow();
  });

  it("must throw an error when passing a price that is not a number", () => {
    expect(() => {
      new Product("roomba", "400", "home products");
    }).toThrow();
  });

  it("must change the category of an existing product to the next category", () => {
    let p1 = new Product("roomba", 300, "home products");

    const newCategory = "hardware products";
    p1.updateCategory(newCategory);

    expect(p1.category).toBe(newCategory);
  });

  it("must throw an error if the new passed category is not a string", () => {
    let p1 = new Product("roomba", 300, "home products");

    const newCategory = 200;
    expect(() => p1.updateCategory(newCategory)).toThrow();
  });
});

describe("Square class", () => {
  it("must return the right area", () => {
    let square1 = new Square(20, 100, 200);

    expect(square1.getArea()).toBe(400);
  });

  it("must return the right coordinates", () => {
    let square1 = new Square(20, 100, 200);

    expect(square1.getX()).toBe(100);
    expect(square1.getY()).toBe(200);
  });

  it("must return the right X coordinate after moving the square", () => {
    let square1 = new Square(20, 100, 200);

    square1.setX(500);

    expect(square1.getX()).toBe(500);
  });

  it("must return the right Y coordinate after moving the square", () => {
    let square1 = new Square(20, 100, 200);

    square1.setY(700);

    expect(square1.getY()).toBe(700);
  });

  it("must return the right X and Y coordinates in multiple squares", () => {
    let squares = Array(100)
      .fill()
      .map((x, idx) => new Square(20, 100, idx));

    squares.forEach(square => expect(square.getX()).toBe(100));
    squares.forEach((square, idx) => expect(square.getY()).toBe(idx));
  });
});
