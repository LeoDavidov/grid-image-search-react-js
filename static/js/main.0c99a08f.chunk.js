(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),s=a(17),i=a.n(s),c=a(8),o=a.n(c),u=a(18),l=a(3),m=a(4),p=a(6),h=a(5),j=a(19),f=a.n(j).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID NXsiaAMHTHqraRAUkrYOvKbL8tDB-Kv31lLzUHJ5TXE"}}),b=a(0),d=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.term)},t}return Object(m.a)(a,[{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"ui segment",children:Object(b.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{style:{fontSize:"30px",marginBottom:"15px"},children:"Image search"}),Object(b.jsx)("input",{type:"text",value:this.state.term,onChange:function(e){return t.setState({term:e.target.value})}})]})})})}}]),a}(r.a.Component),g=(a(45),a(20)),v=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).SetSpans=function(){var t=n.imageRef.current.clientHeight,e=Math.ceil(t/10+2);n.setState({spans:e,flexStyle:{display:"flex",justifyContent:"center",alignItems:"center"}})},n.state={spans:0,flexStyle:{}},n.imageRef=r.a.createRef(),n.altDescription=n.props.image.alt_description,n.url=n.props.image.urls.regular,n}return Object(m.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{style:Object(g.a)({gridRowEnd:"span ".concat(this.state.spans)},this.state.flexStyle),children:Object(b.jsx)("img",{ref:this.imageRef,alt:this.altDescription,src:this.url})})}},{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.SetSpans)}}]),a}(r.a.Component),O=function(t){var e=t.images.map((function(t){return Object(b.jsx)(v,{image:t},t.id)}));return Object(b.jsx)("div",{className:"image-list",children:e})},x=function(t){Object(p.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={images:[]},t.onSearchSubmit=function(){var e=Object(u.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/search/photos",{params:{query:a}});case 2:n=e.sent,t.setState({images:n.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(m.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"ui container",style:{marginTop:"20px"},children:[Object(b.jsx)(d,{onSubmit:this.onSearchSubmit}),"Found ",this.state.images.length," imgs",Object(b.jsx)(O,{images:this.state.images})]})}}]),a}(r.a.Component);i.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0c99a08f.chunk.js.map