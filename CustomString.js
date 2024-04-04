class CustomString extends String {
  split(char) {
    let array = super.split(char);
    return array.map((element) => (element += char));
  }
}

const word = "Hello World";
console.log("Avant modif", word.split("o"));

const modif = new CustomString("Hello World");
console.log("Après modif", modif.split("o"));
