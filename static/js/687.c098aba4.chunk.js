"use strict";(self.webpackChunknpa=self.webpackChunknpa||[]).push([[687],{7687:function(e,s,i){i.r(s),i.d(s,{default:function(){return f}});var a=i(74165),n=i(15861),c=i(72791),t=i(72655),l=i(44233),r=i(3007),d=i(16871),o=i(2060),u=i(66130),m=i(21619),p=i(80184),x=function(e){var s=e.product,i=(0,l.TL)(),c=(0,l.CG)((function(e){return e.basket})).sale,t=(0,d.s0)(),x=(0,o.vm)(o.xU),v=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i((0,m.n2)({id:s.id}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"productbasket__item",children:[(0,p.jsx)("div",{className:"productbasket__first",children:(0,p.jsx)("div",{className:"productbasket__blockimg",onClick:function(){t("/basket/".concat(s.id)),document.documentElement.scrollIntoView(!0)},children:(0,p.jsx)("div",{className:"productbasket__img ",style:{backgroundImage:"url(".concat(u.Ok.API_URL).concat(Array.from(Object.values(JSON.parse(s.deviceimg.img||"{}")))[0],")")}})})}),(0,p.jsxs)("div",{className:"productbasket__second",children:[(0,p.jsxs)("div",{className:"productbasket__text",children:[(0,p.jsx)("div",{className:"productbasket__name",children:(0,p.jsxs)("p",{className:"basketblock",children:[(null===s||void 0===s?void 0:s.name.length)<=15?null===s||void 0===s?void 0:s.name:null===s||void 0===s?void 0:s.name.split("").filter((function(e,s){return s<=14})).join(""),(null===s||void 0===s?void 0:s.name.length)>15&&(0,p.jsx)("span",{title:null===s||void 0===s?void 0:s.name.split("").filter((function(e,s){return s>14})).join(""),children:"..."})]})}),(0,p.jsx)("div",{className:"productbasket__category",children:(0,p.jsx)("p",{className:"mini basketblock",children:null===s||void 0===s?void 0:s.brand.name})})]}),(0,p.jsx)("div",{className:"productbasket__btnfirst",children:(0,p.jsx)(x,{product:s})})]}),(0,p.jsx)("div",{className:"productbasket__btnsecond",children:(0,p.jsx)(x,{product:s})}),(0,p.jsx)("div",{className:"productbasket__midst",children:(0,p.jsxs)("div",{className:"productbasket__price",children:[0!=c&&(0,p.jsx)("p",{className:"big sale",children:"$".concat(+(null===s||void 0===s?void 0:s.price)*s.quantity-+(null===s||void 0===s?void 0:s.price)*s.quantity/100*(c+ +(null===s||void 0===s?void 0:s.sale)))}),s.sale>0&&c<=0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:"basketblock newcols big",children:"$".concat((+(null===s||void 0===s?void 0:s.price)*(null===s||void 0===s?void 0:s.quantity)-+(null===s||void 0===s?void 0:s.price)*(null===s||void 0===s?void 0:s.quantity)/100*s.sale).toFixed(0))}),(0,p.jsx)("p",{className:"basketblock through mini",children:"$".concat(+(null===s||void 0===s?void 0:s.price)*(null===s||void 0===s?void 0:s.quantity))})]}):(0,p.jsx)("p",{className:0!=c?"mini old basketblock":"big basketblock",children:"$".concat(+(null===s||void 0===s?void 0:s.price)*(null===s||void 0===s?void 0:s.quantity))})]})}),(0,p.jsxs)("div",{className:"productbasket__end",children:[(0,p.jsx)(o.ZY,{id:s.id}),(0,p.jsx)("div",{onClick:v,className:"productbasket__delete",children:(0,p.jsx)(r.r,{})})]})]})},v=function(){var e=(0,l.CG)((function(e){return e.basket})).products;return(0,p.jsx)("div",{className:"productbasket__goods",children:e.map((function(e){return(0,p.jsx)(x,{product:e},e.id)}))})},_=i(61134),h=i(33186),j=function(){var e=(0,_.cI)({mode:"onChange"}),s=e.register,i=e.formState.errors,a=e.handleSubmit,n=e.setValue,t=(0,l.TL)(),r=(0,l.CG)((function(e){return e.basket})).sale;return(0,c.useEffect)((function(){r>0&&n("code","abcAD55")}),[]),(0,p.jsxs)("form",{onSubmit:a((function(){r>0?(t((0,m.ev)({sale:0})),n("code","")):t((0,m.ev)({sale:10}))})),className:"setsale",children:[(0,p.jsx)("div",{className:"setsale__input",children:(0,p.jsx)(h.Z,{register:s,type:"text",setValue:n,errors:i,name:"code",textFiled:"Promocode"})}),(0,p.jsx)("div",{className:"setsale__btn",children:(0,p.jsx)(o.zx,{name:"sale",children:(0,p.jsx)("p",{className:"mini",children:0!=r?"delete":"apply"})})})]})},b=i(96368),N=function(){var e=(0,l.CG)((function(e){return e.basket})),s=e.sale,i=e.products;return(0,p.jsx)("div",{className:"totalprice",children:0!=s?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"totalprice__price totalprice__block",children:[(0,p.jsx)("div",{className:"totalprice__text",children:(0,p.jsx)("p",{className:"mini",children:"Price without discount"})}),(0,p.jsx)("div",{className:"totalprice__number",children:(0,p.jsx)("p",{className:"basket",children:"".concat((0,b.a3)(i),"$")})})]}),(0,p.jsxs)("div",{className:"totalprice__sale totalprice__block",children:[(0,p.jsx)("div",{className:"totalprice__text",children:(0,p.jsx)("p",{className:"mini",children:"Discount"})}),(0,p.jsx)("div",{className:"totalprice__number",children:(0,p.jsx)("p",{className:"mini",children:"10%"})})]}),(0,p.jsxs)("div",{className:"totalprice__total totalprice__block",children:[(0,p.jsx)("div",{className:"totalprice__text",children:(0,p.jsx)("p",{className:"mini",children:"Total "})}),(0,p.jsx)("div",{className:"totalprice__number",children:(0,p.jsx)("p",{className:" sale",children:"".concat((0,b.f6)(i,s),"$")})})]})]}):(0,p.jsxs)("div",{className:"totalprice__total notprice totalprice__block",children:[(0,p.jsx)("div",{className:"totalprice__text",children:(0,p.jsx)("p",{className:"mini",children:"Price without discount "})}),(0,p.jsx)("div",{className:"totalprice__number",children:(0,p.jsx)("p",{children:"".concat((0,b.a3)(i),"$")})})]})})},f=function(){var e=(0,l.TL)(),s=(0,d.s0)();(0,c.useEffect)((function(){document.title="Basket"}),[]);var i=function(){var i=(0,n.Z)((0,a.Z)().mark((function i(){return(0,a.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e((0,m.SB)());case 2:s("/shop");case 3:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}();return(0,p.jsx)("div",{className:"basket  indent_last",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"basket__row",children:[(0,p.jsxs)("div",{className:"pageonebas__header",children:[(0,p.jsxs)("div",{className:"pageonebas__logo",children:[(0,p.jsx)("div",{className:"pageonebas__img",children:(0,p.jsx)(t.r,{})}),(0,p.jsx)("div",{className:"pageonebas__title",children:(0,p.jsx)("h3",{children:"Basket"})})]}),(0,p.jsx)("div",{className:"pageonebas__clear",children:(0,p.jsx)("p",{onClick:i,className:"mini",children:"Clear for basket"})})]}),(0,p.jsxs)("div",{className:"pageonebas",children:[(0,p.jsx)(v,{}),(0,p.jsx)("div",{className:"basket__aside scroll","data-sale":!0,children:(0,p.jsxs)("div",{className:"basket__price",children:[(0,p.jsx)(j,{}),(0,p.jsx)(N,{}),(0,p.jsx)("div",{className:"pageonebas__btn",children:(0,p.jsx)(o.zx,{name:"sign",children:(0,p.jsx)("p",{className:"mini",children:"make an order"})})})]})})]})]})})})}},33186:function(e,s,i){i.d(s,{O:function(){return u},Z:function(){return o}});var a=i(1413),n=i(72791),c=i(20269),t=i(53811),l=i(86101),r=i(44233),d=(i(14822),i(80184));function o(e){var s,i=e.type,o=e.register,u=e.name,m=e.errors,p=e.setValue,x=e.textFiled,v=m[u]&&((null===(s=m[u])||void 0===s?void 0:s.message)||"Error"),_=(0,r.CG)((function(e){return e.basket})).sale;return(0,n.useEffect)((function(){(0,t.ST)()}),[]),(0,d.jsxs)("div",{className:"inputFiled",children:[(0,d.jsxs)("div",{className:_>0?"inputFiled__block sale ":"inputFiled__block old all",children:[(0,d.jsx)("div",{className:"inputFiled__text old all",children:(0,d.jsx)("p",{className:"mini",children:x})}),(0,d.jsx)("input",(0,a.Z)((0,a.Z)({},o(u,{required:"Field must be filled",pattern:(0,l.Q)(i,u)})),{},{onChange:function(e){return function(e){_>0?p(u,"aaa"):(0,t.m)(e,p,u)}(e)},onFocus:t.T_,onBlur:t.T_,type:i}))]}),v&&(0,d.jsx)(c.Z,{err:v})]})}function u(e){var s=e.type,i=e.register,c=e.name,r=e.setValue,o=e.textFiled;return(0,n.useEffect)((function(){(0,t.ST)()}),[]),(0,d.jsx)("div",{className:"inputFiled",children:(0,d.jsxs)("div",{className:"inputFiled__block old all",children:[(0,d.jsx)("div",{className:"inputFiled__text old all",children:(0,d.jsx)("p",{className:"mini",children:o})}),(0,d.jsx)("input",(0,a.Z)((0,a.Z)({},i(c,{required:"Field must be filled",pattern:(0,l.Q)(s,c)})),{},{onChange:function(e){return(0,t.m)(e,r,c)},onFocus:t.T_,onBlur:t.T_,type:s}))]})})}}}]);
//# sourceMappingURL=687.c098aba4.chunk.js.map