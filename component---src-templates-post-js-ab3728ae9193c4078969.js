(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,n,t){"use strict";t.r(n);t(26);var r=t(0),a=t.n(r),i=t(172),o=t(169),l=(t(165),t(160)),c=t.n(l),s=t(201),m=t.n(s),u=t(159);function d(){var e=c()(["\n  font-size: 3em;\n  text-transform: capitalize;\n  font-weight: 600;\n  position: absolute;\n  width: 100%;\n  max-width: ",";\n  padding: 0 1rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: white;\n"]);return d=function(){return e},e}function f(){var e=c()(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  min-height: 300px;\n  height: auto;\n  @media (min-width: ",") {\n    height: ",";\n  }\n  & > img {\n    object-fit: "," !important;\n    object-position: ",' !important;\n  }\n  &::before {\n    content: "";\n    background: rgba(0, 0, 0, 0.25);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n  }\n']);return f=function(){return e},e}function h(){var e=c()(["\n  position: relative;\n  min-height: 300px;\n"]);return h=function(){return e},e}var p=u.c.section(h()),g=Object(u.c)(m.a)(f(),function(e){return e.theme.responsive.small},function(e){return e.height||"auto"},function(e){return e.fit||"cover"},function(e){return e.position||"50% 50%"}),v=u.c.h1(d(),function(e){return e.theme.sizes.maxWidthCentered}),b=function(e){var n=e.title,t=e.image,r=e.height,i=void 0===r?"50vh":r,o=t.children[0].fluid;return a.a.createElement(p,null,a.a.createElement(g,{height:i,fluid:o,backgroundColor:"#eeeeee"}),a.a.createElement(v,null,n))},A=t(202);function y(){var e=c()(["\n  display: inline-block;\n  span {\n    font-weight: 600;\n  }\n"]);return y=function(){return e},e}function E(){var e=c()(["\n  margin: 0 auto 2em;\n  max-width: ",";\n"]);return E=function(){return e},e}var w=u.c.div(E(),function(e){return e.theme.sizes.maxWidthCentered}),x=u.c.p(y()),k=function(e){return a.a.createElement(w,null,a.a.createElement(x,null,a.a.createElement("span",null,"Published:")," ",e.date))},P=t(36);function z(){var e=c()(["\n  display: inline-block;\n  margin: 0 0.25em 0.25em 0;\n  a {\n    float: left;\n    transition: 0.2s;\n    background: ",";\n    padding: 0.5em;\n    border-radius: 2px;\n    text-transform: capitalize;\n    text-decoration: none;\n    color: ",";\n    border: 1px solid ",";\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return z=function(){return e},e}function j(){var e=c()(["\n  width: 100%;\n  margin: 0 auto 1em auto;\n  max-width: ",";\n"]);return j=function(){return e},e}var T=u.c.ul(j(),function(e){return e.theme.sizes.maxWidthCentered}),S=u.c.li(z(),function(e){return e.theme.colors.tertiary},function(e){return e.theme.colors.base},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary}),I=function(e){var n=e.tags;return a.a.createElement(T,null,n.map(function(e){return a.a.createElement(S,{key:e.id},a.a.createElement(P.Link,{to:"/tags/"+e.slug+"/"},e.title))}))},L=t(77),O=t.n(L),C=t(263);function D(){var e=c()(["\n  margin: 0 auto;\n  max-width: ",";\n"]);return D=function(){return e},e}var N=u.c.div(D(),function(e){return e.theme.sizes.maxWidthCentered}),q=function(e){var n=e.facebook,t=e.slug,r=e.siteUrl;O()(e,["facebook","slug","siteUrl"]);return a.a.createElement(N,null,a.a.createElement(C.FacebookProvider,{appId:n.appId},a.a.createElement(C.Comments,{href:r+"/"+t,width:"100%",colorscheme:"light"})))},U=(t(168),function(e){return a.a.createElement("div",null)});t.d(n,"query",function(){return H});var H="3354721762";n.default=function(e){var n=e.data,t=(e.pageContext,n.post),r=t.id,l=t.html,c=t.fields,s=t.frontmatter,m=n.site.siteMetadata,u=m.siteUrl,d=m.facebook,f=Object.assign({id:r,html:l},c,s);return a.a.createElement(i.a,{post:f},a.a.createElement(b,{title:f.title,image:f.cover}),a.a.createElement(U,null),a.a.createElement(o.a,null,f.tags&&a.a.createElement(I,{tags:f.tags}),a.a.createElement(k,{date:f.date}),a.a.createElement(A.a,{html:f.html}),a.a.createElement("footer",null,a.a.createElement(q,{facebook:d,siteUrl:u,slug:f.slug}))))}},168:function(e,n){e.exports={siteTitle:"Nerd's Den | Memoirs Of A Skeptic Nerd",shortSiteTitle:"Nerd's Den",siteDescription:"Official blog for Vadelabs. It discusses in-depth about scalable, reliable, and flexible software design and software architecture practices. Check out our free articles, tutorials, courses, and toolkits for more ways to learn about software development.",siteUrl:"https://nerds-den.com",pathPrefix:"/",siteImage:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png",width:820,height:312},siteLanguage:"en",headerTitle:"Nerd's Den",headerSubTitle:"Memoirs Of A Skeptic Nerd",publisher:{"@type":"Organization",name:"Vadelabs, Inc.",url:"https://vadelabs.com",logo:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png"}},author:{"@type":"Person",name:"Pragyan Tripathi",url:"https://nerds-den.com/about/"},authorTwitterHandle:"pntripathi9417",authorSocialLinks:[{name:"github",url:"https://github.com/pntripathi9417"},{name:"twitter",url:"https://twitter.com/pntripathi9417"},{name:"facebook",url:"https://facebook.com/pntripathi9417"}],manifestName:"Nerd's Den - Memoirs Of A Skeptic Nerd",manifestShortName:"Nerd's Den",manifestStarUrl:"/",manifestBackgroundColor:"white",manifestThemeColor:"#666",manifestDisplay:"standalone",google:{trackingId:{}.GOOGLE_ANALYTICS_ID||"UA-55436366-2"},facebook:{appId:{}.FB_APP_ID||"2232544823425455"},postsPerHomePage:10,postsPerPage:10}},169:function(e,n,t){"use strict";var r=t(160),a=t.n(r),i=t(0),o=t.n(i);function l(){var e=a()(["\n  margin: 0 auto auto;\n  width: 100%;\n  max-width: ",";\n  padding: 3em 1.5em 2em;\n  flex-grow: 1;\n"]);return l=function(){return e},e}var c=t(159).c.section(l(),function(e){return e.theme.sizes.maxWidth});n.a=function(e){var n=e.children;return o.a.createElement(c,null," ",n," ")}},172:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(159),o=(t(76),t(56),t(181),t(186)),l=t.n(o),c=t(173),s=t.n(c),m=t(168),u=m.facebook.appId,d=function(e){var n=e.post,t=void 0===n?{}:n,r=e.page,i=void 0===r?{}:r,o=m.siteTitle,c=m.siteDescription,d=m.siteImage,f=m.siteUrl,h="",p=[{"@context":"https://schema.org","@type":"WebSite",url:m.siteUrl,name:m.shortSiteTitle,alternateName:m.siteTitle}];Object.keys(t).length>0&&(o=(t.metaTitle||t.title)+" | "+m.shortSiteTitle,c=t.metaDescription||t.summary||t.excerpt,f=m.siteUrl+"/"+t.slug,t.tags&&t.tags.forEach(function(e){return h+=e.title+","}),p.push({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":m.siteUrl,name:m.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":f,name:o}}]},{"@context":"https://schema.org","@type":"BlogPosting",url:f,name:o,alternateName:m.siteTitle||"",headline:o,image:d,author:m.author,publisher:m.publisher,datePublished:t.date,dateModified:t.modified||t.date,mainEntityOfPage:f}));Object.keys(i).length>0&&(o=(i.metaTitle||i.title)+" | "+m.shortSiteTitle,c=i.metaDescription||i.summary||i.excerpt,f=m.siteUrl+"/"+i.slug,p.push({"@context":"https://schema.org","@type":"WebPage",url:f,name:o}));return a.a.createElement(l.a,{htmlAttributes:{lang:m.siteLanguage,prefix:"og: https://ogp.me/ns#"}},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:s.a}),a.a.createElement("link",{rel:"canonical",href:f}),a.a.createElement("title",null,o),a.a.createElement("meta",{name:"image",content:d.src}),a.a.createElement("meta",{name:"description",content:c}),a.a.createElement("meta",{name:"keywords",content:""+h.trim(",")}),a.a.createElement("link",{rel:"preconnect",href:"https://m.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://staticxx.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://connect.facebook.net"}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),a.a.createElement("meta",{property:"og:title",content:o}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:url",content:f}),a.a.createElement("meta",{property:"og:image",itemProp:"image",content:d.url}),a.a.createElement("meta",{property:"og:image:width",content:d.width}),a.a.createElement("meta",{property:"og:image:height",content:d.height}),a.a.createElement("meta",{property:"og:description",content:c}),a.a.createElement("meta",{property:"fb:app_id",content:u}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:m.authorTwitterHandle||""}),a.a.createElement("meta",{name:"twitter:title",content:o}),a.a.createElement("meta",{name:"twitter:image",content:d.url}),a.a.createElement("meta",{name:"twitter:description",content:c}))},f=t(160),h=t.n(f),p=t(36);function g(){var e=h()(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1.5em;\n\n  ul {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  li {\n    display: inline-block;\n    margin-left: 1em;\n    &:first-child {\n      position: relative;\n      margin: 0;\n      flex-basis: 100%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: DarkGray;\n    font-weight: 600;\n    transition: all 0.2s;\n    border-bottom: 2px solid ",";\n    &:hover {\n      color: white;\n    }\n  }\n"]);return g=function(){return e},e}function v(){var e=h()(["\n  background: ",";\n  width: 100%;\n  padding: 1.5em 0;\n"]);return v=function(){return e},e}var b=i.c.header(v(),function(e){return e.theme.colors.base}),A=i.c.nav(g(),function(e){return e.theme.sizes.maxWidth},function(e){return e.theme.colors.base}),y={color:"white"},E=function(){return a.a.createElement(b,null,a.a.createElement(A,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/",activeStyle:y},"Home")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/tags/",activeStyle:y},"Tags")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/about/",activeStyle:y},"About")),a.a.createElement("li",null,a.a.createElement(p.Link,{to:"/contact/",activeStyle:y},"Contact")))))};t(165);function w(){var e=h()(["\n  display: inline-block;\n  padding: 0.25em 0;\n  width: 100%;\n  @media screen and (min-width: ",") {\n    width: auto;\n  }\n  a {\n    font-weight: 600;\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n"]);return w=function(){return e},e}function x(){var e=h()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  border-top: 1px solid ",";\n  padding: 1em 0 2em;\n  margin: 0 1.5em;\n"]);return x=function(){return e},e}function k(){var e=h()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0 auto;\n  max-width: ",";\n"]);return k=function(){return e},e}var P=i.c.footer(k(),function(e){return e.theme.sizes.maxWidth}),z=i.c.ul(x(),function(e){return e.theme.colors.secondary}),j=i.c.li(w(),function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.base}),T=function(){return a.a.createElement(P,null,a.a.createElement(z,null,a.a.createElement(j,null,"Copyright © 2019 -"," ",a.a.createElement("a",{href:"https://vadelabs.com/",rel:"nofollow noopener noreferrer",target:"_blank"},"Vadelabs"),". All Rights Reserved"),a.a.createElement(j,null,a.a.createElement("a",{href:"/privacy/",target:"_blank",rel:"noopener noreferrer"},"Privacy")," ",a.a.createElement("a",{href:"/terms-of-use/",target:"_blank",rel:"noopener noreferrer"},"Terms Of Use")," ",a.a.createElement("a",{href:"/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact"))))},S={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}};function I(){var e=h()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n\n  button,\n  input {\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n    resize: none;\n    &:focus {\n      outline: none;\n    }\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n']);return I=function(){return e},e}var L=Object(i.b)(I());n.a=function(e){var n=e.children,t=e.post,r=e.page;return a.a.createElement("div",{className:"siteRoot"},a.a.createElement(d,{post:t,page:r}),a.a.createElement(i.a,{theme:S},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"siteContent"},a.a.createElement(E,null),n),a.a.createElement(T,null))),a.a.createElement(L,null))}},173:function(e,n){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAADr2/T/69v0/+vb9P/q2vT/7t72//jo+f/46Pn/9+j5//fo+f/56/r/9uf5/+/f9v/r2vT/69v0/+vb9P/r2/T/7d32/+3d9v/t3PX/8OD3/+LS8f+wnN3/e2TJ/4x30P+3pN//jHHN/4tzzf/fz+//79/3/+3c9v/t3fb/7d32/+/h+P/v4fj/7d73//vs/P+Cacz/JAep/y8Trf8vE63/PSu0/2d70P9TW8T/bVfD//bn+v/u4Pf/7+H4/+/h+P/z5Pn/8uP4//nn+v/U0/D/X2fI/zoasP88H7H/RC61/1dQwv+w8/f/qubz/22A0P/S0e//+ej7//Lj+P/z5Pn/8ub4//Hl+P/36fn/3dnx/1BKv/8xEa3/PyWz/15gxf9QRb3/XV/G/3KF0/9YVML/087u//jq+v/x5fj/8ub4//Xo+v/16Pr/+Or7/+vf9f+FitT/cHjO/05Mv/9MP7v/Pym0/0Avtv8/Mbb/Ry+2/+zd9f/46/v/9ef6//Xo+v/06/v/9Ov7//Tq+//16/v/+/f+/+nh9v9+bsv/bXzQ/2Bfxf+ipN3/0tfw/83P7f/z6Pr/9ev7//Tq+//06/v/9+77//fu+//37vv/9+37//bt+//97/v/29/z/3KM1f+pr+D//vH7//70/v/98/3/+O/7//fu+//37vv/9+77//fy+//38vv/9/H7//fy+//47/r/wNrw/53i8v+t8vn/qvf7/7DT7f/16vj/+fT8//bx+v/38vv/9/L7//fy+//59Pv/+fT7//j0+//8+P3/7ej2/5jL6/+l5/X/nNTu/4245f+i7Pf/t9Tt/+/q9v/79vz/+PT7//n0+//59Pv/+vj+//r4/v/49v3//////8vL7P+JteH/jbjj/4Om3v+Wyur/jbbk/5DH5//W1u////7///n2/f/6+P7/+vj+//z6/f/8+v3/+/r9///+///j5/X/k8Lm/5PD6P+f2vD/hKfc/6Pm9P+Cntz/4NPu///////7+f3//Pr9//z6/f/+/f7//v3+//38/v//////6u74/5/e8f+o7Pb/r/r9/6jt9/+2////a3zP/9fS7f///////Pv9//79/v/+/f7////////////+/v///////+fg8/+hxuf/qPj8/6b0+v+g5fX/mdju/4+r3P/18vn///////7+////////////////////////////////////////9/T4/77K6f+31Oz/oK3e/87U7P+0sOD///79//////////////////////////////////////////////7//////////v///vz+//38/v///////Pz9//39/v//////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},202:function(e,n,t){"use strict";var r=t(160),a=t.n(r),i=t(0),o=t.n(i),l=t(159);function c(){var e=a()(["\n  margin: 0 auto;\n  max-width: ",";\n\n  h1,\n  h2,\n  h3 {\n    font-weight: 600;\n    line-height: 1.25;\n    margin: 0 0 1rem 0;\n    text-transform: capitalize;\n  }\n\n  h1 {\n    font-size: 1.5em;\n  }\n  h2 {\n    font-size: 1.25em;\n  }\n  h3 {\n    font-size: 1em;\n  }\n\n  p {\n    line-height: 1.6;\n    margin: 0 0 2em 0;\n  }\n\n  a {\n    transition: 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n\n  del {\n    text-decoration: line-through;\n  }\n  strong {\n    font-weight: 600;\n  }\n  em {\n    font-style: italic;\n  }\n\n  ul,\n  ol {\n    margin: 0 0 2em 0;\n  }\n\n  ul {\n    li {\n      list-style: disc;\n      list-style-position: inside;\n      line-height: 1.25;\n      &:last-child {\n        margin: 0;\n      }\n    }\n  }\n\n  ol {\n    li {\n      list-style: decimal;\n      list-style-position: inside;\n      line-height: 1.25;\n      &:last-child {\n        margin: 0;\n      }\n    }\n  }\n\n  hr {\n    border-style: solid;\n    border-color: ",";\n    margin: 0 0 2em 0;\n  }\n\n  blockquote {\n    font-style: italic;\n    border-left: 4px solid ",";\n    padding: 0 0 0 0.5em;\n  }\n\n  pre {\n    margin: 0 0 2em 0;\n    border-radius: 2px;\n    background: "," !important;\n    span {\n      background: inherit !important;\n    }\n  }\n"]);return c=function(){return e},e}t(203);var s=l.c.div(c(),function(e){return e.theme.sizes.maxWidthCentered},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary},function(e){return e.theme.colors.secondary});n.a=function(e){var n=e.html;return o.a.createElement(s,{dangerouslySetInnerHTML:{__html:n}})}}}]);
//# sourceMappingURL=component---src-templates-post-js-ab3728ae9193c4078969.js.map