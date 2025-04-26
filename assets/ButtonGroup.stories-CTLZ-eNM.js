import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d,c as p,g as B}from"./bind-Bm8XHjoj.js";import"./index-DatCARk7.js";const l="_container_jp8uh_1",m="_button_jp8uh_8",_="_divider_jp8uh_16",x={container:l,button:m,divider:_},u=p.bind(x),n=d(({children:o})=>{const{button:s,others:r}=B(o,n);return t.jsxs("div",{className:u("container"),children:[Array.isArray(s)?s:[s],r]})},{slots:{button:({children:o})=>t.jsx("button",{className:u("button"),children:o})},rules:{button:"multiple"},extras:{Divider:()=>t.jsx("span",{className:u("divider")})}});try{n.displayName="ButtonGroup",n.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}}}catch{}const h={title:"ButtonGroup",component:n,tags:["autodocs"]},e={args:{nbButtons:5},render:({nbButtons:o})=>t.jsxs(n,{children:[t.jsx(n.Button,{children:"Button 1"}),t.jsx(n.Button,{children:"Button 2"}),Array.from({length:o},(s,r)=>t.jsxs(t.Fragment,{children:[r<1&&t.jsx(n.Divider,{}),t.jsxs(n.Button,{children:["Button ",r+3]},r)]}))]})};var a,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    nbButtons: 5
  },
  render: ({
    nbButtons
  }) => <ButtonGroup>
      <ButtonGroup.Button>Button 1</ButtonGroup.Button>
      <ButtonGroup.Button>Button 2</ButtonGroup.Button>
      {Array.from({
      length: nbButtons
    }, (_, index) => <>
          {index < 1 && <ButtonGroup.Divider />}
          <ButtonGroup.Button key={index}>
            Button {index + 3}
          </ButtonGroup.Button>
        </>)}
    </ButtonGroup>
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const G=["Playground"];export{e as Playground,G as __namedExportsOrder,h as default};
