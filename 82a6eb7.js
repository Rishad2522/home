(window.webpackJsonp=window.webpackJsonp||[]).push([[1,19,38],{442:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAADECAYAAADNnakFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXSURBVHgB7cABDQAAAMKg909tDwcFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwbDCAAAUrWTs8AAAAASUVORK5CYII="},444:function(t,e,a){"use strict";a.r(e);var i=a(25),s={name:"More",props:{type:{type:String,default:"link",validator:function(t){return["link","button","toggle"].indexOf(t)>-1}},link:{type:String},target:{type:String,default:"_self",validator:function(t){return["_self","_blank"].indexOf(t)>-1}}},data:function(){return{}},mounted:function(){},methods:{handleGA:function(t){Object(i.l)("load_more_link",t,this)}}},r=(a(448),a(24)),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.link?a("a",{staticClass:"view-more",attrs:{href:t.link,target:t.target},on:{click:function(e){return t.handleGA(t.link)}}},[t._t("default"),t._v("\n   \n  "),a("svg",{staticClass:"view-more-icon",attrs:{width:"15",height:"11",viewBox:"0 0 15 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M1.34241 10.96H0V0.0400391H1.71674L6.98958 5.31287L1.34241 10.96Z",fill:"#FFBA00"}}),t._v(" "),a("path",{attrs:{d:"M7.64783 0.0400391V1.58252L10.7715 4.71266L12.0881 3.39607L8.72563 0.0400391H7.64783Z",fill:"#FFBA00"}}),t._v(" "),a("path",{attrs:{d:"M7.64783 10.8117H8.95797L14.1985 5.57113L12.8819 4.26099L7.64783 9.4951V10.8117Z",fill:"#FFBA00"}})])],2):a("button",{staticClass:"load-more",on:{click:function(e){return t.$emit("click")}}},[t._t("default"),t._v("\n   \n  "),"toggle"===t.type?a("svg",{staticClass:"view-more-icon",attrs:{width:"15",height:"11",viewBox:"0 0 15 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M1.34241 10.96H0V0.0400391H1.71674L6.98958 5.31287L1.34241 10.96Z",fill:"#FFBA00"}}),t._v(" "),a("path",{attrs:{d:"M7.64783 0.0400391V1.58252L10.7715 4.71266L12.0881 3.39607L8.72563 0.0400391H7.64783Z",fill:"#FFBA00"}}),t._v(" "),a("path",{attrs:{d:"M7.64783 10.8117H8.95797L14.1985 5.57113L12.8819 4.26099L7.64783 9.4951V10.8117Z",fill:"#FFBA00"}})]):a("svg",{staticClass:"more-arrow",attrs:{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M-7.62939e-05 1.28396V0.0473633L10 0.0473633V1.62878L5.17136 6.486L-7.62939e-05 1.28396Z",fill:"black"}})])],2)}),[],!1,null,"575264f4",null);e.default=n.exports},446:function(t,e,a){},448:function(t,e,a){"use strict";a(446)},450:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a(159);var s=a(200),r=a(129);function n(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||Object(s.a)(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},457:function(t,e,a){},466:function(t,e,a){"use strict";var i=a(4),s=a(6),r=a(38),n=a(52),A=a(70),o=a(287),c=a(23),l=a(5),u=a(286),v=a(201),f=a(477),h=a(478),d=a(130),m=a(479),g=[],p=s(g.sort),w=s(g.push),b=l((function(){g.sort(void 0)})),_=l((function(){g.sort(null)})),x=v("sort"),y=!l((function(){if(d)return d<70;if(!(f&&f>3)){if(h)return!0;if(m)return m<603;var t,e,a,i,s="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(i=0;i<47;i++)g.push({k:e+i,v:a})}for(g.sort((function(t,e){return e.v-t.v})),i=0;i<g.length;i++)e=g[i].k.charAt(0),s.charAt(s.length-1)!==e&&(s+=e);return"DGBEFHACIJK"!==s}}));i({target:"Array",proto:!0,forced:b||!_||!x||!y},{sort:function(t){void 0!==t&&r(t);var e=n(this);if(y)return void 0===t?p(e):p(e,t);var a,i,s=[],l=A(e);for(i=0;i<l;i++)i in e&&w(s,e[i]);for(u(s,function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:c(e)>c(a)?1:-1}}(t)),a=s.length,i=0;i<a;)e[i]=s[i++];for(;i<l;)o(e,i++);return e}})},477:function(t,e,a){var i=a(109).match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},478:function(t,e,a){var i=a(109);t.exports=/MSIE|Trident/.test(i)},479:function(t,e,a){var i=a(109).match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},480:function(t,e,a){"use strict";a(457)},489:function(t,e,a){"use strict";a.r(e);a(284),a(89);var i={name:"SwiperPagination",props:{length:Number,activeIdx:{type:Number,default:-1},duration:{type:Number,default:5e3},delay:{type:Number,default:300},start:{type:Boolean,default:!0}},data:function(){return{circleLen:Math.floor(24*Math.PI),timer:null}},computed:{paginations:function(){return new Array(length)}},watch:{start:function(t){t?this.lineAnime():clearInterval(this.timer)},activeIdx:function(){var t=this;clearInterval(this.timer),this.$nextTick((function(){t.start&&t.lineAnime()}))}},mounted:function(){var t=this;this.$nextTick((function(){t.start&&t.lineAnime()})),document.addEventListener("visibilitychange",(function(){document.hidden?clearInterval(t.timer):t.start&&t.lineAnime()}))},beforeDestroy:function(){clearInterval(this.timer),document.removeEventListener("visibilitychange")},methods:{lineAnime:function(){var t=this,e=this.$refs.circle[this.activeIdx];e.setAttribute("stroke-dashoffset",314),this.timer=setInterval((function(){var a=t.circleLen/((t.duration-t.delay)/50),i=Number(e.getAttribute("stroke-dashoffset"))-a;e.setAttribute("stroke-dashoffset",i)}),50)}}},s=(a(480),a(24)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"event-swiper-pagination"},t._l(new Array(t.length),(function(e,i){return a("svg",{key:i,class:[t.activeIdx===i?"active":"","pagination"],attrs:{width:"26",height:"26",viewBox:"0 0 26 26",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.$emit("toggle",i)}}},[a("circle",{ref:"circle",refInFor:!0,staticClass:"circle",attrs:{cx:"13",cy:"13",r:"12",fill:"none","stroke-width":"1","stroke-linecap":"round","stroke-dashoffset":"314"}}),t._v(" "),a("circle",{staticClass:"dot",attrs:{cx:"13",cy:"13",r:"3",fill:"#FFBA00","stroke-linecap":"round"}})])})),0)}),[],!1,null,"bb70f84e",null);e.default=r.exports},558:function(t,e,a){},611:function(t,e,a){"use strict";a(558)},665:function(t,e,a){"use strict";a.r(e);var i=a(450),s=(a(51),a(22),a(466),a(89),a(25)),r=a(108),n=a(444),A=a(489),o={name:"HomeAbout",components:{SectionModule:r.default,Pagination:A.default,More:n.default},inject:["transifyFix"],data:function(){return{activeIdx:0,timer:null,select:"",startSwiper:!1}},computed:{aboutData:function(){return this.$store.state.common.modules.filter((function(t){return"IndexScreenThree"===t.component_name}))[0].detail},activeInfo:function(){return this.Carousel[this.activeIdx]},Carousel:function(){var t=Object(i.a)(this.aboutData.max_carousel);return t.length>1?this.sortByPriority(t):t}},watch:{select:function(t){"right"===t?(this.startSwiper=!0,this.swiper()):(this.startSwiper=!1,clearInterval(this.timer))}},mounted:function(){var t=this;document.addEventListener("visibilitychange",(function(){document.hidden?clearInterval(t.timer):t.startSwiper&&t.swiper()}))},beforeDestroy:function(){clearInterval(this.timer),document.removeEventListener("visibilitychange")},methods:{sortByPriority:function(t){return t.sort(Object(s.d)("priority","des"))},clickDecor:function(t){var e=t.target.classList;""===this.select&&(e.contains("left")?this.select="left":e.contains("right")&&(this.select="right"))},toggle:function(t){clearInterval(this.timer),this.activeIdx=t,this.startSwiper&&this.swiper()},swiper:function(){var t=this,e=this.Carousel.length;this.timer=setInterval((function(){t.activeIdx+1>=e?t.activeIdx=0:t.activeIdx++}),5e3)}}},c=(a(611),a(24)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section-module",{staticClass:"home-about",attrs:{type:"trapezoid"}},[i("section",{staticClass:"home-about-inner",class:t.select},[i("div",{staticClass:"home-about-left left",class:{inactive:"left"!==t.select},on:{click:function(e){t.select="left"}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.aboutData.ff_img_pc,expression:"aboutData.ff_img_pc"}],staticClass:"about-cover cover",attrs:{"data-src":t.aboutData.ff_img_pc,src:a(442),alt:t.aboutData.ff_desc}}),t._v(" "),i("video",{directives:[{name:"show",rawName:"v-show",value:"left"===t.select,expression:"select === 'left'"}],staticClass:"about-video",attrs:{preload:"",playsinline:"",autoplay:"",muted:"",loop:"",poster:t.aboutData.ff_img_pc},domProps:{muted:!0}},[i("source",{attrs:{src:t.aboutData.ff_video,type:"video/mp4"}})]),t._v(" "),i("div",{staticClass:"home-about-layer",class:{right:"right"===t.select}})]),t._v(" "),i("div",{staticClass:"home-about-right right",class:{inactive:"right"!==t.select},on:{click:function(e){t.select="right"}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"right"!==t.select,expression:"select !== 'right'"},{name:"lazy",rawName:"v-lazy",value:t.aboutData.max_img_pc,expression:"aboutData.max_img_pc"}],staticClass:"about-cover cover",attrs:{"data-src":t.aboutData.max_img_pc,src:a(442),alt:t.aboutData.max_desc}}),t._v(" "),t._l(t.Carousel,(function(e,s){return i("img",{directives:[{name:"show",rawName:"v-show",value:"right"===t.select,expression:"select === 'right'"},{name:"lazy",rawName:"v-lazy",value:e.image_pc,expression:"item.image_pc"}],key:s,class:["about-cover","swiper-cover",{active:s===t.activeIdx}],attrs:{"data-src":e.image_pc,src:a(442),alt:e.title}})})),t._v(" "),i("div",{staticClass:"home-about-layer",class:{left:"left"===t.select}})],2)]),t._v(" "),i("section",{directives:[{name:"show",rawName:"v-show",value:""!==t.select,expression:"select !== ''"}],staticClass:"home-about-info"},[i("div",{staticClass:"home-about-info-inner"},[i("p",{staticClass:"home-about-desc"},[t._v("\n        "+t._s("right"===t.select?t.activeInfo.descrption:t.aboutData.ff_desc)+"\n      ")]),t._v(" "),t.Carousel.length>1?[i("Pagination",{directives:[{name:"show",rawName:"v-show",value:"right"===t.select,expression:"select === 'right'"}],staticClass:"about-info-pagination",attrs:{length:t.Carousel.length,"active-idx":t.activeIdx,duration:5e3,start:t.startSwiper},on:{toggle:t.toggle}})]:t._e()],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"right"===t.select&&t.Carousel.length>1,expression:"select === 'right' && Carousel.length > 1"}],staticClass:"about-swiper"},t._l(t.Carousel.slice(0,3),(function(e,s){return i("div",{key:s,staticClass:"about-swiper-slide",class:s===t.activeIdx?"active":"",on:{click:function(e){return t.toggle(s)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image_pc,expression:"item.image_pc"}],staticClass:"about-image",attrs:{"data-src":e.image_pc,src:a(442),alt:e.title}})])})),0),t._v(" "),i("more",{directives:[{name:"show",rawName:"v-show",value:"left"===t.select,expression:"select === 'left'"}],staticClass:"toggle",attrs:{type:"toggle"},on:{click:function(e){t.select="right"}}},[t._v(" "+t._s(t.transifyFix("FO_HOME_EXPLOREMAX"))+"  ")])],1),t._v(" "),i("more",{directives:[{name:"show",rawName:"v-show",value:"right"===t.select,expression:"select === 'right'"}],staticClass:"toggle ff-toggle",attrs:{type:"toggle"},on:{click:function(e){t.select="left"}}},[t._v(" "+t._s(t.transifyFix("FO_HOME_EXPLOREFF"))+"  ")]),t._v(" "),i("div",{attrs:{clas:"home-about-decoration"},on:{click:function(e){return t.clickDecor(e)}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:"right"!==t.select,expression:"select !== 'right'"}],staticClass:"home-about-left-info about-logo ff left",class:{inactive:""===t.select},attrs:{src:a(204),alt:"FreeFire"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"right"===t.select,expression:"select === 'right'"}],staticClass:"home-about-left-info about-logo ffmax",attrs:{src:a(288),alt:"FreeFire Max"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:""===t.select,expression:"select === ''"}],staticClass:"home-about-right-info about-logo ffmax right",class:{inactive:""===t.select},attrs:{src:a(288),alt:"FreeFire Max"}}),t._v(" "),i("div",{staticClass:"home-about-border-left left",class:""!==t.select?"active":"inactive"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:""===t.select,expression:"select === ''"}],staticClass:"home-about-border-right right",class:""!==t.select?"active":"inactive"}),t._v(" "),i("div",{staticClass:"home-about-border left",class:""!==t.select?"active":"inactive"})])],1)}),[],!1,null,"4e0ea0e4",null);e.default=l.exports;installComponents(l,{Section:a(108).default,More:a(444).default})}}]);