import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DatCARk7.js";import{d as v,c as x,g as y}from"./bind-Bm8XHjoj.js";const h="_container_16v93_1",f="_tabs_16v93_7",j="_active_16v93_20",A="_content_16v93_25",$={container:h,tabs:f,active:j,content:A},o=x.bind($),r=v(({children:t})=>{var d;const{trigger:s,content:n}=y(t,r),i=Array.isArray(s)?s:s?[s]:[],m=Array.isArray(n)?n:n?[n]:[],[l,_]=u.useState((d=i[0])==null?void 0:d.props.value);return e.jsxs("div",{className:o("container"),children:[e.jsx("div",{className:o("tabs"),children:i.map((a,T)=>e.jsx("button",{className:o({active:l===a.props.value}),onClick:()=>_(a.props.value),children:a.props.children},T))}),e.jsx("div",{className:o("content"),children:m.find(a=>a.props.value===l)})]})},{slots:{trigger:({children:t})=>e.jsx(e.Fragment,{children:t}),content:({children:t})=>e.jsx(e.Fragment,{children:t})},rules:{trigger:"multiple",content:"multiple"}});try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{}}}catch{}const k={title:"Tabs",component:r,tags:["autodocs"]},c={args:{nbTabs:5},render:({nbTabs:t})=>e.jsxs(r,{children:[Array.from({length:t},(s,n)=>e.jsxs(r.Trigger,{value:`tab${n+1}`,children:["Tab ",n+1]},`trigger_${n}`)),Array.from({length:t},(s,n)=>e.jsxs(r.Content,{value:`tab${n+1}`,children:["Content Tab ",n+1]},`content_${n}`))]})};var b,g,p;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    nbTabs: 5
  },
  render: ({
    nbTabs
  }) => <Tabs>
      {Array.from({
      length: nbTabs
    }, (_, index) => <Tabs.Trigger key={\`trigger_\${index}\`} value={\`tab\${index + 1}\`}>
          Tab {index + 1}
        </Tabs.Trigger>)}

      {Array.from({
      length: nbTabs
    }, (_, index) => <Tabs.Content key={\`content_\${index}\`} value={\`tab\${index + 1}\`}>
          Content Tab {index + 1}
        </Tabs.Content>)}
    </Tabs>
}`,...(p=(g=c.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const E=["Playground"];export{c as Playground,E as __namedExportsOrder,k as default};
