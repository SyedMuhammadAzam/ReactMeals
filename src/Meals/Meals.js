import { Fragment } from "react"

import MealsSummary from "./MealsSummary"
import AvailbleMeals from "./AvilableMeals"

const Meals = () => {
    return(
        <Fragment>
            <MealsSummary/>
            <AvailbleMeals/>
        </Fragment>
    )
}
export default Meals;