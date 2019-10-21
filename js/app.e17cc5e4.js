(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-a2256f4c":"3aafd988"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=r("c894"),a=r("289d"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"yavue"}},[r("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"}}),r("section",{staticClass:"container",attrs:{id:"yavHeader"}},[t._t("header",[r("h3",[t._v("Job Search")])])],2),r("section",{staticClass:"container",attrs:{id:"yavFilter"}},[r("h3",[t._v("Filter Job")]),r("b-field",[r("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"magnify"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}})],1),r("vue-google-autocomplete",{staticClass:"input",attrs:{id:"gLocation",placeholder:"Filter by address",types:t.locationType},on:{placechanged:t.filterLocation}}),r("b-field",{attrs:{label:"Distance"}},[r("b-slider",{attrs:{min:0,max:100,step:5,ticks:""},model:{value:t.d,callback:function(e){t.d=e},expression:"d"}},[r("b-slider-tick",{key:0,attrs:{value:0}},[t._v("0km")]),r("b-slider-tick",{key:25,attrs:{value:25}},[t._v("25km")]),r("b-slider-tick",{key:50,attrs:{value:50}},[t._v("50km")]),r("b-slider-tick",{key:75,attrs:{value:75}},[t._v("75km")]),r("b-slider-tick",{key:100,attrs:{value:100}},[t._v("100km")])],1)],1),r("p",{staticClass:"control"},[r("button",{staticClass:"button is-primary",on:{click:t.search}},[t._v("Search")])])],1),r("section",{staticClass:"container",attrs:{id:"yavJobList"}},[r("b-table",{attrs:{loading:t.loading,paginated:"",striped:"","backend-pagination":"",data:t.jobs,total:t.result.total,"per-page":t.result.jobsPerPage,"current-page-sync":t.currentPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder],"custom-row-key":"id"},on:{"page-change":t.onPageChange,sort:t.onSort},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-table-column",{attrs:{field:"organization",label:"Organization"}},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.row.organizationLogo,expression:"props.row.organizationLogo"}],staticStyle:{width:"80px"},attrs:{src:e.row.organizationLogo}})]),r("b-table-column",{attrs:{field:"title",label:"Title"}},[r("a",{attrs:{href:e.row.link}},[t._v(t._s(e.row.title))]),r("br"),t._v("\n                    "+t._s(e.row.organization)+"\n                ")]),r("b-table-column",{attrs:{field:"location",label:"Location"}},[t._v("\n                    "+t._s(e.row.location)+"\n                ")]),r("b-table-column",{attrs:{field:"dateUpdated",label:"Date",sortable:""}},[t._v("\n                    "+t._s(e.row.dateStart)+"\n                ")])]}}])})],1),r("section",{attrs:{id:"yavFooter"}},[t._t("footer",[r("h3",[t._v("Default Footer")])])],2)])},s=[],l=(r("ac6a"),r("456d"),r("c5f6"),r("bc3a")),c=r.n(l),u=r("ed18"),d=r.n(u);d.a.config();var p="AIzaSyBqylRHHQ0fU2Pbs7ar4DidOEKqpE6SBP4",f={components:{VueGoogleAutocomplete:function(){var t=p;return new Promise((function(e){var n=document.createElement("script");n.onload=function(){e(r.e("chunk-a2256f4c").then(r.bind(null,"0118")))},n.id="gAutocompleteScript",n.async=!0,n.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=".concat(t,"&libraries=places")),document.getElementById("gAutocompleteScript")||document.head.appendChild(n)}))}},data:function(){return{q:"",d:10,currentPage:1,loading:!1,error:!1,errmsg:"",location:"",organization:!1,jobs:[],result:{totalPages:0,total:0,jobsPerPage:0},sortField:"",sortOrder:"",defaultSortOrder:"asc"}},props:{googleApiKey:{type:String,default:null},apiEndpoint:{type:String,default:"https://yawik.org/demo/de/jobboard"},locationEnabled:{type:Boolean,default:!0},locationType:{type:String,default:"address"},locationCountry:{type:String,default:null},count:{type:Number,default:10}},mounted:function(){this.load()},methods:{createUrl:function(){var t={json:1};""!==this.q&&(t.q=this.q),t.d=this.d,this.count&&(t.count=this.count),this.currentPage&&(t.page=this.currentPage),this.organization&&(t.o=this.organization),""!==this.sortField&&(t.sort=this.sortField),""!==this.sortField&&"asc"!==this.sortOrder&&(t.sort="-".concat(this.sortField)),""!==this.location&&(t.l=this.location);var e=Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&");return this.apiEndpoint+"?"+e},load:function(){var t=this.createUrl(this.currentPage),e=this;this.loading=!0,c.a.get(t).then((function(t){e.jobs=t.data.jobs,e.result=t.data})).catch((function(t){e.error=!0,e.errmsg=t})).then((function(){e.loading=!1}))},onSort:function(t,e){this.sortField=t,this.sortOrder=e,this.currentPage=1,this.load()},onPageChange:function(t){this.currentPage=t,this.load()},search:function(){this.currentPage=1,this.load()},filterLocation:function(t){this.location=JSON.stringify({coordinates:{type:"Point",coordinates:[t.longitude,t.latitude]}})}}},g=f,h=r("2877"),b=Object(h["a"])(g,i,s,!1,null,null,null),y=b.exports;r("85ae");n["a"].config.productionTip=!1,n["a"].use(a["a"]),n["a"].use(o["a"]),n["a"].customElement("yavue-widget",y)},"85ae":function(t,e,r){}});
//# sourceMappingURL=app.e17cc5e4.js.map