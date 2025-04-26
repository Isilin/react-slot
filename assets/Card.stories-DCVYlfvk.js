import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as p,c as u,g as l}from"./bind-Bm8XHjoj.js";import"./index-DatCARk7.js";const h="_card_1m1wg_1",_="_separator_1m1wg_31",x={card:h,"card-header":"_card-header_1m1wg_17","card-body":"_card-body_1m1wg_22","card-footer":"_card-footer_1m1wg_26",separator:_},d=u.bind(x),a=p(({children:r})=>{const{body:o,footer:s,header:n}=l(r,a);return e.jsxs("div",{className:d("card"),children:[n&&e.jsx("div",{className:d("card-header"),children:n}),n&&(o||s)&&e.jsx(a.Separator,{}),o&&e.jsx("div",{className:d("card-body"),children:o}),o&&s&&e.jsx(a.Separator,{}),s&&e.jsx("div",{className:d("card-footer"),children:s})]})},{slots:{header:({children:r})=>e.jsx(e.Fragment,{children:r}),body:({children:r})=>e.jsx(e.Fragment,{children:r}),footer:({children:r})=>e.jsx(e.Fragment,{children:r})},extras:{Separator:()=>e.jsx("span",{className:d("separator")})}});try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const w={title:"Card",component:a,tags:["autodocs"]},t={args:{showHeader:!0,showBody:!0,showFooter:!0},render:({showHeader:r,showBody:o,showFooter:s})=>e.jsxs(a,{children:[r&&e.jsx(a.Header,{children:"Ma jolie carte"}),o&&e.jsx(a.Body,{children:"Ceci est le contenu principal de la carte. Tu peux y mettre n'importe quoi : du texte, des images, ou même d'autres composants."}),s&&e.jsx(a.Footer,{children:"Dernière mise à jour : aujourd’hui."})]})};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showHeader: true,
    showBody: true,
    showFooter: true
  },
  render: ({
    showHeader,
    showBody,
    showFooter
  }) => <Card>
      {showHeader && <Card.Header>Ma jolie carte</Card.Header>}
      {showBody && <Card.Body>
          Ceci est le contenu principal de la carte. Tu peux y mettre n'importe
          quoi : du texte, des images, ou même d'autres composants.
        </Card.Body>}
      {showFooter && <Card.Footer>Dernière mise à jour : aujourd’hui.</Card.Footer>}
    </Card>
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["Playground"];export{t as Playground,C as __namedExportsOrder,w as default};
