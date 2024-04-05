//----------------------------- Class ---------------------------------//

// Classe Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} mange`);
  }
}

// Classe Chien hérité de la classe Animal
class Dog extends Animal {
  constructor(name, job) {
    super(name);
    this.job = job;
  }

  woof() {
    console.log(`${this.name} dit: Woof, je suis un ${this.job}`);
  }
}

class AllergicDog extends Dog {
  constructor(name, job, allergy) {
    super(name, job);
    this.allergy = allergy;
  }

  eat() {
    console.log(`${this.name} mange mais pas de ${this.allergy}`);
  }
}

// Instances de classes
const doggy = new Dog("Doggy", "chien de garde");
const rufus = new Dog("Rufus", "chien de berger");
const nash = new AllergicDog("Nash", "chien de maison", "lait");

// Appel de méthodes d'une instance de classe
doggy.woof();
rufus.eat();
nash.eat();

console.log("Doggy", doggy);

// Classe Utilisateur
class User {
  // Propriété privée avec # devant
  #name;
  #role;
  constructor(name, role) {
    this.#name = name;
    this.#role = role;
  }

  // Getter: méthode pour récupérer une propriété privée
  get name() {
    return this.#name;
  }

  // Setter: méthode pour configurer une propriété privée
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
  // Propriété statique, accessible en appelant par la classe
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
    // Selon notre condition, on effectue une ristourne sur le prix
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
