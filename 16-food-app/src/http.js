
export async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed To Fetch Meals");
    }
    return resData;
}

export async function sendUserData(customerData, orderedMeals) {

    const packagedCustomerData = { ...customerData };
    packagedCustomerData["postal-code"] = packagedCustomerData.postalCode;
    packagedCustomerData.name = packagedCustomerData.fullName;
    delete packagedCustomerData.postalCode;
    delete packagedCustomerData.fullName;

    const packagedData = { 
        customer: { ...packagedCustomerData },
        items: orderedMeals
    };

    const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify({ order: packagedData }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed To Send Data")
    }

    return resData;

}

