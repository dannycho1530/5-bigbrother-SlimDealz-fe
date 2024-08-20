import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const ModalMessage = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
`;

const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
type Props = {
  onClose: () => void;
};

const PagePreparationModal = ({ onClose }: Props) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>페이지 준비 중</ModalTitle>
        <hr
          style={{ width: '50px', margin: '10px auto', borderColor: 'white' }}
        />
        <ModalMessage>
          현재 페이지 오픈 준비중입니다.
          <br />
          최대한 빠른 시일 내에 접근 가능하도록 하겠습니다.
        </ModalMessage>
        <HomeButton onClick={onClose}>돌아 가기</HomeButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PagePreparationModal;
