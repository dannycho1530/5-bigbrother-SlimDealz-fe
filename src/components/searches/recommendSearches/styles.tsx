import { styled } from 'styled-components';

export const SearchContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const AutoCompleteList = styled.ul`
  margin-top: 100px;
  padding: 10px;
  list-style-type: none;
  position: absolute;
  width: 390px;
  height: auto;
  overflow-y: auto;
  z-index: 1;
  background-color: #d9d9d9;
`;

export const AutoCompleteItem = styled.li`
  padding: 10px;
  border-radius: 25px;
  background-color: #f2f2f7;
  margin-bottom: 10px;
  font-size: 12px;
  &:last-child {
    border-bottom: none;
  }
`;
