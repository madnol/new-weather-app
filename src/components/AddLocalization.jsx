import React from "react";
import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
const AddLocalization = () => {
  return (
    <LocalizationBox>
      <h1>Localization</h1>
      <Localization>
        <FiMapPin /> <h1> Add localization</h1>
      </Localization>
    </LocalizationBox>
  );
};

const LocalizationBox = styled.div`
  margin-top: 1.7em;
  border-radius: 25px;
  > h1 {
    margin-left: 1em;
    color: #01175f;
  }
  box-shadow: 0 25px 17px -11px rgba(0, 0, 0, 0.17);
`;

const Localization = styled.div`
  margin-top: 2em;
  border-radius: 25px;
  height: 141px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(90, 129, 234, 1) 0%,
    rgba(115, 177, 244, 1) 100%
  );
  color: white;
  svg {
    font-size: 2.5em;
    margin: 0 auto;
  }
`;

export default AddLocalization;
