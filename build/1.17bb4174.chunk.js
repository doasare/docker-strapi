"use strict";(self.webpackChunkmrc_cms=self.webpackChunkmrc_cms||[]).push([[1],{80001:($,g,s)=>{s.r(g),s.d(g,{default:()=>ds});var t=s(74081),e=s(87006),E=s(59461),D=s(44328),l=s(27279),L=s(93153),_=s(50086),i=s(32370),x=s(10701),r=s(93415),W=s(4987),C=s(73354),R=s(27875),S=s(48102),F=s(37472),N=s(74758),Q=s(70774),b=s(38566),T=s(38101),V=s(10989),z=s(86967),q=s(78031),ss=s(26784),ts=s(78665),k=s(36938),X=s(61020),es=s(51447),ns=s(73314),u=s(70627),as=s(61815),Ds=s(40464),cs=s(64797),Ms=s(85811),Os=s(47599),Ps=s(15816),ms=s(97442),gs=s(13576),hs=s(87830),Cs=s(47184),Rs=s(364),Ts=s(71563),us=s(49204),Ls=s(47853),xs=s(75719),vs=s(74919),As=s(29206),Bs=s(98934),Is=s(43433),js=s(8175);const os=()=>"todo empty role",G=({id:a,name:c,description:o,usersCount:v,icons:d,rowIndex:U,canUpdate:M})=>{const{formatMessage:A}=(0,X.Z)(),[,B]=d,O=A({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:v});return(0,t.jsxs)(L.Tr,{"aria-rowindex":U,...M?(0,e.X7)({fn:B.onClick}):{},children:[(0,t.jsx)(_.Td,{maxWidth:(0,e.Q1)(130),children:(0,t.jsx)(i.Z,{ellipsis:!0,textColor:"neutral800",children:c})}),(0,t.jsx)(_.Td,{maxWidth:(0,e.Q1)(250),children:(0,t.jsx)(i.Z,{ellipsis:!0,textColor:"neutral800",children:o})}),(0,t.jsx)(_.Td,{children:(0,t.jsx)(i.Z,{textColor:"neutral800",children:O})}),(0,t.jsx)(_.Td,{children:(0,t.jsx)(x.k,{justifyContent:"flex-end",...e.UW,children:d.map((P,I)=>P?(0,t.jsx)(r.x,{paddingLeft:I===0?0:1,children:(0,t.jsx)(W.h,{onClick:P.onClick,label:P.label,noBorder:!0,icon:P.icon})},P.label):null)})})]},a)};G.propTypes={id:u.number.isRequired,name:u.string.isRequired,description:u.string.isRequired,usersCount:u.number.isRequired,icons:u.array.isRequired,rowIndex:u.number.isRequired,canUpdate:u.bool},G.defaultProps={canUpdate:!1};const ls={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(a,c)=>(0,as.ZP)(a,o=>{switch(c.type){case"ON_REMOVE_ROLES":{o.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{o.shouldRefetchData=!0,o.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{o.shouldRefetchData=!1,o.roleToDelete=null,o.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{o.roleToDelete=c.id;break}default:return o}}),is=({canCreate:a,canDelete:c,canUpdate:o,refetchRoles:v})=>{const{formatMessage:d}=(0,X.Z)(),{formatAPIError:U}=(0,e.So)(),M=(0,e.lm)(),[A,B]=(0,l.useState)(!1),{push:O}=(0,es.k6)(),[{selectedRoles:P,showModalConfirmButtonLoading:I,roleToDelete:H},f]=(0,l.useReducer)(_s,ls),{post:Y}=(0,e.tg)(),J=async()=>{try{f({type:"ON_REMOVE_ROLES"}),await Y("/admin/roles/batch-delete",{ids:[H]}),await v(),f({type:"RESET_DATA_TO_DELETE"})}catch(n){M({type:"warning",message:U(n)})}j()},p=(0,l.useCallback)(n=>{O(`/settings/roles/duplicate/${n}`)},[O]),K=()=>O("/settings/roles/new"),y=(0,l.useCallback)(n=>{f({type:"SET_ROLE_TO_DELETE",id:n}),j()},[]),j=()=>B(n=>!n),m=(0,l.useCallback)(n=>{O(`/settings/roles/${n}`)},[O]),Z=(0,l.useCallback)((n,h)=>{n.preventDefault(),n.stopPropagation(),h.usersCount?M({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):y(h.id)},[M,y]),w=(0,l.useCallback)((n,h)=>{n.preventDefault(),n.stopPropagation(),p(h.id)},[p]),Es=(0,l.useCallback)(n=>[...a?[{onClick:h=>w(h,n),label:d({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,t.jsx)(q.Z,{})}]:[],...o?[{onClick:()=>m(n.id),label:d({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,t.jsx)(ss.Z,{})}]:[],...c?[{onClick:h=>Z(h,n),label:d({id:"global.delete",defaultMessage:"Delete"}),icon:(0,t.jsx)(ts.Z,{})}]:[]],[d,Z,w,m,a,o,c]);return{handleNewRoleClick:K,getIcons:Es,selectedRoles:P,isWarningDeleteAllOpened:A,showModalConfirmButtonLoading:I,handleToggleModal:j,handleDeleteData:J}},rs=()=>{const{formatMessage:a}=(0,X.Z)();(0,e.go)();const c=(0,E.v9)(D.s),[{query:o}]=(0,e.Kx)(),{isLoading:v,allowedActions:{canCreate:d,canDelete:U,canRead:M,canUpdate:A}}=(0,e.ss)(c.settings.roles),{roles:B,isLoading:O,refetch:P}=(0,ns.u)({filters:o?._q?{name:{$containsi:o._q}}:void 0},{cacheTime:0,enabled:!v&&M}),{handleNewRoleClick:I,getIcons:H,isWarningDeleteAllOpened:f,showModalConfirmButtonLoading:Y,handleToggleModal:J,handleDeleteData:p}=is({refetchRoles:P,canCreate:d,canDelete:U,canUpdate:A}),K=B.length+1,y=6;if(v)return(0,t.jsx)(C.o,{children:(0,t.jsx)(e.dO,{})});const j=a({id:"global.roles",defaultMessage:"roles"});return(0,t.jsxs)(C.o,{children:[(0,t.jsx)(e.SL,{name:"Roles"}),(0,t.jsx)(R.T,{primaryAction:d?(0,t.jsx)(S.z,{onClick:I,startIcon:(0,t.jsx)(k.Z,{}),size:"S",children:a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:j,subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),M&&(0,t.jsx)(F.Z,{startActions:(0,t.jsx)(e.m,{label:a({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:j})})}),M&&(0,t.jsxs)(N.D,{children:[(0,t.jsxs)(Q.i,{colCount:y,rowCount:K,footer:d?(0,t.jsx)(b.c,{onClick:I,icon:(0,t.jsx)(k.Z,{}),children:a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,t.jsx)(T.h,{children:(0,t.jsxs)(L.Tr,{"aria-rowindex":1,children:[(0,t.jsx)(_.Th,{children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(_.Th,{children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.description",defaultMessage:"Description"})})}),(0,t.jsx)(_.Th,{children:(0,t.jsx)(i.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.users",defaultMessage:"Users"})})}),(0,t.jsx)(_.Th,{children:(0,t.jsx)(V.T,{children:a({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(z.p,{children:B?.map((m,Z)=>(0,t.jsx)(G,{id:m.id,name:m.name,description:m.description,usersCount:m.usersCount,icons:H(m),rowIndex:Z+2,canUpdate:A},m.id))})]}),!K&&!O&&(0,t.jsx)(os,{})]}),(0,t.jsx)(e.QH,{isOpen:f,onConfirm:p,isConfirmButtonLoading:Y,onToggleDialog:J})]})},ds=()=>{const a=(0,E.v9)(D.s);return(0,t.jsx)(e.O4,{permissions:a.settings.roles.main,children:(0,t.jsx)(rs,{})})}},73314:($,g,s)=>{s.d(g,{u:()=>l});var t=s(27279),e=s(87006),E=s(61020),D=s(40464);const l=(L={},_={})=>{const{id:i="",...x}=L,{get:r}=(0,e.kY)(),{locale:W}=(0,E.Z)(),C=(0,e.Xe)(W,{sensitivity:"base"}),{data:R,error:S,isError:F,isLoading:N,refetch:Q}=(0,D.useQuery)(["roles",i,x],async()=>{const{data:T}=await r(`/admin/roles/${i??""}`,{params:x});return T},_);return{roles:t.useMemo(()=>{let T=[];return R&&(Array.isArray(R.data)?T=R.data:T=[R.data]),[...T].sort((V,z)=>C.compare(V.name,z.name))},[R,C]),error:S,isError:F,isLoading:N,refetch:Q}}},37472:($,g,s)=>{s.d(g,{Z:()=>E});var t=s(74081),e=s(10701);const E=({startActions:D,endActions:l})=>!D&&!l?null:(0,t.jsxs)(e.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(e.k,{gap:2,wrap:"wrap",children:D}),(0,t.jsx)(e.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},38566:($,g,s)=>{s.d(g,{c:()=>x});var t=s(74081),e=s(72450),E=s(93415),D=s(84366),l=s(10701),L=s(32370);const _=(0,e.ZP)(E.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:r})=>r.colors.primary600};
  }
`,i=(0,e.ZP)(E.x)`
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,x=({children:r,icon:W,...C})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(D.i,{}),(0,t.jsx)(i,{as:"button",background:"primary100",padding:5,...C,children:(0,t.jsxs)(l.k,{children:[(0,t.jsx)(_,{"aria-hidden":!0,background:"primary200",children:W}),(0,t.jsx)(E.x,{paddingLeft:3,children:(0,t.jsx)(L.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:r})})]})})]})}}]);
