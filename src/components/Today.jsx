import React from "react";
import styled from "styled-components";

const Today = () => {
  return (
    <TodayContainer>
      <h1>Today</h1>
      <Thermometer>
        <Degree>
          <h1>22°</h1>
          <span>20°</span>
          <span>20°</span>
          <span>19°</span>
          <span>19°</span>
        </Degree>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            flexWrap: "wrap",
          }}
        >
          <h3 style={{ width: "100%", color: "white" }}>Now</h3>
          <Circles>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Circles>
          <Line></Line>
          <div></div>
        </div>
        <Hours
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            color: "white",
            paddingTop: "8em",
          }}
        >
          <span style={{ marginBottom: "3em" }}>4 p.m.</span>
          <span style={{ marginBottom: "3em" }}>4 p.m.</span>
          <span style={{ marginBottom: "3em" }}>4 p.m.</span>
          <span style={{ marginBottom: "3em" }}>4 p.m.</span>
          <span style={{ marginBottom: "3em" }}>4 p.m.</span>
        </Hours>
      </Thermometer>
    </TodayContainer>
  );
};

const TodayContainer = styled.div`
  border-radius: 25px;
  box-sizing: border-box;
  margin-bottom: 5em;
  width: 302px;
  > h1 {
    margin-bottom: 1em;
    color: #01175f;
  }
`;

const Thermometer = styled.div`
  border-radius: 25px;
  height: 386px;
  background: linear-gradient(
    135deg,
    rgba(90, 129, 234, 1) 0%,
    rgba(115, 177, 244, 1) 100%
  );
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding: 2em;
  width: 302px;
  overflow: hidden;
  box-shadow: 0 25px 17px -11px rgba(0, 0, 0, 0.17);
`;

const Degree = styled.div`
  display: flex;
  margin-top: 2.5em;

  flex-direction: column;
  border-radius: 25px;
  color: white;
  h1 {
    margin-bottom: 1.2em;
  }
  span {
    text-align: right;
    font-size: 1.5em;
    margin-bottom: 1.6em;
  }
`;

const Line = styled.div`
  height: 100%;
  width: 9px;
  transform: translateY(34px);
  background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0.1));
`;
const Hours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  padding-top: 8em;
`;

const Circles = styled.div`
  margin-top: 2.5em;
  display: flex;

  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  position: absolute;
  div:first-child {
    height: 30px;
    width: 30px;
    margin-top: 0.5em;
  }
  div {
    height: 20px;
    width: 20px;
    margin-bottom: 3em;
    border-radius: 100px;

    background-color: white;
  }
`;

export default Today;
