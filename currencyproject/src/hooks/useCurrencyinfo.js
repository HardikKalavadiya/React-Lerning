import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.currencyfreaks.com/v2.0/rates/latest?base=gbp&symbols=pkr,usd,cad,eur&apikey=54bc3af2bc2e47719bd862ad3f79fce7",
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]))
      .catch((error) => console.log("error", error));
  }, [currency]);
  console.log(data);

  return data;
}
export default useCurrencyInfo;
