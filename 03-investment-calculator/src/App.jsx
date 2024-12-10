import { useState } from "react";

import InputSection from "./components/InputSection";

const INPUT_TYPES = [
    "initialInv",
    "annualInv",
    "expectedReturn",
    "duration"
];

const INITIAL_VALUES = INPUT_TYPES.reduce((acc, key) => {
    acc[key] = "";
    return acc;
}, {});

function App() {
    const [ currValues, setValues ] = useState(INITIAL_VALUES);

    function handleInputChange(type, event) {
        setValues(prevValues => {
            const newValues = {...prevValues};
            newValues[type] = event.target.value;
            return newValues;
        });
    }

    return (
        <section id="user-input">
            <InputSection 
                 inputTypes={INPUT_TYPES}
                 currValues={currValues} 
                 onInputChange={handleInputChange}
            />
        </section>
    );
}

export default App
