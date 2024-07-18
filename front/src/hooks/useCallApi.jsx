import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchApiData = async (linkSuffix) => {
  const res = await axios.get(`http://193.95.21.154/api`);
  const { data } = await axios.get(
    `http://193.95.21.154/apiapi/${linkSuffix}`
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
