import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchApiData = async (linkSuffix) => {
  const res = await axios.get(`http://127.0.0.1:5000`);
  const { data } = await axios.get(
    `http://127.0.0.1:5000api/${linkSuffix}`
  );
  return data[linkSuffix] !== undefined ? data[linkSuffix] : data;
};

const useCallApi = (linkSuffix) => {
  return useQuery({
    queryKey: [linkSuffix],
    queryFn: () => fetchApiData(linkSuffix),
  });
};

export { useCallApi };
