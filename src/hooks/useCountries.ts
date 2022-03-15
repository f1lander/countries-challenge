import { useQuery } from "react-query";
import axios from "axios";

export const useCountries = (param: string | undefined) => {
  return useQuery(
    ["allCountries", param],
    async ({ queryKey }) => {
      const [_key, country] = queryKey;

      console.log(country);
      const endpoint = country ? `/name/${country}` : "/all";
      const { data } = await axios.get(
        `https://restcountries.com/v3.1${endpoint}`
      );

      return data;
    }
  );
};
