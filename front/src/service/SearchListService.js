import axios from "axios";

const handleSearchList = async (query, pageNo) => {
  const accessToken = localStorage.getItem("accessToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  console.log(accessToken);
  axios.defaults.headers.common["Content-Type"] = "application/json";
  console.log(query, pageNo);
  try {
    const response = await axios.get(
      "https://port-0-team-3-3szcb0g2blp12i5o9.sel5.cloudtype.app/api/v1/home",
      {
        params: {
          search: query,
          pageNo: parseInt(0),
        },
      }
    );

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
