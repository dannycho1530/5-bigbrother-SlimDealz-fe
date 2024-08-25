import{h as t,l as s,j as i,m as r}from"./index-BV_68Uyj.js";import"./react-CWmeP4t5.js";const d=n=>r`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(${8+n}px);
    opacity: ${n/16};
  }
  100% {
    transform: translateY(0);
  }
`,a=t.header`
  width: 100%;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #7bc6cc, #be93c5);
`,l=t.h1`
  color: white;
  font-family: 'Oswald', sans-serif;
  font-size: 48px;
  text-align: center;
  div {
    display: inline-block;
    text-shadow: 2px 2px 3px #3d6366;
  }

  ${Array.from({length:11}).map((n,e)=>s`
      div:nth-child(${e+1}) {
        animation: ${d(e+1)} 3s ease-in-out ${e*.2}s infinite;
      }
    `)}
`,h=()=>i.jsx(a,{children:i.jsxs(l,{children:[i.jsx("div",{children:"C"}),i.jsx("div",{children:"O"}),i.jsx("div",{children:"M"}),i.jsx("div",{children:"I"}),i.jsx("div",{children:"N"}),i.jsx("div",{children:"G"}),i.jsx("div",{children:"  "}),i.jsx("div",{children:"S"}),i.jsx("div",{children:"O"}),i.jsx("div",{children:"O"}),i.jsx("div",{children:"N"})]})});export{h as default};
