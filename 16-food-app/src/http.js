
export async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed To Fetch Meals");
    }
    return resData;
}

export async function sendUserData(data) {


    // const response = await fetch("http://localhost:3000/orders", {
    //     method: "POST",
    //     body: 
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })

}

