import { styled } from 'styled-components';

type Props = {
  searchName: string;
};

const SearchName = ({ searchName }: Props) => {
  return (
    <SearchNameContainer>
      <NameTextContainer>{searchName}</NameTextContainer>
    </SearchNameContainer>
  );
};

export default SearchName;

const SearchNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: auto;
  padding: 8px;
  border-radius: 20px;
  background-color: #f2f2f7;
`;

const NameTextContainer = styled.div`
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;
