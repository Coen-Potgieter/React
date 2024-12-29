import { useState } from "react";

export function useInput(defaultValue) {
    const [ enteredVal, setEnteredVal ] = useState(defaultValue);
    const [ didEdit, setDidEdit ] = useState(false);

    function handleInputChange(event) {
        setEnteredVal(event.target.value);
        setDidEdit(false);
    }

    function handleBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredVal,
        handleInputChange,
        handleBlur,
        didEdit,
    };
}
