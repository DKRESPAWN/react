import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;

// this custom hook will be called and we will pass the "From" currency
// from the Component. This hook will call the api and then
// convert it into json format and then set the data variable as
// the currency object. For eg: "inr" object. Then returns the DATA containing the object
