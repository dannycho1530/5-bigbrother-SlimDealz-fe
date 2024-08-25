import{j as e,I as p,h as x}from"./index-BV_68Uyj.js";import{r as m}from"./react-CWmeP4t5.js";import{a as n}from"./vendor-DsPaXkF5.js";import{C as h,b as f,I as g,P as u,c as j,S as k,B as b,d as C,a as I}from"./loadingSpinner-CuS3lz-D.js";import{g as w}from"./conversion-SfHyV7sn.js";const T=({id:r,name:a,price:l,shipping:d})=>{const[o,i]=m.useState(!1),s=localStorage.getItem("userId"),c=async()=>{try{o?(await n.delete(`/api/v1/users/${s}/bookmarks/${r}`,{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}}),i(!1),alert("북마크가 삭제되었습니다.")):(await n.post(`/api/v1/users/${s}/bookmarks`,{userId:s,productName:a},{headers:{Authorization:`Bearer ${localStorage.getItem("jwtToken")}`}}),i(!0),alert("북마크가 추가되었습니다."))}catch(t){t.response?t.response.status===400?alert("유효하지 않은 데이터입니다."):t.response.status===401?alert("로그인이 필요합니다."):t.response.status===500&&alert("서버 오류가 발생했습니다."):alert("네트워크 오류가 발생했습니다.")}};return e.jsxs(h,{children:[e.jsx(f,{children:e.jsx("img",{alt:a,style:{width:"100%",height:"100%",borderRadius:"10px"}})}),e.jsxs(g,{children:[e.jsx("div",{style:{fontSize:"16px",fontWeight:"bold"},children:a}),e.jsx(u,{children:e.jsxs(j,{children:[w(l),"원"]})}),e.jsx(k,{children:"배송비 : "+d}),e.jsx(b,{children:e.jsx(p,{onClick:t=>{t.stopPropagation(),c()},style:{paddingLeft:"10px"},children:o?e.jsx(C,{}):e.jsx(I,{})})})]})]})},y=x.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #e0f7fa;
  border: 2px solid #00acc1;
  font-size: 20px;
  font-weight: bold;
  color: #00796b;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  margin-bottom: 10px;
`,z=({pageName:r})=>e.jsx(y,{children:e.jsx("div",{children:r})});export{T as C,z as P};
