webpackJsonp([4],{"+f7m":function(e,t){e.exports={name:"@bootstrap-vue/table",version:"1.0.0",meta:{title:"Table",component:"bTable",events:[{event:"row-clicked",description:"Emitted when a row is clicked.",args:[{arg:"item",description:"Item data of the row being clicked."},{arg:"index",description:"Index of the row being clicked."},{arg:"event",description:"Native event object."}]},{event:"row-dblclicked",description:"Emitted when a row is double clicked.",args:[{arg:"item",description:"Item data of the row being double clicked."},{arg:"index",description:"Index of the row being double clicked."},{arg:"event",description:"Native event object."}]},{event:"row-hovered",description:"Emitted when a row is hovered.",args:[{arg:"item",description:"Item data of the row being hovered."},{arg:"index",description:"Index of the row being hovered."},{arg:"event",description:"Native event object."}]},{event:"head-clicked",description:"Emitted when a header or footer cell is clicked.",args:[{arg:"key",description:"Column key clicked (field name)."},{arg:"field",description:"Field definition object."},{arg:"event",description:"Native event object."}]},{event:"sort-changed",description:"Emitted when the sorting on the table has changed",args:[{arg:"ctx",description:"Table state context object. See docs."}]},{event:"context-changed",description:"Emitted whenever the table state context has changed",args:[{arg:"ctx",description:"Table state context object. See docs."}]},{event:"filtered",description:"Emitted when local filtering causes a change in the number of items.",args:[{arg:"filteredItems",description:"Array of items after filtering (before local pagination occurs)."}]},{event:"refreshed",description:"Emitted when the items provider function has returned data."}],slots:[{name:"table-caption",description:"Content to display in the table's caption element"},{name:"table-colgroup",description:"Slot to place custom colgroup and col elements"},{name:"[field]",description:"Scoped slot for custom data rendering of field data. See docs for scoped data"},{name:"HEAD_[field]",description:"Scoped slot for custom rendering of field header. See docs for scoped header"},{name:"FOOT_[field]",description:"Scoped slot for custom rendering of field footer. See docs for scoped footer"},{name:"row-details",description:"Scoped slot for optional rendering additional record details. See docs for Row details support"},{name:"empty",description:"Content to display when no items are present in the `items` array"},{name:"emptyfiltered",description:"Content to display when no items are present in the filtered `items` array"},{name:"top-row",description:"Fixed top row slot for user supplied TD cells. Scoped data: columns - number of TDs to provide, fields - fields object"},{name:"bottom-row",description:"Fixed bottom row slot for user supplied TD cells. Scoped data: columns - number of TDs to provide, fields - fields object"}]}}},"/RSe":function(e,t){e.exports={name:"@bootstrap-vue/card",version:"1.0.0",meta:{title:"Card",component:"bCard",components:["bCardHeader","bCardFooter","bCardImg","bCardGroup"],slots:[{name:"header",description:"For custom rendering of header content"},{name:"footer",description:"For custom rendering of footer content"}]}}},"/h/w":function(e,t){e.exports={name:"@bootstrap-vue/scrollspy",version:"0.0.0",meta:{title:"Scrollspy",directive:"vBScrollspy"}}},"0Hg4":function(e,t,o){function n(e){return o(s(e))}function s(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./color-variants/meta.json":"VfcC","./images/meta.json":"cZRA","./router-links/meta.json":"c6PT","./size-props/meta.json":"80JZ","./spacing-classes/meta.json":"nEqD","./starter-templates/meta.json":"xY7C"};n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="0Hg4"},"2oQI":function(e,t){e.exports={name:"@bootstrap-vue/nav",version:"1.0.0",meta:{title:"Nav",component:"bNav",components:["bNavItem","bNavText","bNavForm","bNavItemDropdown"],plugins:["Dropdown"]}}},"5RXe":function(e,t){e.exports={name:"@bootstrap-vue/popover",version:"0.0.0",meta:{title:"Popover",directive:"vBPopover"}}},"5qSi":function(e,t){e.exports={name:"@bootstrap-vue/jumbotron",version:"1.0.0",meta:{title:"Jumbotron",component:"bJumbotron",slots:[{name:"header",description:"Slot for custom header content. Placed inside 'header-tag'"},{name:"lead",description:"For custom rendering of lead text content. Placed inside 'lead-tag'"}]}}},"72xY":function(e,t){e.exports={name:"@bootstrap-vue/form-file",version:"1.0.0",meta:{title:"Form File",component:"bFormFile",events:[{event:"change",description:"original native change event on input",args:[{arg:"event"}]},{event:"input",description:"[see above docs]"}]}}},"7TCL":function(e,t,o){"use strict";function n(e){o("E/zi")}Object.defineProperty(t,"__esModule",{value:!0});var s=o("FbN/"),a=o("wyAg"),r=o("VU/8"),i=n,c=r(s.a,a.a,!1,i,"data-v-73c0f82b",null);t.default=c.exports},"7YgM":function(e,t){e.exports={name:"bootstrap-vue",version:"1.1.0",description:"Quickly integrate Bootstrap 4 components with Vue.js",main:"dist/bootstrap-vue.common.js",web:"dist/bootstrap-vue.js",module:"es/index.js","jsnext:main":"es/index.js",style:"dist/bootstrap-vue.css",license:"MIT",homepage:"https://bootstrap-vue.github.io",contributors:[{name:"Pooya Parsa",url:"https://github.com/pi0"},{name:"Troy Morehouse",url:"https://github.com/tmorehouse"},{name:"SirLamer",url:"https://github.com/SirLamer"},{name:"Vitaly Mosin",url:"https://github.com/mosinve"},{name:"vizo",url:"https://github.com/vizo"},{name:"Alex Regan",url:"https://github.com/alexsasharegan"}],bugs:{url:"https://github.com/bootstrap-vue/bootstrap-vue/issues"},repository:{type:"git",url:"git+https://github.com/bootstrap-vue/bootstrap-vue.git"},files:["src","dist","nuxt","es"],scripts:{build:"build/build",watch:"rollup -c build/rollup.config.js --watch","docs-dev":"nuxt dev -c docs/nuxt.config.js","docs-gen":"nuxt generate -c docs/nuxt.config.js","docs-publish":"gh-pages -t -d docs-dist -b master -r git@github.com:bootstrap-vue/bootstrap-vue.github.io.git",test:"yarn lint && NODE_ENV=test jest",lint:"eslint src",release:"npm run build && npm run test && standard-version",postinstall:"opencollective postinstall || exit 0"},peerDependencies:{vue:"^2.4.2"},dependencies:{"lodash.startcase":"^4.4.0",opencollective:"^1.0.3","popper.js":"^1.12.9","vue-functional-data-merge":"^1.0.6"},devDependencies:{"@nuxtjs/google-analytics":"^2.0.1","@nuxtjs/pwa":"^2.0.0","babel-cli":"^6.26.0","babel-plugin-external-helpers":"^6.22.0","babel-plugin-istanbul":"^4.1.5",bootstrap:"^4.0.0-beta.2","clean-css":"^4.1.9",codecov:"^3.0.0",codemirror:"^5.31.0","cross-env":"^5.1.0",eslint:"^4.11.0","eslint-config-standard":"^10.2.1","eslint-plugin-import":"^2.8.0","eslint-plugin-jest":"^21.3.2","eslint-plugin-node":"^5.2.1","eslint-plugin-promise":"^3.6.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^3.14.0","gh-pages":"^1.1.0","highlight-loader":"^0.7.2",highlightjs:"^9.8.0","html-loader":"^0.5.1",jest:"^21.2.1",lodash:"^4.17.4","markdown-loader":"^2.0.1",marked:"^0.3.6",nuxt:"1.0.0-rc11",rollup:"^0.51.7","rollup-plugin-babel":"^3.0.2","rollup-plugin-commonjs":"^8.2.6","rollup-plugin-node-resolve":"^3.0.0","rollup-plugin-vue":"^2.5.2","rollup-watch":"^4.3.1","standard-version":"^4.2.0","uglify-es":"^3.1.9","vue-jest":"^1.0.3","vue-test-utils":"^1.0.0-beta.5"},jest:{testRegex:"spec.js$",moduleFileExtensions:["js","vue"],transform:{"^.+\\.js$":"babel-jest",".*\\.(vue)$":"vue-jest"},coverageDirectory:"./coverage/",collectCoverage:!0,mapCoverage:!0},keywords:["Bootstrap","Bootstrap 4","Bootstrap for Vue","SSR","Web","Components","Directives","Polymer","Vue","VueJS","Vue2","WebComponents","jquery","Popper.js","vue-strap","vueify","vuestrap","CSS","Flexbox","Alert","Breadcrumb","Button","Checkbox","Radio","Card","Carousel","Slider","Collapse","Dropdown","Select","Option","Input","Jumbotron","List","Nav","Modal","Upload","Dropzone","Navbar","Pagination","Popover","Progress","Tab","Table","Tag","Tooltip"],collective:{type:"opencollective",url:"https://opencollective.com/bootstrap-vue",logo:"https://opencollective.com/opencollective/logo.txt"}}},"80JZ":function(e,t){e.exports={title:"Size props and classes",slug:"size-props"}},"8bom":function(e,t){e.exports={name:"@bootstrap-vue/tabs",version:"1.0.0",meta:{title:"Tabs",component:"bTabs",components:["bTab"],events:[{event:"input",description:"Emits when a tab is shown. USed to update the v-model",args:[{arg:"tab_index"}]}],slots:[{name:"tabs",description:"Additional tabs without content"},{name:"empty",description:"Renders this slot if no tabs are present"}]}}},Av5r:function(e,t){e.exports={name:"@bootstrap-vue/layout",version:"1.0.0",meta:{title:"Layout and Grid System",slug:"layout",components:["bContainer","bRow","bCol","bFormRow"]}}},BGcK:function(e,t){e.exports={name:"@bootstrap-vue/button-toolbar",version:"1.0.0",meta:{title:"Button toolbar",component:"bButtonToolbar"}}},CrPL:function(e,t){e.exports={name:"@bootstrap-vue/tooltip",version:"1.0.0",meta:{title:"Tooltip",component:"bTooltip",events:[{event:"show",description:"When tooltip is about to be shown. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel show."}]},{event:"shown",description:"When tooltip is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"hide",description:"When tooltip is about to be hidden. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel hide."}]},{event:"hidden",description:"When tooltip is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::tooltip::show",description:"Emitted on $root when tooltip is about to be shown. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel show."}]},{event:"bv::tooltip::shown",description:"Emitted on $root when tooltip is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::tooltip::hide",description:"Emitted on $root when tooltip is about to be hidden. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel hide."}]},{event:"bv::tooltip::hidden",description:"Emitted on $root when tooltip is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]}]}}},DqH2:function(e,t){e.exports={title:"Contributing"}},"E/zi":function(e,t,o){var n=o("ruzy");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("rjj0")("9fc5e414",n,!0)},"FbN/":function(e,t,o){"use strict";var n=o("rzRs");t.a={computed:{version:function(){return n.f}}}},G0wi:function(e,t){e.exports='<p align=center> <a href=https://bootstrap-vue.js.org> <img src=https://github.com/bootstrap-vue/bootstrap-vue/raw/master/banner.png width=300px> </a> <br> Quickly integrate <a href=https://getbootstrap.com/docs/4.0>Bootstrap 4</a> Components with <a href=https://vuejs.org>Vue.js</a> <br> <br> <a href=https://getbootstrap.com/docs/4.0> <img alt="" src="https://img.shields.io/badge/bootstrap-4.0.0--beta-800080.svg?style=flat-square"> </a> <a href=https://vuejs.org> <img alt="" src="https://img.shields.io/badge/vue.js-2.4.x-green.svg?style=flat-square"> </a> <a href=https://github.com/bootstrap-vue/bootstrap-vue> <img alt="" src="https://david-dm.org/bootstrap-vue/bootstrap-vue.svg?style=flat-square"> </a> <a href="http://packagequality.com/#?package=bootstrap-vue"> <img alt="package quality" src="http://npm.packagequality.com/shield/bootstrap-vue.png?style=flat-square"> </a> <br> <a href=https://circleci.com/gh/bootstrap-vue/bootstrap-vue> <img alt="" src="https://img.shields.io/circleci/project/github/bootstrap-vue/bootstrap-vue/master.svg?style=flat-square"> </a> <a href=https://www.npmjs.com/package/bootstrap-vue> <img alt="" src="https://img.shields.io/npm/dt/bootstrap-vue.svg?style=flat-square"> </a> <a href=https://www.npmjs.com/package/bootstrap-vue> <img alt="" src="https://img.shields.io/npm/dm/bootstrap-vue.svg?style=flat-square"> </a> <a href=https://www.npmjs.com/package/bootstrap-vue> <img alt="" src="https://img.shields.io/npm/v/bootstrap-vue.svg?style=flat-square"> </a> <br> <a href=#backers> <img alt="" src="https://opencollective.com/bootstrap-vue/backers/badge.svg?style=flat-square"> </a> <a href=#sponsors> <img alt="" src="https://opencollective.com/bootstrap-vue/sponsors/badge.svg?style=flat-square"> </a> </p> <p>If you have discovered a &#x1F41C; or have a feature suggestion, feel free to create an issue on Github.</p> <p>This branch is for <a href=https://getbootstrap.com/docs/4.0>Bootstrap4 Beta</a>. If you are looking for old alpha 6 please head to <a href=https://github.com/bootstrap-vue/bootstrap-vue/tree/alpha>alpha</a> branch. alpha docs are available <a href=https://bootstrap-vue-alpha.surge.sh>here</a>.</p> <h1 id=links>Links</h1> <ul> <li>&#x1F4D8; <a href=https://bootstrap-vue.js.org>Documentation</a></li> <li>&#x1F528; <a href=https://bootstrap-vue.js.org/docs/misc/changelog>Release Notes</a></li> <li>&#x1F4AC; <a href=https://bootstrap-vue.now.sh>Slack Community</a></li> <li>&#x1F426; <a href=https://twitter.com/BootstrapVue>Twitter</a></li> </ul> <h2 id=contributors>Contributors</h2> <p>This project exists thanks to all the people who contribute. <a href=CONTRIBUTING.md>[Contribute]</a>. <a href=https://github.com/bootstrap-vue/bootstrap-vue/graphs/contributors><img src="https://opencollective.com/bootstrap-vue/contributors.svg?width=890"></a></p> <h2 id=backers>Backers</h2> <p>Thank you to all our backers! &#x1F64F; [<a href=https://opencollective.com/bootstrap-vue#backer>Become a backer</a>]</p> <p><a href=https://opencollective.com/bootstrap-vue#backers target=_blank><img src="https://opencollective.com/bootstrap-vue/backers.svg?width=890"></a></p> <h2 id=sponsors>Sponsors</h2> <p>Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [<a href=https://opencollective.com/bootstrap-vue#sponsor>Become a sponsor</a>]</p> <p><a href=https://opencollective.com/bootstrap-vue/sponsor/0/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/0/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/1/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/1/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/2/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/2/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/3/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/3/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/4/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/4/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/5/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/5/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/6/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/6/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/7/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/7/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/8/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/8/avatar.svg></a> <a href=https://opencollective.com/bootstrap-vue/sponsor/9/website target=_blank><img src=https://opencollective.com/bootstrap-vue/sponsor/9/avatar.svg></a></p> <h1 id=license>License</h1> <p>Released under The MIT <a href=./LICENSE>License</a>. Copyright (c) BootstrapVue.</p> <p><a href="https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fbootstrap-vue%2Fbootstrap-vue?ref=badge_small"><img src="https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fbootstrap-vue%2Fbootstrap-vue.svg?type=small" alt="FOSSA Status"></a></p> '},GUC9:function(e,t){e.exports={name:"@bootstrap-vue/progress",version:"1.0.0",meta:{title:"Progress",component:"bProgress",components:["bProgressBar"]}}},Gfqs:function(e,t,o){function n(e){return o(s(e))}function s(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./alert/package.json":"Wkvv","./badge/package.json":"lkd2","./breadcrumb/package.json":"edhI","./button-group/package.json":"UlFk","./button-toolbar/package.json":"BGcK","./button/package.json":"LH9z","./card/package.json":"/RSe","./carousel/package.json":"IZV0","./collapse/package.json":"drpw","./dropdown/package.json":"xDVA","./embed/package.json":"s26O","./form-checkbox/package.json":"P5SY","./form-file/package.json":"72xY","./form-group/package.json":"d3hi","./form-input/package.json":"iRKB","./form-radio/package.json":"KBj4","./form-select/package.json":"V8qu","./form-textarea/package.json":"HRPh","./form/package.json":"aBNC","./image/package.json":"mzua","./input-group/package.json":"LfL0","./jumbotron/package.json":"5qSi","./layout/package.json":"Av5r","./link/package.json":"emmp","./list-group/package.json":"KAUE","./media/package.json":"Up1I","./modal/package.json":"hb+f","./nav/package.json":"2oQI","./navbar/package.json":"HkM+","./pagination-nav/package.json":"i4Zx","./pagination/package.json":"RqpV","./popover/package.json":"Ovir","./progress/package.json":"GUC9","./table/package.json":"+f7m","./tabs/package.json":"8bom","./tooltip/package.json":"CrPL"};n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="Gfqs"},HRPh:function(e,t){e.exports={name:"@bootstrap-vue/form-textarea",version:"1.0.0",meta:{title:"Form Textarea",component:"bFormTextarea",events:[{event:"input",description:"Emitted when the textarea receives input from user.",args:[{arg:"value",description:"current value of the textarea"}]}]}}},"HkM+":function(e,t){e.exports={name:"@bootstrap-vue/navbar",version:"1.0.0",meta:{title:"Navbar",breaking:!0,component:"bNavbar",components:["bNavbarNav","bNavbarBrand","bNavbarToggle"],plugins:["Nav","Dropdown","Collapse"]}}},IZV0:function(e,t){e.exports={name:"@bootstrap-vue/carousel",version:"1.0.0",meta:{title:"Carousel",component:"bCarousel",components:["bCarouselSlide"],events:[{event:"sliding-start",description:"Emitted when transitioning to a new slide has started.",args:[{arg:"slide",description:"Slide number that is being slid to."}]},{event:"sliding-end",description:"Emitted when transitioning to a new slide has ended.",args:[{arg:"slide",description:"Slide number that was slid to."}]}]}}},JMyG:function(e,t,o){function n(e){return o(s(e))}function s(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./popover/package.json":"5RXe","./scrollspy/package.json":"/h/w","./tooltip/package.json":"zRSF"};n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="JMyG"},KAUE:function(e,t){e.exports={name:"@bootstrap-vue/list-group",version:"1.0.0",meta:{title:"List group",component:"bListGroup",components:["bListGroupItem"]}}},KBj4:function(e,t){e.exports={name:"@bootstrap-vue/form-radio",version:"1.0.0",meta:{title:"Form Radio",component:"bFormRadioGroup",components:["bFormRadio"],events:[{event:"input",description:"Emitted when the selected value is changed",args:[{arg:"checked",description:"current selected Value of radio group."}]},{event:"change",description:"Emitted when selected value is changed due to user interaction",args:[{arg:"checked",description:"current selected Value of radio group."}]}]}}},LH9z:function(e,t){e.exports={name:"@bootstrap-vue/button",version:"1.0.0",meta:{title:"Button",component:"bButton",components:["bButtonClose"],events:[{event:"click",description:"when clicked on button"}]}}},LfL0:function(e,t){e.exports={name:"@bootstrap-vue/input-group",version:"1.0.0",meta:{title:"Input Group",component:"bInputGroup",components:["bInputGroupAddon","bInputGroupButton"],slots:[{name:"left",description:"Left attachment"},{name:"right",description:"Right attachment"}]}}},OMmf:function(e,t,o){function n(e){return o(s(e))}function s(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./changelog/meta.json":"tF3C","./contributing/meta.json":"DqH2"};n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="OMmf"},Ovir:function(e,t){e.exports={name:"@bootstrap-vue/popover",version:"1.0.0",meta:{title:"Popover",component:"bPopover",events:[{event:"show",description:"When popover is about to be shown. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel show."}]},{event:"shown",description:"When popover is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"hide",description:"When popover is about to be hidden. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel hide."}]},{event:"hidden",description:"When popover is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::popover::show",description:"Emitted on $root when popover is about to be shown. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel show."}]},{event:"bv::popover::shown",description:"Emitted on $root when popover is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::popover::hide",description:"Emitted on $root when popover is about to be hidden. Cancelable",args:[{arg:"bvEvent",description:"bvEvent object. Call bvEvent.preventDefault() to cancel hide."}]},{event:"bv::popover::hidden",description:"Emitted on $root when popover is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]}],slots:[{name:"title",description:"Optional slot for title (html supported)"}]}}},P5SY:function(e,t){e.exports={name:"@bootstrap-vue/form-checkbox",version:"1.0.0",meta:{title:"Form Checkbox",component:"bFormCheckboxGroup",components:["bFormCheckbox"],events:[{event:"input",description:"Emitted when the selected value(s) is changed",args:[{arg:"checked",description:"Value of checkbox(es). When bound to multiple checkboxes, value will be an array."}]},{event:"change",description:"Emitted when selected value(s) is changed due to user interaction",args:[{arg:"checked",description:"Value of checkbox(es). When bound to multiple checkboxes, value will be an array."}]}]}}},RqpV:function(e,t){e.exports={name:"@bootstrap-vue/pagination",version:"1.0.0",meta:{title:"Pagination",component:"bPagination",events:[{event:"input",description:"when page changes via user interaction or programmatically",args:[{arg:"page",description:"Selected page number (starting with 1)"}]},{event:"change",description:"when page changes via user interaction",args:[{arg:"page",description:"Selected page number (starting with 1)"}]}]}}},UlFk:function(e,t){e.exports={name:"@bootstrap-vue/button-group",version:"1.0.0",meta:{title:"Button group",component:"bButtonGroup"}}},Up1I:function(e,t){e.exports={name:"@bootstrap-vue/media",version:"1.0.0",meta:{title:"Media",component:"bMedia",components:["bMediaAside","bMediaBody"],slots:[{name:"aside",description:"Media Aside"}]}}},V8qu:function(e,t){e.exports={name:"@bootstrap-vue/form-select",version:"1.0.0",meta:{title:"Form Select",component:"bFormSelect",events:[{event:"input",description:"Emitted with the select value changes",args:[{arg:"value",desccription:"current selected value of the select."}]},{event:"change",description:"Emitted with the select value changes via user interaction",args:[{arg:"value",desccription:"current selected value of the select."}]}]}}},VfcC:function(e,t){e.exports={title:"Color Variants"}},VtUA:function(e,t,o){"use strict";function n(e){return e.replace(/<[^>]+>/g,"")}function s(e){return e.replace(/"/g,"")}function a(e){if(!e)return{};var t=[],o="",a="",r=e.match(/<h1 id=([^> ]+)>(.+?)<\/h1>/)||[];r&&(o="#"+s(r[1]),a=n(r[2]));var i=e.match(/<h([23]) id=[^> ]+>.+?<\/h\1>/g)||[],c=0;return i.forEach(function(e){var o=e.match(/^<(h[23]) id=([^> ]+)>(.+?)<\/\1>$/);if(o){var a=o[1],r="#"+s(o[2]),i=n(o[3]);"h2"===a?(t.push({href:r,label:i}),c=t.length):"h3"===a&&(t[c]=t[c]||[],t[c].push({href:r,label:i}))}}),{toc:t,title:a,top:o}}function r(e){var t={};return e.keys().map(e).map(function(e){return e.meta||e}).map(function(e){return d()({slug:e.slug||(e.title||"").replace(" ","-").toLowerCase()},e)}).forEach(function(e){t[e.slug]=e}),t}function i(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t)}function c(e,t,o,n){var s=e.scrollTop,a=t-s,r=0;!function t(){r+=20;var c=i(r,s,a,o);e.scrollTop=Math.round(c),r<o?setTimeout(t,20):n&&"function"==typeof n&&n()}()}function p(e){if(!e.getClientRects().length)return 0;var t=e.getBoundingClientRect(),o=e.ownerDocument.defaultView;return t.top+o.pageYOffset}t.b=a,t.a=r,t.d=c,t.c=p;var l=o("woOf"),d=o.n(l)},Wkvv:function(e,t){e.exports={name:"@bootstrap-vue/alert",version:"1.0.0",meta:{title:"Alert",component:"bAlert",events:[{event:"dismissed",description:"Alert dismissed"},{event:"dismiss-count-down",description:"When dismissAfterSeconds enabled, this event emits every second on countdown.",args:[{arg:"dismissCountDown",description:"Time remaining to dismissed"}]}],slots:[{name:"dismiss",description:"Content for the dismiss button."}]}}},aBNC:function(e,t){e.exports={name:"@bootstrap-vue/form",version:"1.0.0",meta:{title:"Form",slug:"form",component:"bForm",components:["bFormText","bFormInvalidFeedback","bFormValidFeedback","bFormRow"],events:[{event:"submit",description:"Emitted when the form is being submitted",args:[{arg:"event",description:"Native submit event."}]}]}}},c6PT:function(e,t){e.exports={title:"Router support",slug:"router-links"}},cZRA:function(e,t){e.exports={title:"Component img src resolving",slug:"images"}},d3hi:function(e,t){e.exports={name:"@bootstrap-vue/form-group",version:"1.0.0",meta:{title:"Form Group",component:"bFormGroup",slots:[{name:"label",description:"Content to place inside the <label> element."},{name:"description",description:"Content to place in the description area."},{name:"invalid-feedback",description:"Content to place in the invalid feedback area"},{name:"valid-feedback",description:"Content to place in the valid feedback area"},{name:"feedback",description:"Content to place in the invalid feedback area. Deprecated: use 'invalid-feedback' slot instead"}]}}},drpw:function(e,t){e.exports={name:"@bootstrap-vue/collapse",version:"1.0.0",meta:{title:"Collapse",component:"bCollapse",directives:["vBToggle"],events:[{event:"show",description:"emitted when collaspe has started to open"},{event:"shown",description:"emitted when collaspe has finised opening"},{event:"hide",description:"emitted when collaspe has started to close"},{event:"hidden",description:"emitted when collaspe has finished closing"},{event:"bv::toggle::collapse",description:"toggles visible state of collaspe when this event is emitted on $root",args:[{arg:"id",description:"collapse id to toggle"}]}]}}},edhI:function(e,t){e.exports={name:"@bootstrap-vue/breadcrumb",version:"1.0.0",meta:{title:"Breadcrumb",component:"bBreadcrumb",components:["bBreadcrumbItem","bBreadcrumbLink"],events:[]}}},emmp:function(e,t){e.exports={name:"@bootstrap-vue/link",version:"1.0.0",meta:{title:"Link",component:"bLink",events:[{event:"click",description:"when link clicked"}]}}},eooK:function(e,t,o){e.exports=o.p+"img/icon.f0a8c9e.png"},"hb+f":function(e,t){e.exports={name:"@bootstrap-vue/modal",version:"1.0.0",meta:{title:"Modal",component:"bModal",directives:["vBModal"],events:[{event:"change",description:"new modal visibility state",args:[{arg:"is_visible",description:"true if modal is visible, false otherwise"}]},{event:"show",description:"always emits just before modal is shown. cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel show"}]},{event:"shown",description:"always emits when modal is shown",args:[{arg:"bvEvt",description:"BvEvent object"}]},{event:"hide",description:"always emits just before modal has hidden",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]},{event:"hidden",description:"always emits after modal is hidden",args:[{arg:"bvEvt",description:"BvEvent object"}]},{event:"ok",description:"when default OK button pressed, just before modal has hidden. Cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]},{event:"cancel",description:"when default CANCEL button pressed, just before modal has hidden. Cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]}],slots:[{name:"modal-header",description:"Entire modal header container contents. Also removes the top right X close button."},{name:"modal-title",description:"Modal title. If modal-header slot is used, this slot will not be shown."},{name:"modal-header-close",description:"Content of Modal header close button. If modal-header slot is used, this slot will not be shown."},{name:"modal-footer",description:"Modal footer content. Also removes default OK and CANCEL buttons."},{name:"modal-ok",description:"Modal OK button content."},{name:"modal-cancel",description:"Modal CANCEL button content."}]}}},i4Zx:function(e,t){e.exports={name:"@bootstrapvue/pagination",version:"1.0.0",meta:{title:"Pagination Nav",component:"bPaginationNav"}}},iRKB:function(e,t){e.exports={name:"@bootstrap-vue/form-input",version:"1.0.0",meta:{title:"Form Input",component:"bFormInput",events:[{event:"input",description:"Emitted when the input receives input from user.",args:[{arg:"value",description:"current value of the input"}]},{event:"change",description:"Emitted when the input changes.",args:[{arg:"value",description:"current value of the input"}]}]}}},lkd2:function(e,t){e.exports={name:"@bootstrap-vue/badge",version:"1.0.0",meta:{title:"Badge",component:"bBadge"}}},mzua:function(e,t){e.exports={name:"@bootstrap-vue/image",version:"1.0.0",meta:{title:"Image",component:"bImg",components:["bImgLazy"]}}},nEqD:function(e,t){e.exports={title:"Spacing classes"}},ruzy:function(e,t,o){t=e.exports=o("FZ+f")(!0),t.push([e.i,".version a[data-v-73c0f82b]{color:#fff}#logo[data-v-73c0f82b]{-webkit-animation:flip-data-v-73c0f82b 1s;animation:flip-data-v-73c0f82b 1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@-webkit-keyframes flip-data-v-73c0f82b{0%{opacity:.5;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}to{opacity:1;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}@keyframes flip-data-v-73c0f82b{0%{opacity:.5;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}to{opacity:1;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}","",{version:3,sources:["/usr/src/app/docs/pages/index.vue"],names:[],mappings:"AACA,4BACE,UAAa,CACd,AACD,uBACE,0CAA2C,AACnC,kCAAmC,AAC3C,oCAAqC,AAC7B,2BAA6B,CACtC,AACD,wCACA,GACI,WAAY,AACZ,kCAAmC,AAC3B,yBAA2B,CACtC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA,AACD,gCACA,GACI,WAAY,AACZ,kCAAmC,AAC3B,yBAA2B,CACtC,AACD,GACI,UAAW,AACX,gCAAiC,AACzB,uBAAyB,CACpC,CACA",file:"index.vue",sourcesContent:["\n.version a[data-v-73c0f82b] {\n  color: white;\n}\n#logo[data-v-73c0f82b] {\n  -webkit-animation: flip-data-v-73c0f82b 1s;\n          animation: flip-data-v-73c0f82b 1s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n@-webkit-keyframes flip-data-v-73c0f82b {\n0% {\n    opacity: .5;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n}\n@keyframes flip-data-v-73c0f82b {\n0% {\n    opacity: .5;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n}\n"],sourceRoot:""}])},rzRs:function(e,t,o){"use strict";o.d(t,"a",function(){return i}),o.d(t,"b",function(){return p}),o.d(t,"e",function(){return d}),o.d(t,"c",function(){return u}),o.d(t,"d",function(){return m});var n=o("G0wi"),s=(o.n(n),o("VtUA")),a=o("7YgM");o.n(a);o.o(a,"version")&&o.d(t,"f",function(){return a.version});var r=o("Gfqs"),i=Object(s.a)(r),c=o("JMyG"),p=Object(s.a)(c),l=o("0Hg4"),d=Object(s.a)(l),v=o("OMmf"),u=Object(s.a)(v),m=[{title:"Getting started",base:""},{title:"Components",base:"components/",pages:i},{title:"Directives",base:"directives/",pages:p},{title:"Reference",base:"reference/",pages:d},{title:"Misc",base:"misc/",pages:u}]},s26O:function(e,t){e.exports={name:"@bootstrap-vue/embed",version:"1.0.0",meta:{title:"Embed",component:"bEmbed"}}},tF3C:function(e,t){e.exports={title:"ChangeLog"}},wyAg:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("main",{staticClass:"bd-masthead",attrs:{id:"content",role:"main"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row align-items-center"},[e._m(0),o("div",{staticClass:"col-md-6 order-md-1 text-center text-md-left pr-md-5"},[o("h1",{staticClass:"mb-3 bd-text-purple-bright"},[e._v("Bootstrap + Vue")]),o("p",{staticClass:"lead"},[e._v("\n          Build responsive, mobile-first projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap V4.\n        ")]),e._m(1),e._m(2),e._m(3),o("div",{staticClass:"d-flex flex-column flex-md-row lead mb-3"},[o("b-btn",{staticClass:"mb-3 mb-md-0 mr-md-3",attrs:{to:"/docs",variant:"bd-purple",size:"lg"}},[e._v("Get started")]),o("b-btn",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue",variant:"outline-secondary",size:"lg",target:"_blank"}},[e._v("Github")])],1),o("b-link",{staticClass:"text-muted mb-0",attrs:{to:"/docs/misc/changelog"}},[e._v("\n          Currently v"+e._s(e.version)+"\n        ")])],1)])])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-6 mx-auto col-md-6 order-md-2"},[n("img",{staticClass:"img-fluid mx-auto d-block mb-3 mb-md-0",attrs:{src:o("eooK"),alt:"Logo",id:"logo"}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"lead mb-3"},[o("span",{staticClass:"bd-text-purple-bright"},[e._v("Bootstrap-Vue")]),e._v(" provides one of the most comprehensive implementations\n           of "),o("span",{staticClass:"bd-text-purple-bright"},[e._v("Bootstrap V4")]),e._v(" components and grid system available for Vue.js 2.4+,\n           complete with extensive and automated WAI-ARIA accessibility markup.\n        ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"mb-2 text-muted"},[o("a",{attrs:{href:"https://getbootstrap.com/docs/4.0"}},[e._v("Bootstrap 4")]),e._v(" is the world's most popular framework for building responsive, mobile-first sites.\n        ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"mb-4 text-muted"},[o("a",{attrs:{href:"https://vuejs.org"}},[e._v(" Vue.js")]),e._v(" (pronounced /vjuË, like view) is a progressive framework for building user interfaces.\n        ")])}],a={render:n,staticRenderFns:s};t.a=a},xDVA:function(e,t){e.exports={name:"@bootstrap-vue/dropdown",version:"1.0.0",meta:{title:"Dropdown",component:"bDropdown",components:["bDropdownItem","bDropdownItemButton","bDropdownHeader","bDropdownDivider"],events:[{event:"shown",description:"Emitted When dropdown is shown"},{event:"hidden",description:"Emitted When dropdown is hidden"},{event:"click",description:"Emitted when split button clicked in split mode."}],slots:[{name:"button-content",description:"Can be used to implement custom text with icons and more styling"},{name:"text",description:"Deprecated. please use 'button-content' slot instead."}]}}},xY7C:function(e,t){e.exports={title:"Starter Templates"}},zRSF:function(e,t){e.exports={name:"@bootstrap-vue/tooltip",version:"0.0.0",meta:{title:"Tooltip",directive:"vBTooltip"}}}});
//# sourceMappingURL=index.9bde670dd8c24b6670f4.js.map