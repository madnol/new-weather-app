import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Tempeture = () => {
  const [degree, setDegree] = useState("");
  const results = useSelector(state => state.search.results);
  const loading = useSelector(state => state.search.loading);

  useEffect(() => {
    if (results && results.main) {
      const conversion = results.main.temp - 273.15;
      const rounded = Math.ceil(conversion);
      const degree = `${rounded}°`;
      setDegree(degree);
    }
  }, [results]);

  return (
    <>
      {loading ? (
        "..."
      ) : (
        <SideElement>
          <h1>{degree}</h1>
          <img
            src={
              results &&
              results.weather &&
              `http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`
            }
            alt="sun"
          />
        </SideElement>
      )}
    </>
  );
};

const SideElement = styled.div`
  position: absolute;
  height: 280px;
  color: white;
  font-size: 1.5em;
  top: 5em;
  width: 141px;
  display: flex;
  left: 0;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0 25px 25px 0;
  background: linear-gradient(
    135deg,
    rgba(90, 129, 234, 1) 0%,
    rgba(115, 177, 244, 1) 100%
  );
  flex-direction: column;
  box-shadow: 25px 25px 17px -11px rgba(0, 0, 0, 0.17);
`;

export default Tempeture;
