import{G as b,am as x,r as c,j as d,K as j,c as o,ca as v,az as E,cE as H,av as I,b0 as k,aA as B,bh as y}from"./desk-eb7b3548-38084e75.js";import{useDeskTool as C}from"./index-66ec8894-ebc6f62f.js";import"./index-754cb0ed.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(E,{actions:o(H,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(I,{as:k,"data-as":"a",icon:B,mode:"bleed"}),title:i})}const z=b(x)(u||(u=O([`
  position: relative;
`])));function A(t){const{children:e}=t,{collapsed:s}=y();return o(z,{hidden:s,height:"fill",overflow:"auto",children:e})}function _(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:G,...h}=s,[l,P]=c.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(g,{actionHandlers:l==null?void 0:l.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(A,{children:[v.isValidElementType(a)&&c.createElement(a,{...r,...h,ref:P,child:i,paneKey:n}),c.isValidElement(a)&&a]})]})}export{_ as default};