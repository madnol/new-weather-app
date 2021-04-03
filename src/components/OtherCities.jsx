import React from "react";
import styled from "styled-components";
import { FiPlusSquare } from "react-icons/fi";
const OtherCities = () => {
  return (
    <StyledOtherCities>
      <AddCities>
        <FiPlusSquare /> <h4>Aggiungi città</h4>
      </AddCities>
      <Cities>
        <div>
          <h2>City</h2>
          <h4>data</h4>
          <span>hour</span>
        </div>
        <img src="#" alt="sun" />
        <h1>18°</h1>
      </Cities>
      <Cities>
        <div>
          <h2>City</h2>
          <h4>data</h4>
          <span>hour</span>
        </div>
        <img src="#" alt="sun" />
        <h1>18°</h1>
      </Cities>
    </StyledOtherCities>
  );
};

const StyledOtherCities = styled.div`
  border-radius: 25px;

  height: 441px;
  margin: 42px 42px 42px 0;
  width: 372px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const AddCities = styled.div`
  border-radius: 25px;
  cursor: pointer;

  margin: 0 auto;
  margin-top: 60px;
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 1.2em;

  svg {
    font-size: 1.5em;
    margin-right: 0.5em;
  }
  color: #01175f;
  transition: color 0.2s;
  &:hover {
    color: #4e64ab;
  }
`;

const Cities = styled.div`
  border-radius: 25px;
  height: 141px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #4e64ab;
  box-shadow: 0 25px 17px -11px rgba(0, 0, 0, 0.17);
`;

export default OtherCities;
