(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=a(1);a(13);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("form",{className:"d-flex mx-2",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Search")),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label",htm:!0,lfor:"flexSwitchCheckDefault"},"Change Mode")))))}function m(e){var t=Object(n.useState)("Enter text here"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"myBox",className:"form-label"}),l.a.createElement("textarea",{className:"form-control",id:"myBox",value:r,onChange:function(e){c(e.target.value)},rows:"8",style:{backgroundColor:"dark"===e.mode?"#13466e":"white"}})),l.a.createElement("button",{className:"btn btn-danger mx-2 my-2",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Uppercase converted","success")}},"Covert to uppercase"),l.a.createElement("button",{className:"btn btn-danger mx-2 my-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("LowerCase converted","success")}},"Covert to lowercasecase"),l.a.createElement("button",{className:"btn btn-danger mx-2 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-danger mx-2 my-1",onClick:function(){var t=document.getElementById("myBox");"red"===t.style.color?(t.style.fontFamily="cursive",t.style.color="yellow"):(t.style.fontFamily="serif",t.style.color="red"),e.showAlert("Style Changed","success")}},"Change Style")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,"Your text summary"),l.a.createElement("p",null,r.split(/\s+/).filter(function(e){return 0!==e.length}).length," words,",function(e){var t=e.split(/\s/).length-1,a=e.length-t;return parseInt(a)}(r)," chars"),l.a.createElement("p",null,.0083*r.split(" ").filter(function(e){return 0!==e.length}).length," Minutes to read, ",.0083*r.split(" ").filter(function(e){return 0!==e.length}).length*60," seconds to read"),l.a.createElement("h3",null,"Preview"),l.a.createElement("p",null,r)))}function i(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null," ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," ")," : ",e.alert.msg))}var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Textutils",about:"about",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",g("Dark mode enabled","success")):(r("light"),document.body.style.backgroundColor="white",g("Light mode enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{heading:"Enter the text ",mode:a,showAlert:g})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(15)}},[[4,3,2]]]);
//# sourceMappingURL=main.b96478e2.chunk.js.map