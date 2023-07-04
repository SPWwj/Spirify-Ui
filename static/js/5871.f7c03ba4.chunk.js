(self.webpackChunkspirify=self.webpackChunkspirify||[]).push([[5871],{55871:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(29439),o=n(72791),a="https://js.stripe.com/v3",i=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,c="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",u=null,s=function(e){return null!==u||(u=new Promise((function(t,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(c),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n=e[t];if(i.test(n.src))return n}return null}();r&&e?console.warn(c):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(a).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))),u},l=Promise.resolve().then((function(){return s(null)})),p=!1;l.catch((function(e){p||console.warn(e)}));var f=n(65764),m=n(74165),d=n(15861),y=n(80184),h=function(e){var t=e.clientSecret,n=(0,f.useStripe)(),a=(0,f.useElements)(),i=(0,o.useState)(null),c=(0,r.Z)(i,2),u=c[0],s=c[1],l=(0,o.useState)(!1),p=(0,r.Z)(l,2),h=p[0],v=p[1];(0,o.useEffect)((function(){n&&t&&n.retrievePaymentIntent(t).then((function(e){var t=e.paymentIntent;if(t)switch(t.status){case"succeeded":s("Payment succeeded!");break;case"processing":s("Your payment is processing.");break;case"requires_payment_method":s("Your payment was not successful, please try again.");break;default:s("Something went wrong.")}else s("Could not retrieve payment intent.")}))}),[n,t]);var g=function(){var e=(0,d.Z)((0,m.Z)().mark((function e(t){var r,o;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n&&a){e.next=3;break}return e.abrupt("return");case 3:return v(!0),e.next=6,n.confirmPayment({elements:a,confirmParams:{return_url:"https://spirify.azurewebsites.net/"}});case 6:r=e.sent,!(o=r.error)||"card_error"!==o.type&&"validation_error"!==o.type?s("An unexpected error occurred."):s(o.message),v(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)("form",{id:"payment-form",onSubmit:g,children:[(0,y.jsx)(f.LinkAuthenticationElement,{id:"link-authentication-element"}),(0,y.jsx)(f.PaymentElement,{id:"payment-element",options:{layout:"tabs"}}),(0,y.jsx)("button",{disabled:h||!n||!a,id:"submit",children:(0,y.jsx)("span",{id:"button-text",children:h?(0,y.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),u&&(0,y.jsx)("div",{id:"payment-message",children:u})]})},v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];p=!0;var r=Date.now();return l.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.0",startTime:t})}(r,n),r}(e,t,r)}))}("pk_test_51NCn3wBQGeUa0N5uBc7T53x59waFR7XRrgLvR2S1q7zktpgqiCxg0IQCk7fLd0YoLNuhuwyXM4iCoRnT4vq9Zi3l000iEfWzMz");function g(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1];(0,o.useEffect)((function(){fetch("https://spirify.azurewebsites.net/api/Payment/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[{id:"xl-tshirt"}]})}).then((function(e){return e.json()})).then((function(e){return a(e.clientSecret)}))}),[]);var i={clientSecret:n,appearance:{theme:"stripe"}};return(0,y.jsx)("div",{className:"Order",children:n&&(0,y.jsx)(f.Elements,{options:i,stripe:v,children:(0,y.jsx)(h,{clientSecret:n})})})}},65764:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return c(e)||u(e,t)||s(e,t)||p()}function c(e){if(Array.isArray(e))return e}function u(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}function s(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function d(){}function y(){}y.resetWarningCache=d;var h=function(){function e(e,t,n,r,o,a){if(a!==m){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y,resetWarningCache:d};return n.PropTypes=n,n},v=f((function(e){e.exports=h()})),g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},E=function(e){return null!==e&&"object"===o(e)},b=function(e){return E(e)&&"function"===typeof e.then},w=function(e){return E(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},S="[object Object]",C=function e(t,n){if(!E(t)||!E(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===S;if(o!==(Object.prototype.toString.call(n)===S))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var c={},u=0;u<a.length;u+=1)c[a[u]]=!0;for(var s=0;s<i.length;s+=1)c[i[s]]=!0;var l=Object.keys(c);if(l.length!==a.length)return!1;var p=t,f=n,m=function(t){return e(p[t],f[t])};return l.every(m)},j=function(e,t,n){return E(e)?Object.keys(e).reduce((function(o,i){var c=!E(t)||!C(e[i],t[i]);return n.includes(i)?(c&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):c?r(r({},o||{}),{},a({},i,e[i])):o}),null):null},k="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",x=function(e){if(null===e||w(e))return e;throw new Error(k)},O=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(x)};var t=x(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},P=t.createContext(null);P.displayName="ElementsContext";var A=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},_=t.createContext(null);_.displayName="CartElementContext";var R=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},T=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return O(n)}),[n]),c=i(t.useState(null),2),u=c[0],s=c[1],l=i(t.useState(null),2),p=l[0],f=l[1],m=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),d=m[0],y=m[1];t.useEffect((function(){var e=!0,t=function(e){y((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||d.stripe?"sync"!==a.tag||d.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,d,r]);var h=g(n);t.useEffect((function(){null!==h&&h!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[h,n]);var v=g(r);return t.useEffect((function(){if(d.elements){var e=j(r,v,["clientSecret","fonts"]);e&&d.elements.update(e)}}),[r,v,d.elements]),t.useEffect((function(){var e=d.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.1.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.1.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[d.stripe]),t.createElement(P.Provider,{value:d},t.createElement(_.Provider,{value:{cart:u,setCart:s,cartState:p,setCartState:f}},o))};T.propTypes={stripe:v.any,options:v.object};var N=function(e){var n=t.useContext(P);return A(n,e)},L=function(e){var n=t.useContext(_);return R(n,e)},B=function(){return N("calls useElements()").elements},I=function(){return N("calls useStripe()").stripe},M=function(){return L("calls useCartElement()").cart},q=function(){return L("calls useCartElementState()").cartState},W=function(e){return(0,e.children)(N("mounts <ElementsConsumer>"))};W.propTypes={children:v.func.isRequired};var D=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},F=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},U=function(e,n){var r="".concat(F(e),"Element"),o=n?function(e){N("mounts <".concat(r,">")),L("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,c=n.className,u=n.options,s=void 0===u?{}:u,l=n.onBlur,p=n.onFocus,f=n.onReady,m=n.onChange,d=n.onEscape,y=n.onClick,h=n.onLoadError,v=n.onLoaderStart,E=n.onNetworksChange,b=n.onCheckout,w=n.onLineItemClick,S=n.onConfirm,C=n.onCancel,k=n.onShippingAddressChange,x=n.onShippingRateChange,O=N("mounts <".concat(r,">")).elements,P=i(t.useState(null),2),A=P[0],_=P[1],R=t.useRef(null),T=t.useRef(null),B=L("mounts <".concat(r,">")),I=B.setCart,M=B.setCartState;D(A,"blur",l),D(A,"focus",p),D(A,"escape",d),D(A,"click",y),D(A,"loaderror",h),D(A,"loaderstart",v),D(A,"networkschange",E),D(A,"lineitemclick",w),D(A,"confirm",S),D(A,"cancel",C),D(A,"shippingaddresschange",k),D(A,"shippingratechange",x),"cart"===e?o=function(e){M(e),f&&f(e)}:f&&(o="expressCheckout"===e?f:function(){f(A)}),D(A,"ready",o),D(A,"change","cart"===e?function(e){M(e),m&&m(e)}:m),D(A,"checkout","cart"===e?function(e){M(e),b&&b(e)}:b),t.useLayoutEffect((function(){if(null===R.current&&O&&null!==T.current){var t=O.create(e,s);"cart"===e&&I&&I(t),R.current=t,_(t),t.mount(T.current)}}),[O,s,I]);var q=g(s);return t.useEffect((function(){if(R.current){var e=j(s,q,["paymentRequest"]);e&&R.current.update(e)}}),[s,q]),t.useLayoutEffect((function(){return function(){R.current&&(R.current.destroy(),R.current=null)}}),[]),t.createElement("div",{id:a,className:c,ref:T})};return o.propTypes={id:v.string,className:v.string,onChange:v.func,onBlur:v.func,onFocus:v.func,onReady:v.func,onEscape:v.func,onClick:v.func,onLoadError:v.func,onLoaderStart:v.func,onNetworksChange:v.func,onCheckout:v.func,onLineItemClick:v.func,onConfirm:v.func,onCancel:v.func,onShippingAddressChange:v.func,onShippingRateChange:v.func,options:v.object},o.displayName=r,o.__elementType=e,o},Y="undefined"===typeof window,Z=U("auBankAccount",Y),z=U("card",Y),Q=U("cardNumber",Y),X=U("cardExpiry",Y),$=U("cardCvc",Y),G=U("fpxBank",Y),H=U("iban",Y),J=U("idealBank",Y),V=U("p24Bank",Y),K=U("epsBank",Y),ee=U("payment",Y),te=U("expressCheckout",Y),ne=U("paymentRequestButton",Y),re=U("linkAuthentication",Y),oe=U("address",Y),ae=U("shippingAddress",Y),ie=U("cart",Y),ce=U("paymentMethodMessaging",Y),ue=U("affirmMessage",Y),se=U("afterpayClearpayMessage",Y);e.AddressElement=oe,e.AffirmMessageElement=ue,e.AfterpayClearpayMessageElement=se,e.AuBankAccountElement=Z,e.CardCvcElement=$,e.CardElement=z,e.CardExpiryElement=X,e.CardNumberElement=Q,e.CartElement=ie,e.Elements=T,e.ElementsConsumer=W,e.EpsBankElement=K,e.ExpressCheckoutElement=te,e.FpxBankElement=G,e.IbanElement=H,e.IdealBankElement=J,e.LinkAuthenticationElement=re,e.P24BankElement=V,e.PaymentElement=ee,e.PaymentMethodMessagingElement=ce,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=ae,e.useCartElement=M,e.useCartElementState=q,e.useElements=B,e.useStripe=I,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(72791))}}]);
//# sourceMappingURL=5871.f7c03ba4.chunk.js.map