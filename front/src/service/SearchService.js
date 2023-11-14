import axios from "axios";

const handleSearch = async (query, username, idFromQuery, navigate) => {
  try {
    const userId = username || idFromQuery;
    const response = await axios.post("http://localhost:8000/search", {
      query,
    });

    // Handle the response as needed
    console.log("Search results:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during search:", error.message);
    // Handle the error as needed
    return null;
  }
};

export default handleSearch;
