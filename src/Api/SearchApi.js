import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export const searchCity = async search => {
  try {
    const results = await axios.get(
      `${REACT_APP_API_URL}/api/search/?q=${search ? search : "turin"}`
    );
    const data = await results.data;

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const currentTime = async (lat, lon) => {
  try {
    const results = await axios.get(
      `${REACT_APP_API_URL}/api/search/currentdate?lat=${lat}&lon=${lon}`
    );
    const data = await results.data;

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
