(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JZYy:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return B}));var n=a("KQm4"),l=a("zLVn"),o=a("q1tI"),i=a.n(o),c=a("1Yj4"),r=a("ok1R"),m=a("rhny"),s=a("Tgqd"),d=a("9eSz"),p=a.n(d),g=a("vrFN"),u=a("/lKu"),f=a("hpuM"),b=a("FdCi"),x=a("HAP3"),h=a("70xR"),E=a("Pvte"),S=a("Kd0Z"),y=a("QNtI"),C=a("vOnD"),w=a("bC0J"),_=a("deLP"),O=a("C+fU"),I=C.default.section.withConfig({displayName:"author-templatestc__AuthorSection",componentId:"sc-14k3mzp-0"})(["background:",";padding-top:60px;padding-bottom:50px;","{padding-top:78px;padding-bottom:72px;}"],Object(w.a)("colors.themeColor"),O.b.large),v=C.default.figure.withConfig({displayName:"author-templatestc__AuthorImg",componentId:"sc-14k3mzp-1"})(["margin-bottom:10px;","{margin-bottom:0;}img{border-radius:50%;border:15px solid #fff;}"],O.b.small),j=C.default.div.withConfig({displayName:"author-templatestc__AuthorInfo",componentId:"sc-14k3mzp-2"})(["","{padding-left:35px;}"],O.b.small),k=C.default.section.withConfig({displayName:"author-templatestc__AuthorBlogs",componentId:"sc-14k3mzp-3"})(["padding-top:55px;padding-bottom:24px;","{padding-top:75px;padding-bottom:44px;}","{padding-top:95px;padding-bottom:70px;}"],O.b.small,O.b.large),N=C.default.div.withConfig({displayName:"author-templatestc__LoadMoreBtnWrap",componentId:"sc-14k3mzp-4"})(["",""],(function(e){return e.isLoading&&Object(C.css)(["button{cursor:not-allowed;opacity:.5;}svg{animation:"," .5s linear 0s infinite;}"],_.a)})),z=function(e){var t=e.data,a=(e.pageContext,e.location,Object(l.a)(e,["data","pageContext","location"])),d=t.authorsJson,C=t.allMarkdownRemark,w=C.totalCount,_=C.edges.slice(0),O=a.authorCSS,z=O.nameHeadingCSS,B=O.nameTextCSS,L=O.taglineCSS,A=O.bioCSS,M=O.socialCSS,T=a.blogSectionCSS,q=T.titleCSS,W=T.blogCSS,P=a.loadMoreBtn,F=Object(n.a)(_).splice(0,8),H=Object(o.useState)(!0),J=H[0],K=H[1],R=Object(o.useState)(8),D=R[0],Q=R[1],U=Object(o.useState)([]),Z=U[0],V=U[1],Y=Object(o.useState)(!1),G=Y[0],X=Y[1],$=function(){var e=_.length-D;K(0!==e)};return i.a.createElement(u.a,null,i.a.createElement(g.a,{title:"Author: "+d.name}),i.a.createElement(f.a,null),i.a.createElement("div",{className:"main-content"},i.a.createElement(I,null,i.a.createElement(c.a,null,i.a.createElement(r.a,{className:"align-items-center"},i.a.createElement(m.a,{sm:4,lg:{size:3,offset:1}},i.a.createElement(v,null,i.a.createElement(p.a,{fluid:d.image.childImageSharp.fluid,alt:d.name}))),i.a.createElement(m.a,{sm:8,lg:7},i.a.createElement(j,null,d.name&&i.a.createElement(x.a,z,i.a.createElement(h.a,B,"I'm "),d.name),d.tagline&&i.a.createElement(x.a,L,d.tagline),d.bio&&i.a.createElement(h.a,A,d.bio),d.social&&i.a.createElement(E.a,Object.assign({},M,{social:d.social}))))))),i.a.createElement(k,null,i.a.createElement(c.a,null,i.a.createElement(r.a,null,i.a.createElement(m.a,{lg:12},i.a.createElement(h.a,null,"Total Post (",w,")"),i.a.createElement(x.a,q,"Articles By This Author"))),i.a.createElement(r.a,null,i.a.createElement(m.a,{lg:12},i.a.createElement(o.Fragment,null,F.map((function(e){return i.a.createElement(S.a,Object.assign({},W,{key:e.node.fields.slug,content:Object.assign({},e.node.fields,e.node.frontmatter,{excerpt:e.node.excerpt})}))})),Z&&Z.map((function(e){return i.a.createElement(S.a,Object.assign({},W,{key:e.node.fields.slug,content:Object.assign({},e.node.fields,e.node.frontmatter,{excerpt:e.node.excerpt})}))}))))),i.a.createElement(r.a,null,i.a.createElement(m.a,{lg:12,className:"text-center"},J&&i.a.createElement(N,{isLoading:G},i.a.createElement(y.a,Object.assign({disabled:!J,onClick:function(){X(!0),setTimeout((function(){var e=Object(n.a)(_).splice(D,2);Q((function(e){return e+2})),V([].concat(Object(n.a)(Z),Object(n.a)(e))),X(!1)}),3e3),$()}},P,{icon:i.a.createElement(s.i,null)}),"Load More Article")),!J&&i.a.createElement("p",null,"There is no more posts to show.")))))),i.a.createElement(b.a,null))};z.defaultProps={authorCSS:{nameHeadingCSS:{as:"h2",fontSize:["28px","32px","36px"],fontWeight:700,color:"#fff",lineHeight:1.1},nameTextCSS:{as:"span",fontWeight:300},taglineCSS:{as:"h5",color:"#fff",mb:["15px",null,"24px"]},bioCSS:{fontSize:"16px",color:"#fff",fontWeight:300,mb:["23px",null,"33px"]},socialCSS:{color:"#fff",borderColor:"#fff"}},blogSectionCSS:{titleCSS:{as:"h4",color:"secondaryColor",fontWeight:700,mb:"41px",mt:"10px"},blogCSS:{mb:"30px"}},loadMoreBtn:{btnsize:"large",varient:"contained",shape:"rounded",fontSize:["12px",null,null,"13px"],letterSpacing:[0,null,null,"1px"],iconcss:{pl:"4px",width:"14px",height:"12px"}}};var B="2846309932";t.default=z},Kd0Z:function(e,t,a){"use strict";var n=a("zLVn"),l=a("q1tI"),o=a.n(l),i=a("Wbzz"),c=a("Tgqd"),r=a("QNtI"),m=a("wkEL"),s=a("IOix"),d=a("60av"),p=a("9UiE"),g=a("vOnD"),u=a("za5s"),f=a("C+fU"),b=g.default.article.withConfig({displayName:"blogstc__BlogWrapper",componentId:"gt16y5-0"})(["",""],u.space),x=g.default.div.withConfig({displayName:"blogstc__BlogInner",componentId:"gt16y5-1"})(["","{display:flex;flex-wrap:wrap;}"],f.b.small),h=g.default.div.withConfig({displayName:"blogstc__BlogMedia",componentId:"gt16y5-2"})(["width:100%;margin-bottom:20px;","{flex-basis:370px;max-width:370px;margin-bottom:0;}","{flex-basis:300px;max-width:300px;}","{flex-basis:400px;max-width:400px;}"],f.b.small,f.b.medium,f.b.large),E=g.default.div.withConfig({displayName:"blogstc__BlogContent",componentId:"gt16y5-3"})(["align-self:center;width:100%;","{flex-basis:calc(100% - 370px);max-width:calc(100% - 370px);padding-left:30px;}","{flex-basis:calc(100% - 300px);max-width:calc(100% - 300px);}","{flex-basis:calc(100% - 400px);max-width:calc(100% - 400px);}"],f.b.small,f.b.medium,f.b.large),S=g.default.header.withConfig({displayName:"blogstc__BlogHeader",componentId:"gt16y5-4"})([""]),y=g.default.h3.withConfig({displayName:"blogstc__BlogTitle",componentId:"gt16y5-5"})(["font-size:16px;font-weight:500;margin-bottom:4px;a{color:#0e1b47;}"]),C=g.default.div.withConfig({displayName:"blogstc__BlogMetaWrap",componentId:"gt16y5-6"})(["margin-bottom:20px;"]),w=g.default.p.withConfig({displayName:"blogstc__BlogExcerpt",componentId:"gt16y5-7"})(["margin-bottom:18px;"]),_=g.default.footer.withConfig({displayName:"blogstc__BlogFooter",componentId:"gt16y5-8"})([""]),O=function(e){var t,a,g=e.content,u=Object(n.a)(e,["content"]),f=g.slug,O=g.dateSlug,I=g.category,v=g.date,j=g.format,k=g.title,N=g.image,z=g.excerpt,B=g.postID,L=g.video_link,A=g.quote_text,M=g.quote_author,T=g.link,q=g.images,W=u.btnStyle,P=u.categoryStyle,F=Object(n.a)(u,["btnStyle","categoryStyle"]);L&&(t=L.split("=",-1)[1],a=L.split(".")[1]);var H=Object(l.useState)(!1),J=H[0],K=H[1];return o.a.createElement(l.Fragment,null,o.a.createElement(b,F,o.a.createElement(x,null,o.a.createElement(h,null,("image"===j||"standard"===j)&&o.a.createElement(p.d,{path:"/"+f,image:N,title:k}),"video"===j&&o.a.createElement(p.e,{onClick:function(){K(!0)},poster:N.childImageSharp.fluid,title:k}),"quote"===j&&o.a.createElement(p.c,{text:A,author:M}),"link"===j&&o.a.createElement(p.b,{link:T}),"gallery"===j&&o.a.createElement(p.a,{images:q})),o.a.createElement(E,null,o.a.createElement(S,null,I&&o.a.createElement(s.a,Object.assign({},P,{slug:"/category/"+Object(m.slugify)(I),text:I})),k&&o.a.createElement(y,null,o.a.createElement(i.Link,{to:"/"+f},k)),o.a.createElement(C,null,v&&o.a.createElement(s.d,null,o.a.createElement(i.Link,{to:"/date/"+Object(m.slugify)(O)},v)),o.a.createElement(s.d,null,o.a.createElement(s.b,{slug:f,title:k,id:B})))),z&&o.a.createElement(w,null,z),o.a.createElement(_,null,o.a.createElement(r.a,Object.assign({},W,{icon:o.a.createElement(c.d,null),to:"/"+f}),"Read More"))))),o.a.createElement(d.a,{channel:a,videoId:t,isOpen:J,onClose:function(){K(!1)}}))};O.defaultProps={btnStyle:{varient:"texted"},categoryStyle:{mb:"7px"}};t.a=O}}]);
//# sourceMappingURL=component---src-templates-author-template-author-template-js-d17eca41375ed3c625c7.js.map