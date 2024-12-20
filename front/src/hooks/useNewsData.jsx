import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNews = async () => {
  const { data } = await axios.get("https://crrhab.agrinet.tn/api/news");
  return data.news;
};

const useNewsData = () => {
  return useQuery({
    queryKey: ["newsData"],
    queryFn: fetchNews,
  });
};

export { useNewsData };
