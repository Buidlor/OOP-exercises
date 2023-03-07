# OOP exercises 

## Performed with TypeScrypt vanilla. Using Vite

OOP - Object Orientated Programming - focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. This approach to programming is well-suited for programs that are large, complex and actively updated or maintained.

### EX1:
    TODO: Create a class beverage.<br>
    TODO: Create the properties color (string), price (float) and temperature (string) and also foresee a construct.<br>
    TODO: Have a default value "cold" in the construct for temperature.<br>
    Remember for now we will use properties and methods that can be accessed from everywhere.<br>
    TODO: Make a getInfo function which returns "This beverage is <temperature> and <color>."<br>
    TODO: Instantiate an object which represents cola. Make sure that the color is set to black, the price equals 2 euro and the temperature to cold automatically<br>
    print the getInfo on the screen.<br>
    TODO: Print the temperature on the screen.<br>
    USE TYPEHINTING EVERYWHERE!<br>

### EX2:

    TODO: Make class beer that extends from Beverage. <br>
    TODO: Create the properties name (string) and alcoholPercentage (float).<br>
    TODO: Foresee a construct that's allows us to use all the properties from beverage and that sets the values for name and alcoholpercentage.<br>
    Remember for now we will use properties and methods that can be accessed from everywhere.<br>
    TODO: Make a getAlcoholPercentage function which returns the alocoholPercentage.<br>
    TODO: Instantiate an object which represents Duvel. Make sure that the color is set to blond, the price equals 3.5 euro and the temperature to cold automatically.<br>
    TODO: Also the name equal to Duvel and the alcohol percentage to 8,5%<br>
    TODO: Print the getAlcoholPercentage 2 times on the screen in two different ways, print the color on the screen and the getInfo.<br>
    Make sure that each print is on a different line.<br>
    Try to get this error on the screen= Fatal error: Uncaught Error: Call to undefined method Beverage::getAlcoholPercentage() in /var/www/becode/workshop/exercise2.php on line 64<br>
    USE TYPEHINTING EVERYWHERE!<br>

### EX3

    TODO: Copy the code of exercise 2 to here and delete everything related to cola. <br>
    TODO: Make all properties private. <br>
    TODO: Make all the other prints work without error.     <br>
    TODO: After fixing the errors. Change the color of Duvel to light instead of blond and also print this new color on the screen after all the other things that were already printed (to be sure that the color has changed). <br>
    TODO: Create a new private method in the Beer class called beerInfo which returns "Hi i'm Duvel and have an alcochol percentage of 8.5 and I have a light color." <br>
    Make sure that you use the variables and not just this text line. <br>
    TODO: Print this method on the screen on a new line. <br>
    USE TYPEHINTING EVERYWHERE! <br>

### EX4

    Copy the code of exercise 3 to here and delete everything related to cola. <br>
    TODO: Make all properties protected. <br>
    TODO: Make all the other prints work without error without changing the beverage class. <br>
    TODO: Don't call getters in de child class. <br>
    USE TYPEHINTING EVERYWHERE! <br>

### EX5

    Copy the class of exercise 1. <br>
    TODO: Change the properties to private. <br>
    TODO: Fix the errors without using getter and setter functions.<br>
    TODO: Change the price to 3.5 euro and print it also on the screen on a new line. <br>

    