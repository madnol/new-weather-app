import React from "react";
import styled from "styled-components";

const WeeklyAndMonthlyForecast = () => {
  return (
    <StyledWeeklyAndMonthlyForecast>
      <Nav>
        <h1>This week</h1>
        <h1>This month</h1>
      </Nav>
      <Weekly>
        <div>
          <h1>This week</h1>
        </div>
        <div></div>
      </Weekly>
    </StyledWeeklyAndMonthlyForecast>
  );
};

const StyledWeeklyAndMonthlyForecast = styled.div`
  position: relative;
  width: 100%;

  max-width: 564px;

  height: 451px;
  border-radius: 25px;
  box-shadow: 0 25px 17px -11px rgba(0, 0, 0, 0.17);
  margin-bottom: 5em;
`;

const Nav = styled.div`
  width: 406px;
  height: 200px;
  box-sizing: border-box;
  background: white;
  display: flex;
  border-radius: 25px 25px 0 0;
  justify-content: space-evenly;
  align-items: flex-start;
  h1 {
    font-size: 1.5em;
    margin-top: 0.6em;
    color: #01175f;
    display: inline-block;
  }
`;

const Weekly = styled.div`
  top: 0;
  position: absolute;
  div:first-child {
    width: 213px;
    box-sizing: border-box;
    display: flex;
    padding-bottom: 1.5em;
    justify-content: center;
    background: linear-gradient(
      135deg,
      rgba(90, 129, 234, 1) 0%,
      rgba(115, 177, 244, 1) 100%
    );
    background-attachment: fixed;
    border-radius: 25px 25px 0 0;

    h1 {
      font-size: 1.5em;
      margin-top: 0.6em;
      color: #01175f;
      display: inline-block;
    }
  }
  div:nth-of-type(2) {
    width: 564px;
    border-radius: 0 25px 25px 25px;
    height: 385px;
    background: linear-gradient(
      135deg,
      rgba(90, 129, 234, 1) 0%,
      rgba(115, 177, 244, 1) 100%
    );
    position: absolute;
    z-index: 2;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`;

// const Monthly = styled.div`
//   top: 0;
//   position: absolute;
//   div:nth-child(1) {
//     width: 213px;
//     left: 213px;
//     box-sizing: border-box;
//     display: flex;
//     padding-bottom: 1.5em;
//     justify-content: center;
//     background: linear-gradient(
//       135deg,
//       rgba(90, 129, 234, 1) 0%,
//       rgba(115, 177, 244, 1) 100%
//     );
//     border-radius: 25px 25px 0 0;

//     h1 {
//       font-size: 1.5em;
//       margin-top: 0.6em;
//       color: #01175f;
//       display: inline-block;
//     }
//   }
//   div:nth-of-type(2) {
//     width: 564px;
//     border-radius: 0 25px 25px 25px;
//     height: 385px;
//     background: linear-gradient(
//       135deg,
//       rgba(90, 129, 234, 1) 0%,
//       rgba(115, 177, 244, 1) 100%
//     );
//     position: absolute;
//     z-index: 2;
//     background-size: cover;
//     background-position: center;
//     background-attachment: fixed;
//   }
// `;

export default WeeklyAndMonthlyForecast;
