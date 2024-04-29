import{j as u}from"./jsx-runtime-QvZ8i92b.js";import{R as s}from"./index-uubelm5h.js";import{u as y}from"./styled-components.browser.esm-CYNsBsqS.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=s.createContext&&s.createContext(v),j=["attr","size","title"];function O(e,t){if(e==null)return{};var r=w(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(n){P(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function P(e,t,r){return t=S(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=C(e,"string");return typeof t=="symbol"?t:String(t)}function C(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function x(e){return e&&e.map((t,r)=>s.createElement(t.tag,m({key:r},t.attr),x(t.child)))}function p(e){return t=>s.createElement(E,d({attr:m({},e.attr)},t),x(e.child))}function E(e){var t=r=>{var{attr:n,size:i,title:a}=e,o=O(e,j),l=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),s.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,o,{className:c,style:m(m({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),e.children)};return g!==void 0?s.createElement(g.Consumer,null,r=>t(r)):t(v)}function T(e){return p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"},child:[]}]})(e)}function H(e){return p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"},child:[]}]})(e)}function _(e){return p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"},child:[]}]})(e)}const z=e=>{const{defaultValue:t=1,min:r=1,withTrashIcon:n=!0,max:i,onStepperChange:a}=e,[o,l]=s.useState(t),c=o===r&&n;return s.useEffect(()=>{a(o)},[o]),{increment:()=>{o>=i||l(f=>f+1)},decrement:()=>{o>0&&o>r&&l(f=>f-1)},shouldShowTrashIcon:c,counter:o}},I=y.div`
  width: 108px;
  height: 36px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  background: white;
  border-radius: 4px;
  position: absolute;
`,h=y.button`
  border: none;
  background: white;
  transition: all 0.2 ease-in-out;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  height: 22px;
  &:active {
   border: 1px solid gray;
  }
`,N=e=>{const{increment:t,decrement:r,shouldShowTrashIcon:n,counter:i}=z({...e});return u.jsxs(I,{children:[u.jsx(h,{onClick:t,"data-testid":"add-btn",children:u.jsx(H,{})}),i,u.jsx(h,{onClick:r,"data-testid":"minus-btn",children:n?u.jsx(_,{role:"button"}):u.jsx(T,{role:"button"})})]})};N.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{defaultValue:{required:!1,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},onStepperChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},withTrashIcon:{required:!1,tsType:{name:"boolean"},description:""}}};export{N as S};