import React, { useEffect } from 'react';
import {
  Container,
  BackButton,
  Header,
  Section,
  Description,
  KakaoButton,
} from './styles';
import axios from 'axios';
import queryString from 'query-string';

const SignInPage = () => {
  const query = queryString.parse(window.location.search);

  useEffect(() => {  
    if (query.code) {
      sendAuthCodeToBackend(query.code.toString()); 
    }
  }, [query.code]);

  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
  };

  const sendAuthCodeToBackend = async (code: string) => {
    try {
      const response = await axios.post('/api/v1/users/kakaologin', { code });
      if (response && response.data) {
        console.log("JWT Token:", response.data.jwtToken);
        console.log("User Profile:", response.data.userProfile);

        // Store the tokens in local storage or cookies as needed
        localStorage.setItem('jwtToken', response.data.jwtToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
 
      } else {
        console.error("Failed to authenticate user.");
      }
    } catch (e) {
      console.error("Failed to send auth code to backend", e);
    }
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

      <Section>
        <h3>SNS 간편 회원가입</h3>
        <Description>SNS 간편 회원가입을 통해 빠르게 가입할 수 있습니다!</Description>
        <KakaoButton className="kakao-login" onClick={handleLogin}>
          <span>🗨️</span> 카카오로 회원가입
        </KakaoButton>
      </Section>
    </Container>
  );
};

export default SignInPage;
