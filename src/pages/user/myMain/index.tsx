import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Section,
  SectionTitle,
  SectionContent,
  ArrowIcon,
  LogoutButtonContainer,
  LogoutButton
} from './styles';

const MyMainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 로직 (예: 토큰 삭제, 상태 초기화 등)
    console.log('Logged out');
    navigate('/signIn');
  };

  return (
    <Container>
      <Section onClick={() => navigate('/information')}>
        <SectionTitle>나의 회원정보 수정</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <Section onClick={() => navigate('/bookmark')}>
        <SectionTitle>나의 북마크</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <Section onClick={() => navigate('/alarm')}>
        <SectionTitle>나의 알람</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <LogoutButtonContainer>
        <LogoutButton onClick={() => handleLogout}>로그아웃</LogoutButton>
      </LogoutButtonContainer>
    </Container>
  );
};

export default MyMainPage;
