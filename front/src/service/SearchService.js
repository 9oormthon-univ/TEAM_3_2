import axios from "axios";

const handleSearch = async (query, username, idFromQuery, navigate) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const userId = username || idFromQuery;
    var medicineId = query;

    // Set default headers for all axios requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    const response = await axios.get(
      `https://port-0-team-3-3szcb0g2blp12i5o9.sel5.cloudtype.app/api/v1/home/${medicineId}`
    );

    // Log the entire response
    console.log("Full response from the backend:", response);

    // Handle the response as needed
    console.log("Search results:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during search:", error);
    // Handle the error as needed
    return null;
  }
};

export default handleSearch;
