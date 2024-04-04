// Objet Cercle
function Circle(name, radius) {
  this.name = name;
  this.radius = radius;
}

Circle.prototype.pi = 3.14;
Circle.prototype.area = function () {
  return this.pi * this.radius ** 2;
};

const smallCircle = new Circle("small circle", 10);
console.log(`Aire de smallCircle est: ${smallCircle.area()}`);

const bigCircle = new Circle("big circle", 100);
console.log(`Aire de bigCircle est: ${bigCircle.area()}`);
