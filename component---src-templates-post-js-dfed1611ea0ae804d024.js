(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return f});t(26);var r=t(0),a=t.n(r),i=t(173),o=t(171),l=t(215),c=t(192),s=t(216),m=t(217),u=t(218),d=t(235),f="3354721762";n.default=function(e){var n=e.data,t=(e.pageContext,n.post),r=t.id,f=t.html,h=t.fields,p=t.frontmatter,g=n.site.siteMetadata,v=g.siteUrl,b=g.facebook,A=Object.assign({id:r,html:f},h,p);return a.a.createElement(i.a,{post:A},a.a.createElement(l.a,{title:A.title,image:A.cover}),a.a.createElement(d.a,null),a.a.createElement(o.a,null,A.tags&&a.a.createElement(m.a,{tags:A.tags}),a.a.createElement(s.a,{date:A.date}),a.a.createElement(c.a,{html:A.html}),a.a.createElement("footer",null,a.a.createElement(u.a,{facebook:b,siteUrl:v,slug:A.slug}))))}},171:function(e,n,t){"use strict";var r=t(169),a=t.n(r),i=t(0),o=t.n(i);function l(){var e=a()(["\n  margin: 0 auto auto;\n  width: 100%;\n  max-width: ",";\n  padding: 3em 1.5em 2em;\n  flex-grow: 1;\n"]);return l=function(){return e},e}var c=t(168).c.section(l(),function(e){return e.theme.sizes.maxWidth});n.a=function(e){var n=e.children;return o.a.createElement(c,null," ",n," ")}},173:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(168),o=(t(76),t(56),t(184),t(185)),l=t.n(o),c=t(177),s=t.n(c),m=t(176),u=m.facebook.appId,d=function(e){var n=e.post,t=void 0===n?{}:n,r=e.page,i=void 0===r?{}:r,o=m.siteTitle,c=m.siteDescription,d=m.siteImage,f=m.siteUrl,h="",p=[{"@context":"https://schema.org","@type":"WebSite",url:m.siteUrl,name:m.shortSiteTitle,alternateName:m.siteTitle}];if(Object.keys(t).length>0){var g=t.metaTitle||t.title;(o=g+" | "+m.shortSiteTitle).length>60&&(o=""+g),c=t.metaDescription||t.summary||t.excerpt,f=m.siteUrl+"/"+t.slug,t.tags&&t.tags.forEach(function(e){return h+=e.title+","}),p.push({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m.siteUrl,name:m.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":f,name:o}}]},{"@context":"https://schema.org","@type":"BlogPosting",url:f,name:o,alternateName:m.siteTitle||"",headline:o,image:d,author:m.author,publisher:m.publisher,datePublished:t.date,dateModified:t.modified||t.date,mainEntityOfPage:f})}Object.keys(i).length>0&&(o=(i.metaTitle||i.title)+" | "+m.shortSiteTitle,c=i.metaDescription||i.summary||i.excerpt,f=m.siteUrl+"/"+i.slug,p.push({"@context":"https://schema.org","@type":"WebPage",url:f,name:o}));return a.a.createElement(l.a,{htmlAttributes:{lang:m.siteLanguage,prefix:"og: https://ogp.me/ns#"}},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:s.a}),a.a.createElement("link",{rel:"canonical",href:f}),a.a.createElement("title",null,o),a.a.createElement("meta",{name:"image",content:d.src}),a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("meta",{name:"keywords",content:""+h.trim(",")}),a.a.createElement("link",{rel:"preconnect",href:"https://m.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://staticxx.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://connect.facebook.net"}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),a.a.createElement("meta",{property:"og:title",content:o}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:url",content:f}),a.a.createElement("meta",{property:"og:image",itemProp:"image",content:d.url}),a.a.createElement("meta",{property:"og:image:width",content:d.width}),a.a.createElement("meta",{property:"og:image:height",content:d.height}),a.a.createElement("meta",{property:"og:description",content:c}),a.a.createElement("meta",{property:"fb:app_id",content:u}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:m.authorTwitterHandle||""}),a.a.createElement("meta",{name:"twitter:title",content:o}),a.a.createElement("meta",{name:"twitter:image",content:d.url}),a.a.createElement("meta",{name:"twitter:description",content:c}))},f=t(169),h=t.n(f),p=t(36);function g(){var e=h()(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1.5em;\n\n  ul {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  li {\n    display: inline-block;\n    margin-left: 1em;\n    &:first-child {\n      position: relative;\n      margin: 0;\n      flex-basis: 100%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: DarkGray;\n    font-weight: 600;\n    transition: all 0.2s;\n    border-bottom: 2px solid ",";\n    &:hover {\n      color: white;\n    }\n  }\n"]);return g=function(){return e},e}function v(){var e=h()(["\n  background: ",";\n  width: 100%;\n  height: 4em;\n  padding: 1.5em 0;\n"]);return v=function(){return e},e}var b=i.c.header(v(),function(e){return e.theme.colors.base}),A=i.c.nav(g(),function(e){return e.theme.sizes.maxWidth},function(e){return e.theme.colors.base}),y={color:"white"},w=function(){return a.a.createElement(b,null,a.a.createElement(A,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/",activeStyle:y},"Home")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/tags/",activeStyle:y},"Tags")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/about/",activeStyle:y},"About")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/contact/",activeStyle:y},"Contact")))))};t(170);function E(){var e=h()(["\n  display: inline-block;\n  padding: 0.25em 0;\n  width: 100%;\n  @media screen and (min-width: ",") {\n    width: auto;\n  }\n  a {\n    font-weight: 600;\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n"]);return E=function(){return e},e}function x(){var e=h()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  border-top: 1px solid ",";\n  padding: 1em 0 2em;\n  margin: 0 1.5em;\n"]);return x=function(){return e},e}function k(){var e=h()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0 auto;\n  max-width: ",";\n"]);return k=function(){return e},e}var P=i.c.footer(k(),function(e){return e.theme.sizes.maxWidth}),z=i.c.ul(x(),function(e){return e.theme.colors.secondary}),j=i.c.li(E(),function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.base}),T=function(){return a.a.createElement(P,null,a.a.createElement(z,null,a.a.createElement(j,null,"Copyright © 2019 -"," ",a.a.createElement("a",{href:"https://vadelabs.com/",rel:"nofollow noopener noreferrer",target:"_blank"},"Vadelabs"),". All Rights Reserved"),a.a.createElement(j,null,a.a.createElement("a",{href:"/privacy/",target:"_blank",rel:"noopener noreferrer"},"Privacy")," ",a.a.createElement("a",{href:"/terms-of-use/",target:"_blank",rel:"noopener noreferrer"},"Terms Of Use")," ",a.a.createElement("a",{href:"/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact"))))},S={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}};function C(){var e=h()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n\n  button,\n  input {\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n    resize: none;\n    &:focus {\n      outline: none;\n    }\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n']);return C=function(){return e},e}var I=Object(i.b)(C());n.a=function(e){var n=e.children,t=e.post,r=e.page;e.index;return a.a.createElement("div",{className:"siteRoot"},a.a.createElement(d,{post:t,page:r,index:!0}),a.a.createElement(i.a,{theme:S},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"siteContent"},a.a.createElement(w,null),n),a.a.createElement(T,null))),a.a.createElement(I,null))}},176:function(e,n){e.exports={siteTitle:"Nerd's Den | Helping You Succeed In Software Development",shortSiteTitle:"Nerd's Den",siteDescription:"Software engineering blog for vadelabs. Collection of best resources to learn software design, web development, and programming practices. Check out our free articles, tutorials, courses, and toolkits for more ways to learn about software development.",siteUrl:"https://nerds-den.com",pathPrefix:"/",siteImage:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png",width:820,height:312},siteLanguage:"en",headerTitle:"Nerd's Den",headerSubTitle:"Memoirs Of A Skeptic Nerd",publisher:{"@type":"Organization",name:"Vadelabs, Inc.",url:"https://vadelabs.com",logo:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png"}},author:{"@type":"Person",name:"Pragyan Tripathi",url:"https://nerds-den.com/about/"},authorTwitterHandle:"pntripathi9417",authorSocialLinks:[{name:"github",url:"https://github.com/pntripathi9417"},{name:"twitter",url:"https://twitter.com/pntripathi9417"},{name:"facebook",url:"https://facebook.com/pntripathi9417"}],manifestName:"Nerd's Den - Memoirs Of A Skeptic Nerd",manifestShortName:"Nerd's Den",manifestStartUrl:"/",manifestBackgroundColor:"white",manifestThemeColor:"#666",manifestDisplay:"standalone",google:{trackingId:{}.GOOGLE_ANALYTICS_ID||"UA-55436366-2"},facebook:{appId:{}.FB_APP_ID||"2232544823425455"},postsPerHomePage:10,postsPerPage:10}},177:function(e,n){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAADr2/T/69v0/+vb9P/q2vT/7t72//jo+f/46Pn/9+j5//fo+f/56/r/9uf5/+/f9v/r2vT/69v0/+vb9P/r2/T/7d32/+3d9v/t3PX/8OD3/+LS8f+wnN3/e2TJ/4x30P+3pN//jHHN/4tzzf/fz+//79/3/+3c9v/t3fb/7d32/+/h+P/v4fj/7d73//vs/P+Cacz/JAep/y8Trf8vE63/PSu0/2d70P9TW8T/bVfD//bn+v/u4Pf/7+H4/+/h+P/z5Pn/8uP4//nn+v/U0/D/X2fI/zoasP88H7H/RC61/1dQwv+w8/f/qubz/22A0P/S0e//+ej7//Lj+P/z5Pn/8ub4//Hl+P/36fn/3dnx/1BKv/8xEa3/PyWz/15gxf9QRb3/XV/G/3KF0/9YVML/087u//jq+v/x5fj/8ub4//Xo+v/16Pr/+Or7/+vf9f+FitT/cHjO/05Mv/9MP7v/Pym0/0Avtv8/Mbb/Ry+2/+zd9f/46/v/9ef6//Xo+v/06/v/9Ov7//Tq+//16/v/+/f+/+nh9v9+bsv/bXzQ/2Bfxf+ipN3/0tfw/83P7f/z6Pr/9ev7//Tq+//06/v/9+77//fu+//37vv/9+37//bt+//97/v/29/z/3KM1f+pr+D//vH7//70/v/98/3/+O/7//fu+//37vv/9+77//fy+//38vv/9/H7//fy+//47/r/wNrw/53i8v+t8vn/qvf7/7DT7f/16vj/+fT8//bx+v/38vv/9/L7//fy+//59Pv/+fT7//j0+//8+P3/7ej2/5jL6/+l5/X/nNTu/4245f+i7Pf/t9Tt/+/q9v/79vz/+PT7//n0+//59Pv/+vj+//r4/v/49v3//////8vL7P+JteH/jbjj/4Om3v+Wyur/jbbk/5DH5//W1u////7///n2/f/6+P7/+vj+//z6/f/8+v3/+/r9///+///j5/X/k8Lm/5PD6P+f2vD/hKfc/6Pm9P+Cntz/4NPu///////7+f3//Pr9//z6/f/+/f7//v3+//38/v//////6u74/5/e8f+o7Pb/r/r9/6jt9/+2////a3zP/9fS7f///////Pv9//79/v/+/f7////////////+/v///////+fg8/+hxuf/qPj8/6b0+v+g5fX/mdju/4+r3P/18vn///////7+////////////////////////////////////////9/T4/77K6f+31Oz/oK3e/87U7P+0sOD///79//////////////////////////////////////////////7//////////v///vz+//38/v///////Pz9//39/v//////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},192:function(e,n,t){"use strict";var r=t(169),a=t.n(r),i=t(0),o=t.n(i),l=t(168);function c(){var e=a()(["\n  margin: 0 auto;\n  max-width: ",";\n\n  table {\n    width: 100%;\n  }\n  th,\n  td {\n    padding: 10px;\n    text-align: left;\n  }\n\n  tr:nth-child(even) {\n    background-color: #def3fd;\n  }\n  tr:hover {\n    background-color: #eeeeee;\n  }\n\n  th {\n    width: 10px;\n    padding-top: 20;\n    height: 50px;\n    text-align: center;\n    font-size: 120%;\n    background-color: #00bcd4;\n    color: white;\n  }\n\n  h1,\n  h2,\n  h3 {\n    font-weight: 600;\n    line-height: 1.25;\n    margin: 0 0 1rem 0;\n    text-transform: capitalize;\n  }\n\n  h1 {\n    font-size: 1.5em;\n  }\n  h2 {\n    font-size: 1.25em;\n  }\n  h3 {\n    font-size: 1em;\n  }\n\n  p {\n    line-height: 1.6;\n    margin: 0 0 2em 0;\n  }\n\n  a {\n    transition: 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n\n  del {\n    text-decoration: line-through;\n  }\n  strong {\n    font-weight: 600;\n  }\n  em {\n    font-style: italic;\n  }\n\n  ul,\n  ol {\n    margin: 0 0 2em 0;\n  }\n\n  ul {\n    li {\n      list-style: disc;\n      list-style-position: inside;\n      line-height: 1.25;\n      &:last-child {\n        margin: 0;\n      }\n    }\n  }\n\n  ol {\n    li {\n      list-style: decimal;\n      list-style-position: inside;\n      line-height: 1.25;\n      &:last-child {\n        margin: 0;\n      }\n    }\n  }\n\n  hr {\n    border-style: solid;\n    border-color: ",";\n    margin: 0 0 2em 0;\n  }\n\n  blockquote {\n    font-style: italic;\n    border-left: 4px solid ",";\n    padding: 0 0 0 0.5em;\n  }\n\n  pre {\n    margin: 0 0 2em 0;\n    border-radius: 2px;\n    background: "," !important;\n    span {\n      background: inherit !important;\n    }\n  }\n"]);return c=function(){return e},e}t(197);var s=l.c.div(c(),function(e){return e.theme.sizes.maxWidthCentered},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary});n.a=function(e){var n=e.html;return o.a.createElement(s,{dangerouslySetInnerHTML:{__html:n}})}},215:function(e,n,t){"use strict";t(170);var r=t(169),a=t.n(r),i=t(0),o=t.n(i),l=t(207),c=t.n(l),s=t(168);function m(){var e=a()(["\n  font-size: 3em;\n  text-transform: capitalize;\n  font-weight: 600;\n  position: absolute;\n  width: 100%;\n  max-width: ",";\n  padding: 0 1rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: white;\n"]);return m=function(){return e},e}function u(){var e=a()(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  min-height: 300px;\n  height: auto;\n  @media (min-width: ",") {\n    height: ",";\n  }\n  & > img {\n    object-fit: "," !important;\n    object-position: ",' !important;\n  }\n  &::before {\n    content: "";\n    background: rgba(0, 0, 0, 0.25);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n  }\n']);return u=function(){return e},e}function d(){var e=a()(["\n  position: relative;\n  min-height: 300px;\n"]);return d=function(){return e},e}var f=s.c.section(d()),h=Object(s.c)(c.a)(u(),function(e){return e.theme.responsive.small},function(e){return e.height||"auto"},function(e){return e.fit||"cover"},function(e){return e.position||"50% 50%"}),p=s.c.h1(m(),function(e){return e.theme.sizes.maxWidthCentered});n.a=function(e){var n=e.title,t=e.image,r=e.height,a=void 0===r?"50vh":r,i=t.children[0].fluid;return o.a.createElement(f,null,o.a.createElement(h,{height:a,fluid:i,backgroundColor:"#eeeeee"}),o.a.createElement(p,null,n))}},216:function(e,n,t){"use strict";var r=t(169),a=t.n(r),i=t(0),o=t.n(i),l=t(168);function c(){var e=a()(["\n  display: inline-block;\n  span {\n    font-weight: 600;\n  }\n"]);return c=function(){return e},e}function s(){var e=a()(["\n  margin: 0 auto 2em;\n  max-width: ",";\n"]);return s=function(){return e},e}var m=l.c.div(s(),function(e){return e.theme.sizes.maxWidthCentered}),u=l.c.p(c());n.a=function(e){return o.a.createElement(m,null,o.a.createElement(u,null,o.a.createElement("span",null,"Published:")," ",e.date))}},217:function(e,n,t){"use strict";var r=t(169),a=t.n(r),i=t(0),o=t.n(i),l=t(168),c=t(36);function s(){var e=a()(["\n  display: inline-block;\n  margin: 0 0.25em 0.25em 0;\n  a {\n    float: left;\n    transition: 0.2s;\n    background: ",";\n    padding: 0.5em;\n    border-radius: 2px;\n    text-transform: capitalize;\n    text-decoration: none;\n    color: ",";\n    border: 1px solid ",";\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return s=function(){return e},e}function m(){var e=a()(["\n  width: 100%;\n  margin: 0 auto 1em auto;\n  max-width: ",";\n"]);return m=function(){return e},e}var u=l.c.ul(m(),function(e){return e.theme.sizes.maxWidthCentered}),d=l.c.li(s(),function(e){return e.theme.colors.tertiary},function(e){return e.theme.colors.base},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary});n.a=function(e){var n=e.tags;return o.a.createElement(u,null,n.map(function(e){return o.a.createElement(d,{key:e.id},o.a.createElement(c.Link,{to:"/tags/"+e.slug+"/"},e.title))}))}},218:function(e,n,t){"use strict";var r=t(77),a=t.n(r),i=t(169),o=t.n(i),l=t(0),c=t.n(l),s=t(168),m=t(238);function u(){var e=o()(["\n  margin: 0 auto;\n  max-width: ",";\n"]);return u=function(){return e},e}var d=s.c.div(u(),function(e){return e.theme.sizes.maxWidthCentered});n.a=function(e){var n=e.facebook,t=e.slug,r=e.siteUrl;a()(e,["facebook","slug","siteUrl"]);return c.a.createElement(d,null,c.a.createElement(m.FacebookProvider,{appId:n.appId},c.a.createElement(m.Comments,{href:r+"/"+t,width:"100%",colorscheme:"light"})))}},235:function(e,n,t){"use strict";var r=t(0),a=t.n(r);t(176);n.a=function(e){return a.a.createElement("div",null)}}}]);
//# sourceMappingURL=component---src-templates-post-js-dfed1611ea0ae804d024.js.map