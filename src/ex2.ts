import Beverage from "./ex1"

class Beer extends Beverage {
    name: string;
    alcoholPercentage: number;
  
    constructor(name: string, color: string, price: number, alcoholPercentage: number, temperature: string = "cold") {
      super(color, price, temperature);
      this.name = name;
      this.alcoholPercentage = alcoholPercentage;
    }
  
    getAlcoholPercentage(): number {
      return this.alcoholPercentage;
    }
  }
  
  const duvel: Beer = new Beer("Duvel", "blond", 3.5, 8.5);
  
  console.log(duvel.getAlcoholPercentage()); // 8.5
  console.log(duvel["alcoholPercentage"]); // 8.5
  console.log(duvel.color); // blond
  console.log(duvel.getInfo()); // This beverage is cold and blond.