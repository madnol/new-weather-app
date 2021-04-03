import React from "react";
import styled from "styled-components";
//redux
import { useSelector } from "react-redux";

const MainPanel = () => {
  const results = useSelector(state => state.search.results);
  const loading = useSelector(state => state.search.loading);

  const theDay = () => {
    const day = new Date();
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Junuary",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = weekday[day.getDay()];
    const dayNumberString = day.toString().split(" ");

    const month = months[day.getMonth()];
    const date = `${dayName} ${dayNumberString[2]}, ${month}`;
    return date;
  };
  const day = theDay();
  return (
    <StyledMainPanel>
      {results && (
        <City>
          <h1>{loading ? "..." : results.name}</h1>
          <h3>{day}</h3>
          <span>
            {loading
              ? "..."
              : results && results.weather && results.weather[0].main}
          </span>
        </City>
      )}
    </StyledMainPanel>
  );
};

const StyledMainPanel = styled.div`
  border-radius: 25px;
  background-color: black;
  background-image: url("https://source.unsplash.com/featured/?city");
  background-position: center;
  background-size: cover;
  position: relative;

  height: 441px;
  margin: 42px;
  width: 916px;
  box-shadow: 0 25px 17px -11px rgba(0, 0, 0, 0.17);
`;

const City = styled.div`
  color: #01175f;

  display: inline-block;
  filter: opacity(1);
  line-height: 2.5em;
  margin: 4em 0 0 148px;
  h1 {
    font-size: 1.8em;
  }
  h3 {
    font-weight: 600;
  }
  span {
    font-size: 1.2em;
  }
`;

export default MainPanel;
