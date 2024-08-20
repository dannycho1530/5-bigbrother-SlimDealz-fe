import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Section,
  SectionTitle,
  ArrowIcon,
  LogoutButtonContainer,
  LogoutButton
} from './styles';
import PagePreparationModal from '@/components/modal/pagePreparationModal';

const MyMainPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    // 로그아웃 로직 (예: 토큰 삭제, 상태 초기화 등)
    console.log('Logged out');

    setIsModalOpen(false);
  };

  return (
    <Container>
      <Section
        onClick={
          closeModal
          // () => navigate('/information')
        }
      >
        <SectionTitle>나의 회원정보 수정</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <Section onClick={() => navigate('/bookmark')}>
        <SectionTitle>나의 북마크</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <Section
        onClick={
          closeModal
          // () => navigate('/alarm')
        }
      >
        <SectionTitle>나의 알람</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <LogoutButtonContainer>
        <LogoutButton onClick={closeModal}>로그아웃</LogoutButton>
      </LogoutButtonContainer>

      {isModalOpen && <PagePreparationModal onClose={handleLogout} />}
    </Container>
  );
};

export default MyMainPage;
