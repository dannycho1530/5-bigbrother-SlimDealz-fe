import React, { useEffect } from 'react';
import {
  Container,
  BackButton,
  Header,
  Section,
  Description,
  KakaoButton,
} from './styles';
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';

const SignInPage: React.FC = () => {

  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
  };

  return (
    <Container>
      <BackButton>←</BackButton>
      <Header>로그인</Header>

      <Section>
        <h3>SNS 간편 로그인</h3>
        <Description>SNS 간편 로그인을 통해 빠르게 서비스를 이용하실 수 있습니다!</Description>
        <KakaoButton className="kakao-login" onClick={handleLogin}>
          <span>🗨️</span> 카카오 로그인
        </KakaoButton>
      </Section>
    </Container>
  );
};

export default SignInPage;
