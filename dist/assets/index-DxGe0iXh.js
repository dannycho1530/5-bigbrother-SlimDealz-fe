import{a as N,g as E,s as C,D as K,K as X,p,_ as n,y as b,M as Y,u as M,b as A,j as r,d as S,e as P,h as s,G as Z,H as oo,S as io,i as to}from"./index-BV_68Uyj.js";import{r as u}from"./react-CWmeP4t5.js";function ro(o){return E("MuiButton",o)}const I=N("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),ao=u.createContext({}),eo=u.createContext(void 0),no=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],lo=o=>{const{color:i,disableElevation:t,fullWidth:a,size:l,variant:e,classes:c}=o,d={root:["root",e,`${e}${p(i)}`,`size${p(l)}`,`${e}Size${p(l)}`,`color${p(i)}`,t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${p(l)}`],endIcon:["icon","endIcon",`iconSize${p(l)}`]},x=P(d,ro,c);return n({},c,x)},T=o=>n({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),so=C(K,{shouldForwardProp:o=>X(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,i)=>{const{ownerState:t}=o;return[i.root,i[t.variant],i[`${t.variant}${p(t.color)}`],i[`size${p(t.size)}`],i[`${t.variant}Size${p(t.size)}`],t.color==="inherit"&&i.colorInherit,t.disableElevation&&i.disableElevation,t.fullWidth&&i.fullWidth]}})(({theme:o,ownerState:i})=>{var t,a;const l=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],e=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return n({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":n({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:b(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},i.variant==="text"&&i.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[i.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:b(o.palette[i.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},i.variant==="outlined"&&i.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[i.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[i.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:b(o.palette[i.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},i.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:e,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},i.variant==="contained"&&i.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[i.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[i.color].main}}),"&:active":n({},i.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${I.focusVisible}`]:n({},i.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${I.disabled}`]:n({color:(o.vars||o).palette.action.disabled},i.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},i.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},i.variant==="text"&&{padding:"6px 8px"},i.variant==="text"&&i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].main},i.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},i.variant==="outlined"&&i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[i.color].mainChannel} / 0.5)`:`1px solid ${b(o.palette[i.color].main,.5)}`},i.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(t=(a=o.palette).getContrastText)==null?void 0:t.call(a,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:l,boxShadow:(o.vars||o).shadows[2]},i.variant==="contained"&&i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].contrastText,backgroundColor:(o.vars||o).palette[i.color].main},i.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},i.size==="small"&&i.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},i.size==="large"&&i.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},i.size==="small"&&i.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},i.size==="large"&&i.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},i.size==="small"&&i.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},i.size==="large"&&i.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},i.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${I.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${I.disabled}`]:{boxShadow:"none"}}),co=C("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,i)=>{const{ownerState:t}=o;return[i.startIcon,i[`iconSize${p(t.size)}`]]}})(({ownerState:o})=>n({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},T(o))),po=C("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,i)=>{const{ownerState:t}=o;return[i.endIcon,i[`iconSize${p(t.size)}`]]}})(({ownerState:o})=>n({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},T(o))),uo=u.forwardRef(function(i,t){const a=u.useContext(ao),l=u.useContext(eo),e=Y(a,i),c=M({props:e,name:"MuiButton"}),{children:d,color:x="primary",component:g="button",className:j,disabled:v=!1,disableElevation:R=!1,disableFocusRipple:y=!1,endIcon:m,focusVisibleClassName:h,fullWidth:z=!1,size:U="medium",startIcon:k,type:B,variant:G="text"}=c,H=A(c,no),$=n({},c,{color:x,component:g,disabled:v,disableElevation:R,disableFocusRipple:y,fullWidth:z,size:U,type:B,variant:G}),f=lo($),q=k&&r.jsx(co,{className:f.startIcon,ownerState:$,children:k}),J=m&&r.jsx(po,{className:f.endIcon,ownerState:$,children:m}),Q=l||"";return r.jsxs(so,n({ownerState:$,className:S(a.className,f.root,j,Q),component:g,disabled:v,focusRipple:!y,focusVisibleClassName:S(f.focusVisible,h),ref:t,type:B},H,{classes:f,children:[q,d,J]}))});function xo(o){return E("MuiDivider",o)}N("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const go=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],vo=o=>{const{absolute:i,children:t,classes:a,flexItem:l,light:e,orientation:c,textAlign:d,variant:x}=o;return P({root:["root",i&&"absolute",x,e&&"light",c==="vertical"&&"vertical",l&&"flexItem",t&&"withChildren",t&&c==="vertical"&&"withChildrenVertical",d==="right"&&c!=="vertical"&&"textAlignRight",d==="left"&&c!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",c==="vertical"&&"wrapperVertical"]},xo,a)},ho=C("div",{name:"MuiDivider",slot:"Root",overridesResolver:(o,i)=>{const{ownerState:t}=o;return[i.root,t.absolute&&i.absolute,i[t.variant],t.light&&i.light,t.orientation==="vertical"&&i.vertical,t.flexItem&&i.flexItem,t.children&&i.withChildren,t.children&&t.orientation==="vertical"&&i.withChildrenVertical,t.textAlign==="right"&&t.orientation!=="vertical"&&i.textAlignRight,t.textAlign==="left"&&t.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:o,ownerState:i})=>n({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(o.vars||o).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:o.vars?`rgba(${o.vars.palette.dividerChannel} / 0.08)`:b(o.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:o.spacing(2),marginRight:o.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:o.spacing(1),marginBottom:o.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:o})=>n({},o.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:o,ownerState:i})=>n({},i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(o.vars||o).palette.divider}`,borderTopStyle:"inherit"}}),({theme:o,ownerState:i})=>n({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(o.vars||o).palette.divider}`,borderLeftStyle:"inherit"}}),({ownerState:o})=>n({},o.textAlign==="right"&&o.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},o.textAlign==="left"&&o.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),fo=C("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(o,i)=>{const{ownerState:t}=o;return[i.wrapper,t.orientation==="vertical"&&i.wrapperVertical]}})(({theme:o,ownerState:i})=>n({display:"inline-block",paddingLeft:`calc(${o.spacing(1)} * 1.2)`,paddingRight:`calc(${o.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${o.spacing(1)} * 1.2)`,paddingBottom:`calc(${o.spacing(1)} * 1.2)`})),D=u.forwardRef(function(i,t){const a=M({props:i,name:"MuiDivider"}),{absolute:l=!1,children:e,className:c,component:d=e?"div":"hr",flexItem:x=!1,light:g=!1,orientation:j="horizontal",role:v=d!=="hr"?"separator":void 0,textAlign:R="center",variant:y="fullWidth"}=a,m=A(a,go),h=n({},a,{absolute:l,component:d,flexItem:x,light:g,orientation:j,role:v,textAlign:R,variant:y}),z=vo(h);return r.jsx(ho,n({as:d,className:S(z.root,c),role:v,ref:t,ownerState:h},m,{children:e?r.jsx(fo,{className:z.wrapper,ownerState:h,children:e}):null}))});D.muiSkipListHighlight=!0;const bo=s.div`
  width: 390px;
  height: 100px;
  padding: 10px 5px 20px 5px;
  overflow: hidden;
`,w=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`,Co=s.div`
  display: flex;
  margin: 15px 5px 10px 5px;
  overflow-x: auto; /* 가로 스크롤 활성화 */
  white-space: nowrap; /* 자식 요소들이 한 줄에 나열되도록 설정 */
  width: 100%; /* 부모 컨테이너의 너비에 맞춤 */
  box-sizing: border-box; /* 패딩이 너비에 포함되도록 설정 */
  gap: 5px; /* SearchWord들 사이에 5px 간격 추가 */

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 엣지에서 스크롤바 숨기기 */
  }
  -ms-overflow-style: none; /* IE 및 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
`,yo=s.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
`,V=({searchName:o})=>r.jsx(mo,{children:r.jsx(zo,{children:o})}),mo=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: auto;
  padding: 8px;
  border-radius: 20px;
  background-color: #f2f2f7;
`,zo=s.div`
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;var W={},$o=oo;Object.defineProperty(W,"__esModule",{value:!0});var _=W.default=void 0,Io=$o(Z()),jo=r;_=W.default=(0,Io.default)((0,jo.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"ClearRounded");const F=({searchWord:o,isPopular:i=!1,showClearIcon:t=!1})=>{const[a,l]=u.useState(!0),[e,c]=u.useState(o),d=()=>{l(!1)};if(!a)return null;const x=e.length>16?e.slice(0,16)+"...":e,g=i?Ro:O;return r.jsxs(g,{children:[r.jsx(So,{children:x}),t&&r.jsx(Wo,{onClick:d,children:r.jsx(_,{sx:{fontSize:15}})})]})},O=s.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 30px;
  padding: 5px 10px 5px 15px;
  border-radius: 10px;
  background-color: #f2f2f7;
`,Ro=s(O)`
  width: 140px;
  background-color: #f2f2f7;
`,So=s.div`
  text-align: left;
  font-size: 12px;
  color: black;
`,Wo=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,ko=s.div`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;s.div`
  display: flex;
  position: relative;
  justify-content: left;
  margin-bottom: 10px;
`;const Bo=s.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 10px 0 10px;
`,Lo=()=>{const o=["1. 닭가슴살 요리법","6. 닭가슴살 샐러드","2. 닭가슴살 칼로리","7. 닭가슴살 다이어트","3. 닭가슴살 소스","8. 닭가슴살 배달","4. 닭가슴살 영양성분","9. 닭가슴살 요리 추천","5. 닭가슴살 도시락","10. 닭가슴살 구매처"];return r.jsxs(ko,{children:[r.jsx(w,{children:r.jsx(V,{searchName:"인기 검색어"})}),r.jsx(Bo,{children:o.map((i,t)=>r.jsx(F,{searchWord:i,isPopular:!0},t))})]})},No=()=>{const o=["React","JavaScript","TypeScript","CSS","HTML","Node.js","Express","MongoDB","GraphQL","Redux","MUI","styled-components","Webpack","Babel","REST API","Axios","Jest","Next.js","Gatsby","ESLint"],[i,t]=u.useState(o),a=()=>{t([])};return r.jsxs(bo,{children:[r.jsxs(w,{children:[r.jsx(V,{searchName:"최근 검색어"}),i.length>0&&r.jsx(uo,{variant:"contained",sx:{backgroundColor:"#f2f2f7",textAlign:"center",fontSize:"13px",fontWeight:"bold",color:"black",padding:"5px",borderRadius:"15px",boxShadow:"none","&:hover":{backgroundColor:"#e0e0e0"}},onClick:a,children:"전체 삭제"})]}),r.jsx(Co,{children:i.length>0?i.map((l,e)=>r.jsx(F,{searchWord:l,showClearIcon:!0},e)):r.jsx(yo,{children:"최근 검색어가 존재하지 않습니다."})})]})},Eo=s.ul`
  margin-top: 100px;
  padding: 10px;
  list-style-type: none;
  position: absolute;
  width: 390px;
  height: auto;
  overflow-y: auto;
  z-index: 1;
`,Mo=s.li`
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
  font-size: 12px;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`,Ao=({onSearch:o})=>{const i=["닭가슴살","닭가슴살 샐러드","닭가슴살 요리법","닭가슴살 도시락","닭가슴살 칼로리","닭가슴살 다이어트","닭가슴살 구매처","닭가슴살 영양성분","닭가슴살 소스","닭가슴살 배달"];return r.jsx(r.Fragment,{children:i.length>0&&r.jsx(Eo,{children:i.map((t,a)=>r.jsx(Mo,{onClick:()=>o(t),children:t},a))})})},L=s.div`
  display: ${({display:o})=>o||"block"};
  width: ${({width:o})=>o||"auto"};
  height: ${({height:o})=>o||"auto"};
  justify-content: ${({justifyContent:o})=>o||"flex-start"};
  align-items: ${({alignItems:o})=>o||"flex-start"};
  flex-direction: ${({flexDirection:o})=>o||"row"};
  padding: ${({padding:o})=>o||"0"};
  margin: ${({margin:o})=>o||"0"};
  background-color: ${({backgroundColor:o})=>o||"transparent"};
`,Do=()=>{const{searchQuery:o}=u.useContext(io),i=to(),t=a=>{console.log(`Selected search word: ${a}`)};return u.useEffect(()=>{i(location.pathname,{replace:!0})},[i]),r.jsx(r.Fragment,{children:o?r.jsx(L,{children:r.jsx(Ao,{onSearch:t})}):r.jsxs(L,{children:[r.jsx(No,{}),r.jsx(D,{sx:{my:2,borderColor:"rgba(0, 0, 0, 0.1)",width:"90%",mx:"auto"}}),r.jsx(Lo,{})]})})};export{Do as default};
