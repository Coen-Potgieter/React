import { useState } from "react";

import InputSection from "./components/InputSection.jsx";
import ResultTable from "./components/ResultTable.jsx";

const INPUT_TYPES = [
    "initialInvestment",
    "annualInvestment",
    "expectedReturn",
    "duration"
];

const INITIAL_VALUES = INPUT_TYPES.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
}, {});

function checkValidData(data) {

    for (const key of INPUT_TYPES){
        if (data[key] < 0) {
            return false;
        }
    }
    return true;
}

function App() {
    const [ currValues, setValues ] = useState(INITIAL_VALUES);

    function handleInputChange(type, event) {
        setValues(prevValues => {
            const newValues = {...prevValues};
            const returnedValue = event.target.value;
            newValues[type] = (returnedValue === "") ? 0 : Number(returnedValue);
            return newValues;
        });
    }

    const isValidData = checkValidData(currValues);

    return (
        <>
            <section id="user-input">
                <InputSection 
                    inputTypes={INPUT_TYPES}
                    currValues={currValues} 
                    onInputChange={handleInputChange}
                />
            </section>

            {isValidData ? <ResultTable values={currValues}/> : (
                    <h2 id="error-message">Cannot Have Negative Input Data!</h2>
            )}
                
        </>
    );
}

export default App
