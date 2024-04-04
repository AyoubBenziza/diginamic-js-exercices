class CustomString extends String {
  split(char) {
    const change = this.replaceAll(char, `${char},dxf`);
    return change.split(",dxf");
  }
}

const word = "Hello World";
console.log("Avant modif", word.split("o"));

const modif = new CustomString("Hello World");
console.log("Après modif", modif.split("o"));
