import{V as D,as as _,$ as b,c1 as x,r as o,cV as T,c as e,cW as j,cX as k,T as F,cY as L,cZ as M,c_ as R,c$ as W,j as p,au as $}from"./desk-eb7b3548-38084e75.js";const E=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e($,{})});function V(t){const{layout:n,value:c}=t;return e(k,{...E(c._id,c._type),layout:n})}function P(t,n,c){return t===!1?!1:t||n&&n.icon||c||!1}function O(t){const{icon:n,id:c,layout:i="default",pressed:v,schemaType:s,selected:r,title:u,value:a}=t,y=D(),l=_(),{ChildLink:d}=b(),m=x(c),f=Boolean(s&&s.name&&y.get(s.name)),[I,h]=o.useState(!1),g=o.useMemo(()=>a&&T(a)?!s||!f?e(V,{value:a}):e(j,{documentPreviewStore:l,icon:P(n,s,R),layout:i,schemaType:s,value:a,presence:m}):e(k,{status:e(F,{muted:!0,children:e(L,{})}),icon:P(n,s,W),layout:i,title:u}),[l,f,n,i,s,u,a,m]),C=o.useMemo(()=>function(w){return e(d,{...w,childId:c})},[d,c]),S=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(M,{__unstable_focusRing:!0,as:C,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:S,pressed:v,selected:r||I,tone:"inherit",children:g})}export{O as P};
