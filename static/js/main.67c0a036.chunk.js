(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],Array(25).concat([function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./1/images/hero-image.jpg":47,"./2/images/hero-image.jpg":48,"./3/images/hero-image.jpg":49};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=46},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/hero-image.85ae04f9.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/hero-image.85ae04f9.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/hero-image.85ae04f9.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),s=a(5),i=a(2);a(25),a(26);var o=e=>r.a.createElement(s.b,{className:"header",to:"/"},r.a.createElement("div",{className:"header-content"},r.a.createElement("div",{className:"header-recipes"},"Recettes maison"),r.a.createElement("div",{className:"header-by-maki"},"by Maki")));a(32);var m=e=>{const t=e.onActive,a=e.onUnactive,l=Object(n.useRef)(null),c=Object(n.useCallback)((()=>{(()=>{var e=l.current.getBoundingClientRect();return e.top>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)||e.bottom>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)||e.top<0&&e.bottom>(window.innerHeight||document.documentElement.clientHeight)})()?t():void 0!==a&&a()}),[t,a]);return Object(n.useEffect)((()=>(c(),window.addEventListener("scroll",c,!1),()=>window.removeEventListener("scroll",c,!1))),[c]),r.a.createElement("div",{className:"screen-detector ".concat(e.className),ref:l})};a(33);var u=e=>{const t=Object(n.useRef)(null),a=void 0!==e.backgroundColor?e.backgroundColor:"var(--color-charcoal)",l=e.isSelected?"is-selected":"";return r.a.createElement(s.b,{className:"navigation-link ".concat(l),to:e.to},r.a.createElement("div",{className:"navigation-link-div",ref:t},e.text.split("").map(((t,a)=>{const n=.1*a+1+e.linkIndex;return r.a.createElement("span",{className:"down ".concat(a)},t,r.a.createElement("span",{className:"moving",style:{animationDelay:"".concat(n,"s")}},t))})),r.a.createElement(m,{className:"screen-detector-navigation-link",onActive:()=>{null==t.current||t.current.classList.contains("animate")||t.current.classList.add("animate")}})),r.a.createElement("div",{className:"navigation-link-underline"},r.a.createElement("div",{className:"navigation-link-underline-half left",style:{backgroundColor:a}}),r.a.createElement("div",{className:"navigation-link-underline-half right",style:{backgroundColor:a}})))};var d=e=>{const t="recipes"===e.selectedPage,a="about"===e.selectedPage,n="contact"===e.selectedPage;return r.a.createElement("div",{className:"navigation"},r.a.createElement(u,{text:"Les recettes",to:'/recipes?categories=["all"]',linkIndex:0,backgroundColor:"var(--color-apricot)",isSelected:t}),r.a.createElement(u,{text:"\xc0 propos",to:"/about",linkIndex:1,backgroundColor:"var(--color-light-grey)",isSelected:a}),r.a.createElement(u,{text:"Contact",to:"/contact",linkIndex:2,backgroundColor:"var(--color-grey)",isSelected:n}))};a(34);var p=e=>r.a.createElement("div",{className:"about"},r.a.createElement(o,null),r.a.createElement(d,{selectedPage:"about"}),r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"about-title"},"\xc0 propos"))),E=a(6),v=a(20);a(35);var g=e=>{const t=e.active?"active":"";return r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{className:"list-item-dot"},r.a.createElement("div",{className:"list-item-dot-filling ".concat(t),style:{backgroundColor:e.dotColor,animationDelay:e.activeDelay}})),e.text)};a(36);var h=e=>{const t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],c=a[1],s=l?"active":"";return r.a.createElement("div",{className:"recipe-highlight ".concat(s)},r.a.createElement(m,{className:"screen-detector-recipe-highlight",onActive:()=>{c(!0)},onUnactive:()=>{c(!1)}}),r.a.createElement("div",{className:"recipe-highlight-background"}),r.a.createElement("div",{className:"recipe-hightlight-content"},e.children))};a(37);var b=e=>{const t=Object(n.useState)(null),a=Object(E.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((()=>{fetch("https://graph.facebook.com/v9.0/instagram_oembed?url=".concat(e.imageUrl,"&access_token=857325501713225|f2b27b7ab1af66fad966fe773ffcaaf3")).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).then((e=>e.thumbnail_url)).then(c)}),[]),r.a.createElement("div",{className:"recipe-image",style:{backgroundImage:"url('".concat(l,"')")}},r.a.createElement("a",{href:e.imageUrl,target:"_blank"},r.a.createElement("div",{className:"hover-shadow"}),r.a.createElement("div",{className:"recipe-image-content"},r.a.createElement("div",{className:"recipe-image-title"},e.title),r.a.createElement("div",{className:"recipe-image-text"},e.text))))};a(38);var f=e=>r.a.createElement("div",{className:"recipe-section-title"},e.title),N=a(19);class w{constructor(e,t){this.label=void 0,this.description=void 0,this.getDescription=()=>this.description,this.equals=e=>this.label===e.label,this.toJSON=()=>this.label.toLowerCase(),this.isIncluded=e=>e.filter((e=>e.equals(this))).length>0,this.label=e,this.description=t}}w.getAllCategories=()=>[w.ALL,w.HYGIENE,w.CLEANING,w.FOOD],w.deserialize=e=>{if("string"!=typeof e)throw new Error("Expected type string when deserializing Category but got something else.");for(let t in w)if(t.toLowerCase()===e.toLowerCase())return w[t];throw new Error("Did not find Category with label ".concat(e))},w.toQueryParam=e=>"categories=".concat(JSON.stringify(e)),w.intersects=(e,t)=>{var a,n=Object(N.a)(e);try{for(n.s();!(a=n.n()).done;){if(a.value.isIncluded(t))return!0}}catch(r){n.e(r)}finally{n.f()}return!1},w.FOOD=new w("FOOD","Nourriture & boissons"),w.CLEANING=new w("CLEANING","Produits m\xe9nagers"),w.HYGIENE=new w("HYGIENE","Produits d'hygi\xe8ne"),w.ALL=new w("ALL","Tous");a(39);var y=e=>{var t=Object(n.useState)(""),a=Object(E.a)(t,2),l=a[0],c=a[1];const s=e.inline?"inline":"",i=e.noDelay?"no-delay":"";return r.a.createElement("div",{className:"fade-in ".concat(l," ").concat(s," ").concat(i)},e.children,r.a.createElement(m,{onActive:()=>{c("active")},onUnactive:()=>{c("")},className:"screen-detector-fade-in"}))};a(40);var C=e=>r.a.createElement(s.b,{className:"arrow-back",to:"/recipes?".concat(w.toQueryParam([w.ALL]))},r.a.createElement(y,{noDelay:!0},r.a.createElement("span",{className:"arrow-back-left"},"<"),r.a.createElement("span",{className:"arrow-back-text"},"Retour")));a(41);var L=e=>r.a.createElement("div",{onClick:()=>{(e=>{const t=document.getElementById(e);null!=t&&t.scrollIntoView()})("top")},className:"arrow-up"},r.a.createElement("span",null,"Retour en haut"),r.a.createElement("span",{className:"arrow-up"},"\u2303"));a(42);var x=e=>r.a.createElement("div",{className:"recipe-header"},e.title);a(43);var k=e=>{const t=j.getRecipeById(e.recipeId);return r.a.createElement("div",{className:"recipe-template ".concat(e.classname)},r.a.createElement(x,{title:t.getTitle()}),r.a.createElement(d,{selectedPage:"recipes"}),r.a.createElement("div",{className:"main-wrapper",id:"top"},r.a.createElement(C,null),e.children,r.a.createElement(L,null)))};a(44);var O=e=>{const t=(e,t,a,n)=>e+a/n*(t-e),a=e=>"rgb(".concat(t(54,251,e,9),", ").concat(t(63,251,e,9),", ").concat(t(73,251,e,9),")"),l=Object(n.useState)(!1),c=Object(E.a)(l,2),s=c[0],i=c[1];return r.a.createElement(k,{recipeId:1,classname:"one"},r.a.createElement(f,{title:"En r\xe9sum\xe9"}),"Le savon est le produit d\u2019une r\xe9action chimique entre une base forte et une mati\xe8re grasse. Les deux \xe9l\xe9ments principaux ici sont donc ",r.a.createElement(h,null,"la lessive de soude")," et deux huiles: ",r.a.createElement(h,null,"l\u2019huile de coco")," pour le c\xf4t\xe9 moussant et ",r.a.createElement(h,null,"l\u2019huile de s\xe9same")," pour le gras. On y ajoute une ",r.a.createElement(h,null,"fragrance de synth\xe8se")," \xe0 la fois pour l\u2019odeur et comme catalyseur. Celle-ci va en effet acc\xe9l\xe9rer la r\xe9action chimique et donc le durcissement du produit et ainsi raccourcir le temps de s\xe9chage entre deux couches. La pr\xe9paration prend environ 1h, selon la complexit\xe9 du motif que l\u2019on souhaite r\xe9aliser, et s\u2019effectue \xe0 ",r.a.createElement(h,null,"temp\xe9rature ambiante"),". Ensuite, il faudra attendre environ ",r.a.createElement(h,null,"un mois")," avant de pouvoir utiliser le produit final.",r.a.createElement("div",{className:"section-separator"}),r.a.createElement(f,{title:"La saponification \xe0 froid"}),"La soude attaque le gras contenu dans l\u2019huile. C\u2019est une ",r.a.createElement(h,null,"r\xe9action totale")," mais assez ",r.a.createElement(h,null,"lente \xe0 temp\xe9rature ambiante"),", d\u2019o\xf9 le temps de s\xe9chage de 4 semaines. Il faut donc que l\u2019huile soit en exc\xe8s par rapport \xe0 la soude. De plus, les huiles utilis\xe9es contiennent des \xe9l\xe9ments, dits insaponifiables, qui ne r\xe9agissent pas avec la soude et qui resteront sous forme d\u2019huile dans le produit final. On obtiendra donc un ",r.a.createElement(h,null,"savon surgras"),".",r.a.createElement("div",{className:"section-separator"}),r.a.createElement("div",{className:"two-columns"},r.a.createElement("div",{className:"column"},r.a.createElement(f,{title:"Les ingr\xe9dients"}),"Les quantit\xe9s indiqu\xe9es correspondent \xe0 environ 500g de savon, ce qui permet de se laver les mains pendant approximativement une ann\xe9e, \xe9videmment moins en p\xe9riode de pand\xe9mie.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"ingredients"},r.a.createElement("div",{className:"ingredients-column"},"385g",r.a.createElement("br",null),"97g",r.a.createElement("br",null),"204g",r.a.createElement("br",null),"14g",r.a.createElement("br",null),"1g"),r.a.createElement("div",{className:"ingredients-column"},"Huile de coco d\xe9sodoris\xe9e \ud83e\udd65",r.a.createElement("br",null),"Huile de s\xe9same",r.a.createElement("br",null),"Lessive de soude \xe0 30%",r.a.createElement("br",null),"Fragrance",r.a.createElement("br",null),"Mika (pigments min\xe9raux)"))),r.a.createElement("div",{className:"column"},r.a.createElement(f,{title:"Le mat\xe9riel"}),r.a.createElement(m,{className:"screen-detector-materiel",onActive:()=>{i(!0)},onUnactive:()=>{i(!1)}}),r.a.createElement(g,{text:"Une bo\xeete en carton ou moules en silicone \ud83e\udd61",dotColor:a(1),active:s}),r.a.createElement(g,{text:"Une balance de cuisine",dotColor:a(2),active:s,activeDelay:"0.2s"}),r.a.createElement(g,{text:"2-3 Eco cups selon le nombre de couleurs diff\xe9rentes",dotColor:a(3),active:s,activeDelay:"0.4s"}),r.a.createElement(g,{text:"Un grand saladier ou une carafe",dotColor:a(4),active:s,activeDelay:"0.6s"}),r.a.createElement(g,{text:"Une spatule pour r\xe2cler",dotColor:a(5),active:s,activeDelay:"0.8s"}),r.a.createElement(g,{text:"Des b\xe2tonnets pour touiller",dotColor:a(6),active:s,activeDelay:"1s"}),r.a.createElement(g,{text:"Des gants de m\xe9nage",dotColor:a(7),active:s,activeDelay:"1.2s"}),r.a.createElement(g,{text:"Une blouse",dotColor:a(8),active:s,activeDelay:"1.4s"}),r.a.createElement(g,{text:"Des lunettes de protection",dotColor:a(9),active:s,activeDelay:"1.6s"}))),r.a.createElement("div",{className:"section-separator"}),r.a.createElement(f,{title:"La proc\xe9dure"}),r.a.createElement("div",{className:"step-title"},"1. La pr\xe9paration de l\u2019huile de coco"),"Faire chauffer l\u2019huile de coco pour la rendre liquide.",r.a.createElement("div",{className:"step-separator"}),r.a.createElement("div",{className:"step-title"},"2. Les pes\xe9es"),"Peser l\u2019huile de coco, l\u2019huile de s\xe9same et la lessive de soude s\xe9par\xe9ment.",r.a.createElement("br",null),"Puis la fragrance et les pigments. Ces derniers peuvent \xeatre dos\xe9s \xe0 l\u2019oeil et la quantit\xe9 peut \xeatre r\xe9ajust\xe9e lors de l\u2019ajout dans la pr\xe9paration si besoin.",r.a.createElement("div",{className:"step-separator"}),r.a.createElement("div",{className:"step-title"},"3. Le m\xe9lange des huiles"),"Verser l\u2019huile de coco dans l\u2019huile de s\xe9same. M\xe9langer grossi\xe8rement et r\xe9server.",r.a.createElement("br",null),"Pr\xe9parer la bo\xeete en carton, la pencher sur des cales si besoin.",r.a.createElement("div",{className:"step-separator"}),r.a.createElement("div",{className:"step-title"},"4. La saponification \xe0 froid"),"M\xe9langer la lessive de soude aux huiles.",r.a.createElement("br",null),"Homog\xe9n\xe9iser et m\xe9langer au mixeur jusqu\u2019\xe0 ce que la pr\xe9paration soit opaque et visqueuse, comme une p\xe2te \xe0 cr\xeapes.",r.a.createElement("div",{className:"step-separator"}),r.a.createElement("div",{className:"step-title"},"5. La mise en bo\xeete"),"S\xe9parer dans des verres selon le nombre de couleurs diff\xe9rentes. Ajouter les pigments, bien m\xe9langer.",r.a.createElement("br",null),"Ajouter la fragrance, bien m\xe9langer et verser dans la bo\xeete",r.a.createElement("br",null),"Bien r\xe2cler le verre, claquer la bo\xeete sur la table pour r\xe9partir la p\xe2te.",r.a.createElement("br",null),r.a.createElement("div",{className:"step-separator"}),r.a.createElement("div",{className:"step-title"},"6. Le s\xe9chage de la premi\xe8re couche"),"Attendre environ 10 min que la premi\xe8re couche s\xe8che, il faut pouvoir retourner la bo\xeete.",r.a.createElement("div",{className:"step-separator"}),r.a.createElement("div",{className:"step-title"},"7. Les couches suivantes (optionnel)"),"Pendant le s\xe9chage de la premi\xe8re couche, pr\xe9parer la seconde couche en s\xe9parant de nouveau la p\xe2te si besoin, et en ajoutant les pigments. Continuer \xe0 touiller de temps en temps et surveiller que la p\xe2te ne durcisse pas trop dans le verre.",r.a.createElement("br",null),"Une fois la premi\xe8re couche compl\xe8tement s\xe8che, ajouter la fragrance dans la p\xe2te, m\xe9langer et verser dans la bo\xeete.",r.a.createElement("br",null),"R\xe9p\xe9ter cette op\xe9ration pour chaque couleur.",r.a.createElement("div",{className:"step-separator"}),r.a.createElement("div",{className:"step-title"},"8. Le s\xe9chage du savon"),"Laisser s\xe9cher la bo\xeete ouverte dans un endroit sec et sans odeur pendant 2 jours. Couper le pain de savon en tranches.",r.a.createElement("br",null),"Puis laisser s\xe9cher 4 semaines avant utilisation.",r.a.createElement("div",{className:"section-separator"}),r.a.createElement(f,{title:"Des motifs"}),r.a.createElement("span",{className:"uppercase"},"Le monochrome")," : une seule couleur, une seule couche.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"uppercase"},"Le marbr\xe9")," : m\xe9lange de deux couleurs, les deux couches sont vers\xe9es simultan\xe9ment dans la bo\xeete.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"uppercase"},"Les rayures")," : superposition des couches.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"uppercase"},"La diagonale")," : on verse la premi\xe8re couche dans une bo\xeete pr\xe9alablement pench\xe9e. Une fois s\xe8che, on penche la bo\xeete dans l'autre sens et on verse la seconde couche.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"uppercase"},"La double diagonale")," : on verse la premi\xe8re couche (la moiti\xe9 de la pr\xe9paration) dans une bo\xeete pr\xe9alablement pench\xe9e. Une fois s\xe8che, on penche la bo\xeete dans l'autre sens et on verse la seconde couche (la moiti\xe9 de ce qu'il reste de la pr\xe9paration). On remet la bo\xeete droite pour la derni\xe8re couche.",r.a.createElement("div",{className:"flex-line motifs-container"},r.a.createElement(b,{imageUrl:"https://www.instagram.com/p/CJswhmhFBjh/",title:"Le monochrome",text:"@ciment.paris"}),r.a.createElement(b,{imageUrl:"https://www.instagram.com/p/CJqNC1xgQHK/",title:"Les rayures",text:"@ciment.paris"}),r.a.createElement(b,{imageUrl:"https://www.instagram.com/p/B9W5PPZqNYI/",title:"La diagonale",text:"@ciment.paris"}),r.a.createElement(b,{imageUrl:"https://www.instagram.com/p/Bkhc5b5AmvH/",title:"La double diagonale",text:"@ciment.paris"})),r.a.createElement("div",{className:"section-separator"}),r.a.createElement(f,{title:"Des liens utiles"}),r.a.createElement("a",{href:"https://www.ciment.paris/",target:"_blank"},r.a.createElement(h,null,"Savonnerie Ciment"))," : ateliers, vente de produits finis et de mati\xe8res premi\xe8res",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://calc.mendrulandia.es/",target:"_blank"},r.a.createElement(h,null,"Mendrulandia"))," : calculateur de quantit\xe9s",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.aroma-zone.com/info/fiche-savoir-faire/la-saponification-a-froid",target:"_blank"},r.a.createElement(h,null,"Aroma zone"))," : explications d\xe9taill\xe9es de la saponification \xe0 froid, vente de fragrance de synth\xe8se",r.a.createElement("div",{className:"section-separator"}),r.a.createElement(f,{title:"Les co\xfbts"}),"Huile de coco d\xe9sodoris\xe9e 13,60\u20ac / L chez ",r.a.createElement("a",{href:"https://www.naturalia.fr/huile-de-coco-desodorisee-50cl",target:"_blank"},"Naturalia"),", soit 5,73\u20ac par pain de savon",r.a.createElement("br",null),"Huile de s\xe9same 16,20\u20ac / L chez ",r.a.createElement("a",{href:"https://www.naturalia.fr/huile-de-sesame-50cl-3753165",target:"_blank"},"Naturalia"),", soit 1,71\u20ac par pain de savon",r.a.createElement("br",null),r.a.createElement("div",{className:"section-separator"}))};class j{constructor(e,t,a,n,r){this.id=void 0,this.date=void 0,this.title=void 0,this.content=void 0,this.category=void 0,this.getDateFormat=()=>{var e=A[this.date.getMonth()],t=this.date.getDate();return[(t>9?"":"0")+t,e,this.date.getFullYear()].join(" ")},this.getTitle=()=>this.title,this.getCategory=()=>this.category,this.id=e,this.date=t,this.title=a,this.content=n,this.category=r}}j.getAllSortedRecipes=()=>j.getAllRecipes().sort(((e,t)=>t.date.getTime()-e.date.getTime())),j.getAllRecipes=()=>[j.ONE],j.getLatestRecipes=e=>j.getAllSortedRecipes().slice(0,e),j.getRecipeById=e=>{const t=j.getAllRecipes().find((t=>t.id===e));if(void 0!==t)return t;throw new Error("GetRecipeById error : Recipe with id ".concat(e," not found."))},j.getNextRecipe=e=>{const t=j.getAllSortedRecipes(),a=t.findIndex((t=>t.id===e));if(0!==a)return t[a-1]},j.getPreviousRecipe=e=>{const t=j.getAllSortedRecipes(),a=t.findIndex((t=>t.id===e));if(a!==t.length-1)return t[a+1]},j.ONE=new j(1,new Date("2021-02-03"),"Savon solide",O,w.HYGIENE),j.TWO=new j(2,new Date("2021-02-10"),"Lessive",O,w.CLEANING),j.THREE=new j(3,new Date("2021-02-17"),"Beurre de cacahu\xe8tes",O,w.FOOD);const A=["Jan","F\xe9v","Mar","Avr","Mai","Jun","Jul","Ao\xfb","Sep","Oct","Nov","D\xe9c"];var D=new class{constructor(){this.getRecipes=e=>{const t=j.getAllSortedRecipes();return e.includes(w.ALL)?t:t.filter((t=>w.intersects([t.category],e)))}}};a(45);var I=e=>{const t=a(46)("./".concat(e.recipe.id,"/images/hero-image.jpg")).default;return r.a.createElement(s.b,{className:"recipe-preview",to:"recipes/".concat(e.recipe.id)},r.a.createElement("div",{className:"image"},r.a.createElement("div",{className:"hover-shadow"}),r.a.createElement("div",{className:"read-more"},"Voir la recette"),r.a.createElement("img",{src:t,alt:e.recipe.title})),r.a.createElement("div",{className:"text ".concat(e.backgroundColor)},r.a.createElement("div",{className:"title"},e.recipe.getTitle())))};a(50),a(51);var q=e=>{const t=e.isSelected?"is-selected":"";return r.a.createElement("div",{className:"category-button ".concat(t," ").concat(e.category.equals(w.HYGIENE)?"apricot":e.category.equals(w.CLEANING)?"light-grey":e.category.equals(w.ALL)?"charcoal":"grey"),onClick:e.onClick},r.a.createElement("div",{className:"abs-fill"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 550 168",width:"550",height:"168",preserveAspectRatio:"none",style:{width:"100%",height:"100%",transform:"translate3d(0px, 0px, 0px)"}},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"__lottie_element_858"},r.a.createElement("rect",{width:"550",height:"168",x:"0",y:"0"}))),r.a.createElement("g",{"clip-path":"url(#__lottie_element_858)"},r.a.createElement("g",{style:{display:"block"},transform:"matrix(1,0,0,1,275,84)",opacity:"1"},r.a.createElement("g",{opacity:"1",transform:"matrix(1,0,0,1,0,0)"},r.a.createElement("path",{"fill-opacity":"1",className:"path",d:" M-62.22859573364258,-76.2843017578125 C-114.54045867919922,-77.16676330566406 -163.30902099609375,-78.31365966796875 -203.5754852294922,-59.62897872924805 C-237.87294006347656,-43.755889892578125 -254.96075439453125,4.897095680236816 -221.2318878173828,45.10591506958008 C-198.3268585205078,81.15975189208984 -126.51339721679688,76.2843017578125 -63.31096267700195,76.57160949707031 C-0.4116179943084717,77.794189453125 29.542190551757812,71.03105926513672 88.46839904785156,73.34166717529297 C157.7086181640625,76.06149291992188 200.7889404296875,85.85816192626953 227.75930786132812,47.7631721496582 C249.5533905029297,17.03590965270996 250.461181640625,-15.121354103088379 235.02935791015625,-39.66957092285156 C208.59107971191406,-81.49311828613281 131.11386108398438,-62.24323654174805 78.83177947998047,-68.90397644042969 C16.38657569885254,-76.78626251220703 -11.726871490478516,-75.42839050292969 -62.22859573364258,-76.2843017578125z"})))))),r.a.createElement("span",{className:"category-button-description"},e.category.getDescription()))};var R=e=>{const t=(()=>{const e=Object(i.g)(),t={};return e.search.slice(1).split("&").map((e=>e.split("="))).forEach((e=>t[decodeURIComponent(e[0])]=decodeURIComponent(e[1]))),t})();let a=t.categories,l=[];void 0!==a&&(l=JSON.parse(a).map(w.deserialize));let c=D.getRecipes(l);const s=Object(i.f)(),m=Object(i.g)(),u=w.getAllCategories(),p=c.filter(((e,t)=>t%3===0)),g=c.filter(((e,t)=>t%3===1)),h=c.filter(((e,t)=>t%3===2)),b=e=>e.map((e=>e.getCategory().equals(w.HYGIENE)?r.a.createElement(y,{noDelay:!0},r.a.createElement(I,{recipe:e,backgroundColor:"apricot"})):e.getCategory().equals(w.CLEANING)?r.a.createElement(y,{noDelay:!0},r.a.createElement(I,{recipe:e,backgroundColor:"light-grey"})):r.a.createElement(y,{noDelay:!0},r.a.createElement(I,{recipe:e,backgroundColor:"grey"})))),f=Object(n.useState)(!1),N=Object(E.a)(f,2),C=N[0],L=N[1],x=C?"is-invisible":"",k=e=>{L(!0),setTimeout((()=>{(e=>{t.categories;const a=Object(v.a)(t,["categories"]),n=Object.keys(a).map((e=>"".concat(e,"=").concat(encodeURIComponent(t[e]))));s.push("".concat(m.pathname,"?").concat(w.toQueryParam(e)).concat(n))})([e]),L(!1)}),1e3)};return r.a.createElement("div",{className:"all-recipes"},r.a.createElement(o,null),r.a.createElement(d,{selectedPage:"recipes"}),r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"all-recipes-title"},"Les recettes"),r.a.createElement("div",{className:"blog-categories"},r.a.createElement("div",{className:"blog-categories-container"},u.map((e=>{return r.a.createElement(q,{category:e,isSelected:(t=e,l.includes(t)),onClick:()=>k(e)});var t})))),r.a.createElement("div",{className:"recipes ".concat(x)},r.a.createElement("div",{className:"recipes-column"},b(p)),r.a.createElement("div",{className:"recipes-column"},b(g)),r.a.createElement("div",{className:"recipes-column"},b(h)))))};a(52);var S=e=>r.a.createElement("div",{className:"contact"},r.a.createElement(o,null),r.a.createElement(d,{selectedPage:"contact"}),r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"contact-title"},"Contact")));a(53);var U=e=>r.a.createElement("div",{className:"home"},r.a.createElement(o,null),r.a.createElement(d,{selectedPage:""}));var P=e=>{let t=Object(i.h)().recipeId;var a=j.getAllRecipes().find((e=>e.id.toString()===t));const n=void 0==a?j.ONE:a;return r.a.createElement(n.content,null)};function H(){const e=Object(i.g)().pathname;return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}var _=e=>r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(H,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/about"]},r.a.createElement(p,null)),r.a.createElement(i.a,{exact:!0,path:["/contact"]},r.a.createElement(S,null)),r.a.createElement(i.a,{exact:!0,path:["/"]},r.a.createElement(U,null)),r.a.createElement(i.a,{exact:!0,path:["/recipes/"]},r.a.createElement(R,null)),r.a.createElement(i.a,{path:["/recipes/:recipeId"]},r.a.createElement(P,null)))));a(54);c.a.render(r.a.createElement(_,null),document.getElementById("root"))}]),[[55,1,2]]]);
//# sourceMappingURL=main.67c0a036.chunk.js.map