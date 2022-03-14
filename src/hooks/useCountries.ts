import { useQuery } from "react-query";
import axios from "axios";

export const useCountries = () => {
  return useQuery("allCountries", async () => {
    const { data } = await axios.get(
      "https://restcountries.com/v3.1/all"
    );

    return data;
  });
};
