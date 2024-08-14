import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, SectionTitle, Content, LogoutButton } from './styles';

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
        <SectionTitle>1 나의 회원정보 수정</SectionTitle>
        <Content>회원정보 수정 페이지로 이동</Content>
      </Section>

      <Section onClick={handleBookmarkClick}>
        <SectionTitle>2 나의 북마크 {bookmarkCount}</SectionTitle>
        <Content>북마크 개수만큼 숫자 증가</Content>
        <Content>클릭시 북마크 목록 페이지로 이동</Content>
        <Content>북마크 갯수는 100개로 제한</Content>
      </Section>

      <Section onClick={handleAlarmClick}>
        <SectionTitle>3 나의 알람 {alarmCount}</SectionTitle>
        <Content>알람 개수만큼 숫자 증가</Content>
        <Content>클릭시 알람 목록 페이지로 이동</Content>
      </Section>

      <Section>
        <SectionTitle>4</SectionTitle>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </Section>
    </Container>
  );
};

export default MyMainPage;
