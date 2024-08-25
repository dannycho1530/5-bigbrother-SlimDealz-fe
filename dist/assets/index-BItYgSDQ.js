import{h as e,j as o,i as u}from"./index-BV_68Uyj.js";import{r}from"./react-CWmeP4t5.js";import{M as f}from"./Modal-C5cGgluo.js";const j=e.div`
  padding: 20px;
  background-color: #ffffff;
`,i=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
  cursor: pointer;
`,s=e.div`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`,d=e.div`
  font-size: 35px;
  color: #808080;
`,b=e.div`
  padding-top: 10px;
  border-top: 1px solid #e0e0e0;
`,m=e.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 20px 0;
  color: #808080;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,k=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,w=e.div`
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`,M=e.h2`
  margin-bottom: 20px;
  font-size: 24px;
`,v=e.p`
  font-size: 14px;
  margin-bottom: 30px;
`,C=e.button`
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`,y=({onClose:t})=>o.jsx(k,{children:o.jsxs(w,{children:[o.jsx(M,{children:"페이지 준비 중"}),o.jsx("hr",{style:{width:"50px",margin:"10px auto",borderColor:"white"}}),o.jsxs(v,{children:["현재 페이지 오픈 준비중입니다.",o.jsx("br",{}),"최대한 빠른 시일 내에 접근 가능하도록 하겠습니다."]}),o.jsx(C,{onClick:t,children:"돌아 가기"})]})}),z=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,I=e.div`
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`,L=e.h2`
  margin-bottom: 20px;
  font-size: 24px;
`,S=e.p`
  font-size: 14px;
  margin-bottom: 30px;
`,a=e.button`
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`,O=({onClose:t,onLogout:n})=>o.jsx(f,{open:!0,onClose:t,children:o.jsx(z,{children:o.jsxs(I,{children:[o.jsx(L,{children:"로그아웃 하시겠습니까?"}),o.jsx("hr",{style:{width:"50px",margin:"10px auto",borderColor:"white"}}),o.jsx(S,{children:"로그아웃 하시려면 확인을 누르세요."}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[o.jsx(a,{onClick:t,children:"취소"}),o.jsx(a,{onClick:n,children:"확인"})]})]})})}),E=()=>{const t=u(),[n,l]=r.useState(!1),[x,c]=r.useState(!1);r.useEffect(()=>{localStorage.getItem("jwtToken")||t("/signIn")},[t]);const p=()=>{l(!1)},h=()=>{c(!1)},g=()=>{localStorage.removeItem("jwtToken"),localStorage.removeItem("refreshToken"),t("/signIn")};return o.jsxs(j,{children:[o.jsxs(i,{onClick:()=>t("/information"),children:[o.jsx(s,{children:"나의 회원정보 수정"}),o.jsx(d,{children:"›"})]}),o.jsxs(i,{onClick:()=>t("/bookmark"),children:[o.jsx(s,{children:"나의 북마크"}),o.jsx(d,{children:"›"})]}),o.jsxs(i,{onClick:()=>l(!0),children:[o.jsx(s,{children:"나의 알람"}),o.jsx(d,{children:"›"})]}),o.jsx(b,{children:o.jsx(m,{onClick:()=>c(!0),children:"로그아웃"})}),n&&o.jsx(y,{onClose:p}),x&&o.jsx(O,{onClose:h,onLogout:g})]})};export{E as default};
