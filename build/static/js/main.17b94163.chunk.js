(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),l=t(4),o=t(2),i=t(3),m=t.n(i),f="http://localhost:3001/persons",d=function(){return m.a.get(f).then((function(e){return e.data}))},s=function(e){return m.a.post(f,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(f,"/").concat(e)).then()},E=(t(37),function(e){var n=e.handleFilterChange,t=e.filterName;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{onChange:n,value:t}))}),g=function(e){var n=e.addPerson,t=e.handleNameChange,a=e.newName,u=e.handleNumberChange,c=e.newNumber;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:t,value:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:u,value:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},v=function(e){var n=e.message;return null==n?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"notification"},n)},p=function(e){var n=e.message;return null==n?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"error"},n)},w=function(e){var n=e.name,t=e.number,a=e.clickDelete;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,n," ",t,r.a.createElement("button",{onClick:a},"delete")))},j=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),m=i[0],f=i[1],j=Object(a.useState)(""),O=Object(o.a)(j,2),N=O[0],C=O[1],k=Object(a.useState)(""),S=Object(o.a)(k,2),F=S[0],y=S[1],D=Object(a.useState)(null),P=Object(o.a)(D,2),I=P[0],x=P[1],A=Object(a.useState)(null),J=Object(o.a)(A,2),L=J[0],T=J[1],B=t.filter((function(e){return e.name.toLowerCase().includes(F.toLowerCase())})),q=t;Object(a.useEffect)((function(){d().then((function(e){u(e)}))}),[]);return console.log("lol",q),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:I}),r.a.createElement(p,{message:L}),r.a.createElement(E,{handleFilterChange:function(e){y(e.target.value)},filterName:F}),r.a.createElement("h2",null,"Add new person"),r.a.createElement(g,{addPerson:function(e){if(e.preventDefault(),-1===t.findIndex((function(e){return e.name===m})))s({name:m,number:N}).then((function(e){console.log("returned Person",e),u(t.concat(e)),f(""),C(""),y(""),x("Added ".concat(e.name)),setTimeout((function(){return x(null)}),5e3)}));else if(window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===m})),a=Object(l.a)(Object(l.a)({},n),{},{number:N});h(n.id,a).then((function(e){u(t.map((function(t){return t.name!==n.name?t:e}))),f(""),C(""),y("")})).catch((function(e){console.log("error on adding person:",e),T("Information of ".concat(m," has already been removed from server")),setTimeout((function(){return T(null)}),5e3)}))}},handleNameChange:function(e){f(e.target.value)},newName:m,handleNumberChange:function(e){C(e.target.value)},newNumber:N}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,B.map((function(e){return r.a.createElement(w,{key:e.id,name:e.name,number:e.number,clickDelete:function(){return n=e.id,a=e.name,void(window.confirm("Delete ".concat(a," ?"))&&b(n).then((function(){u(t.filter((function(e){return e.id!==n})))})));var n,a}})}))))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.17b94163.chunk.js.map