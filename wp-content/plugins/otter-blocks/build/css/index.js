!function(){"use strict";var e=window.wp.element,t=window.lodash,s=window.wp.i18n,n=window.wp.blocks,l=window.wp.blockEditor,o=window.wp.components,r=window.wp.compose,c=window.wp.data,i=window.wp.hooks;let a=null;window.otterCSSLintIgnored=[];var u=(0,e.memo)((t=>{let{attributes:n,setAttributes:l,clientId:r}=t;const c=(0,e.useRef)(null),[i,u]=(0,e.useState)([]),[d,m]=(0,e.useState)(null),[p,w]=(0,e.useState)(null),S=()=>{const e=r.substr(0,8);return(null==d?void 0:d.replace(/\s+/g,""))==="selector {\n}\n".replace(/\s+/g,"")?n.className:n.className?n.className.includes("ticss-")?n.className:[...n.className.split(" "),`ticss-${e}`].join(" "):`ticss-${e}`},b=function(e){var t,s,n,l,o,r,c;let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=null==e||null===(t=e.state)||void 0===t||null===(s=t.lint)||void 0===s||null===(n=s.marked)||void 0===n||null===(l=n.filter((e=>{let{__annotation:t}=e;return"error"===(null==t?void 0:t.severity)})))||void 0===l?void 0:l.map((e=>{let{__annotation:t}=e;return null==t?void 0:t.message}));i&&0<(null===(o=a)||void 0===o?void 0:o.length)&&(window.otterCSSLintIgnored=a),a=null===(r=a)||void 0===r?void 0:r.filter((e=>!window.otterCSSLintIgnored.includes(e))),u(a),!i&&0<(null===(c=a)||void 0===c?void 0:c.length)||w(null==e?void 0:e.getValue())};return(0,e.useEffect)((()=>{var e;const t=n.customCSS&&null!==(e=n.className)&&void 0!==e&&e.includes("ticss-")?n.className.split(" ").find((e=>e.includes("ticss"))):null;let s="selector {\n}\n";if(n.customCSS){const e=new RegExp("."+t,"g");s=n.customCSS.replace(e,"selector")}c.current=wp.CodeMirror(document.getElementById("o-css-editor"),{value:s,autoCloseBrackets:!0,continueComments:!0,lineNumbers:!0,lineWrapping:!0,matchBrackets:!0,lint:!0,gutters:["CodeMirror-lint-markers"],styleActiveLine:!0,styleActiveSelected:!0,mode:"css",extraKeys:{"Ctrl-Space":"autocomplete","Alt-F":"findPersistent","Cmd-F":"findPersistent"}}),c.current.on("change",(()=>{clearTimeout(a),a=setTimeout((()=>{b(c.current)}),500)}))}),[]),(0,e.useEffect)((()=>{const e=new RegExp("selector","g");m(null==p?void 0:p.replace(e,`.${S().split(" ").find((e=>e.includes("ticss")))}`))}),[p]),(0,e.useEffect)((()=>{"selector {\n}\n".replace(/\s+/g,"")!==(null==d?void 0:d.replace(/\s+/g,""))?d&&l({customCSS:d}):l({customCSS:null})}),[d]),(0,e.useEffect)((()=>{l({hasCustomCSS:!0,className:S()})}),[n]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("p",null,(0,s.__)("Add your custom CSS.","otter-blocks")),(0,e.createElement)("div",{id:"o-css-editor",className:"o-css-editor"}),0<(null==i?void 0:i.length)&&(0,e.createElement)("div",{className:"o-css-errors"},(0,e.createElement)(o.Notice,{status:"error",isDismissible:!1},(0,s.__)("Attention needed! We found following errors with your code:","otter-blocks")),(0,e.createElement)("pre",null,(0,e.createElement)("ul",null,i.map(((t,s)=>(0,e.createElement)("li",{key:s},t))))),(0,e.createElement)(o.Button,{variant:"secondary",onClick:()=>b(c.current,!0),style:{width:"max-content",marginBottom:"20px"}},(0,s.__)("Override","otter-blocks"))),(0,e.createElement)("p",null,(0,s.__)("Use","otter-blocks")," ",(0,e.createElement)("code",null,"selector")," ",(0,s.__)("to target block wrapper.","otter-blocks")),(0,e.createElement)("br",null),(0,e.createElement)("p",null,(0,s.__)("Example:","otter-blocks")),(0,e.createElement)("pre",{className:"o-css-editor-help"},"selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}"),(0,e.createElement)("p",null,(0,s.__)("You can also use other CSS syntax here, such as media queries.","otter-blocks")))}));let d=[];(0,c.subscribe)((()=>{const{getBlocks:e}=(0,c.select)("core/block-editor"),s=e(),l=(0,c.select)("core").getEntityRecords("postType","wp_block",{context:"view"});if(!(0,t.isEqual)(d,s)){d=s;const e=((e,s)=>{if(!e)return"";const l=e=>{const t=[];if("core/block"===e.name&&null!==s){const o=s.find((t=>e.attributes.ref===t.id));if(o&&o.content){const e=o.content.hasOwnProperty("raw")?o.content.raw:o.content;t.push((0,n.parse)(e).map((e=>[e,l(e)])))}}return void 0!==e.innerBlocks&&0<e.innerBlocks.length&&t.push(e.innerBlocks.map((e=>[e,l(e)]))),t},o=e.map((e=>[e,l(e)]));return(0,t.flattenDeep)(o).map((e=>e.attributes&&e.attributes.hasCustomCSS&&e.attributes.customCSS&&null!==e.attributes.customCSS?e.attributes.customCSS+"\n":"")).reduce(((e,t)=>e+t),"")})(s,l);e&&(e=>{let t=document.getElementById("o-css-editor-styles");null===t&&(t=document.createElement("style"),t.setAttribute("type","text/css"),t.setAttribute("id","o-css-editor-styles"),document.getElementsByTagName("head")[0].appendChild(t)),t.textContent===e||(t.textContent=e)})(e)}}));const m=(0,r.createHigherOrderComponent)((t=>r=>{if((0,n.hasBlockSupport)(r.name,"customClassName",!0)&&r.isSelected){var c,a;let n=l.InspectorControls;return null!==(c=window)&&void 0!==c&&null!==(a=c.otterComponents)&&void 0!==a&&a.useInspectorSlot&&(n=window.otterComponents.useInspectorSlot(r.name)),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,r),(0,e.createElement)(n,null,(0,e.createElement)(o.PanelBody,{title:(0,s.__)("Custom CSS","otter-blocks"),initialOpen:!1},(0,e.createElement)(u,{clientId:r.clientId,setAttributes:r.setAttributes,attributes:r.attributes}),(0,e.createElement)("div",{className:"o-fp-wrap"},(0,i.applyFilters)("otter.feedback","","custom-css"),(0,i.applyFilters)("otter.poweredBy","")))))}return(0,e.createElement)(t,r)}),"withInspectorControl");(0,c.select)("core/edit-site")||((0,i.addFilter)("blocks.registerBlockType","themeisle-custom-css/attribute",(e=>((0,n.hasBlockSupport)(e,"customClassName",!0)&&(e.attributes=(0,t.assign)(e.attributes,{hasCustomCSS:{type:"boolean",default:!1},customCSS:{type:"string",default:null}})),e))),(0,i.addFilter)("editor.BlockEdit","themeisle-custom-css/with-inspector-controls",m))}();