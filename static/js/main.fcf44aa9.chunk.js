(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(63)},60:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),s=t(7),l=t(8),i=t(10),m=t(9),u=t(11),p=t(3),h=t.n(p),d=t(12),b=t(64),f=t(13),E=t.n(f),v=t(29),y=t(17),g=r.a.createContext(),C=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState(function(a){return C(a,e)})}},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),O=g.Consumer,j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(){var e=Object(d.a)(h.a.mark(function e(a,t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this item?")){e.next=10;break}return e.prev=1,e.next=4,E.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 4:t({type:"DELETE_CONTACT",payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t({type:"DELETE_CONTACT",payload:a});case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.username,o=a.email,s=a.phone,l=this.state.showContactInfo;return r.a.createElement(O,null,function(a){var i=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fa fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,i)}),r.a.createElement(b.a,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Username: ",c),r.a.createElement("li",{className:"list-group-item"},"Email: ",o),r.a.createElement("li",{className:"list-group-item"},"Phone Number: ",s)):null)})}}]),a}(n.Component),k=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(j,{key:e.id,contact:e})}))})}}]),a}(n.Component),w=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"},"Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"},"Add"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"},"About")))))))};w.defaultProps={branding:"My App"};var x=w;function T(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contacts Manager"),r.a.createElement("p",{className:"lead"},"Simple App to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"version 1.0.0"))}var A=t(14),S=t(27),D=t.n(S),P=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,s=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:D()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,value:n,onChange:s}),r.a.createElement("div",{className:"invalid-feedback"},l))};P.defaultProps={type:"text"};var U=P,q=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",username:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(a,n){var r,c,o,s,l,i,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.username,s=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is Required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{username:"Usernmae is Required"}}),e.abrupt("return");case 8:if(""!==s){e.next=11;break}return t.setState({errors:{email:"Email is Required"}}),e.abrupt("return");case 11:if(""!==l){e.next=14;break}return t.setState({errors:{phone:"Phone is Required"}}),e.abrupt("return");case 14:return i={name:c,username:o,email:s,phone:l},e.prev=15,e.next=18,E.a.post("https://jsonplaceholder.typicode.com/users",i);case 18:m=e.sent,a({type:"ADD_CONTACT",payload:m.data}),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(15),console.log(e.t0.error);case 25:t.setState({name:"",username:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 27:case"end":return e.stop()}},e,this,[[15,22]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.username,c=a.email,o=a.phone,s=a.errors;return r.a.createElement(O,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(U,{label:"Name",name:"name",value:t,placeholder:"Enter The Name ...",onChange:e.onChange,error:s.name}),r.a.createElement(U,{label:"Uasername",name:"username",value:n,placeholder:"Enter The Username ...",onChange:e.onChange,error:s.name}),r.a.createElement(U,{label:"Email",name:"email",value:c,placeholder:"Enter The Email ...",type:"email",onChange:e.onChange,error:s.email}),r.a.createElement(U,{label:"Phone",name:"phone",value:o,placeholder:"Enter The Phone ...",onChange:e.onChange,error:s.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),R=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",username:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(d.a)(h.a.mark(function e(a,n){var r,c,o,s,l,i,m,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.username,s=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is Required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{username:"Usernmae is Required"}}),e.abrupt("return");case 8:if(""!==s){e.next=11;break}return t.setState({errors:{email:"Email is Required"}}),e.abrupt("return");case 11:if(""!==l){e.next=14;break}return t.setState({errors:{phone:"Phone is Required"}}),e.abrupt("return");case 14:return i={name:c,username:o,email:s,phone:l},m=t.props.match.params.id,e.next=18,E.a.put("https://jsonplaceholder.typicode.com/users/".concat(m),i);case 18:u=e.sent,a({type:"UPDATE_CONTACT",payload:u.data}),t.setState({name:"",username:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 22:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark(function e(){var a,t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,E.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,username:n.username,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.username,c=a.email,o=a.phone,s=a.errors;return r.a.createElement(O,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(U,{label:"Name",name:"name",value:t,placeholder:"Enter The Name ...",onChange:e.onChange,error:s.name}),r.a.createElement(U,{label:"Uasername",name:"username",value:n,placeholder:"Enter The Username ...",onChange:e.onChange,error:s.name}),r.a.createElement(U,{label:"Email",name:"email",value:c,placeholder:"Enter The Email ...",type:"email",onChange:e.onChange,error:s.email}),r.a.createElement(U,{label:"Phone",name:"phone",value:o,placeholder:"Enter The Phone ...",onChange:e.onChange,error:s.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),_=t(65),I=t(66),M=t(67);t(58),t(60);function L(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, That page doesn't exist"))}var F=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(_.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(x,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(I.a,null,r.a.createElement(M.a,{exact:!0,path:"/",component:k}),r.a.createElement(M.a,{exact:!0,path:"/contact/add",component:q}),r.a.createElement(M.a,{exact:!0,path:"/contact/edit/:id",component:R}),r.a.createElement(M.a,{exact:!0,path:"/about",component:T}),r.a.createElement(M.a,{component:L}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.fcf44aa9.chunk.js.map