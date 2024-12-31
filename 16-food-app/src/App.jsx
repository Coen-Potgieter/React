import Header from "./components/Header.jsx";
import MealItems from "./components/MealItems.jsx";

import MealsContextProvider from "./store/meals-context.jsx";

function App() {
    return (
        <MealsContextProvider>
            <Header />
            <MealItems />
        </MealsContextProvider>
    );
}

export default App;
