class User {
  #name;
  #role;
  constructor(name, role) {
    this.#name = name;
    this.#role = role;
  }

  get name() {
    return this.#name;
  }

  set name(new_name) {
    this.#name = new_name;
  }

  get role() {
    return this.#role;
  }

  set role(new_role) {
    this.#role = new_role;
  }
}

const bob = new User("Bob", "plombier");
console.log("Nom avant le setter", bob.name);
bob.name = "Toto";
console.log("Nom après le setter", bob.name);

/**
 * Class Product
 * name : propriété privée accessible de l'extérieur de la classe que par un getter ou un setter
 * price : propriété privée accessible de l'extérieur de la classe que par un getter ou un setter
 */
class Product {
  static brand = "Diginamic";

  #name;
  #price;

  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }

  get name() {
    return this.#name;
  }

  set name(new_name) {
    this.#name = new_name;
  }

  get price() {
    if (bob.role === "plombier") {
      return this.#price * 0.9;
    }
    return this.#price;
  }

  set price(new_price) {
    this.#price = new_price;
  }
}

const bike = new Product("bike", 1000);
console.log("prix de bike: ", bike.price);
console.log("nom de bike: ", bike.name);

console.log(`brand: `, Product.brand);
