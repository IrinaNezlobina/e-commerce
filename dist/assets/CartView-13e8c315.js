import{_ as h,u as v,r as p,o as i,c as _,d as e,F as u,a as f,t as s,h as m,p as y,i as S}from"./index-4b32f2cc.js";const C={name:"Cart",setup(){return{cartStore:v()}},methods:{addQty(t){this.cartStore.cart[t].quantity!==99&&this.cartStore.cart[t].quantity++},removeQty(t){this.cartStore.cart[t].quantity!==1&&this.cartStore.cart[t].quantity--}},computed:{total(){let t=0;return this.cartStore.cart.map(c=>{t=t+c.quantity*c.price}),t}}},k=t=>(y("data-v-32268f9f"),t=t(),S(),t),q={class:"cart"},g=k(()=>e("h1",{class:"page-title"},"Cart",-1)),F={class:"cart__inner"},I={class:"cart__list"},Q={class:"cart__title"},V={class:"cart__price"},w={class:"buttons"},x=["onClick"],B={class:""},N=["onClick"],$=["onClick"],b={class:"cart__total-container"},D={class:"cart__total"};function E(t,c,L,n,P,o){const l=p("vue-feather");return i(),_("div",q,[g,e("div",F,[e("div",I,[(i(!0),_(u,null,f(n.cartStore.cart,(a,r)=>(i(),_("div",{key:r,class:"cart__item"},[e("div",Q,s(a.title),1),e("div",V,s((a.price*a.quantity).toFixed(2)),1),e("div",w,[e("div",{class:"increment",onClick:d=>o.addQty(r)},"+ ",8,x),e("div",B,s(a.quantity),1),e("div",{class:"decrement",onClick:d=>o.removeQty(r)},"- ",8,N)]),e("div",{class:"delete",onClick:d=>n.cartStore.removeProduct(a.id)},[m(l,{type:"x"})],8,$)]))),128))]),e("div",b,[e("div",D," Total price "+s(o.total.toFixed(2)),1)])])])}const j=h(C,[["render",E],["__scopeId","data-v-32268f9f"]]);export{j as default};
