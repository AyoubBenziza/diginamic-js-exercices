class Bike {
  #brand;
  #model;
  constructor(brand, model, weight) {
    this.#brand = brand;
    this.#model = model;
    this.weight = weight;
  }

  get brand() {
    return this.#brand;
  }

  set brand(new_brand) {
    this.#brand = new_brand;
  }

  get model() {
    return this.#model;
  }

  set model(new_model) {
    this.#model = new_model;
  }

  pedal() {
    console.log("Je pédale !");
  }
}

class Tandem extends Bike {
  static seat_number = 2;
  constructor(brand, model, weight) {
    super(brand, model, weight);
  }
  pedal() {
    console.log(`Nous sommes ${Tandem.seat_number} à pédaler`);
  }
}

const red = new Bike("GoSport", "Neon", 15);
console.log("Nom de modèle du bike Red avant setter", red.model);
red.model = "Flash";
console.log("Nom de modèle du bike Red après setter", red.model);
red.pedal();

const blue = new Tandem("Decathlon", "Love", 25);
blue.pedal();
