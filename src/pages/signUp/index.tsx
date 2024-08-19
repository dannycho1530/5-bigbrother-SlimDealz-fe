import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [role, setRole] = useState('');
  const [socialId, setSocialId] = useState('');
  const query = queryString.parse(window.location.search);

  useEffect(() => {
    // URL에서 JWT 토큰과 리프레시 토큰을 추출합니다.
    const jwtToken = Array.isArray(query.jwtToken) ? query.jwtToken[0] : query.jwtToken;
    const refreshToken = Array.isArray(query.refreshToken) ? query.refreshToken[0] : query.refreshToken;

    if (typeof jwtToken === 'string') {
      // JWT 토큰을 로컬 스토리지에 저장
      localStorage.setItem('jwtToken', jwtToken);
      if (refreshToken && typeof refreshToken === 'string') {
        localStorage.setItem('refreshToken', refreshToken);
      }

      // JWT를 해석하여 사용자 정보 설정
      const decodedToken = parseJwt(jwtToken);
      setNickname(decodedToken.name); // 디코딩된 토큰에서 닉네임 설정
      setProfileImageUrl(decodedToken.profile_image); // 디코딩된 토큰에서 프로필 이미지 설정
      setRole(decodedToken.role); // 디코딩된 토큰에서 사용자 역할 설정
      setSocialId(decodedToken.socialId); // 디코딩된 토큰에서 소셜 아이디 설정
    } else {
      // 토큰이 없으면 로그인 페이지로 리디렉트
      navigate('/signIn');
    }
  }, [navigate, query]);

  // JWT 디코딩 함수
  function parseJwt(token: String) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  return (
    <div>
      <h1>회원가입 추가 정보</h1>
      <div>
        <h2>사용자 정보</h2>
        {profileImageUrl && (
          <img
            src={profileImageUrl}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        )}
        <p><strong>닉네임:</strong> {nickname}</p>
        <p><strong>역할:</strong> {role}</p>
        <p><strong>소셜 ID:</strong> {socialId}</p>
      </div>
      <div>
        <h2>회원 정보 입력</h2>
        <label>
          닉네임:
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
          />
        </label>
        <button onClick={() => console.log('회원가입 정보 제출')}>회원가입 완료</button>
      </div>
    </div>
  );
};

export default SignUpPage;
