import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 32px; /* Tabs와 간격 조절 */
  margin-bottom: 16px;
  border-bottom: 2px solid #ddd; /* 제목 아래에 경계선을 추가 */
  padding-bottom: 8px; /* 경계선과 제목 간의 간격 조절 */
`;
