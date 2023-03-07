export {}

class Beverage {
    private name: string;
    private color: string;
    private price: number;
    private temperature: string;
  
    constructor(name: string, color: string, price: number, temperature: string = "cold") {
      this.name = name;
      this.color = color;
      this.price = price;
      this.temperature = temperature;
    }
  
    public getInfo(): string {
      return `This beverage is ${this.temperature} and ${this.color}.`;
    }
  
    public printPrice(): void {
      console.log(`Price: ${this.price} euro`);
    }
  }
  
  const cola = new Beverage("cola", "black", 3.5);
  
  console.log(cola.getInfo()); // This beverage is cold and black.
  console.log(cola["temperature"]); // undefined (property is private)
  cola.printPrice(); // Price: 3.5 euro