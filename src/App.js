import React, { useEffect } from "react";

//STYLES
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyle";
import MainPanel from "./components/MainPanel";
import OtherCities from "./components/OtherCities";
import Tempeture from "./components/Tempeture";
import Today from "./components/Today";
import WeeklyAndMonthlyForecast from "./components/WeeklyAndMonthlyForecast";
import SearchLocation from "./components/SearchLocation";
import { useDispatch } from "react-redux";
import { searchResult } from "./actions/searchActions";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchResult());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Tempeture />
        <MainPanel />
        <OtherCities />
      </MainContainer>
      <MainContainer>
        <Today />
        <WeeklyAndMonthlyForecast />
        <SearchLocation />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 100%;
  padding-bottom: 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default App;
