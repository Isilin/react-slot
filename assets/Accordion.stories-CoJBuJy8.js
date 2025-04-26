import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-DatCARk7.js";import{d as u,g as A,c as j}from"./bind-Bm8XHjoj.js";const y="_container_n97s8_1",f="_item_n97s8_7",C="_trigger_n97s8_11",I="_content_n97s8_17",N={container:y,item:f,trigger:C,content:I},m=j.bind(N),i=u(({children:r,value:e,openItem:t,setOpenItem:s})=>{const{trigger:l,content:a}=A(r,i),c=g.useMemo(()=>t===e,[e,t]),h=g.useCallback(()=>s==null?void 0:s(c?null:e),[e,s,c]);return n.jsxs("div",{className:m("item"),children:[n.jsx("div",{className:m("trigger"),onClick:h,children:l}),c&&n.jsx("div",{className:m("content"),children:a})]})},{slots:{trigger:({children:r})=>n.jsx(n.Fragment,{children:r}),content:({children:r})=>n.jsx(n.Fragment,{children:r})}}),o=u(({children:r})=>{const{item:e}=A(r,o),t=Array.isArray(e)?e:e?[e]:[],[s,l]=g.useState(null);return n.jsx("div",{className:m("container"),children:t.map((a,c)=>n.jsx(i,{value:a.props.value,openItem:s,setOpenItem:l,children:a.props.children},c))})},{slots:{item:i,trigger:i.Trigger,content:i.Content},rules:{item:"multiple"}});try{o.displayName="Accordion",o.__docgenInfo={description:"",displayName:"Accordion",props:{}}}catch{}const T={title:"Accordion",component:o,tags:["autodocs"]},d={args:{nbItems:5},render:({nbItems:r})=>n.jsx(o,{children:Array.from({length:r},(e,t)=>n.jsxs(o.Item,{value:`item${t+1}`,children:[n.jsxs(o.Trigger,{children:["Item ",t+1]}),n.jsxs(o.Content,{children:["Details of item ",t+1]})]},`trigger_${t}`))})};var _,p,x;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    nbItems: 5
  },
  render: ({
    nbItems
  }) => <Accordion>
      {Array.from({
      length: nbItems
    }, (_, index) => <Accordion.Item key={\`trigger_\${index}\`} value={\`item\${index + 1}\`}>
          <Accordion.Trigger>Item {index + 1}</Accordion.Trigger>
          <Accordion.Content>Details of item {index + 1}</Accordion.Content>
        </Accordion.Item>)}
    </Accordion>
}`,...(x=(p=d.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const $=["Playground"];export{d as Playground,$ as __namedExportsOrder,T as default};
