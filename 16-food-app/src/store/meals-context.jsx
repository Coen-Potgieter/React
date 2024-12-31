
import { createContext, useReducer, useEffect } from "react"

import { fetchMeals } from "../http.js";

export const MealsContext = createContext({
    items: [],
    addMealToCart: () => {},
    removeMealFromCart: () => {},
    isLoading: false,
    error: null
});

function mealReducer(state, action) {

    if (action.type === "SET_LOADING_TRUE") {
        return { ...state, isLoading: true, };
    }

    if (action.type === "SET_LOADING_FALSE") {
        return { ...state, isLoading: false, };
    }

    if (action.type === "INITIALISE_CONTEXT") {
        const meals = action.payload.map((meal) => ({ ...meal, ordered: false}));
        return { ...state, items: meals };
    }
    if (action.type === "SET_ERROR") {
        return { ...state, error: action.payload };
    }

    if (action.type === "ADD_MEAL_TO_CART") {

        const newMeals = JSON.parse(JSON.stringify(state.items));
        const targetMealIdx = newMeals.findIndex((meal) => meal.id === action.payload);
        if (!newMeals[targetMealIdx].ordered) {
            newMeals[targetMealIdx].ordered = 1;
        } else {
            newMeals[targetMealIdx].ordered += 1;
        }
        return { ...state, items: newMeals};
    }
    if (action.type === "REMOVE_MEAL_FROM_CART") {

        const newMeals = JSON.parse(JSON.stringify(state.items));
        const targetMealIdx = newMeals.findIndex((meal) => meal.id === action.payload);
        if (newMeals[targetMealIdx].ordered === 1) {
            newMeals[targetMealIdx].ordered = false;
        } else {
            newMeals[targetMealIdx].ordered -= 1;
        }
        return { ...state, items: newMeals};
    }
}

export default function MealsContextProvider({ children }) {

    const [ mealsState, mealDispatch ] = useReducer(mealReducer, { 
        items: [],
        isLoading: false,
        error: null,
    });

    useEffect(() => {

        mealDispatch({ type: "SET_LOADING_TRUE", });

        async function getMeals() {
            try {
                const meals = await fetchMeals();
                mealDispatch({ type: "INITIALISE_CONTEXT", payload: meals});
            } catch(error) {
                mealDispatch({ type: "SET_ERROR", payload: error.message});
            }
        }
        getMeals();

        mealDispatch({ type: "SET_LOADING_FALSE", });
    }, [])


    function addMealToCart(id) {
        mealDispatch({
            type: "ADD_MEAL_TO_CART",
            payload: id,
        });
    }

    function removeMealFromCart(id) {
        mealDispatch({
            type: "REMOVE_MEAL_FROM_CART",
            payload: id,
        });
    }

    const ctxValue = {
        ...mealsState,
        addMealToCart,
        removeMealFromCart,
    }

    return (
        <MealsContext value={ctxValue}>
            {children}
        </MealsContext>
    );
}
