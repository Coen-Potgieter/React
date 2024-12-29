import { useState, useEffect } from "react";

import Places from './Places.jsx';
import ErrorPage from "./ErrorPage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ availablePlaces, setAvailablePlaces ] = useState([]);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        async function fetchPlaces() {
            setIsLoading(true);

            try {
                const places = await fetchAvailablePlaces();

                navigator.geolocation.getCurrentPosition((pos) => {
                    setAvailablePlaces(sortPlacesByDistance(
                        places,
                        pos.coords.latitude,
                        pos.coords.longitude
                    ));
                });
                setIsLoading(false);

            } catch(error) {
                setError({message: error.message || "Could Not Fecth Data"});
                setIsLoading(false);
            }
        }
        fetchPlaces();
    }, []);

    if (error) {
        return (
            <ErrorPage title="Error" message={error.message} />
        );
    } else{
        return (
            <Places
                title="Available Places"
                places={availablePlaces}
                isLoading={isLoading}
                loadingText="Fetching place data..."
                fallbackText="No places available."
                onSelectPlace={onSelectPlace}
            />
        );
    }

}
