import{h as t,i,j as e}from"./index-BV_68Uyj.js";import"./react-CWmeP4t5.js";const n=t.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 120px);
`,o=t.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  padding-bottom: 10px;

  img {
    width: 200px;
    height: auto;
  }
`,r=t.div`
  padding: 15px;
  width: 100%;
  text-align: center;
  flex-grow: 1;
`,s=t.p`
  font-size: 20px;
  margin-bottom: 15px;
  line-height: 30px;
  padding-bottom: 100px;
  font-family: 'Spoqa Han Sans Neo';
`;t.button`
  background-color: #fee500;
  color: #000000;
  padding: 10px;
  width: 100%;
  border: 2px solid #ffde00;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 8px;
  }

  &:hover {
    background-color: #ffde00;
  }
`;const c=()=>(i(),console.error("Kakao API Key or Redirect URI is missing."),e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("img",{src:"/assets/logo.png",alt:"Slimdealz logo"})}),e.jsx(r,{children:e.jsxs(s,{children:["카카오 로그인 설정이 올바르지 않습니다. ",e.jsx("br",{}),"환경 변수를 확인해 주세요."]})})]}));export{c as default};
