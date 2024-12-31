
export function validateInputData(data) {

    const errors = [];
    if (isNaN(Number(data.postalCode))) {
        errors.push("Postal Code Must be a Number");
    }

    if (errors.length > 0) {
        return {
            errors,
            enteredVals: data
        }
    }
    return { errors: null };
}
