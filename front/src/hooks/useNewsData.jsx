import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNews = async () => {
  const { data } = await axios.get("http://server:5000api/news");
  return data.news;
};

const useNewsData = () => {
  return useQuery({
    queryKey: ["newsData"],
    queryFn: fetchNews,
  });
};

export { useNewsData };
