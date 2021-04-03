import React, { useState } from "react";
import styled from "styled-components";
import AddLocalization from "./AddLocalization";
import { FiSearch } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { searchResult } from "../actions/searchActions";

const SearchLocation = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const inputHandler = e => {
    setTextInput(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    dispatch(searchResult(textInput));

    setTextInput("");
    // dispatch(searchResult(textInput));
  };

  return (
    <SearchContainer>
      <h1>Search</h1>
      <form onSubmit={submitSearch}>
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          placeholder="ex: Miami"
        />
        <button>
          <FiSearch />
        </button>
      </form>
      <AddLocalization />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  > h1 {
    color: #01175f;
    margin-left: 1em;
  }
  form {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    input {
      ::-webkit-input-placeholder {
        /* Edge */
        color: #b8b8b8;
      }
      margin-top: 1em;
      width: 372px;
      height: 142px;
      font-size: 2em;
      font-weight: 600;
      border: none;
      box-sizing: border-box;
      padding: 1em;
      border-radius: 25px;
      outline: none;
      color: #01175f;
      box-shadow: 0 25px 17px -11px rgba(0, 0, 0, 0.17);
    }

    button {
      cursor: pointer;
      outline: none;
      top: 1em;
      padding: 0;
      color: white;
      font-size: 2em;
      border: none;
      background: linear-gradient(
        135deg,
        rgba(90, 129, 234, 1) 0%,
        rgba(115, 177, 244, 1) 100%
      );
      width: 56px;
      height: 141px;
      position: absolute;
      border-radius: 25px;
      right: 0;
    }
  }
`;

export default SearchLocation;
