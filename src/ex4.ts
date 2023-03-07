export{}

class Beverage {
    protected color: string;
    protected price: number;
    protected temperature: string;
  
    constructor(color: string, price: number, temperature: string = "cold") {
      this.color = color;
      this.price = price;
      this.temperature = temperature;
    }
  
    public getInfo(): string {
      return `This beverage is ${this.temperature} and ${this.color}.`;
    }
  }
  
  class Beer extends Beverage {
    protected name: string;
    protected alcoholPercentage: number;
    private beerColor: string = "light";
  
    constructor(name: string, color: string, price: number, alcoholPercentage: number, temperature: string = "cold") {
      super(color, price, temperature);
      this.name = name;
      this.alcoholPercentage = alcoholPercentage;
    }
  
    private beerInfo(): string {
      return `Hi i'm ${this.name} and have an alcohol percentage of ${this.alcoholPercentage} and I have a ${this.beerColor} color.`;
    }
  
    public printBeerInfo(): void {
      console.log(this.beerInfo());
    }
  }
  
  const duvel: Beer = new Beer("Duvel", "blond", 3.5, 8.5);
  
  console.log(duvel.alcoholPercentage); // 8.5
  console.log(duvel["alcoholPercentage"]); // 8.5
  console.log(duvel.getInfo()); // This beverage is cold and blond.
  
  duvel.color = "light";
  console.log(duvel.getInfo()); // This beverage is cold and light.
  duvel.printBeerInfo(); // Hi i'm Duvel and have an alcohol percentage of 8.5 and I have a light color.
  