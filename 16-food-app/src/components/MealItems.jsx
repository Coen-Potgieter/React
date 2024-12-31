import { useContext } from "react";
import { MealsContext } from "../store/meals-context.jsx";

import MealItem from "./MealItem.jsx";

export default function MealItems() {

    const { items, isLoading, error, addMealToCart } = useContext(MealsContext);

    return (
        <section id="meals">
            {items.length > 0 && items.map((meal) => (
                <MealItem key={meal.id} meal={meal} onOrder={addMealToCart} />
            ))}

            {error && <p>{error}</p>} 
            {isLoading && <p>currently loading</p>} 
        </section>
    );
}
