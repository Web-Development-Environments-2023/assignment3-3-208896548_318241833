(function(e){function t(t){for(var n,a,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==i[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1bbf0d84":"1834b666","chunk-1f7b68ce":"668d29ac","chunk-2d0c20b8":"619d4881","chunk-2d0c5220":"e77535b2","chunk-2d0e6711":"3ab6125e","chunk-2d23822a":"27f3f0f0","chunk-746908e5":"4d0ad9d2","chunk-9e9e54da":"07d2b05e","chunk-d06952f0":"9a04c3fb"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-1bbf0d84":1,"chunk-1f7b68ce":1,"chunk-9e9e54da":1,"chunk-d06952f0":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1bbf0d84":"70b630b2","chunk-1f7b68ce":"dc8f0d2a","chunk-2d0c20b8":"31d6cfe0","chunk-2d0c5220":"31d6cfe0","chunk-2d0e6711":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-746908e5":"31d6cfe0","chunk-9e9e54da":"5566191c","chunk-d06952f0":"06b5a53e"}[e]+".css",i=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],p.parentNode.removeChild(p),r(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1b67":function(e,t,r){"use strict";var n=r("d87d"),a=r.n(n);a.a},5333:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("4160"),r("d3b7"),r("159b"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"info",id:"navb"}},[r("b-navbar-brand",{attrs:{id:"nav-brand",href:"#",disabled:""}},[e._v("YumTum")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:{name:"main"}}},[e._v("Main")]),r("b-nav-item",{attrs:{to:{name:"search"}}},[e._v("Search")]),r("b-nav-item",{attrs:{to:{name:"about"}}},[e._v("About")]),e.$root.store.username?r("b-nav-item-dropdown",{scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("Personal")])]},proxy:!0}],null,!1,1842851784)},[r("b-dropdown-item",{attrs:{to:{name:"favorites"}}},[e._v("Favorites recipes")]),r("b-dropdown-item",{attrs:{to:{name:"my_recipes"}}},[e._v("My recipes")]),r("b-dropdown-item",{attrs:{to:{name:"family"}}},[e._v("Family recipes")])],1):e._e(),e.$root.store.username?r("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.create",modifiers:{create:!0}}]},[e._v("Create Recipe")]):e._e()],1),r("b-modal",{attrs:{id:"create",title:"Create Recipe"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk}},[r("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[r("b-form-group",{attrs:{label:"title","label-for":"title-input","invalid-feedback":"Title is required",state:e.titleState}},[r("b-form-input",{attrs:{id:"title-input",state:e.titleState,required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),r("b-form-group",{attrs:{label:"ready in X minutes","label-for":"readyInMinutes-input","invalid-feedback":"readyInMinutes is required",state:e.readyInMinutesState}},[r("b-form-input",{attrs:{id:"readyInMinutes-input",state:e.readyInMinutesState,required:""},model:{value:e.readyInMinutes,callback:function(t){e.readyInMinutes=t},expression:"readyInMinutes"}})],1),r("b-form-group",{attrs:{label:"image url","label-for":"image-input","invalid-feedback":"image is required",state:e.imageState}},[r("b-form-input",{attrs:{id:"image-input",state:e.imageState,required:""},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1),r("b-form-group",{attrs:{label:"vegan ?","label-for":"vegan-input"}},[r("b-form-checkbox",{attrs:{id:"vegan-input",value:"1","unchecked-value":"0"},model:{value:e.vegan,callback:function(t){e.vegan=t},expression:"vegan"}})],1),r("b-form-group",{attrs:{label:"vegetarian ?","label-for":"vegetarian-input"}},[r("b-form-checkbox",{attrs:{id:"vegetarian-input",value:"1","unchecked-value":"0"},model:{value:e.vegetarian,callback:function(t){e.vegetarian=t},expression:"vegetarian"}})],1),r("b-form-group",{attrs:{label:"gluten free ?","label-for":"glutenFree-input"}},[r("b-form-checkbox",{attrs:{id:"glutenFree-input",value:"1","unchecked-value":"0"},model:{value:e.glutenFree,callback:function(t){e.glutenFree=t},expression:"glutenFree"}})],1),r("b-form-group",{attrs:{label:"ingredients","label-for":"extendedIngredients-input","invalid-feedback":"ingredients is required",state:e.extendedIngredientsState}},[r("b-form-textarea",{attrs:{id:"extendedIngredients-input",state:e.extendedIngredientsState,required:""},model:{value:e.extendedIngredients,callback:function(t){e.extendedIngredients=t},expression:"extendedIngredients"}})],1),r("b-form-group",{attrs:{label:"instructions","label-for":"instructions-input","invalid-feedback":"instructions is required",state:e.instructionsState}},[r("b-form-textarea",{attrs:{id:"instructions-input",state:e.instructionsState,required:""},model:{value:e.instructions,callback:function(t){e.instructions=t},expression:"instructions"}})],1),r("b-form-group",{attrs:{label:"servings","label-for":"servings-input","invalid-feedback":"servings is required",state:e.servingsState}},[r("b-form-input",{attrs:{id:"servings-input",state:e.servingsState,required:""},model:{value:e.servings,callback:function(t){e.servings=t},expression:"servings"}})],1)],1)]),e.$root.store.username?r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v(e._s(e.$root.store.username))])]},proxy:!0}])},[r("b-dropdown-item",{on:{click:e.Logout}},[e._v("Logout")])],1)],1):r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("hello guest")])]},proxy:!0}],null,!1,2653540738)},[r("b-dropdown-item",{attrs:{to:{name:"login"}}},[e._v("Login")]),r("b-dropdown-item",{attrs:{to:{name:"register"}}},[e._v("Register")])],1)],1)],1)],1)],1),r("router-view")],1)},i=[],s=(r("96cf"),r("1da1")),o={name:"App",data:function(){return{title:"",titleState:null,readyInMinutes:"",readyInMinutesState:null,image:"",imageState:null,vegan:"0",veganState:null,vegetarian:"0",vegetarianState:null,glutenFree:"0",glutenFreeState:null,extendedIngredients:"",extendedIngredientsState:null,instructions:"",instructionsState:null,servings:"",servingsState:null}},methods:{checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.titleState=e,this.readyInMinutesState=e,this.imageState=e,this.veganState=e,this.vegetarianState=e,this.glutenFreeState=e,this.extendedIngredientsState=e,this.instructionsState=e,this.servingsState=e,e},resetModal:function(){this.titleState=null,this.readyInMinutesState=null,this.imageState=null,this.veganState=null,this.vegetarianState=null,this.glutenFreeState=null,this.extendedIngredientsState=null,this.instructionsState=null,this.servingsState=null,this.title="",this.readyInMinutes="",this.image="",this.vegan="0",this.vegetarian="0",this.glutenFree="0",this.extendedIngredients="",this.instructions="",this.servings=""},handleOk:function(e){e.preventDefault(),this.handleSubmit()},handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.checkFormValidity()){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.axios.post(e.$root.store.server_domain+"/users/addRecipe",{title:e.title,readyInMinutes:e.readyInMinutes,image:e.image,vegan:e.vegan,vegetarian:e.vegetarian,glutenFree:e.glutenFree,extendedIngredients:e.extendedIngredients,instructions:e.instructions,servings:e.servings});case 5:t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 12:e.$nextTick((function(){e.$bvModal.hide("create"),e.resetModal()}));case 13:case"end":return t.stop()}}),t,null,[[2,8]])})))()},Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},c=o,u=(r("5c0b"),r("2877")),l=Object(u["a"])(c,a,i,!1,null,null,null),d=l.exports,p=r("a7fe"),f=r.n(p),h=r("bc3a"),m=r.n(h),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Main Page")]),r("div",{staticStyle:{display:"flex"}},[r("div",{staticClass:"child"},[r("RecipePreviewList",{key:e.flop,staticClass:"RandomRecipes center",attrs:{title:"Explore this recipes"}}),r("b-button",{on:{click:e.moreButtom}},[e._v("More")])],1),r("div",{staticClass:"child"},[e.$root.store.username?e._e():r("router-link",{staticClass:"btn btn-primary",attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to view this")]),r("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)])])},g=[],b=r("99d8"),k={data:function(){return{flop:!0}},methods:{moreButtom:function(){this.flop=!this.flop}},components:{RecipePreviewList:b["a"]}},y=k,x=(r("58d3"),Object(u["a"])(y,v,g,!1,null,"991eda22",null)),w=x.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},_=[],R={},I=Object(u["a"])(R,S,_,!1,null,null,null),O=I.exports,j=[{path:"/",name:"main",component:w},{path:"/register",name:"register",component:function(){return r.e("chunk-1bbf0d84").then(r.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return r.e("chunk-9e9e54da").then(r.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return r.e("chunk-746908e5").then(r.bind(null,"37906"))}},{path:"/personal/family",name:"family",component:function(){return r.e("chunk-2d0e6711").then(r.bind(null,"9983"))}},{path:"/personal/recipes",name:"my_recipes",component:function(){return r.e("chunk-2d23822a").then(r.bind(null,"fda7"))}},{path:"/personal/favorites",name:"favorites",component:function(){return r.e("chunk-2d0c20b8").then(r.bind(null,"4941"))}},{path:"/create",name:"create",component:function(){return r.e("chunk-2d0c5220").then(r.bind(null,"3e91"))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e("chunk-1f7b68ce").then(r.bind(null,"6619"))}},{path:"/about",name:"about",component:function(){return r.e("chunk-d06952f0").then(r.bind(null,"478b"))}},{path:"*",name:"notFound",component:O}],M=j,$=r("8c4f"),F=r("1dce"),C=r.n(F),q=(r("f9e3"),r("2dd8"),r("1073")),P=r("cbd0"),E=r("b1fc"),L=r("7049"),T=r("a7e2"),N=r("f9bc"),A=r("44d4"),D=r("cca8"),B=r("51c2"),U=r("498a"),V=r("dbbe"),H=r("3d31"),J=r("a166");n["default"].use($["a"]);var Q=new $["a"]({routes:M});[q["a"],P["a"],E["a"],L["a"],T["a"],N["a"],A["a"],D["a"],B["a"],U["a"],V["a"],H["a"],J["a"]].forEach((function(e){return n["default"].use(e)})),n["default"].use(C.a),m.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),m.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(f.a,m.a),n["default"].config.productionTip=!1;var Y={server_domain:"https://yumtum.cs.bgu.ac.il",lastSearch:localStorage.lastSearch,username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username),localStorage.setItem("lastSearch","no last search"),this.lastSearch="no last search"},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0,localStorage.removeItem("lastSearch"),this.lastSearch="no last search"}};console.log(Y),new n["default"]({router:Q,data:function(){return{store:Y}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(d)}}).$mount("#app")},"58d3":function(e,t,r){"use strict";var n=r("a334"),a=r.n(n);a.a},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"99d8":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),0==e.recipes.length?r("div",[r("h3",[e._v(" No results found ")])]):"Explore this recipes"==this.title?r("div",e._l(e.recipes,(function(t){return r("b-row",{key:t.id},[r("b-col",[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:t,title:e.title}})],1)],1)})),1):r("div",e._l(e.recipes,(function(t){return r("b-row",{key:t.id},e._l(t,(function(t){return r("b-col",{key:t.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:t,title:e.title}})],1)})),1)})),1)])},a=[],i=(r("4e82"),r("a434"),r("2909")),s=(r("96cf"),r("1da1")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.$root.store.username&&!isNaN(e.recipe.aggregateLikes)?r("div",[0==e.favorite?r("div",[r("img",{attrs:{width:"35",height:"35",src:"https://icon-library.com/images/favorite-icon-png/favorite-icon-png-1.jpg"},on:{click:e.AddToFavorites}})]):r("div",[r("img",{attrs:{width:"40",height:"40",src:"https://icon-library.com/images/favorite-icon/favorite-icon-1.jpg"}})])]):e._e(),r("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[r("div",{staticClass:"recipe-body"},[r("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),r("div",{staticClass:"recipe-footer"},[r("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),r("ul",{staticClass:"recipe-overview"},[r("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),isNaN(e.recipe.aggregateLikes)?e._e():r("li",[e._v(" "+e._s(e.recipe.aggregateLikes)+" likes ")]),e.recipe.vegan?r("img",{attrs:{width:"50",height:"50",src:"https://png.monster/wp-content/uploads/2022/03/png.monster-25.png"}}):e._e(),e.recipe.vegetarian?r("img",{attrs:{width:"50",height:"50",src:"https://cdn0.iconfinder.com/data/icons/eco-food-and-cosmetic-labels/128/Artboard_45--2-512.png"}}):e._e(),e.recipe.glutenFree?r("img",{attrs:{width:"50",height:"50",src:"https://cdn-icons-png.flaticon.com/512/1488/1488167.png"}}):e._e()])])])],1)},c=[],u={data:function(){return{favorite:0}},mounted:function(){this.$root.store.username&&this.inFavorites()},methods:{inFavorites:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/inFavorites?recipeId="+e.recipe.id);case 3:r=t.sent,e.favorite=r.data[0]["COUNT(*)"],t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},AddToFavorites:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/users/favorites",{recipeId:e.recipe.id});case 3:r=t.sent,e.favorite=1,console.log(r),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},props:{recipe:{type:Object,required:!0},title:{type:String,required:!0}}},l=u,d=(r("9f2a"),r("2877")),p=Object(d["a"])(l,o,c,!1,null,"9ae004b6",null),f=p.exports,h={name:"RecipePreviewList",components:{RecipePreview:f},props:{title:{type:String,required:!0},searchQuery:{type:String,required:!1},number:{type:String,required:!1},cuisine:{type:String,required:!1},diet:{type:String,required:!1},intolerance:{type:String,required:!1},sort:{type:String,required:!1},sortDirection:{type:String,required:!1}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("Explore this recipes"!=e.title){t.next=5;break}return t.next=3,e.randomRecipes();case 3:t.next=23;break;case 5:if("Search Results"!=e.title){t.next=10;break}return t.next=8,e.searchRecipes();case 8:t.next=23;break;case 10:if("Family Recipes"!=e.title){t.next=15;break}return t.next=13,e.familyRecipes();case 13:t.next=23;break;case 15:if("My Favorite Recipes"!=e.title){t.next=20;break}return t.next=18,e.favoriteRecipes();case 18:t.next=23;break;case 20:if("My Recipes"!=e.title){t.next=23;break}return t.next=23,e.myRecipes();case 23:case"end":return t.stop()}}),t)})))()},randomRecipes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:n=t.sent,a=n.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(i["a"])(a)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},familyRecipes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/family");case 3:n=t.sent,a=n.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(i["a"])(a)),s=[],o=2;while(e.recipes.length>0)c=e.recipes.splice(0,o),s.push(c);e.recipes=s,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},favoriteRecipes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 3:n=t.sent,console.log(n),a=n.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(i["a"])(a)),s=[],o=3;while(e.recipes.length>0)c=e.recipes.splice(0,o),s.push(c);e.recipes=s,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},myRecipes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/addRecipe");case 3:n=t.sent,console.log(n),a=n.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(i["a"])(a)),s=[],o=3;while(e.recipes.length>0)c=e.recipes.splice(0,o),s.push(c);e.recipes=s,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},searchRecipes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/search?query="+e.searchQuery+"&number="+e.number+"&cuisine="+e.cuisine+"&diet="+e.diet+"&intolerance="+e.intolerance+"&sort="+e.sort+"&sortDirection="+e.sortDirection);case 3:n=t.sent,a=n.data.results,e.recipes=[],(r=e.recipes).push.apply(r,Object(i["a"])(a)),s=[],o=3;while(e.recipes.length>0)c=e.recipes.splice(0,o),s.push(c);e.recipes=s,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}},m=h,v=(r("1b67"),Object(d["a"])(m,n,a,!1,null,"00ed1c80",null));t["a"]=v.exports},"9c0c":function(e,t,r){},"9f2a":function(e,t,r){"use strict";var n=r("5333"),a=r.n(n);a.a},a334:function(e,t,r){},d87d:function(e,t,r){}});
//# sourceMappingURL=app.0ece3892.js.map