(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{NUGz:function(e,t,n){},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},jm62:function(e,t,n){var r=n("XKFU"),a=n("mQtv"),o=n("aCFj"),s=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=o(e),l=s.f,i=a(r),u={},d=0;i.length>d;)void 0!==(n=l(r,t=i[d++]))&&c(u,t,n);return u}})},mQtv:function(e,t,n){var r=n("kJMx"),a=n("JiEa"),o=n("y3w9"),s=n("dyZX").Reflect;e.exports=s&&s.ownKeys||function(e){var t=r.f(o(e)),n=a.f;return n?t.concat(n(e)):t}},zJqo:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);n("hHhE"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("17x9"),n("bWfx"),n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf");function o(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var s=o("Tab"),c=o("TabList"),l=o("TabPanel");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return s(e)||c(e)||l(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?Object(r.cloneElement)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props,{children:d(e.props.children,t)})):e}))}function p(e,t){return r.Children.forEach(e,(function(e){null!==e&&(s(e)||l(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(c(e)&&t(e),p(e.props.children,t)))}))}n("dZ+Y"),n("91GP");var f,b=n("TSYQ"),h=n.n(b),m=0;function v(){return"react-tabs-"+m++}function y(e){var t=0;return p(e,(function(e){s(e)&&t++})),t}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e){return e&&"getAttribute"in e}function C(e){return T(e)&&"tab"===e.getAttribute("role")}function N(e){return T(e)&&"true"===e.getAttribute("aria-disabled")}try{f=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(S){f=!1}var O=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props.direction;if(t.isTabFromContainer(e.target)){var r=t.props.selectedIndex,a=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(a=!0,o=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(r="rtl"===n?t.getNextTab(r):t.getPrevTab(r),a=!0,o=!0):39===e.keyCode||40===e.keyCode?(r="rtl"===n?t.getPrevTab(r):t.getNextTab(r),a=!0,o=!0):35===e.keyCode?(r=t.getLastTab(),a=!0,o=!0):36===e.keyCode&&(r=t.getFirstTab(),a=!0,o=!0),a&&e.preventDefault(),o&&t.setSelected(r,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(N(n))return;var r=[].slice.call(n.parentNode.children).filter(C).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},i.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!N(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!N(this.getTab(r)))return r;return e},i.getPrevTab=function(e){for(var t=e;t--;)if(!N(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!N(this.getTab(t)))return t;return e},i.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!N(this.getTab(t)))return t;return null},i.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!N(this.getTab(e)))return e;return null},i.getTabsCount=function(){return y(this.props.children)},i.getPanelsCount=function(){return function(e){var t=0;return p(e,(function(e){l(e)&&t++})),t}(this.props.children)},i.getTab=function(e){return this.tabNodes["tabs-"+e]},i.getChildren=function(){var e=this,t=0,n=this.props,o=n.children,i=n.disabledTabClassName,u=n.focus,p=n.forceRenderTabPanel,b=n.selectedIndex,h=n.selectedTabClassName,m=n.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var y=this.tabIds.length-this.getTabsCount();y++<0;)this.tabIds.push(v()),this.panelIds.push(v());return d(o,(function(n){var o=n;if(c(n)){var v=0,y=!1;f&&(y=a.a.Children.toArray(n.props.children).filter(s).some((function(t,n){return document.activeElement===e.getTab(n)}))),o=Object(r.cloneElement)(n,{children:d(n.props.children,(function(t){var n="tabs-"+v,a=b===v,o={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[v],panelId:e.panelIds[v],selected:a,focus:a&&(u||y)};return h&&(o.selectedClassName=h),i&&(o.disabledClassName=i),v++,Object(r.cloneElement)(t,o)}))})}else if(l(n)){var g={id:e.panelIds[t],tabId:e.tabIds[t],selected:b===t};p&&(g.forceRender=p),m&&(g.selectedClassName=m),t++,o=Object(r.cloneElement)(n,g)}return o}))},i.isTabFromContainer=function(e){if(!C(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},i.render=function(){var e=this,t=this.props,n=(t.children,t.className),r=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return a.a.createElement("div",g({},o,{className:h()(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,r&&r(t)},"data-tabs":!0}),this.getChildren())},o}(r.Component);O.defaultProps={className:"react-tabs",focus:!1},O.propTypes={};var j=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var a=n.props.onSelect,o=n.state.mode;if("function"!=typeof a||!1!==a(e,t,r)){var s={focus:"keydown"===r.type};1===o&&(s.selectedIndex=e),n.setState(s)}},n.state=r.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){return r.copyPropsToState(e,t)},r.getModeFromProps=function(e){return null===e.selectedIndex?1:0},r.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var a={focus:n,mode:r.getModeFromProps(e)};if(1===a.mode){var o=y(e.children)-1,s=null;s=null!=t.selectedIndex?Math.min(t.selectedIndex,o):e.defaultIndex||0,a.selectedIndex=s}return a},r.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","defaultIndex","defaultFocus"])),r=this.state,o=r.focus,s=r.selectedIndex;return n.focus=o,n.onSelect=this.handleSelected,null!=s&&(n.selectedIndex=s),a.a.createElement(O,n,t)},r}(r.Component);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}j.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},j.propTypes={},j.tabsRole="Tabs";var I=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.children,n=e.className,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","className"]);return a.a.createElement("ul",P({},r,{className:h()(n),role:"tablist"}),t)},r}(r.Component);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}I.defaultProps={className:"react-tabs__tab-list"},I.propTypes={},I.tabsRole="TabList";var x=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){this.checkFocus()},o.componentDidUpdate=function(){this.checkFocus()},o.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},o.render=function(){var e,t=this,n=this.props,r=n.children,o=n.className,s=n.disabled,c=n.disabledClassName,l=(n.focus,n.id),i=n.panelId,u=n.selected,d=n.selectedClassName,p=n.tabIndex,f=n.tabRef,b=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return a.a.createElement("li",_({},b,{className:h()(o,(e={},e[d]=u,e[c]=s,e)),ref:function(e){t.node=e,f&&f(e)},role:"tab",id:l,"aria-selected":u?"true":"false","aria-disabled":s?"true":"false","aria-controls":i,tabIndex:p||(u?"0":null)}),r)},r}(r.Component);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}x.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},x.propTypes={},x.tabsRole="Tab";var E=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t=this.props,n=t.children,r=t.className,o=t.forceRender,s=t.id,c=t.selected,l=t.selectedClassName,i=t.tabId,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return a.a.createElement("div",w({},u,{className:h()(r,(e={},e[l]=c,e)),role:"tabpanel",id:s,"aria-labelledby":i}),o||c?n:null)},r}(r.Component);E.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},E.propTypes={},E.tabsRole="TabPanel";n("NUGz");var k=function(e){return a.a.createElement(j,{className:"tabs is-boxed margin--tab"},a.a.createElement(I,null,e.tabContent.map((function(e){return a.a.createElement(x,{selectedClassName:"is-active"},a.a.createElement("a",{href:"#"+e},e))}))))};k.tabsRole="Tab";var R=k,F=function(e){var t=e.title,n=e.contentType;return"component"===n?a.a.createElement("div",{className:"cbp-content__header"},a.a.createElement("h1",{className:"cbp-masthead-1 heading-pad-temp"},t),a.a.createElement(R,{tabContent:["Code","Design Guidelines"]})):"foundation"===n?a.a.createElement("div",{className:"cbp-content__header"},a.a.createElement("h1",{className:"cbp-masthead-1 heading-pad-temp"},t),a.a.createElement(R,{tabContent:["Basics","Research & References"]})):a.a.createElement("div",{className:"cbp-content__header"},a.a.createElement("h1",{className:"cbp-masthead-1 heading-pad-temp"},t))};F.defaultProps={siteTitle:""};t.a=F}}]);
//# sourceMappingURL=fae7df48033e3d17ad57ec0815549d6058f7a941-e553f472a7c0d4706119.js.map