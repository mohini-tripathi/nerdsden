(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return s});t(26);var r=t(0),a=t.n(r),i=t(171),o=t(168),l=t(177),c=t(202),s="1754464826";n.default=function(e){var n=e.data,t=(e.pageContext,n.page),r=t.id,s=t.html,m=t.fields,u=t.frontmatter,d=Object.assign({id:r,html:s},m,u);return a.a.createElement(i.a,{page:d},a.a.createElement(o.a,null,a.a.createElement(l.a,null,d.title),a.a.createElement(c.a,{html:d.html})))}},168:function(e,n,t){"use strict";var r=t(160),a=t.n(r),i=t(0),o=t.n(i);function l(){var e=a()(["\n  margin: 0 auto auto;\n  width: 100%;\n  max-width: ",";\n  padding: 3em 1.5em 2em;\n  flex-grow: 1;\n"]);return l=function(){return e},e}var c=t(159).c.section(l(),function(e){return e.theme.sizes.maxWidth});n.a=function(e){var n=e.children;return o.a.createElement(c,null," ",n," ")}},171:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(159),o=(t(76),t(56),t(181),t(186)),l=t.n(o),c=t(172),s=t.n(c),m=t(173),u=function(e){var n=e.post,t=void 0===n?{}:n,r=e.page,i=void 0===r?{}:r,o=m.siteTitle,c=m.siteDescription,u=m.siteImage,d=m.siteUrl,f=[{"@context":"http://schema.org","@type":"WebSite",url:m.siteUrl,name:m.shortSiteTitle,alternateName:m.siteTitle}];Object.keys(t).length>0&&(o=(t.metaTitle||t.title)+" | "+m.shortSiteTitle,c=t.metaDescription||t.summary||t.excerpt,d=m.siteUrl+"/"+t.slug,f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m.siteUrl,name:m.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":d,name:o}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:o,alternateName:m.siteTitle||"",headline:o,image:u,author:m.author,publisher:m.publisher,datePublished:t.date,dateModified:t.modified||t.date,mainEntityOfPage:d}));Object.keys(i).length>0&&(o=(i.metaTitle||i.title)+" | "+m.shortSiteTitle,c=i.metaDescription||i.summary||i.excerpt,d=m.siteUrl+"/"+t.slug,f.push({"@context":"http://schema.org","@type":"WebPage",url:d,name:o}));return a.a.createElement(l.a,{htmlAttributes:{lang:m.siteLanguage,prefix:"og: http://ogp.me/ns#"}},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:s.a}),a.a.createElement("title",null,o),a.a.createElement("meta",{name:"image",content:u.src}),a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),a.a.createElement("meta",{property:"og:title",content:o}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:url",content:d}),a.a.createElement("meta",{property:"og:image",itemProp:"image",content:u.url}),a.a.createElement("meta",{property:"og:image:width",content:u.width}),a.a.createElement("meta",{property:"og:image:height",content:u.height}),a.a.createElement("meta",{property:"og:description",content:c}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:m.authorTwitterHandle||""}),a.a.createElement("meta",{name:"twitter:title",content:o}),a.a.createElement("meta",{name:"twitter:image",content:u.url}),a.a.createElement("meta",{name:"twitter:description",content:c}))},d=t(160),f=t.n(d),h=t(36);function p(){var e=f()(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1.5em;\n\n  ul {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  li {\n    display: inline-block;\n    margin-left: 1em;\n    &:first-child {\n      position: relative;\n      margin: 0;\n      flex-basis: 100%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: DarkGray;\n    font-weight: 600;\n    transition: all 0.2s;\n    border-bottom: 2px solid ",";\n    &:hover {\n      color: white;\n    }\n  }\n"]);return p=function(){return e},e}function g(){var e=f()(["\n  background: ",";\n  width: 100%;\n  padding: 1.5em 0;\n"]);return g=function(){return e},e}var A=i.c.header(g(),function(e){return e.theme.colors.base}),v=i.c.nav(p(),function(e){return e.theme.sizes.maxWidth},function(e){return e.theme.colors.base}),b={color:"white"},y=function(){return a.a.createElement(A,null,a.a.createElement(v,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/",activeStyle:b},"Home")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/tags/",activeStyle:b},"Tags")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/about/",activeStyle:b},"About")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/contact/",activeStyle:b},"Contact")))))};t(165);function w(){var e=f()(["\n  display: inline-block;\n  padding: 0.25em 0;\n  width: 100%;\n  @media screen and (min-width: ",") {\n    width: auto;\n  }\n  a {\n    font-weight: 600;\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n"]);return w=function(){return e},e}function E(){var e=f()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  border-top: 1px solid ",";\n  padding: 1em 0 2em;\n  margin: 0 1.5em;\n"]);return E=function(){return e},e}function x(){var e=f()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0 auto;\n  max-width: ",";\n"]);return x=function(){return e},e}var P=i.c.footer(x(),function(e){return e.theme.sizes.maxWidth}),k=i.c.ul(E(),function(e){return e.theme.colors.secondary}),z=i.c.li(w(),function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.base}),T=function(){return a.a.createElement(P,null,a.a.createElement(k,null,a.a.createElement(z,null,"Copyright © 2019 -"," ",a.a.createElement("a",{href:"https://www.vadelabs.com/",rel:"nofollow noopener noreferrer",target:"_blank"},"Vadelabs"),". All Rights Reserved"),a.a.createElement(z,null,a.a.createElement("a",{href:"/privacy/",target:"_blank",rel:"noopener noreferrer"},"Privacy")," ",a.a.createElement("a",{href:"/terms-of-use/",target:"_blank",rel:"noopener noreferrer"},"Terms Of Use")," ",a.a.createElement("a",{href:"/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact"))))},j={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}};function S(){var e=f()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n\n  button,\n  input {\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n    resize: none;\n    &:focus {\n      outline: none;\n    }\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n']);return S=function(){return e},e}var L=Object(i.b)(S());n.a=function(e){var n=e.children,t=e.post,r=e.page;return a.a.createElement("div",{className:"siteRoot"},a.a.createElement(u,{post:t,page:r}),a.a.createElement(i.a,{theme:j},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"siteContent"},a.a.createElement(y,null),n),a.a.createElement(T,null))),a.a.createElement(L,null))}},172:function(e,n){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAADr2/T/69v0/+vb9P/q2vT/7t72//jo+f/46Pn/9+j5//fo+f/56/r/9uf5/+/f9v/r2vT/69v0/+vb9P/r2/T/7d32/+3d9v/t3PX/8OD3/+LS8f+wnN3/e2TJ/4x30P+3pN//jHHN/4tzzf/fz+//79/3/+3c9v/t3fb/7d32/+/h+P/v4fj/7d73//vs/P+Cacz/JAep/y8Trf8vE63/PSu0/2d70P9TW8T/bVfD//bn+v/u4Pf/7+H4/+/h+P/z5Pn/8uP4//nn+v/U0/D/X2fI/zoasP88H7H/RC61/1dQwv+w8/f/qubz/22A0P/S0e//+ej7//Lj+P/z5Pn/8ub4//Hl+P/36fn/3dnx/1BKv/8xEa3/PyWz/15gxf9QRb3/XV/G/3KF0/9YVML/087u//jq+v/x5fj/8ub4//Xo+v/16Pr/+Or7/+vf9f+FitT/cHjO/05Mv/9MP7v/Pym0/0Avtv8/Mbb/Ry+2/+zd9f/46/v/9ef6//Xo+v/06/v/9Ov7//Tq+//16/v/+/f+/+nh9v9+bsv/bXzQ/2Bfxf+ipN3/0tfw/83P7f/z6Pr/9ev7//Tq+//06/v/9+77//fu+//37vv/9+37//bt+//97/v/29/z/3KM1f+pr+D//vH7//70/v/98/3/+O/7//fu+//37vv/9+77//fy+//38vv/9/H7//fy+//47/r/wNrw/53i8v+t8vn/qvf7/7DT7f/16vj/+fT8//bx+v/38vv/9/L7//fy+//59Pv/+fT7//j0+//8+P3/7ej2/5jL6/+l5/X/nNTu/4245f+i7Pf/t9Tt/+/q9v/79vz/+PT7//n0+//59Pv/+vj+//r4/v/49v3//////8vL7P+JteH/jbjj/4Om3v+Wyur/jbbk/5DH5//W1u////7///n2/f/6+P7/+vj+//z6/f/8+v3/+/r9///+///j5/X/k8Lm/5PD6P+f2vD/hKfc/6Pm9P+Cntz/4NPu///////7+f3//Pr9//z6/f/+/f7//v3+//38/v//////6u74/5/e8f+o7Pb/r/r9/6jt9/+2////a3zP/9fS7f///////Pv9//79/v/+/f7////////////+/v///////+fg8/+hxuf/qPj8/6b0+v+g5fX/mdju/4+r3P/18vn///////7+////////////////////////////////////////9/T4/77K6f+31Oz/oK3e/87U7P+0sOD///79//////////////////////////////////////////////7//////////v///vz+//38/v///////Pz9//39/v//////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},173:function(e,n){e.exports={siteTitle:"Nerd's Den | Memoirs Of A Skeptic Nerd",shortSiteTitle:"Nerd's Den",siteDescription:"Official blog for Vadelabs. It discusses about software design and building scalable, reliable, and flexible applications the right way. Check out our free articles, tutorials, courses, and toolkits for more ways to learn about software development.",siteUrl:"https://nerds-den.com",pathPrefix:"/",siteImage:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png",width:820,height:312},siteLanguage:"en",headerTitle:"Nerd's Den",headerSubTitle:"Memoirs Of A Skeptic Nerd",publisher:{"@type":"Organization",name:"Vadelabs, Inc.",url:"https://vadelabs.com",logo:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png"}},author:{"@type":"Person",name:"Pragyan Tripathi",url:"https://nerds-den.com/about/"},authorTwitterHandle:"pntripathi9417",authorSocialLinks:[{name:"github",url:"https://github.com/pntripathi9417"},{name:"twitter",url:"https://twitter.com/pntripathi9417"},{name:"facebook",url:"http://facebook.com/pntripathi9417"}],manifestName:"Nerd's Den - Memoirs Of A Skeptic Nerd",manifestShortName:"Nerd's Den",manifestStarUrl:"/index.html",manifestBackgroundColor:"white",manifestThemeColor:"#666",manifestDisplay:"standalone",google:{trackingId:{}.GOOGLE_ANALYTICS_ID||"UA-55436366-2"},facebook:{appId:{}.FB_APP_ID||"2232544823425455"},postsPerHomePage:10,postsPerPage:10}},177:function(e,n,t){"use strict";t(165);var r=t(160),a=t.n(r),i=t(0),o=t.n(i);function l(){var e=a()(["\n  font-size: ",";\n  text-transform: capitalize;\n  font-weight: 600;\n  text-align: center;\n  margin: 0 0 3rem 0;\n  margin: ",";\n  line-height: 1.2;\n  span {\n    margin: 0 0 0 0.25em;\n  }\n  a {\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return l=function(){return e},e}var c=t(159).c.h1(l(),function(e){return e.small?"2em":"3em"},function(e){return e.small?"1rem 0 4rem 0":"0 0 3rem 0"},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight});n.a=function(e){return o.a.createElement(c,{small:e.small},e.children)}},202:function(e,n,t){"use strict";var r=t(160),a=t.n(r),i=t(0),o=t.n(i),l=t(159);function c(){var e=a()(["\n  margin: 0 auto;\n  max-width: ",";\n\n  h1,\n  h2,\n  h3 {\n    font-weight: 600;\n    line-height: 1.25;\n    margin: 0 0 1rem 0;\n    text-transform: capitalize;\n  }\n\n  h1 {\n    font-size: 1.5em;\n  }\n  h2 {\n    font-size: 1.25em;\n  }\n  h3 {\n    font-size: 1em;\n  }\n\n  p {\n    line-height: 1.6;\n    margin: 0 0 2em 0;\n  }\n\n  a {\n    transition: 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n\n  del {\n    text-decoration: line-through;\n  }\n  strong {\n    font-weight: 600;\n  }\n  em {\n    font-style: italic;\n  }\n\n  ul,\n  ol {\n    margin: 0 0 2em 0;\n  }\n\n  ul {\n    li {\n      list-style: disc;\n      list-style-position: inside;\n      line-height: 1.25;\n      &:last-child {\n        margin: 0;\n      }\n    }\n  }\n\n  ol {\n    li {\n      list-style: decimal;\n      list-style-position: inside;\n      line-height: 1.25;\n      &:last-child {\n        margin: 0;\n      }\n    }\n  }\n\n  hr {\n    border-style: solid;\n    border-color: ",";\n    margin: 0 0 2em 0;\n  }\n\n  blockquote {\n    font-style: italic;\n    border-left: 4px solid ",";\n    padding: 0 0 0 0.5em;\n  }\n\n  pre {\n    margin: 0 0 2em 0;\n    border-radius: 2px;\n    background: "," !important;\n    span {\n      background: inherit !important;\n    }\n  }\n"]);return c=function(){return e},e}t(203);var s=l.c.div(c(),function(e){return e.theme.sizes.maxWidthCentered},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary});n.a=function(e){var n=e.html;return o.a.createElement(s,{dangerouslySetInnerHTML:{__html:n}})}},203:function(e,n,t){}}]);
//# sourceMappingURL=component---src-templates-page-js-ccb25cd8ebdcb22c64d2.js.map