(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{138:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),s=n.n(r),i=(n(138),n(25)),l=n(26),o=n(29),j=n(28),d=n(21),b=n(12),u=n(62),h=n(198),O=n(113),x=n(221),p=n(65),m=n(200),g=n(222),f=n(201),v=n(202),y=n(100),w=n.n(y),S=n(19),k=n.n(S),C=n(33),P=n(39),D=n.n(P),T="/api/users",A=null,L={getAll:function(){return D.a.get(T).then((function(e){return e.data}))},create:function(){var e=Object(C.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:A}},e.next=3,D.a.post(T,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return D.a.put("".concat(T,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){A="bearer ".concat(e)}},W=n(1),N={main:{backgroundColor:"white",minHeight:"90vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"},mainForm:{paddingTop:20,paddingBottom:20,maxWidth:450,width:"auto",display:"block",marginLeft:24,marginRight:24},paper:{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 48px 48px"},avatar:{margin:8,backgroundColor:"orange"},form:{width:"auto",marginTop:8},submit:{marginTop:24},submitLoader:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},danger:{fontSize:10,color:"red"}},M=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={input:{},errors:{}},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=this.state.input;t[e.target.name]=e.target.value,this.setState({input:t})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.validate()){console.log(this.state);var t={fname:"",lname:"",email:"",password:"",confirm_password:""};this.setState({input:t});var n={email:this.state.input.email,fname:this.state.input.fname,lname:this.state.input.lname,password:this.state.input.password,role:"user"};L.create(n).then((function(e){alert("".concat(e.lname," Registered Successfully"))}))}}},{key:"validate",value:function(){var e=this.state.input,t={},n=!0;(e.fname||(n=!1,t.fname="Please enter your name."),e.lname||(n=!1,t.lname="Please enter your name."),e.email||(n=!1,t.email="Please enter your email Address."),"undefined"!==typeof e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(n=!1,t.email="Please enter valid email address."));return e.password||(n=!1,t.password="Please enter your password."),this.setState({errors:t}),n}},{key:"render",value:function(){return Object(W.jsx)("div",{children:Object(W.jsx)("div",{style:N.main,children:Object(W.jsxs)("main",{style:N.mainForm,children:[Object(W.jsx)(h.a,{}),Object(W.jsxs)(O.a,{style:N.paper,elevation:20,children:[Object(W.jsx)(x.a,{style:N.avatar,children:Object(W.jsx)(w.a,{})}),Object(W.jsxs)(p.a,{component:"h1",variant:"h5",children:["Register"," "]}),Object(W.jsxs)("form",{onSubmit:this.handleSubmit,style:N.form,children:[Object(W.jsxs)(m.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(W.jsx)(g.a,{htmlFor:"fname",children:"First Name"}),Object(W.jsx)(f.a,{type:"text",name:"fname",value:this.state.input.fname,onChange:this.handleChange,autoFocus:!0,id:"fname"}),Object(W.jsx)("div",{className:"text-danger",style:N.danger,children:this.state.errors.name})]}),Object(W.jsxs)(m.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(W.jsx)(g.a,{htmlFor:"lname",children:"Last Name"}),Object(W.jsx)(f.a,{type:"text",name:"lname",value:this.state.input.lname,onChange:this.handleChange,autoFocus:!0,id:"lname"}),Object(W.jsx)("div",{className:"text-danger",style:N.danger,children:this.state.errors.name})]}),Object(W.jsxs)(m.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(W.jsx)(g.a,{htmlFor:"email",children:"Email"}),Object(W.jsx)(f.a,{type:"text",name:"email",value:this.state.input.email,onChange:this.handleChange,autoFocus:!0,id:"email"}),Object(W.jsx)("div",{className:"text-danger",style:N.danger,children:this.state.errors.email})]}),Object(W.jsxs)(m.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(W.jsx)(g.a,{htmlFor:"password",children:"Password"}),Object(W.jsx)(f.a,{type:"password",name:"password",value:this.state.input.password,onChange:this.handleChange,autoFocus:!0,id:"password"}),Object(W.jsx)("div",{className:"text-danger",style:N.danger,children:this.state.errors.password})]}),Object(W.jsxs)(v.a,{fullWidth:!0,variant:"contained",color:"primary",value:"submit",type:"submit",style:N.submit,children:[" ","Sign Up"," "]}),Object(W.jsx)("div",{style:{textAlign:"center"},children:Object(W.jsxs)(p.a,{variant:"subtitle1",style:{marginTop:20},gutterBottom:!0,children:["Already have an account ? ",Object(W.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:"Sign in"})]})})]})]})]})})})}}]),n}(c.a.Component),z=n(15),q={login:function(){var e=Object(C.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=(n(164),function(){var e=Object(a.useState)(null),t=Object(z.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(z.a)(r,2),i=s[0],l=s[1],o=Object(a.useState)(""),j=Object(z.a)(o,2),u=j[0],h=j[1],O=Object(a.useState)(""),x=Object(z.a)(O,2),p=x[0],m=x[1],g=Object(a.useState)(null),f=Object(z.a)(g,2),y=f[0],w=f[1],S=Object(b.g)();Object(a.useEffect)((function(){var e=window.localStorage.getItem("role");e&&S.push("/profile"),console.log("loggedIn",e),e&&("user"===e?S.push("/profile"):S.push("/dashboard"))}),[]);var P=function(e){var t=e.message;return null===t?null:Object(W.jsx)("div",{className:"error",children:Object(W.jsx)("p",{children:t})})},D=function(e){var t=e.message;return null===t?null:Object(W.jsx)("div",{className:"success",children:Object(W.jsx)("p",{children:t})})},T=function(){var e=Object(C.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==u&&""!==p){e.next=6;break}c("email and Password can't be empty"),setTimeout((function(){c(null)}),5e3),e.next=32;break;case 6:return e.prev=6,e.next=9,q.login({email:u,password:p});case 9:n=e.sent,console.log("user is here",n),window.localStorage.setItem("loggedUser",JSON.stringify(n)),window.localStorage.setItem("email",n.email),window.localStorage.setItem("name",n.fname+" "+n.lname),window.localStorage.setItem("details",n.details),window.localStorage.setItem("role",n.role),w(n),console.log("email",u),console.log("password",p),h(""),m(""),l("Login Success, welcome ".concat(n.name)),L.setToken(n.token),console.log("user",n),"user"===n.role?S.push("/profile"):S.push("/Dashboard"),setTimeout((function(){l(null)}),5e3),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(6),c("Wrong credentials"),setTimeout((function(){c(null)}),5e3);case 32:case"end":return e.stop()}}),e,null,[[6,28]])})));return function(t){return e.apply(this,arguments)}}();return Object(W.jsx)("div",{children:Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h1",{children:"Login"}),Object(W.jsx)(P,{message:n}),Object(W.jsx)(D,{message:i}),Object(W.jsxs)("form",{onSubmit:T,className:"login",children:[Object(W.jsxs)("div",{children:["email \xa0 \xa0",Object(W.jsx)("input",{type:"text",value:u,onChange:function(e){h(e.target.value)},name:"email"})]}),Object(W.jsx)("br",{}),Object(W.jsxs)("div",{children:["Password \xa0\xa0\xa0",Object(W.jsx)("input",{type:"password",value:p,onChange:function(e){m(e.target.value)},name:"Password"})]}),Object(W.jsx)("br",{}),Object(W.jsx)(d.b,{to:"/register",children:Object(W.jsx)(v.a,{variant:"contained",color:"secondary",children:"Register"})}),Object(W.jsx)("br",{}),Object(W.jsx)("button",{type:"submit",children:"Login"})]}),console.log("user ",y),Object(W.jsx)("br",{})]})})}),J=n(56),F=n(5),V=n(6),X=n(203),R=n(204),E=n(223),Z=n(208),B=n(206),G=n(172),Q=n(207),I=n(205),U=n(101),Y=n.n(U),K=function(e){return{root:{flexGrow:1},flex:{flex:1},drawerPaper:{position:"relative",width:240},menuButton:{marginLeft:-12,marginRight:20},toolbarMargin:e.mixins.toolbar,aboveDrawer:{zIndex:e.zIndex.drawer+1},logo:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1),fontSize:30,fontWeight:400,color:"#3f51b5"}}},_=Object(V.a)(K)((function(e){var t=e.classes,n=(e.title,e.onMenuClick);return Object(W.jsxs)(a.Fragment,{children:[Object(W.jsx)(X.a,{className:t.aboveDrawer,children:Object(W.jsxs)(R.a,{children:[Object(W.jsx)(I.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:n,children:Object(W.jsx)(Y.a,{})}),Object(W.jsx)(p.a,{variant:"h5",children:"SEEKER"})]})}),Object(W.jsx)("div",{className:t.toolbarMargin})]})})),$=window.localStorage.getItem("role"),ee=Object(V.a)(K)((function(e){var t=e.classes,n=e.variant,a=e.open,c=e.onClose,r=e.onItemClick;return Object(W.jsxs)(E.a,{variant:n,open:a,onClose:c,classes:{paper:t.drawerPaper},children:[Object(W.jsx)("div",{className:Object(F.a)(Object(J.a)({},t.toolbarMargin,"persistent"===n))}),Object(W.jsxs)(B.a,{children:[Object(W.jsx)(G.a,{button:!0,className:t.logo,children:Object(W.jsx)(Q.a,{children:"SEEKER"})}),Object(W.jsx)(Z.a,{className:t.divider}),"admin"===$&&Object(W.jsx)(G.a,{button:!0,component:d.b,to:"/Dashboard",onClick:r("Profile"),children:Object(W.jsx)(Q.a,{children:"Dashboard"})}),Object(W.jsx)(G.a,{button:!0,component:d.b,to:"/Profile",onClick:r("Profile"),children:Object(W.jsx)(Q.a,{children:"Profile"})}),Object(W.jsx)(G.a,{button:!0,component:d.b,to:"/jobSearch",onClick:r("Posted Jobs"),children:Object(W.jsx)(Q.a,{children:"Posted Jobs"})}),Object(W.jsx)(G.a,{button:!0,component:d.b,to:"/Announcement",onClick:r("Announcement"),children:Object(W.jsx)(Q.a,{children:"Announcement"})}),Object(W.jsx)(G.a,{button:!0,component:d.b,to:"/Testimonial",onClick:r("Testimonial"),children:Object(W.jsx)(Q.a,{children:"Testimonials"})}),Object(W.jsx)(G.a,{button:!0,component:d.b,onClick:function(){window.localStorage.clear(),console.log("logged out successfully")},children:Object(W.jsx)(Q.a,{children:"Logout"})})]})]})}));var te=Object(V.a)(K)((function(e){var t=e.classes,n=e.variant,c=Object(a.useState)(!1),r=Object(z.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)("Profile"),o=Object(z.a)(l,2),j=o[0],d=o[1],b=function(){i(!s)};return Object(W.jsxs)("div",{className:t.root,children:[Object(W.jsx)(_,{title:j,onMenuClick:b}),Object(W.jsx)(ee,{open:s,onClose:b,onItemClick:function(e){return function(){d(e),i("temporary"!==n&&s),i(!s)}},variant:n})]})})),ne={getDetails:function(){var e=Object(C.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("".concat("/api/details","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ae=n(209),ce=n(105),re=n.n(ce),se=n(104),ie=n.n(se),le=n(103),oe=n.n(le),je=n(106),de=n.n(je),be=n(102),ue=n.n(be),he=n(210),Oe=(n(165),Object(ae.a)((function(e){var t;return{root:(t={display:"flex",width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},Object(J.a)(t,"width","100%"),Object(J.a)(t,"maxWidth",360),Object(J.a)(t,"backgroundColor",e.palette.background.paper),Object(J.a)(t,"& > *",{margin:e.spacing(1)}),t),paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},large:{width:e.spacing(15),height:e.spacing(15)},media:{height:140}}}))),xe=function(){var e=Object(b.g)();!window.localStorage.getItem("loggedUser")&&e.push("/");var t=Object(a.useState)(""),n=Object(z.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(z.a)(s,2),l=i[0],o=i[1],j=Object(a.useState)(""),d=Object(z.a)(j,2),u=d[0],h=d[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("name");r(e);var t=window.localStorage.getItem("email");o(t);var n=window.localStorage.getItem("details");ne.getDetails(n).then((function(e){return h(e)}))}),[]);var O=Oe();return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(te,{}),Object(W.jsx)("div",{children:Object(W.jsx)("div",{children:Object(W.jsx)("div",{className:"details",children:Object(W.jsxs)("div",{className:"container",children:[Object(W.jsx)("div",{children:Object(W.jsx)("img",{src:u.image})}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Name : ",c.toUpperCase()]})," "]}),Object(W.jsx)(v.a,{href:"mailto:"+l,children:Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsx)(he.a,{children:Object(W.jsx)(ue.a,{})}),Object(W.jsx)(Q.a,{primary:"Email"})]})}),Object(W.jsx)(Q.a,{}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Headline : ",u.headline]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsx)("div",{className:O.root,children:Object(W.jsxs)(B.a,{component:"nav",className:"social",children:[Object(W.jsx)(v.a,{href:u.website,children:Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsx)(he.a,{children:Object(W.jsx)(oe.a,{})}),Object(W.jsx)(Q.a,{primary:"Website"})]})}),Object(W.jsx)(v.a,{href:u.github,children:Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsx)(he.a,{children:Object(W.jsx)(ie.a,{})}),Object(W.jsx)(Q.a,{primary:"Github"})]})}),Object(W.jsx)(v.a,{href:u.linkedin,children:Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsx)(he.a,{children:Object(W.jsx)(re.a,{})}),Object(W.jsx)(Q.a,{primary:"Linkedin"})]})}),Object(W.jsx)(v.a,{href:u.resume,children:Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsx)(he.a,{children:Object(W.jsx)(de.a,{})}),Object(W.jsx)(Q.a,{primary:"Resume"})]})})]})}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:[" College Name : ",u.college]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:[" School Name : ",u.school]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Year of Graduation : ",u.yearOfGrad]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Year of Passing 12th : ",u.yearOfPass]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Date Of Birth : ",u.dob]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Course : ",u.course]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:[" Current GPA : ",u.currentGpa]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Senior Secondary Percentage : ",u.secondary]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Secondary: ",u.seniorSecondary]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["State : ",u.state]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["City : ",u.city]}),Object(W.jsx)(Q.a,{})]}),Object(W.jsxs)(G.a,{button:!0,children:[Object(W.jsxs)(he.a,{children:["Skills : ",u.skills]}),Object(W.jsx)(Q.a,{})]})]})})})})]})},pe=n(111),me=(n(166),n(215)),ge=n(220),fe=n(217),ve=n(212),ye=n(218),we=n(214),Se=n(213),ke=n(211),Ce=n(27);n(216);var Pe=n(219),De=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={users:[],loading:!0},a}return Object(l.a)(n,[{key:"getUsersData",value:function(){var e=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getAll();case 2:t=e.sent,console.log("i have no idea what im doing all users ->",t),this.setState({loading:!1,users:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getUsersData()}},{key:"render",value:function(){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(te,{}),Object(W.jsx)(Pe.a,{p:5,color:"primary.main",children:Object(W.jsx)(Pe.a,{display:"flex",justifyContent:"space-between",children:Object(W.jsx)(p.a,{variant:"h4",children:"Registered Students"})})}),Object(W.jsx)(pe.a,{data:this.state.users,columns:[{Header:"First Name",accessor:"fname"},{Header:"Last Name",accessor:"lname"},{Header:"Email",accessor:"email"},{Header:"Graduating Year",accessor:"details.yearOfGrad"},{Header:"Current GPA",accessor:"details.currentGpa"}]})]})}}]),n}(a.Component),Te=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(X.a,{children:Object(W.jsx)("div",{children:Object(W.jsx)(p.a,{variant:"h4",children:"user"})})}),Object(W.jsxs)("div",{children:[Object(W.jsx)("h2",{children:"User Profile"}),Object(W.jsx)("p",{children:"here user will be able to visit pages."})]})]})}}]),n}(a.Component),Ae=n(107),Le=function(){var e;return Object(W.jsxs)("div",{children:[Object(W.jsx)(te,{}),Object(W.jsxs)(Pe.a,{container:!0,p:3,children:[Object(W.jsx)(p.a,{align:"center",color:"primary",variant:"h4",children:"Our Success Stories"}),Object(W.jsx)(Pe.a,{item:!0,p:2,children:Object(W.jsx)(Ae.a,{children:(e=["https://image.freepik.com/free-vector/speech-bubble-testimonial-concept_23-2147940986.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv4dFpINR1mfkBecoirP0f0OGTkNk8wg0kAWYZNB6zXs9OS3pTxV7MWoz39hxFw_8qP8&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAvS0_D_DIhtseI8H_i2_nti-BD7ulg3Tda00VcLRG6I12E4eODKqhcmWW9D8gedb-l4&usqp=CAU","data:image/png;base64,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","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0ixLhSK7_jQNzjjgG0jfTgZnTtjdKqVWAV36f8hOCTMJQgdlTeosZq35wwkt1QbKmdU&usqp=CAU"],e.map((function(e,t){return Object(W.jsx)("img",{src:e,alt:"Test image ".concat(t)},"".concat(e,"-").concat(t))})))})})]})]})};function We(){var e=c.a.useState(!1),t=Object(z.a)(e,2),n=t[0],r=t[1],s=Object(Ce.a)(),i=Object(ke.a)(s.breakpoints.down("sm")),l=Object(a.useState)("Apply"),o=Object(z.a)(l,2),j=o[0],d=o[1],b=function(){r(!1)};return Object(W.jsxs)("div",{children:[Object(W.jsxs)(v.a,{variant:"outlined",color:"black",onClick:function(){r(!0)},children:["Details"," "]}),Object(W.jsxs)(ve.a,{fullScreen:i,open:n,onClose:b,"aria-labelledby":"responsive-dialog-title",children:[Object(W.jsx)(Se.a,{id:"responsive-dialog-title",children:"Details"}),Object(W.jsx)(we.a,{children:Object(W.jsx)(me.a,{container:!0,spacing:2,children:Object(W.jsxs)(me.a,{item:!0,x6:!0,children:[Object(W.jsx)(p.a,{children:"Job Title - Frontend Developer"}),Object(W.jsx)(p.a,{children:"Company Name: Google"}),Object(W.jsx)(p.a,{children:"Company URL: https:\\\\google.com"}),Object(W.jsx)(p.a,{children:"Job Link - https:\\\\carriers.google.com"}),Object(W.jsx)(p.a,{children:"Location: Remote"}),Object(W.jsx)(p.a,{children:"Job Type: Full Time"}),Object(W.jsx)(p.a,{children:"Skills : "}),Object(W.jsx)(v.a,{variant:"contained",color:"secondary",children:"C"})," ",Object(W.jsx)(v.a,{variant:"contained",color:"secondary",children:"CPP"})," ",Object(W.jsx)(v.a,{variant:"contained",color:"secondary",children:"JAVA"})," ",Object(W.jsx)(v.a,{variant:"contained",color:"secondary",children:"PYTHON"})," ",Object(W.jsx)(v.a,{variant:"contained",color:"secondary",children:"CSS3"})," "]})})}),Object(W.jsxs)(ye.a,{children:[Object(W.jsx)(v.a,{autoFocus:!0,variant:"outlined",onClick:b,color:"primary",children:"Close"}),Object(W.jsx)(v.a,{color:"primary",variant:"outlined",onClick:function(){return d("Applied")},children:j})]})]})]})}var Ne=function(e){return{wrapper:{border:"1px solid black",display:"flex"}}},Me=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={users:[],loading:!0},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(te,{}),Object(W.jsx)(Pe.a,{p:5,color:"primary.main",style:Ne.wrapper,children:Object(W.jsx)(Pe.a,{display:"flex",justifyContent:"center",children:Object(W.jsx)(p.a,{variant:"h4",children:"Open Jobs List"})})}),Object(W.jsx)(Pe.a,{p:2,bgcolor:"primary",mb:"5",color:"white",minWidth:"500",children:Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"rgb(0 0 0 / 19%)",children:[Object(W.jsxs)(ge.a,{disableUnderline:!0,variant:"filled",defaultValue:"full time",children:[Object(W.jsx)(fe.a,{value:"full time",children:"Full Time"}),Object(W.jsx)(fe.a,{value:"internship",children:"Internship"}),Object(W.jsx)(fe.a,{value:"part time",children:"Part Time"})]}),Object(W.jsxs)(ge.a,{disableUnderline:!0,variant:"filled",defaultValue:"remote",children:[Object(W.jsx)(fe.a,{value:"remote",children:"Remote"}),Object(W.jsx)(fe.a,{value:"inoffice",children:"In Office"})]}),Object(W.jsx)(v.a,{variant:"contained",align:"right",children:"Search"})]})}),Object(W.jsxs)(Pe.a,{p:2,bgcolor:"gray",mb:"5",color:"white",minWidth:"500",children:[Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"rgb(0 0 0 / 19%)",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Frontend Developer",Object(W.jsx)("p",{children:"Google"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,HTML5 ,CSS3"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"white",color:"black",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Backend Developer",Object(W.jsx)("p",{children:"MongoDB"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,HTML5 ,CSS3 ,jQuery"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"rgb(0 0 0 / 19%)",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Project Manager",Object(W.jsx)("p",{children:"CoackroachDb"})]})}),Object(W.jsx)("p",{children:"JS ,PHP ,HTML5 ,CSS3"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"white",color:"black",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["SDE - II",Object(W.jsx)("p",{children:"Tesla"})]})}),Object(W.jsx)("p",{children:"JS ,CPP , PYTHON ,HTML5 ,CSS3"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"rgb(0 0 0 / 19%)",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Backend developer",Object(W.jsx)("p",{children:"Amazon"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,Mongodb ,CSS3"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"white",color:"black",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Project Manager",Object(W.jsx)("p",{children:"Uber"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,HTML5 ,JAVA , AGILE"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"rgb(0 0 0 / 19%)",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["System Engineer",Object(W.jsx)("p",{children:"Adobe"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,HTML5 ,CSS3"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"white",color:"black",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Assistant Manager",Object(W.jsx)("p",{children:"Google"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,HTML5 ,CSS3"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"rgb(0 0 0 / 19%)",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Frontend dev",Object(W.jsx)("p",{children:"Google"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,HTML5 ,CSS3"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",color:"black",bgcolor:"white",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Frontend Developer",Object(W.jsx)("p",{children:"IBM"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,HTML5 ,CSS3"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]}),Object(W.jsxs)(Pe.a,{p:1,display:"flex",justifyContent:"space-around",bgcolor:"rgb(0 0 0 / 19%)",children:[Object(W.jsx)("div",{children:Object(W.jsxs)("p",{children:["Programmer",Object(W.jsx)("p",{children:"PostMan"})]})}),Object(W.jsx)("p",{children:"JS ,CPP ,HTML5 ,CSS3 , DS"}),Object(W.jsx)("p",{children:Object(W.jsx)(We,{})})]})]})]})}}]),n}(a.Component),ze=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(te,{}),Object(W.jsx)("div",{children:Object(W.jsx)("h2",{children:"Notice!!"})})]})}}]),n}(a.Component),qe={main:{backgroundColor:"#282c34",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",overflow:"hidden"}},He=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).renderContent=function(){return!1===a.state.loggedIn?Object(W.jsx)("div",{style:qe.main,children:Object(W.jsx)(M,{})}):Object(W.jsx)("div",{style:{alignItems:"center",justifyContent:"center",minHeight:"100vh",display:"flex"},children:Object(W.jsx)(H,{})})},a.state={loggedIn:null,loading:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(W.jsx)(d.a,{children:Object(W.jsxs)(b.d,{children:[Object(W.jsx)(b.b,{exact:!0,path:"/",component:this.renderContent}),Object(W.jsx)(b.b,{exact:!0,path:"/register",component:M}),Object(W.jsx)(b.b,{exact:!0,path:"/profile",component:xe}),Object(W.jsx)(b.b,{exact:!0,path:"/Dashboard",component:De}),Object(W.jsx)(b.b,{exact:!0,path:"/Home",component:Te}),Object(W.jsx)(b.b,{exact:!0,path:"/Testimonial",component:Le}),Object(W.jsx)(b.b,{exact:!0,path:"/jobSearch",component:Me}),Object(W.jsx)(b.b,{exact:!0,path:"/Announcement",component:ze}),Object(W.jsx)(b.a,{to:"/"})]})})}}]),n}(a.Component);s.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(He,{})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.9351d043.chunk.js.map