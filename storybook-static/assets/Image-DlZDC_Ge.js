import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{u as n}from"./styled-components.browser.esm-CYNsBsqS.js";const l=n.picture``,m=n.img`
  height: auto;
  max-width: ${e=>e.maxWidth!==null?e.maxWidth:"100%"};
  border-radius: ${e=>e.thumbnail===!0?"4px":"unset"};
  box-shadow: ${e=>e.thumbnail===!0?"0 1px 2px rgba(0,0,0,0.15)":"none"}
`,p=e=>{const{src:t,alt:r,thumbnail:a,lazyLoad:s,maxWidth:o,onImageClick:d,...u}=e;return console.log("thumbnail",a),i.jsx(l,{onClick:d,children:i.jsx(m,{src:t,alt:r,thumbnail:a,maxWidth:o,loading:s!==void 0?"lazy":void 0,...u})})};p.__docgenInfo={description:"",methods:[],displayName:"Image",props:{maxWidth:{required:!1,tsType:{name:"string"},description:""},thumbnail:{required:!1,tsType:{name:"boolean"},description:""},src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},lazyLoad:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"union",raw:"'lazy' | 'eager' | undefined",elements:[{name:"literal",value:"'lazy'"},{name:"literal",value:"'eager'"},{name:"undefined"}]},description:""},onImageClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{p as I};