(function(t){function e(e){for(var n,o,s=e[0],u=e[1],c=e[2],d=0,l=[];d<s.length;d++)o=s[d],i[o]&&l.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(l.length)l.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},o={app:0},i={app:0},r=[];function s(t){return u.p+"js/"+({add:"add",book:"book",edit:"edit",read:"read"}[t]||t)+"."+{add:"2e3fc3ee",book:"01040bd9",edit:"84f29fb1",read:"706b6086"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={add:1,book:1,edit:1,read:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise(function(e,a){for(var n="css/"+({add:"add",book:"book",edit:"edit",read:"read"}[t]||t)+"."+{add:"daed838c",book:"6dde4a17",edit:"daed838c",read:"faff176e"}[t]+".css",i=u.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===i))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],d=c.getAttribute("data-href");if(d===n||d===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.request=n,delete o[t],p.parentNode.removeChild(p),a(r)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){o[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(t),c=function(e){d.onerror=d.onload=null,clearTimeout(l);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");r.type=n,r.request=o,a[1](r)}i[t]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06b1":function(t,e,a){"use strict";var n=a("cbd1"),o=a.n(n);o.a},1:function(t,e){},"3a5e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"}},[a("g",{staticClass:"qp-circular-loader"},[a("path",{staticClass:"qp-circular-loader-path",attrs:{fill:"none",d:"M 8,1.125 A 6.875,6.875 0 1 1 1.125,8","stroke-width":"2.25","stroke-linecap":"round"}})])])])},o=[],i={name:"Loading"},r=i,s=(a("822c"),a("2877")),u=Object(s["a"])(r,n,o,!1,null,"4023b410",null);e["a"]=u.exports},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Bar"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticClass:"view"})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"bar"}},[a("button",{staticClass:"item",attrs:{disabled:!t.left.text||t.left.disabled},on:{click:function(e){return t.handleClick({path:t.left.path,func:t.left.func})}}},[t._v(t._s(t.left.text))]),a("div",{staticClass:"item title",attrs:{title:t.center.text}},[t._v(t._s(t.center.text))]),a("button",{staticClass:"item",attrs:{disabled:!t.right.text||t.right.disabled},on:{click:function(e){return t.handleClick({path:t.right.path,func:t.right.func})}}},[t._v(t._s(t.right.text))])])},s=[],u=a("cebc"),c=a("2f62"),d={name:"Bar",methods:{handleClick:function(t){var e=t.path,a=t.func;"function"==typeof a?a():e&&this.$router.push(e)}},computed:Object(u["a"])({},Object(c["d"])("bar",["left","center","right"]))},l=d,p=(a("06b1"),a("2877")),m=Object(p["a"])(l,r,s,!1,null,"ae478b2e",null),f=m.exports,b={name:"App",components:{Bar:f}},h=b,g=(a("5c0b"),Object(p["a"])(h,o,i,!1,null,null,null)),v=g.exports,k=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("transition-group",{key:"shelf",staticClass:"shelf",attrs:{name:"list",tag:"div"}},t._l(t.books,function(t,e){return a("BookBlock",{key:t.id,style:"--delay: ."+e%6+"s",attrs:{book:t}})}),1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoading?a("Loading",{key:"loading"}):t.isLastPage?t._e():a("button",{key:"btn",staticClass:"btn",on:{click:t.getMoreBooks}},[t._v("Load More")])],1)],1)},x=[],B=a("3a5e"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"book",on:{click:t.read}},[a("div",{staticClass:"title"},[t._v(t._s(t.book.attributes.title))]),a("p",{staticClass:"desc"},[t._v(t._s(t.book.attributes.description))]),a("footer",[a("p",{staticClass:"author"},[t._v("by "+t._s(t.book.attributes.author))]),a("p",{staticClass:"date"},[t._v(t._s(t.pubDate))])])])},P=[],j=(a("28a5"),a("4917"),{name:"BookBlock",props:{book:Object},methods:{read:function(){this.$router.push("/book/"+this.realId)}},computed:{realId:function(){return this.book.id.match(/books\/([a-z0-9-]+)/)[1]},pubDate:function(){return this.book.attributes.publicationDate.split("T")[0]}}}),_=j,q=(a("7d5e"),Object(p["a"])(_,w,P,!1,null,"42fd09e4",null)),L=q.exports,C={name:"home",components:{Loading:B["a"],BookBlock:L},mounted:function(){this.setBar({pos:"right",text:"New",path:"/book/add"}),this.books.length||this.getBooks({page:1})},methods:Object(u["a"])({},Object(c["b"])("books",["getBooks","getMoreBooks"]),Object(c["b"])("bar",{setBar:"set",clearBar:"clearAll"})),computed:Object(u["a"])({isLastPage:function(){return this.$store.getters["books/isLastPage"]}},Object(c["d"])("books",["books","updated","isLoading"])),beforeRouteLeave:function(t,e,a){this.clearBar(),a()}},O=C,E=(a("a6df"),Object(p["a"])(O,y,x,!1,null,"3308cc20",null)),T=E.exports;n["a"].use(k["a"]);var M=new k["a"]({routes:[{path:"/",name:"home",component:T},{path:"/book",name:"book",component:function(){return a.e("book").then(a.bind(null,"8bf3"))},children:[{path:"add",name:"add",component:function(){return a.e("add").then(a.bind(null,"7e55"))}},{path:":id",name:"read",component:function(){return a.e("read").then(a.bind(null,"c844"))},children:[{path:"edit",name:"edit",component:function(){return a.e("edit").then(a.bind(null,"1071"))}}]}]}]}),I=a("28dd"),D=(a("20d6"),a("7514"),a("795b")),A=a.n(D),z={data:[{id:"/books/trzlqsqd-uuik-tth0-u9gt-5wbkq1k7b8x7",type:"Book",attributes:{isbn:"978-986-361-255-5",title:"Eum eu vide",description:"Lorem ipsum dolor sit amet, ea alii facilis erroribus est. Est partem volutpat ex? At erat nostro gloriatur quo. Eos aeque soluta et, has offendit nominati platonem at, usu semper.",author:"Sandra Donnelly",publicationDate:"2019-03-10T00:00:00+00:00"}},{id:"/books/l4hxbely-pxdi-45kz-e85o-j51n9fa6mboa",type:"Book",attributes:{isbn:"978-986-627-332-7",title:"Ludus feugait an eos",description:"Lorem ipsum dolor sit amet, et nihil vocent pericula qui, mei ut assum nulla nusquam! Nec te etiam euismod argumentum. Pro cu ridens denique cotidieque, iusto sensibus vel ei, id.",author:"Thomas Phillips",publicationDate:"2019-03-05T00:00:00+00:00"}},{id:"/books/7xdg8145-yio4-p5x0-kyg7-rsuwc7j3vdmr",type:"Book",attributes:{isbn:"978-986-652-713-4",title:"Per cu malis congue",description:"Ei tota percipit per. Et pri elit volutpat! Pri albucius constituam in, detracto scripserit nam an. Equidem omittam adversarium duo ut? Minim audire est ea! Vim an erat putant fastidii.",author:"James Mitchell",publicationDate:"2019-02-26T00:00:00+00:00"}},{id:"/books/opvb2zuk-wrhj-65lb-jgyb-ynjwkuqenvhw",type:"Book",attributes:{isbn:"978-986-099-868-9",title:"Noluisse intellegebat",description:"Ex mundi tritani vim. Summo sadipscing ne ius, eu eum audiam laoreet graecis? Esse lobortis ea vix, labores inermis intellegebat sed te! At primis suscipit imperdiet vel, ex has aliquid.",author:"Chris Norton",publicationDate:"2019-02-14T00:00:00+00:00"}},{id:"/books/23b6a94w-731n-o3cl-jiuy-omym6cxjc396",type:"Book",attributes:{isbn:"978-986-797-553-5",title:"Mea invenire principes",description:"Vim ne constituam adversarium. In facete appetere mei! Fabulas voluptatum scripserit id per, utinam quidam vidisse eu vel. At quando oporteat vim, magna verterem similique sea ne. Hinc graece ignota.",author:"Walter Bellinger",publicationDate:"2019-01-02T00:00:00+00:00"}},{id:"/books/tfrj4zsc-s9sg-g15k-8qzs-ohth4jlfia68",type:"Book",attributes:{isbn:"978-986-762-655-9",title:"Eirmod nominavi mel",description:"Qui nostrum evertitur interpretaris an. Augue deseruisse has ad? Vide antiopam referrentur ad vim, ridens labitur interesset sit et, vivendo voluptaria cu qui. Has unum quidam suscipit cu, ad cum.",author:"Wallace Crist",publicationDate:"2018-05-31T00:00:00+00:00"}},{id:"/books/6xm7exlb-rnok-7n0d-ccyz-0glane5zw0f1",type:"Book",attributes:{isbn:"978-986-487-282-2",title:"Nibh ceteros sea",description:"No ius virtute salutandi splendide, eu gubergren tincidunt pertinacia sea, aeque paulo aliquip has ad. Partiendo neglegentur mel ea, ius natum mutat euismod ut? Ius ut agam voluptatum. Semper copiosae.",author:"Elizabeth Carver",publicationDate:"2014-06-11T00:00:00+00:00"}},{id:"/books/yyr3vxie-f2ze-wje6-y6bp-6gkxxflx97it",type:"Book",attributes:{isbn:"978-986-698-538-5",title:"Quo homero dolorem partiendo",description:"Et has error virtute, per eu postulant contentiones. In natum offendit sit, recteque quaerendum ex vel! Denique conceptam intellegebat pro no. His no timeam numquam, eum ne atqui feugiat deseruisse.",author:"Rosie Hines",publicationDate:"2008-02-06T00:00:00+00:00"}}]},S=z;function N(t,e){var a=S.data.length,n=Math.ceil(a/e),o=(t-1)*e,i=o+e;return t>n?[]:S.data.slice(o,i)}function $(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(e?"abcdefghijklmnopqrstuvwxyz":"")+"0123456789",n="",o=0;o<t;o++)n+=a.charAt(Math.floor(Math.random()*a.length));return n}function H(t){return new A.a(function(e,a){var n=2e3*Math.random();setTimeout(function(){var a=t();e(a)},n)})}var J=/\/books\/([a-z0-9-]+)/,V={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.params;a=void 0===a?{}:a;var n=a.page,o=void 0===n?1:n,i=a.perPage,r=void 0===i?6:i;return H(function(){if(J.test(t)){var e=t.match(J)[0],a=S.data.find(function(t){return t.id==e});return a}var n=N(o,r);return{meta:{totalItems:S.data.length,itemsPerPage:r,currentPage:o},data:n}})},post:function(t,e){var a=e.title,n=e.desc,o=e.author,i=e.date;return H(function(){var t={id:"/books/".concat($(8),"-").concat($(4),"-").concat($(4),"-").concat($(4),"-").concat($(12)),type:"Book",attributes:{isbn:"978-986-".concat($(3,!1),"-").concat($(3,!1),"-").concat($(1,!1)),title:a,description:n,author:o,publicationDate:i+"T00:00:00+00:00"}};return S.data=[t].concat(S.data),t})},delete:function(t){return H(function(){var e=t.match(J)[0],a=S.data.findIndex(function(t){return t.id==e});return S.data.splice(a,1),!0})},patch:function(t,e){var a=e.title,n=e.desc,o=e.author,i=e.date;return H(function(){var e=t.match(J)[0],r=S.data.findIndex(function(t){return t.id==e});return S.data[r].attributes.title=a,S.data[r].attributes.description=n,S.data[r].attributes.author=o,S.data[r].attributes.publicationDate=i,S.data[r]})}},Q=V;n["a"].use(I["a"]),n["a"].http.headers.common["Accept"]="application/vnd.api+json",n["a"].http.headers.common["Content-Type"]="application/vnd.api+json";var R="https://demo.api-platform.com",W={namespaced:!0,state:{books:[],currentBook:null,home:{totalItems:1,currentPage:1,perPage:6},isLoading:!1},getters:{totalPages:function(t,e){return Math.ceil(t.home.totalItems/t.home.perPage)},isLastPage:function(t,e){return t.home.currentPage==e.totalPages}},mutations:{setLoading:function(t,e){t.isLoading=e},setBooks:function(t,e){var a=e.reset,n=void 0!==a&&a,o=e.data;t.books=n?o:t.books.concat(o)},clearBooks:function(t){t.books=[]},setBook:function(t,e){t.currentBook=e},clearBook:function(t){t.currentBook=null},setPage:function(t,e){t.home.currentPage=e},IncreasePage:function(t){t.home.currentPage++},setItems:function(t,e){t.home.totalItems=e}},actions:{getBooks:function(t,e){var a=t.commit,n=t.state,o=e.page;a("setLoading",!0),Q.get(R+"/books",{params:{page:o,perPage:n.home.perPage}}).then(function(t){a("setBooks",{reset:1==o,data:t.data}),a("setPage",t.meta.currentPage),a("setItems",t.meta.totalItems),a("setLoading",!1)})},getMoreBooks:function(t){var e=t.dispatch,a=t.commit,n=t.state;a("IncreasePage"),e("getBooks",{page:n.home.currentPage})},getBook:function(t,e){var a=t.commit,n=e.id;a("setLoading",!0),Q.get(R+"/books/"+n).then(function(t){a("setBook",t||null),a("setLoading",!1)})},addBook:function(t,e){var a=t.commit,n=e.title,o=e.desc,i=e.author,r=e.date;return a("setLoading",!0),Q.post(R+"/books",{title:n,desc:o,author:i,date:r}).then(function(t){return a("setLoading",!1),t})},deleteBook:function(t,e){var a=t.commit,n=e.id;return a("setLoading",!0),Q.delete(R+"/books/"+n).then(function(t){return a("setLoading",!1),t})},updateBook:function(t,e){var a=t.commit,n=e.id,o=e.title,i=e.desc,r=e.author,s=e.date;return a("setLoading",!0),Q.patch(R+"/books/"+n,{title:o,desc:i,author:r,date:s}).then(function(t){return a("setBook",t||null),a("setLoading",!1),t})}}},F=W,G=(a("ac6a"),a("a4bb")),K=a.n(G),U={namespaced:!0,state:{left:{text:"",path:"",func:null,disabled:!1},center:{text:""},right:{text:"",path:"",func:null,disabled:!1}},getters:{},mutations:{set:function(t,e){var a=e.pos,n=e.key,o=e.value;t[a][n]=o},clear:function(t,e){t[e].text="",t[e].hasOwnProperty("path")&&(t[e].path=""),t[e].hasOwnProperty("func")&&(t[e].func=null),t[e].hasOwnProperty("disabled")&&(t[e].disabled=!1)}},actions:{set:function(t,e){var a=t.commit,n=e.pos,o=e.text,i=e.path,r=void 0===i?"":i,s=e.func,u=void 0===s?null:s;a("set",{pos:n,key:"text",value:o}),r&&a("set",{pos:n,key:"path",value:r}),u&&a("set",{pos:n,key:"func",value:u})},disable:function(t,e){var a=t.commit,n=e.pos,o=e.disabled,i=void 0===o||o;a("set",{pos:n,key:"disabled",value:i})},clearAll:function(t){var e=t.commit,a=t.state,n=K()(a);n.forEach(function(t){e("clear",t)})}}},X=U;n["a"].use(c["a"]);var Y=new c["a"].Store({modules:{books:F,bar:X}});n["a"].config.productionTip=!1,new n["a"]({router:M,store:Y,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),o=a.n(n);o.a},"5e27":function(t,e,a){},"7d5e":function(t,e,a){"use strict";var n=a("d846"),o=a.n(n);o.a},"822c":function(t,e,a){"use strict";var n=a("b585"),o=a.n(n);o.a},a6df:function(t,e,a){"use strict";var n=a("b0c7"),o=a.n(n);o.a},b0c7:function(t,e,a){},b585:function(t,e,a){},cbd1:function(t,e,a){},d846:function(t,e,a){}});
//# sourceMappingURL=app.f81ba8e1.js.map