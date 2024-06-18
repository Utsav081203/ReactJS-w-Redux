// making custom hooks

import { useEffect, useState } from "react";


// "use" prefix is usually used naming Hooks
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    // initialised with empty object
    // API call
    // values are mostly in string format
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // convert to json from string (res is response)
        .then((res) => setData(res[currency])); // store object in data
        console.log(data);
        // chaining of .then()
        // .then() is a callback
    }, [currency]);
    // currency is dependency since if it is updated, then we need the function to run
    // so useEffect used
    return data;
}

export default useCurrencyInfo;