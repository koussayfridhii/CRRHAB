import axios from "axios";
import { useState, useEffect } from "react";

// Define the base URL for your API
const BASE_URL = "https://your-api-base-url.com";

// Create a custom hook called useAxios
export const useAxios = () => {
  // Initialize state for the response data
  const [data, setData] = useState(null);

  // Initialize state for loading status
  const [loading, setLoading] = useState(false);

  // Initialize state for error status
  const [error, setError] = useState(null);

  // Function to handle making requests
  const fetchData = async (url, method, body = null) => {
    try {
      setLoading(true); // Set loading to true before request

      // Make the request
      const response = await axios({
        baseURL: BASE_URL,
        url,
        method,
        data: body,
      });

      // Update state with the response data
      setData(response.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false); // Set loading back to false after request completes
    }
  };

  return { data, loading, error, fetchData };
};
