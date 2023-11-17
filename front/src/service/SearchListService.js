import axios from "axios";

const handleSearchList = async (query, pageNo) => {
  console.log(query, pageNo);
  try {
    const response = await axios.get("http://localhost:8000/api/v1/home", {
      params: {
        search: query,
        pageNo: pageNo,
      },
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

export default handleSearchList;
