// Import Axios for making HTTP requests
import axios from "axios";
let data = [];
// Function to fetch data from the API
const fetchData = async () => {
  try {
    // Make a GET request to the API endpoint
    const response = await axios.get("http://193.95.21.154/api/news");

    // Extract data from the response
    data = response.data?.news;

    // Return the data
    return data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching data:", error);
    return;
  }
};

// Immediately fetch the data and export it
await fetchData();
export { data };
