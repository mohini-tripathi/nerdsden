(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{169:function(e,t,n){"use strict";var r=n(167),a=n.n(r),i=n(0),o=n.n(i);function l(){var e=a()(["\n  margin: 0 auto auto;\n  width: 100%;\n  max-width: ",";\n  padding: 3em 1.5em 2em;\n  flex-grow: 1;\n"]);return l=function(){return e},e}var s=n(166).c.section(l(),function(e){return e.theme.sizes.maxWidth});t.a=function(e){var t=e.children;return o.a.createElement(s,null," ",t," ")}},171:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(166),o=(n(76),n(56),n(182),n(183)),l=n.n(o),s=n(175),c=n.n(s),d=n(174),u=d.facebook.appId,f=function(e){var t=e.post,n=void 0===t?{}:t,r=e.page,i=void 0===r?{}:r,o=d.siteTitle,s=d.siteDescription,f=d.siteImage,m=d.siteUrl,p="",h=[{"@context":"https://schema.org","@type":"WebSite",url:d.siteUrl,name:d.shortSiteTitle,alternateName:d.siteTitle}];Object.keys(n).length>0&&(o=(n.metaTitle||n.title)+" | "+d.shortSiteTitle,s=n.metaDescription||n.summary||n.excerpt,m=d.siteUrl+"/"+n.slug,n.tags&&n.tags.forEach(function(e){return p+=e.title+","}),h.push({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":d.siteUrl,name:d.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":m,name:o}}]},{"@context":"https://schema.org","@type":"BlogPosting",url:m,name:o,alternateName:d.siteTitle||"",headline:o,image:f,author:d.author,publisher:d.publisher,datePublished:n.date,dateModified:n.modified||n.date,mainEntityOfPage:m}));Object.keys(i).length>0&&(o=(i.metaTitle||i.title)+" | "+d.shortSiteTitle,s=i.metaDescription||i.summary||i.excerpt,m=d.siteUrl+"/"+i.slug,h.push({"@context":"https://schema.org","@type":"WebPage",url:m,name:o}));return a.a.createElement(l.a,{htmlAttributes:{lang:d.siteLanguage,prefix:"og: https://ogp.me/ns#"}},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:c.a}),a.a.createElement("link",{rel:"canonical",href:m}),a.a.createElement("title",null,o),a.a.createElement("meta",{name:"image",content:f.src}),a.a.createElement("meta",{name:"description",content:s}),a.a.createElement("meta",{name:"keywords",content:""+p.trim(",")}),a.a.createElement("link",{rel:"preconnect",href:"https://m.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://staticxx.facebook.com"}),a.a.createElement("link",{rel:"preconnect",href:"https://connect.facebook.net"}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),a.a.createElement("meta",{property:"og:title",content:o}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:url",content:m}),a.a.createElement("meta",{property:"og:image",itemProp:"image",content:f.url}),a.a.createElement("meta",{property:"og:image:width",content:f.width}),a.a.createElement("meta",{property:"og:image:height",content:f.height}),a.a.createElement("meta",{property:"og:description",content:s}),a.a.createElement("meta",{property:"fb:app_id",content:u}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:d.authorTwitterHandle||""}),a.a.createElement("meta",{name:"twitter:title",content:o}),a.a.createElement("meta",{name:"twitter:image",content:f.url}),a.a.createElement("meta",{name:"twitter:description",content:s}))},m=n(167),p=n.n(m),h=n(36);function g(){var e=p()(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1.5em;\n\n  ul {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  li {\n    display: inline-block;\n    margin-left: 1em;\n    &:first-child {\n      position: relative;\n      margin: 0;\n      flex-basis: 100%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: DarkGray;\n    font-weight: 600;\n    transition: all 0.2s;\n    border-bottom: 2px solid ",";\n    &:hover {\n      color: white;\n    }\n  }\n"]);return g=function(){return e},e}function b(){var e=p()(["\n  background: ",";\n  width: 100%;\n  padding: 1.5em 0;\n"]);return b=function(){return e},e}var v=i.c.header(b(),function(e){return e.theme.colors.base}),A=i.c.nav(g(),function(e){return e.theme.sizes.maxWidth},function(e){return e.theme.colors.base}),y={color:"white"},w=function(){return a.a.createElement(v,null,a.a.createElement(A,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/",activeStyle:y},"Home")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/tags/",activeStyle:y},"Tags")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/about/",activeStyle:y},"About")),a.a.createElement("li",null,a.a.createElement(h.Link,{to:"/contact/",activeStyle:y},"Contact")))))};n(168);function E(){var e=p()(["\n  display: inline-block;\n  padding: 0.25em 0;\n  width: 100%;\n  @media screen and (min-width: ",") {\n    width: auto;\n  }\n  a {\n    font-weight: 600;\n    transition: all 0.2s;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    &:visited {\n      color: ",";\n    }\n  }\n"]);return E=function(){return e},e}function S(){var e=p()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  border-top: 1px solid ",";\n  padding: 1em 0 2em;\n  margin: 0 1.5em;\n"]);return S=function(){return e},e}function x(){var e=p()(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0 auto;\n  max-width: ",";\n"]);return x=function(){return e},e}var k=i.c.footer(x(),function(e){return e.theme.sizes.maxWidth}),P=i.c.ul(S(),function(e){return e.theme.colors.secondary}),L=i.c.li(E(),function(e){return e.theme.responsive.small},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight},function(e){return e.theme.colors.base}),z=function(){return a.a.createElement(k,null,a.a.createElement(P,null,a.a.createElement(L,null,"Copyright © 2019 -"," ",a.a.createElement("a",{href:"https://vadelabs.com/",rel:"nofollow noopener noreferrer",target:"_blank"},"Vadelabs"),". All Rights Reserved"),a.a.createElement(L,null,a.a.createElement("a",{href:"/privacy/",target:"_blank",rel:"noopener noreferrer"},"Privacy")," ",a.a.createElement("a",{href:"/terms-of-use/",target:"_blank",rel:"noopener noreferrer"},"Terms Of Use")," ",a.a.createElement("a",{href:"/contact/",target:"_blank",rel:"noopener noreferrer"},"Contact"))))},T={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1050px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}};function j(){var e=p()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul, li {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n\n  button,\n  input {\n    font-family: inherit;\n    font-size: inherit;\n    background: none;\n    border: none;\n    outline: none;\n    appearance: none;\n    border-radius: 0;\n    resize: none;\n    &:focus {\n      outline: none;\n    }\n    &:invalid {\n      box-shadow: none;\n    }\n  }\n']);return j=function(){return e},e}var I=Object(i.b)(j());t.a=function(e){var t=e.children,n=e.post,r=e.page;e.index;return a.a.createElement("div",{className:"siteRoot"},a.a.createElement(f,{post:n,page:r,index:!0}),a.a.createElement(i.a,{theme:T},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"siteContent"},a.a.createElement(w,null),t),a.a.createElement(z,null))),a.a.createElement(I,null))}},174:function(e,t){e.exports={siteTitle:"Nerd's Den | Memoirs Of A Skeptic Nerd",shortSiteTitle:"Nerd's Den",siteDescription:"Software engineering blog for vadelabs. It discusses about software design, software architecture, web development, and software developer practices. Check out our free articles, tutorials, courses, and toolkits for more ways to learn about software development.",siteUrl:"https://nerds-den.com",pathPrefix:"/",siteImage:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png",width:820,height:312},siteLanguage:"en",headerTitle:"Nerd's Den",headerSubTitle:"Memoirs Of A Skeptic Nerd",publisher:{"@type":"Organization",name:"Vadelabs, Inc.",url:"https://vadelabs.com",logo:{"@type":"ImageObject",url:"https://nerds-den.com/logos/nerds-den.png"}},author:{"@type":"Person",name:"Pragyan Tripathi",url:"https://nerds-den.com/about/"},authorTwitterHandle:"pntripathi9417",authorSocialLinks:[{name:"github",url:"https://github.com/pntripathi9417"},{name:"twitter",url:"https://twitter.com/pntripathi9417"},{name:"facebook",url:"https://facebook.com/pntripathi9417"}],manifestName:"Nerd's Den - Memoirs Of A Skeptic Nerd",manifestShortName:"Nerd's Den",manifestStarUrl:"/",manifestBackgroundColor:"white",manifestThemeColor:"#666",manifestDisplay:"standalone",google:{trackingId:{}.GOOGLE_ANALYTICS_ID||"UA-55436366-2"},facebook:{appId:{}.FB_APP_ID||"2232544823425455"},postsPerHomePage:10,postsPerPage:10}},175:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAADr2/T/69v0/+vb9P/q2vT/7t72//jo+f/46Pn/9+j5//fo+f/56/r/9uf5/+/f9v/r2vT/69v0/+vb9P/r2/T/7d32/+3d9v/t3PX/8OD3/+LS8f+wnN3/e2TJ/4x30P+3pN//jHHN/4tzzf/fz+//79/3/+3c9v/t3fb/7d32/+/h+P/v4fj/7d73//vs/P+Cacz/JAep/y8Trf8vE63/PSu0/2d70P9TW8T/bVfD//bn+v/u4Pf/7+H4/+/h+P/z5Pn/8uP4//nn+v/U0/D/X2fI/zoasP88H7H/RC61/1dQwv+w8/f/qubz/22A0P/S0e//+ej7//Lj+P/z5Pn/8ub4//Hl+P/36fn/3dnx/1BKv/8xEa3/PyWz/15gxf9QRb3/XV/G/3KF0/9YVML/087u//jq+v/x5fj/8ub4//Xo+v/16Pr/+Or7/+vf9f+FitT/cHjO/05Mv/9MP7v/Pym0/0Avtv8/Mbb/Ry+2/+zd9f/46/v/9ef6//Xo+v/06/v/9Ov7//Tq+//16/v/+/f+/+nh9v9+bsv/bXzQ/2Bfxf+ipN3/0tfw/83P7f/z6Pr/9ev7//Tq+//06/v/9+77//fu+//37vv/9+37//bt+//97/v/29/z/3KM1f+pr+D//vH7//70/v/98/3/+O/7//fu+//37vv/9+77//fy+//38vv/9/H7//fy+//47/r/wNrw/53i8v+t8vn/qvf7/7DT7f/16vj/+fT8//bx+v/38vv/9/L7//fy+//59Pv/+fT7//j0+//8+P3/7ej2/5jL6/+l5/X/nNTu/4245f+i7Pf/t9Tt/+/q9v/79vz/+PT7//n0+//59Pv/+vj+//r4/v/49v3//////8vL7P+JteH/jbjj/4Om3v+Wyur/jbbk/5DH5//W1u////7///n2/f/6+P7/+vj+//z6/f/8+v3/+/r9///+///j5/X/k8Lm/5PD6P+f2vD/hKfc/6Pm9P+Cntz/4NPu///////7+f3//Pr9//z6/f/+/f7//v3+//38/v//////6u74/5/e8f+o7Pb/r/r9/6jt9/+2////a3zP/9fS7f///////Pv9//79/v/+/f7////////////+/v///////+fg8/+hxuf/qPj8/6b0+v+g5fX/mdju/4+r3P/18vn///////7+////////////////////////////////////////9/T4/77K6f+31Oz/oK3e/87U7P+0sOD///79//////////////////////////////////////////////7//////////v///vz+//38/v///////Pz9//39/v//////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},203:function(e,t,n){"use strict";var r=n(167),a=n.n(r),i=n(0),o=n.n(i);function l(){var e=a()(['\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin: 0 auto;\n  &::after {\n    content: "";\n    flex: 0 0 32%;\n  }\n']);return l=function(){return e},e}var s=n(166).c.ul(l());t.a=function(e){var t=e.children;return o.a.createElement(s,null,t)}},204:function(e,t,n){"use strict";var r=n(77),a=n.n(r),i=(n(168),n(167)),o=n.n(i),l=n(0),s=n.n(l),c=n(166),d=n(36),u=n(205),f=n.n(u);function m(){var e=o()(["\n  margin: 0 1rem 1rem 1rem;\n  line-height: 1.6;\n"]);return m=function(){return e},e}function p(){var e=o()(["\n  margin: 0 1rem 1.5rem 1rem;\n  color: gray;\n"]);return p=function(){return e},e}function h(){var e=o()(["\n  font-size: 1.5em;\n  font-weight: 600;\n  text-transform: capitalize;\n  margin: 1rem 1rem 0.5rem 1rem;\n"]);return h=function(){return e},e}function g(){var e=o()(["\n  position: relative;\n  border: 1px solid ",";\n  border-radius: 2px;\n  margin: 0 0 1em 0;\n  width: 100%;\n  transition: background 0.2s;\n  @media screen and (min-width: ",") {\n    flex: ",";\n    margin: 0 0 2vw 0;\n  }\n  @media screen and (min-width: ",") {\n    flex: ",";\n  }\n  &:hover {\n    background: ",";\n  }\n  a {\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    width: 100%;\n    color: ",";\n    text-decoration: none;\n    .gatsby-image-wrapper {\n      height: 0;\n      padding-bottom: 60%;\n      @media screen and (min-width: ",") {\n        padding-bottom: ",";\n      }\n    }\n  }\n"]);return g=function(){return e},e}var b=c.c.li(g(),function(e){return e.theme.colors.secondary},function(e){return e.theme.responsive.small},function(e){return e.featured?"0 0 100%":"0 0 49%"},function(e){return e.theme.responsive.medium},function(e){return e.featured?"0 0 100%":"0 0 32%"},function(e){return e.theme.colors.tertiary},function(e){return e.theme.colors.base},function(e){return e.theme.responsive.small},function(e){return e.featured?"40%":"60%"}),v=c.c.h2(h()),A=c.c.h3(p()),y=c.c.p(m());t.a=function(e){var t=e.slug,n=e.cover,r=e.title,i=e.date,o=e.summary,l=e.excerpt,c=a()(e,["slug","cover","title","date","summary","excerpt"]),u=n.children[0].fluid;return s.a.createElement(b,{featured:c.featured},s.a.createElement(d.Link,{to:"/"+t+"/"},s.a.createElement(f.a,{fluid:u,backgroundColor:"#eeeeee"}),s.a.createElement(v,null,r),s.a.createElement(A,null,i),s.a.createElement(y,{dangerouslySetInnerHTML:{__html:o||l}})))}},205:function(e,t,n){"use strict";var r=n(7);t.__esModule=!0,t.default=void 0;var a,i=r(n(8)),o=r(n(37)),l=r(n(77)),s=r(n(78)),c=r(n(0)),d=r(n(1)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},p=[];var h=function(e,t){(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),a).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",a=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+a+"<img "+l+s+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var n=e.style,r=e.onLoad,a=e.onError,i=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,s.default)({},i,{onLoad:r,onError:a,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var n;n=e.call(this,t)||this;var r=!0,a=!1,i=t.fadeIn,l=m(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,a=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,a=!1);var s=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:r,imgLoaded:!1,IOSupported:a,fadeIn:i,hasNoScript:s,seenBefore:l},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:m(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,A=e.Tag,y="boolean"==typeof v?"lightgray":v,w=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),E=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),S={title:t,alt:this.state.isVisible?"":n,style:w,className:m};if(p){var x=p;return c.default.createElement(A,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(A,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(b,(0,s.default)({src:x.base64},S)),x.tracedSVG&&c.default.createElement(b,(0,s.default)({src:x.tracedSVG},S)),y&&c.default.createElement(A,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(b,{alt:n,title:t,src:x.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:n,title:t},x))}}))}if(h){var k=h,P=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete P.display,c.default.createElement(A,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&c.default.createElement(b,(0,s.default)({src:k.base64},S)),k.tracedSVG&&c.default.createElement(b,(0,s.default)({src:k.tracedSVG},S)),y&&c.default.createElement(A,{title:t,style:{backgroundColor:y,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),c.default.createElement(b,{alt:n,title:t,width:k.width,height:k.height,src:k.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:n,title:t,width:k.width,height:k.height},k))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var A=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:A,sizes:y,fixed:A,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=v;t.default=w}}]);
//# sourceMappingURL=1-46e818b61ddfd9ca4ddf.js.map