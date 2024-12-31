
export function validateInputData(data) {

    const errors = [];
    if (data.fullName.trim() === "") {
        errors.push("Fill in Name");
    }
    if (data.street.trim() === "") {
        errors.push("Fill in Street");
    }
    if (data.postalCode.trim() === "" || isNaN(Number(data.postalCode))) {
        errors.push("Postal Code Must be a Number");
    }
    if (data.city.trim() === "") {
        errors.push("Fill in City");
    }

    if (errors.length > 0) {
        return {
            errors,
            enteredVals: data
        }
    }
    return { errors: null };
}
