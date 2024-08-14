import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, SectionTitle, LogoutButton } from './styles';

const MyMainPage = () => {
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [alarmCount, setAlarmCount] = useState(0);
  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    if (bookmarkCount < 100) {
      setBookmarkCount(prevCount => prevCount + 1);
    }
    navigate('/bookmark');
  };

  const handleAlarmClick = () => {
    setAlarmCount(prevCount => prevCount + 1);
    navigate('/alarm');
  };

  const handleLogout = () => {
    // 로그아웃 로직 (예: 토큰 삭제, 상태 초기화 등)
    console.log('Logged out');
    navigate('/signIn');
  };

  return (
    <Container>
      <Section onClick={() => navigate('/information')}>
        <SectionTitle>나의 회원정보 수정</SectionTitle>
      </Section>

      <Section onClick={handleBookmarkClick}>
        <SectionTitle>나의 북마크 {bookmarkCount}</SectionTitle>
      </Section>

      <Section onClick={handleAlarmClick}>
        <SectionTitle>나의 알람 {alarmCount}</SectionTitle>
      </Section>

      <Section>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </Section>
    </Container>
  );
};

export default MyMainPage;
