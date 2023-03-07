export{}
class Beverage {
  name: string;
  color: string;
  price: number;
  temperature: string;

  constructor(name: string, color: string, price: number, temperature: string = "cold") {
      this.name = name;
      this.color = color;
      this.price = price;
      this.temperature = temperature;
  }

  getInfo() {
      return `This beverage is ${this.temperature} and ${this.color}.`;
      }
}
export default Beverage;
const cola = new Beverage("cola", "black", 2.0);

console.log(cola.getInfo()); // This beverage is cold and black.
console.log(cola.temperature); // cold
