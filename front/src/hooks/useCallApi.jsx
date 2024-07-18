import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchApiData = async (linkSuffix) => {
  const res = await axios.get(`https://crrhab-3ofe.vercel.app/`);
  const { data } = await axios.get(
    `https://crrhab-3ofe.vercel.app/api/${linkSuffix}`
  );
  // console.log(data);
  return data[linkSuffix] !== undefined ? data[linkSuffix] : data;
};

const useCallApi = (linkSuffix) => {
  return useQuery({
    queryKey: [linkSuffix],
    queryFn: () => fetchApiData(linkSuffix),
  });
};

export { useCallApi };
