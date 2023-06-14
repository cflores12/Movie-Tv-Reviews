import { useState, useEffect } from "react";

export const useGetDailyPrices = () => {
  const [data, setData] = useState<DailyPrice[]>([]);

  const getData = async () => {
    const { results } = await get<APIResponse>("./data/DUMMY_DATA.json");
    setData(results);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
