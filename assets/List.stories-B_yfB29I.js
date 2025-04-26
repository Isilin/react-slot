import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d,g as p,c as _}from"./bind-Bm8XHjoj.js";import"./index-DatCARk7.js";const g="_list_17vou_1",u={list:g},x=_.bind(u),e=d(({children:t})=>{const{item:r,others:n}=p(t,e);return s.jsxs("ul",{className:x("list"),children:[Array.isArray(r)?r.map((c,l)=>s.jsx("li",{children:c},l)):s.jsx("li",{children:r}),n]})},{slots:{item:({children:t})=>s.jsx(s.Fragment,{children:t})},rules:{item:"multiple"}});try{e.displayName="List",e.__docgenInfo={description:"",displayName:"List",props:{}}}catch{}const j={title:"List",component:e,tags:["autodocs"]},o={args:{nbItems:5},render:({nbItems:t})=>s.jsx(e,{children:Array.from({length:t},(r,n)=>s.jsxs(e.Item,{children:["Item ",n+1]},n))})};var a,i,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    nbItems: 5
  },
  render: ({
    nbItems
  }) => <List>
      {Array.from({
      length: nbItems
    }, (_, index) => <List.Item key={index}>Item {index + 1}</List.Item>)}
    </List>
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const L=["Playground"];export{o as Playground,L as __namedExportsOrder,j as default};
