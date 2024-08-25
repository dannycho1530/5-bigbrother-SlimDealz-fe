import{g as U,a as W,s as P,p as T,_ as x,u as R,N,b as $,j as p,d as A,e as _,h as v,i as M}from"./index-BV_68Uyj.js";import{r as g}from"./react-CWmeP4t5.js";import{a as b}from"./vendor-DsPaXkF5.js";import{P as S,C as w}from"./index-BoJa84lN.js";import{L}from"./loadingSpinner-CuS3lz-D.js";import"./conversion-SfHyV7sn.js";function E(r){return U("MuiTypography",r)}W("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const z=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],D=r=>{const{align:t,gutterBottom:a,noWrap:l,paragraph:h,variant:o,classes:d}=r,c={root:["root",o,r.align!=="inherit"&&`align${T(t)}`,a&&"gutterBottom",l&&"noWrap",h&&"paragraph"]};return _(c,E,d)},F=P("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.root,a.variant&&t[a.variant],a.align!=="inherit"&&t[`align${T(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})(({theme:r,ownerState:t})=>x({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&r.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),B={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},J={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},K=r=>J[r]||r,j=g.forwardRef(function(t,a){const l=R({props:t,name:"MuiTypography"}),h=K(l.color),o=N(x({},l,{color:h})),{align:d="inherit",className:c,component:f,gutterBottom:y=!1,noWrap:k=!1,paragraph:n=!1,variant:e="body1",variantMapping:i=B}=o,s=$(o,z),m=x({},o,{align:d,color:h,className:c,component:f,gutterBottom:y,noWrap:k,paragraph:n,variant:e,variantMapping:i}),u=f||(n?"p":i[e]||B[e])||"span",I=D(m);return p.jsx(F,x({as:u,ref:a,ownerState:m,className:A(I.root,c)},s))}),C=v.div`
  padding: 20px;
  background-color: var(--background-color);
`,O=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 160px);
  text-align: center;
`,V=v.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`,Z=()=>{const[r,t]=g.useState(!1),[a,l]=g.useState([]),[h,o]=g.useState(null),[d,c]=g.useState(!0),f=M(),y=void 0;g.useEffect(()=>{(async()=>{const e=localStorage.getItem("jwtToken");if(!e){t(!1),o("JWT 토큰이 없습니다."),c(!1);return}const i=k(e);if(!i){t(!1),o("Kakao_ID를 찾을 수 없습니다."),c(!1);return}try{const s=await b.get(`${y}/api/v1/users/kakao/${encodeURIComponent(i)}/id`,{headers:{Authorization:`Bearer ${e}`}});if(s.status===200){t(!0);const m=s.data,u=await b.get(`${y}/api/v1/users/${m}/bookmarks`,{headers:{Authorization:`Bearer ${e}`}});u.status===200&&l(u.data)}else throw new Error("User ID를 가져오는 데 실패했습니다.")}catch(s){s.response?s.response.status===400?o("Invalid data."):s.response.status===401?o("Unauthorized access."):s.response.status===500&&o("Server error occurred."):o("Network error.")}finally{c(!1)}})()},[]);const k=n=>{try{const i=n.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(atob(i).split("").map(u=>"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(s).kakao_Id||null}catch(e){return console.error("JWT token parsing error:",e),null}};return d?p.jsx(L,{}):r?p.jsxs(C,{children:[p.jsx(S,{pageName:`전체 ${a.length}개`}),a.map((n,e)=>{var i;return p.jsx(w,{id:n.productId,name:n.name,shipping:n.shippingFee,price:(i=n.prices[0])==null?void 0:i.setPrice},e)})]}):p.jsx(C,{children:p.jsxs(O,{children:[p.jsx(j,{variant:"h6",gutterBottom:!0,children:"북마크한 상품이 없습니다"}),p.jsx(j,{variant:"body2",color:"textSecondary",children:"로그인하고 관심 상품의 최저가 소식을 받아보세요."}),p.jsx(V,{onClick:()=>f("/signIn"),children:"로그인하기"})]})})};export{Z as default};
