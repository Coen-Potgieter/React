import { useEffect, useState } from "react";

import { fetchMeals } from "../http.js";

export default function MealItems() {

    const [ meals, setMeals ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {

        async function getMeals() {
            try{
                const meals = await fetchMeals();
                setMeals(meals);

                console.log(meals);

            } catch(error) {
                setError(error.message);
            }
        }

        getMeals();
    }, []);

    return (
        <>
            {meals && <p> MEALS HAVE LAODED!!!</p>}
            {error && <p>{error}</p>}
        </>
    );
}
