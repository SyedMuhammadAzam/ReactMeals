import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const DummyCoffee = [{
    id:'m1',
    Name:'Black Coffee', 
    description : 'It served without added sugar, milk, or flavorings' ,
    prize : 450 ,
    
}
,{
    id:'m2',
    Name:'Decaf', 
    description : 'Decaf coffee is brewed with these decaffeinated beans.' ,
    prize : 550
}
,
{
    id:'m3',
    Name:'Espresso', 
    description : 'A single espresso is a one-ounce shot' ,
    prize : 510
}
,
{
    id:'m4',
    Name:'Latte', 
    description : 'This classic drink is typically 1/3 espresso and 2/3 steamed milk, topped with a thin layer of foam' ,
    prize : 720
}
,{
    id:'m5',
    Name:'Cappuccino', 
    description : 'This espresso-based drink is similar to a latte, but the frothy top layer is thickers' ,
    prize : 390
}
,]

const AvailbleMeals = () => {

    const CoffeeList = DummyCoffee.map(coffee =><MealItem
        key={coffee.id}
        id={coffee.id}
        Name={coffee.Name}
        description={coffee.description}
        prize={coffee.prize}
    
      />
      
      )
    return(
        <section className={classes.meals}>
            <Card>
                {CoffeeList}
            </Card>
            
        </section>
    )
}
export default AvailbleMeals;