import{$ as e,A as t,Ct as n,Et as r,Gt as i,Kt as a,S as o,St as s,T as c,Wt as l,_ as u,at as d,bt as f,ct as p,et as m,it as h,k as g,lt as _,m as v,mt as y,nt as b,ot as x,qt as S,rt as C,ut as w,vt as T,x as E,yt as D}from"./useApi-CROJJdhE-CJExW-Vr.js";import{i as ee}from"./pinia-NueYZ2UU.js";import{t as te}from"./baseeditableholder-IFr-Hkpr.js";import{n as O,o as k,r as A}from"./index-SQ2JgUfh.js";var j={name:`star`,meta:{tags:[`star`,`favorite`,`rate`,`like`,`highlight`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M10.0001 1.25C10.2856 1.25006 10.5467 1.41196 10.673 1.66797L13.0968 6.58301L18.5177 7.36816C18.8 7.40916 19.0348 7.60664 19.1232 7.87793C19.2115 8.14931 19.1379 8.44712 18.9337 8.64648L15.0148 12.4707L15.9396 17.874C15.9875 18.1551 15.8714 18.4388 15.6408 18.6064C15.41 18.7741 15.1043 18.7965 14.8517 18.6641L10.0001 16.1162L5.14858 18.6641C4.89599 18.7967 4.59033 18.7741 4.35951 18.6064C4.12879 18.4388 4.01278 18.1551 4.06069 17.874L4.98354 12.4717L1.06655 8.64648C0.862294 8.4471 0.788738 8.14934 0.877092 7.87793C0.96549 7.60654 1.20009 7.40907 1.48256 7.36816L6.90248 6.58301L9.32729 1.66797L9.381 1.57715C9.51942 1.37444 9.75021 1.25 10.0001 1.25ZM8.0724 7.60156C7.96309 7.82314 7.75151 7.97734 7.50698 8.0127L3.20131 8.63477L6.31362 11.6729C6.4899 11.8449 6.57079 12.0931 6.52944 12.3359L5.79408 16.6299L9.65151 14.6055L9.73549 14.5684C9.93448 14.4933 10.1579 14.5053 10.3488 14.6055L14.2052 16.6299L13.4708 12.3359C13.4295 12.0931 13.5094 11.8449 13.6857 11.6729L16.798 8.63477L12.4923 8.0127C12.2479 7.97727 12.0362 7.82306 11.9269 7.60156L9.99916 3.69531L8.0724 7.60156Z`,fill:`currentColor`,key:`wt5vek`}]]},M=_({name:`Star`,inheritAttrs:!1,__name:`star`,setup(e){let{Icon:t}=E(j);return(e,n)=>(f(),h(l(t),a(w(e.$attrs)),null,16))}}),N={name:`star-fill`,meta:{tags:[`star-fill`,`favorite`,`rate`,`like`,`full-star`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M10.0003 1.25C10.2857 1.25012 10.5469 1.41201 10.6732 1.66797L13.097 6.58301L18.5179 7.36816C18.8002 7.40922 19.035 7.60669 19.1234 7.87793C19.2116 8.14926 19.1381 8.44713 18.9339 8.64648L15.015 12.4707L15.9398 17.874C15.9876 18.155 15.8715 18.4388 15.6409 18.6064C15.4102 18.7741 15.1044 18.7965 14.8519 18.6641L10.0003 16.1162L5.14876 18.6641C4.89621 18.7966 4.5905 18.774 4.3597 18.6064C4.12897 18.4388 4.01296 18.1551 4.06087 17.874L4.98372 12.4717L1.06673 8.64648C0.862475 8.4471 0.78892 8.14934 0.877274 7.87793C0.965683 7.60656 1.20029 7.40906 1.48274 7.36816L6.90266 6.58301L9.32747 1.66797L9.38118 1.57715C9.51961 1.37448 9.75042 1.25 10.0003 1.25Z`,fill:`currentColor`,key:`ix0gw9`}]]},P=_({name:`StarFill`,inheritAttrs:!1,__name:`star-fill`,setup(e){let{Icon:t}=E(N);return(e,n)=>(f(),h(l(t),a(w(e.$attrs)),null,16))}}),F=c.extend({name:`rating`,style:`
    .p-rating {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: dt('rating.gap');
    }

    .p-rating[data-orientation="vertical"] {
        flex-direction: column;
    }

    .p-rating-option {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        outline-color: transparent;
        border-radius: 50%;
        color: dt('rating.icon.color');
        transition:
            background dt('rating.transition.duration'),
            color dt('rating.transition.duration'),
            border-color dt('rating.transition.duration'),
            outline-color dt('rating.transition.duration'),
            box-shadow dt('rating.transition.duration');
    }

    .p-rating-option.p-focus-visible {
        box-shadow: dt('rating.focus.ring.shadow');
        outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');
        outline-offset: dt('rating.focus.ring.offset');
    }

    .p-rating[data-disabled] .p-rating-option,
    .p-rating[data-readonly] .p-rating-option {
        cursor: default;
    }

    .p-rating:not([data-disabled]) .p-rating-option:hover,
    .p-rating:not([data-readonly]) .p-rating-option:hover {
        color: dt('rating.icon.hover.color');
    }

    .p-rating-option[data-highlighted] {
        color: dt('rating.icon.active.color');
    }

    .p-rating-option svg,
    .p-rating-option i {
        font-size: dt('rating.icon.size');
        width: dt('rating.icon.size');
        height: dt('rating.icon.size');
    }

    .p-rating-on-icon {
        display: flex;
        position: absolute;
        inset: 0;
        overflow: hidden;
        z-index: 1;
        clip-path: inset(0 100% 0 0);
    }

    .p-rating-option[data-highlighted] .p-rating-on-icon {
        clip-path: none;
    }

    .p-rating-option[data-half] .p-rating-on-icon {
        clip-path: inset(0 50% 0 0);
    }

    .p-rating-on-icon[data-orientation="vertical"] {
        clip-path: inset(0 0 100% 0);
    }

    .p-rating-option[data-highlighted] .p-rating-on-icon[data-orientation="vertical"] {
        clip-path: none;
    }

    .p-rating-option[data-half] .p-rating-on-icon[data-orientation="vertical"] {
        clip-path: inset(0 0 50% 0);
    }

    .p-rating-off-icon {
        display: flex;
    }
`,classes:{root:function(e){var t=e.props;return[`p-rating p-component`,{"p-disabled":t.disabled,"p-readonly":t.readonly}]},option:`p-rating-option`,onIcon:`p-rating-on-icon`,offIcon:`p-rating-off-icon`}}),I={name:`Rating`,extends:{name:`BaseRating`,extends:te,props:{readonly:{type:Boolean,default:!1},stars:{type:Number,default:5},allowHalf:{type:Boolean,default:!1},orientation:{type:String,default:`horizontal`},onIcon:{type:String,default:void 0},offIcon:{type:String,default:void 0}},style:F,provide:function(){return{$pcRating:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],optionEls:null,data:function(){return{hovering:!1,hoveringValue:0}},beforeUpdate:function(){this.optionEls=null},methods:{getPTOptions:function(e,t){return this.ptm(e,{context:{highlighted:this.isHighlighted(t),half:this.isHalf(t),checked:this.isChecked(t)}})},optionRef:function(e,t){this.optionEls||=[],this.optionEls[t]=e},startHover:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.d_value??0;!this.disabled&&!this.readonly&&(this.hoveringValue=e,this.hovering=!0)},stopHover:function(){!this.disabled&&!this.readonly&&(this.hovering=!1,this.hoveringValue=0)},resolvePointerValue:function(e,t,n){if(this.allowHalf&&t){var r=t.getBoundingClientRect();return(this.orientation===`vertical`?e.clientY<r.top+r.height/2:e.clientX<r.left+r.width/2)?n+.5:n+1}return n+1},resolveSelectedValue:function(e){return this.d_value===e?null:e},updateValue:function(e,t){this.writeValue(t,e),this.$emit(`change`,{originalEvent:e,value:t})},onPointerEnter:function(){this.disabled||this.readonly||this.startHover()},onPointerMove:function(){!this.disabled&&!this.readonly&&!this.hovering&&this.startHover()},onPointerLeave:function(){this.disabled||this.readonly||this.stopHover()},onFocusIn:function(e){if(!(this.disabled||this.readonly)){var t=e.target;t&&t.type===`radio`&&t.name===this.inputName&&(this.startHover(parseFloat(t.value)),this.$emit(`focus`,e))}},onFocusOut:function(e){if(!(this.disabled||this.readonly)&&!e.currentTarget.contains(e.relatedTarget)){var t,n;this.stopHover(),(t=(n=this.formField).onBlur)==null||t.call(n),this.$emit(`blur`,e)}},onIconPointerMove:function(e,t){this.disabled||this.readonly||this.startHover(this.resolvePointerValue(e,this.optionEls?.[t],t))},onIconClick:function(e,t){this.disabled||this.readonly||this.updateValue(e,this.resolveSelectedValue(this.resolvePointerValue(e,this.optionEls?.[t],t)))},onInputChange:function(e,t){this.disabled||this.readonly||this.updateValue(e,this.resolveSelectedValue(t))},starAriaLabel:function(e){var t,n=(t=this.$primevue)==null||(t=t.config)==null||(t=t.locale)==null?void 0:t.aria;return n?e===1?n.star:n.stars.replace(/{star}/g,e):String(e)}},computed:{inputName:function(){return this.name||g(`rating-`)},activeValue:function(){return this.hovering?this.hoveringValue:this.d_value??0},isHighlighted:function(){var e=this;return function(t){var n=t-1;return n>=0&&e.activeValue>n}},isHalf:function(){var e=this;return function(t){var n=t-1;return e.allowHalf&&n>=0&&e.activeValue>n&&e.activeValue===n+.5}},isChecked:function(){var e=this;return function(t){var n=t-1;return n>=0&&(e.activeValue===n+1||e.allowHalf&&e.activeValue===n+.5)}}},components:{StarFill:P,Star:M}},L=[`data-orientation`,`data-disabled`,`data-readonly`],R=[`data-index`,`data-highlighted`,`data-half`,`data-checked`],z=[`name`,`value`,`checked`,`disabled`,`readonly`,`aria-readonly`,`aria-label`,`onChange`],B=[`name`,`value`,`checked`,`disabled`,`readonly`,`aria-readonly`,`aria-label`,`onChange`],V=[`data-orientation`,`onPointermove`,`onClick`],H=[`onPointermove`,`onClick`];function U(t,a,o,c,l,u){return f(),x(`span`,y({class:t.cx(`root`),"data-orientation":t.orientation,"data-disabled":t.disabled?``:void 0,"data-readonly":t.readonly?``:void 0},t.ptmi(`root`),{onPointerenter:a[2]||=function(){return u.onPointerEnter&&u.onPointerEnter.apply(u,arguments)},onPointermove:a[3]||=function(){return u.onPointerMove&&u.onPointerMove.apply(u,arguments)},onPointerleave:a[4]||=function(){return u.onPointerLeave&&u.onPointerLeave.apply(u,arguments)},onFocusin:a[5]||=function(){return u.onFocusIn&&u.onFocusIn.apply(u,arguments)},onFocusout:a[6]||=function(){return u.onFocusOut&&u.onFocusOut.apply(u,arguments)}}),[(f(!0),x(m,null,s(t.stars,function(o){return f(),x(`span`,y({key:o,ref_for:!0,ref:function(e){return u.optionRef(e,o-1)},class:t.cx(`option`),"data-index":o-1,"data-highlighted":u.isHighlighted(o)?``:void 0,"data-half":u.isHalf(o)?``:void 0,"data-checked":u.isChecked(o)?``:void 0},{ref_for:!0},u.getPTOptions(`option`,o)),[t.allowHalf?(f(),x(`input`,y({key:0,type:`radio`,class:`p-hidden-accessible`,name:u.inputName,value:o-.5,checked:t.d_value===o-.5,disabled:t.disabled,readonly:t.readonly,"aria-readonly":t.readonly||void 0,"aria-label":u.starAriaLabel(o-.5),onChange:function(e){return u.onInputChange(e,o-.5)},"data-p-hidden-accessible":!0},{ref_for:!0},t.ptm(`halfInput`)),null,16,z)):d(``,!0),C(`input`,y({type:`radio`,class:`p-hidden-accessible`,name:u.inputName,value:o,checked:t.d_value===o,disabled:t.disabled,readonly:t.readonly,"aria-readonly":t.readonly||void 0,"aria-label":u.starAriaLabel(o),onChange:function(e){return u.onInputChange(e,o)},"data-p-hidden-accessible":!0},{ref_for:!0},t.ptm(`fullInput`)),null,16,B),C(`span`,y({class:t.cx(`onIcon`),"data-orientation":t.orientation,onPointermove:function(e){return u.onIconPointerMove(e,o-1)},onClick:function(e){return u.onIconClick(e,o-1)},onMousedown:a[0]||=e(function(){},[`prevent`])},{ref_for:!0},t.ptm(`onIcon`)),[n(t.$slots,`onicon`,{value:o},function(){return[(f(),h(r(t.onIcon?`span`:`StarFill`),{class:i(t.onIcon)},null,8,[`class`]))]})],16,V),C(`span`,y({class:t.cx(`offIcon`),onPointermove:function(e){return u.onIconPointerMove(e,o-1)},onClick:function(e){return u.onIconClick(e,o-1)},onMousedown:a[1]||=e(function(){},[`prevent`])},{ref_for:!0},t.ptm(`offIcon`)),[n(t.$slots,`officon`,{value:o},function(){return[(f(),h(r(t.offIcon?`span`:`Star`),{class:i(t.offIcon)},null,8,[`class`]))]})],16,H)],16,R)}),128))],16,L)}I.render=U;var W=c.extend({name:`tag`,style:`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,classes:{root:function(e){var t=e.props;return[`p-tag p-component`,{"p-tag-info":t.severity===`info`,"p-tag-success":t.severity===`success`,"p-tag-warn":t.severity===`warn`,"p-tag-danger":t.severity===`danger`,"p-tag-secondary":t.severity===`secondary`,"p-tag-contrast":t.severity===`contrast`,"p-tag-rounded":t.rounded}]},icon:`p-tag-icon`,label:`p-tag-label`}}),G={name:`BaseTag`,extends:o,props:{value:null,severity:null,rounded:Boolean,icon:String},style:W,provide:function(){return{$pcTag:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function q(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=Y(e,`string`);return K(t)==`symbol`?t:t+``}function Y(e,t){if(K(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(K(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var X={name:`Tag`,extends:G,inheritAttrs:!1,computed:{dataP:function(){return t(q({rounded:this.rounded},this.severity,this.severity))}}},Z=[`data-p`];function Q(e,t,i,a,o,s){return f(),x(`span`,y({class:e.cx(`root`),"data-p":s.dataP},e.ptmi(`root`)),[e.$slots.icon?(f(),h(r(e.$slots.icon),y({key:0,class:e.cx(`icon`)},e.ptm(`icon`)),null,16,[`class`])):e.icon?(f(),x(`span`,y({key:1,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`)),null,16)):d(``,!0),e.value!=null||e.$slots.default?n(e.$slots,`default`,{key:2},function(){return[C(`span`,y({class:e.cx(`label`)},e.ptm(`label`)),S(e.value),17)]}):d(``,!0)],16,Z)}X.render=Q;var ne={key:0,class:`py-8`},re={class:`grid grid-cols-1 lg:grid-cols-2 gap-10`},ie={class:`rounded-xl bg-stone-800 p-6 flex justify-center`},ae=[`src`,`alt`],oe={class:`flex gap-3 mt-4 overflow-x-auto`},se=[`src`],ce={class:`space-y-5`},le={class:`uppercase text-sm text-emerald-400`},ue={class:`text-4xl font-bold mt-2`},de={class:`text-stone-400 mt-2`},fe={class:`flex items-center gap-3`},pe={class:`flex items-center gap-3`},me={class:`text-3xl font-bold text-emerald-400`},he={class:`line-through text-stone-400`},ge={class:`text-sm text-red-400 mt-1`},_e={class:`leading-7`},ve={class:`flex gap-4`},ye={class:`flex gap-4 items-center mt-6`},be={class:`px-2 self-center`},$={class:`border border-stone-700 rounded-lg p-4 space-y-2`},xe={class:`mt-12`},Se={class:`grid grid-cols-1 md:grid-cols-2 gap-4`},Ce={class:`bg-stone-100 dark:bg-stone-800 rounded-lg p-4`},we={class:`bg-stone-100 dark:bg-stone-800 rounded-lg p-4`},Te={class:`bg-stone-100 dark:bg-stone-800 rounded-lg p-4`},Ee={class:`bg-stone-100 dark:bg-stone-800 rounded-lg p-4`},De={class:`mt-12`},Oe={class:`space-y-4`},ke={class:`flex justify-between`},Ae={class:`mt-3`},je={key:1,class:`w-full flex justify-center mt-10`},Me={__name:`Product`,setup(t){let n=O(),r=A(),i=v(),{productDetails:a}=ee(n),o=b(()=>a.value?r.getQuantity(a.value?.id):0),c=b(()=>{if(a.value)return{...a.value,quantity:o.value}}),d=b(()=>{let e=a.value?.price??0;return(e-e*(a.value?.discountPercentage??0)/100).toFixed(2)}),g=e=>{e.quantity=e.quantity<=1?0:e.quantity-1,r.reduceQuantity(e),n.updateProduct(e)},_=e=>{e.quantity+=1,r.addItem(e),n.updateProduct(e)},y=e=>{let t=e?.quantity??0;t++,e.quantity=t,r.addItem(e),n.updateProduct(e)};return T(()=>{n.fetchSingleProduct(parseInt(i.params.id))}),D(()=>{n.resetSingleProduct()}),(t,n)=>l(a)?(f(),x(`div`,ne,[C(`div`,re,[C(`section`,null,[C(`div`,ie,[C(`img`,{src:l(a).thumbnail,alt:l(a).title,class:`h-96 w-full object-contain`},null,8,ae)]),C(`div`,oe,[(f(!0),x(m,null,s(l(a).images,e=>(f(),x(`img`,{key:e,src:e,class:`h-20 w-20 rounded object-contain bg-stone-700 p-2 cursor-pointer hover:ring-2 hover:ring-emerald-500`},null,8,se))),128))])]),C(`section`,ce,[C(`div`,null,[C(`p`,le,S(l(a).category),1),C(`h1`,ue,S(l(a).title),1),C(`p`,de,S(l(a).brand),1)]),C(`div`,fe,[p(l(I),{modelValue:l(a).rating,readonly:``,cancel:!1},null,8,[`modelValue`]),C(`span`,null,S(l(a).rating)+`/5 `,1)]),C(`div`,null,[C(`div`,pe,[C(`span`,me,`$`+S(d.value),1),C(`span`,he,` $`+S(l(a).price),1)]),C(`p`,ge,S(l(a).discountPercentage)+`% OFF`,1)]),C(`p`,_e,S(l(a).description),1),C(`div`,ve,[p(l(X),{value:l(a).availabilityStatus,severity:`success`},null,8,[`value`]),p(l(X),{value:`30 days return`,severity:`info`})]),C(`div`,ye,[o.value>=1?(f(),x(m,{key:0},[p(l(u),{label:`-`,onClick:n[0]||=e(e=>g(c.value),[`stop`])}),C(`p`,be,S(o.value??0),1),p(l(u),{class:`bg-green-800`,label:`+`,onClick:n[1]||=e(e=>_(c.value),[`stop`]),disabled:o.value>=c.value.stock},null,8,[`disabled`])],64)):(f(),h(l(u),{key:1,label:`Add to Cart`,icon:`pi pi-shopping-cart`,onClick:n[2]||=e(e=>y(c.value),[`stop`])})),p(l(u),{label:`Buy Now`,severity:`secondary`})]),C(`div`,$,[C(`p`,null,`🚚 `+S(l(a).shippingInformation),1),C(`p`,null,`🛡 `+S(l(a).warrantyInformation),1),C(`p`,null,`↩ `+S(l(a).returnPolicy),1)])])]),C(`section`,xe,[n[7]||=C(`h2`,{class:`text-2xl font-bold mb-6`},`Product Details`,-1),C(`div`,Se,[C(`div`,Ce,[n[3]||=C(`p`,null,`SKU`,-1),C(`strong`,null,S(l(a).sku),1)]),C(`div`,we,[n[4]||=C(`p`,null,`Stock`,-1),C(`strong`,null,S(l(a).stock),1)]),C(`div`,Te,[n[5]||=C(`p`,null,`Weight`,-1),C(`strong`,null,S(l(a).weight)+`g`,1)]),C(`div`,Ee,[n[6]||=C(`p`,null,`Dimensions`,-1),C(`strong`,null,S(l(a).dimensions.width)+` × `+S(l(a).dimensions.height)+` × `+S(l(a).dimensions.depth),1)])])]),C(`section`,De,[n[8]||=C(`h2`,{class:`text-2xl font-bold mb-6`},`Reviews`,-1),C(`div`,Oe,[(f(!0),x(m,null,s(l(a).reviews,e=>(f(),x(`div`,{key:e.date,class:`bg-stone-100 dark:bg-stone-800 rounded-lg p-5`},[C(`div`,ke,[C(`strong`,null,S(e.reviewerName),1),p(l(I),{modelValue:e.rating,readonly:``,cancel:!1},null,8,[`modelValue`])]),C(`p`,Ae,S(e.comment),1)]))),128))])])])):(f(),x(`div`,je,[p(l(k))]))}};export{Me as default};