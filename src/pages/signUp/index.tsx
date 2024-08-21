import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Axios를 이용해 API 호출
import { styles } from './styles'; // styles.tsx 파일에서 스타일 가져오기

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [role, setRole] = useState('');
  const [socialId, setSocialId] = useState('');
  const [name, setName] = useState(''); 
  const [cardInfo, setCardInfo] = useState(''); // 카드 정보
  const [receiveNotification, setReceiveNotification] = useState(false); // 알림 설정

  useEffect(() => {
    // URL에서 jwtToken과 refreshToken 추출
    const urlParams = new URLSearchParams(window.location.search);
    const jwtToken = urlParams.get('jwtToken');
    const refreshToken = urlParams.get('refreshToken');

    if (jwtToken && refreshToken) {
      // 토큰을 localStorage에 저장
      localStorage.setItem('jwtToken', jwtToken);
      localStorage.setItem('refreshToken', refreshToken);

      // 토큰 파싱 및 상태 설정
      const decodedToken = parseJwt(jwtToken);
      setName(decodedToken.name);
      setProfileImageUrl(decodedToken.profile_image); 
      setRole(decodedToken.role); 
      setSocialId(decodedToken.socialId); 

      // 토큰이 URL에 있을 경우, URL을 정리 (토큰이 없는 상태로 URL을 유지)
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', newUrl);
    }
  }, []);

  function parseJwt(token: string) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("토큰 파싱 중 오류 발생:", error);
      return null;
    }
  }

  const handleSubmit = async () => {
    const memberData = {
      name,
      nickname,
      socialId,
      profileImage: profileImageUrl,
      role,
      cardInfo,
      receiveNotification
    };

    try {
      const jwtToken = localStorage.getItem('jwtToken'); // JWT 토큰을 로컬 스토리지에서 가져옴
      const response = await axios.post('http://localhost:8080/api/v1/users/kakaologin', memberData, {
        headers: {
          Authorization: `Bearer ${jwtToken}` // Authorization 헤더에 JWT 토큰 추가
        }
      });
      console.log('회원 정보 저장 성공:', response.data);
      navigate('/main'); // 저장 후 리다이렉트할 경로
    } catch (error) {
      console.error('회원 정보 저장 실패:', error);
    }
  };

  return (
    <div style={styles.userProfileContainer}>
      <div style={styles.navBar}>
        <button style={styles.navBarButton} onClick={() => navigate(-1)}>←</button>
        <h2>회원가입 추가 정보</h2>
      </div>

      <div style={styles.userInfoSection}>
        <h2>사용자 정보</h2>
        {profileImageUrl && (
          <img
            src={profileImageUrl}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        )}
        <p><strong>이름:</strong> {name}</p>
        <p><strong>역할:</strong> {role}</p>
        <p><strong>소셜 ID:</strong> {socialId}</p>
      </div>

      <div style={styles.userInfoSection}>
        <h2>회원 정보 입력</h2>
        <div style={styles.formGroup}>
          <label style={styles.formGroupLabel}>닉네임:</label>
          <input
            type="text"
            style={styles.formGroupInput}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.formGroupLabel}>카드 정보:</label>
          <input
            type="text"
            style={styles.formGroupInput}
            value={cardInfo}
            onChange={(e) => setCardInfo(e.target.value)}
            placeholder="카드 정보를 입력하세요"
          />
        </div>
        <div style={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              checked={receiveNotification}
              onChange={(e) => setReceiveNotification(e.target.checked)}
            />
            알림 수신 동의
          </label>
        </div>
        <button style={styles.actionButtonSubmit} onClick={handleSubmit}>
          회원가입 완료
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
