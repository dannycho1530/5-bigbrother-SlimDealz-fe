import React, { useEffect, useState } from 'react';
import {
  Container,
  BackButton,
  Header,
  Section,
  Description,
  KakaoButton,
} from './styles';
import axios from 'axios';


const SignInPage: React.FC = () => {
  const [kakaoAuthUrl, setKakaoAuthUrl] = useState('');


  useEffect(() => {
    axios.get('/api/v1/login/kakao-url')
      .then(response => {
        console.log(response.data); // 서버 응답을 콘솔에 출력하여 확인
        if (typeof response.data === 'string') {
          setKakaoAuthUrl(response.data); // 문자열인 경우 그대로 사용
        } else if (response.data && response.data.url) {
          setKakaoAuthUrl(response.data.url); // JSON 객체라면 'url' 속성을 사용
        }
      })
      .catch(error => {
        console.error('Failed to fetch Kakao auth URL', error);
      });
  }, []);

  const handleLogin = () => {
    if (kakaoAuthUrl) {
      window.location.href = kakaoAuthUrl;
    } else {
      console.error('Kakao Auth URL is not available');
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
    </Container>
  );
};

export default SignInPage;