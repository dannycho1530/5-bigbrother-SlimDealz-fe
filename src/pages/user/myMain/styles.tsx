import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Section = styled.div`
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #e0e0e0;
  cursor: pointer;
`;

export const SectionTitle = styled.div`
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px 8px 0 0;
`;

export const Content = styled.div`
  padding: 10px;
  font-size: 14px;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #e0e0e0;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  color: black;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }
`;
