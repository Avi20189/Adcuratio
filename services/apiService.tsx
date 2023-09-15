import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Props = {
  endpoint: string;
  query: object;
};

const useFetch = ({ endpoint, query }: Props) => {
  const [data, setData] = useState<AxiosResponse | null | void>(null);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        url: `https://api.stackexchange.com/${endpoint}`,
        headers: {},
        params: { ...query },
      };
      const response = await axios.request(options);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return [data, error, isLoading, reFetch] as const;
};

export default useFetch;
