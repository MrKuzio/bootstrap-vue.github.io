webpackJsonp([3],{"+f7m":function(e,t){e.exports={name:"@bootstrap-vue/table",version:"1.0.0",meta:{title:"Table",component:"bTable",events:[{event:"row-clicked",description:"Emitted when a row is clicked.",args:[{arg:"item",description:"Item data of the row being clicked."},{arg:"index",description:"Index of the row being clicked."},{arg:"event",description:"Native event object."}]},{event:"row-dblclicked",description:"Emitted when a row is double clicked.",args:[{arg:"item",description:"Item data of the row being double clicked."},{arg:"index",description:"Index of the row being double clicked."},{arg:"event",description:"Native event object."}]},{event:"row-hovered",description:"Emitted when a row is hovered.",args:[{arg:"item",description:"Item data of the row being hovered."},{arg:"index",description:"Index of the row being hovered."},{arg:"event",description:"Native event object."}]},{event:"head-clicked",description:"Emitted when a header or footer cell is clicked.",args:[{arg:"key",description:"Column key clicked (field name)."},{arg:"field",description:"Field definition object."},{arg:"event",description:"Native event object."}]},{event:"sort-changed",description:"Emitted when the sorting on the table has changed",args:[{arg:"ctx",description:"Table state context object. See docs."}]},{event:"context-changed",description:"Emitted whenever the table state context has changed",args:[{arg:"ctx",description:"Table state context object. See docs."}]},{event:"filtered",description:"Emitted when local filtering causes a change in the number of items.",args:[{arg:"filteredItems",description:"Array of items after filtering (before local pagination occurs)."}]},{event:"refreshed",description:"Emitted when the items provider function has returned data."}],slots:[{name:"table-caption",description:"Content to display in the table's caption element"},{name:"table-colgroup",description:"Slot to place custom colgroup and col elements"},{name:"[field]",description:"Scoped slot for custom data rendering of field data. See docs for scoped data"},{name:"HEAD_[field]",description:"Scoped slot for custom rendering of field header. See docs for scoped header"},{name:"FOOT_[field]",description:"Scoped slot for custom rendering of field footer. See docs for scoped footer"},{name:"row-details",description:"Scoped slot for optional rendering additional record details. See docs for Row details support"},{name:"empty",description:"Content to display when no items are present in the `items` array"},{name:"emptyfiltered",description:"Content to display when no items are present in the filtered `items` array"},{name:"top-row",description:"Fixed top row slot for user supplied TD cells. Scoped data: columns - number of TDs to provide, fields - fields object"},{name:"bottom-row",description:"Fixed bottom row slot for user supplied TD cells. Scoped data: columns - number of TDs to provide, fields - fields object"}]}}},"/RSe":function(e,t){e.exports={name:"@bootstrap-vue/card",version:"1.0.0",meta:{title:"Card",component:"bCard",components:["bCardHeader","bCardFooter","bCardImg","bCardGroup"],slots:[{name:"header",description:"For custom rendering of header content"},{name:"footer",description:"For custom rendering of footer content"}]}}},"/h/w":function(e,t){e.exports={name:"@bootstrap-vue/scrollspy",version:"0.0.0",meta:{title:"Scrollspy",directive:"vBScrollspy"}}},"015b":function(e,t,o){"use strict";t.a={}},"0Hg4":function(e,t,o){var n={"./color-variants/meta.json":"VfcC","./images/meta.json":"cZRA","./router-links/meta.json":"c6PT","./size-props/meta.json":"80JZ","./spacing-classes/meta.json":"nEqD","./starter-templates/meta.json":"xY7C","./utility-classes/meta.json":"9xWK","./validation/meta.json":"cB/C"};function i(e){return o(s(e))}function s(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="0Hg4"},"2oQI":function(e,t){e.exports={name:"@bootstrap-vue/nav",version:"1.0.0",meta:{title:"Nav",component:"bNav",components:["bNavItem","bNavText","bNavForm","bNavItemDropdown"],plugins:["Dropdown"]}}},"5RXe":function(e,t){e.exports={name:"@bootstrap-vue/popover",version:"0.0.0",meta:{title:"Popover",directive:"vBPopover"}}},"5qSi":function(e,t){e.exports={name:"@bootstrap-vue/jumbotron",version:"1.0.0",meta:{title:"Jumbotron",component:"bJumbotron",slots:[{name:"header",description:"Slot for custom header content. Placed inside 'header-tag'"},{name:"lead",description:"For custom rendering of lead text content. Placed inside 'lead-tag'"}]}}},"72xY":function(e,t){e.exports={name:"@bootstrap-vue/form-file",version:"1.0.0",meta:{title:"Form File",component:"bFormFile",events:[{event:"change",description:"original native change event on input",args:[{arg:"event"}]},{event:"input",description:"[see above docs]"}]}}},"7YgM":function(e,t){e.exports={name:"bootstrap-vue",version:"2.0.0-rc.0",description:"BootstrapVue provides one of the most comprehensive implementations of Bootstrap 4 components and grid system for Vue.js and with extensive and automated WAI-ARIA accessibility markup.",main:"dist/bootstrap-vue.common.js",web:"dist/bootstrap-vue.js",module:"es/index.js","jsnext:main":"es/index.js",style:"dist/bootstrap-vue.css",license:"MIT",homepage:"https://bootstrap-vue.js.org",contributors:[{name:"Pooya Parsa",url:"https://github.com/pi0"},{name:"Troy Morehouse",url:"https://github.com/tmorehouse"},{name:"SirLamer",url:"https://github.com/SirLamer"},{name:"Vitaly Mosin",url:"https://github.com/mosinve"},{name:"vizo",url:"https://github.com/vizo"},{name:"Alex Regan",url:"https://github.com/alexsasharegan"}],bugs:{url:"https://github.com/bootstrap-vue/bootstrap-vue/issues"},repository:{type:"git",url:"git+https://github.com/bootstrap-vue/bootstrap-vue.git"},files:["src","dist","nuxt","es"],scripts:{build:"scripts/build",watch:"rollup -c scripts/rollup.config.js --watch","docs-dev":"nuxt dev -c docs/nuxt.config.js","docs-gen":"nuxt generate -c docs/nuxt.config.js","docs-build":"nuxt build -c docs/nuxt.config.js","docs-publish":"gh-pages -t -d docs-dist -b master -r git@github.com:bootstrap-vue/bootstrap-vue.github.io.git",test:"yarn lint && NODE_ENV=test jest",lint:"eslint src scripts docs tests nuxt",release:"npm run build && npm run test && standard-version",postinstall:"opencollective postinstall || exit 0"},dependencies:{bootstrap:"^4.0.0","lodash.startcase":"^4.4.0",opencollective:"^1.0.3","popper.js":"^1.12.9","vue-functional-data-merge":"^2.0.3"},devDependencies:{"@nuxtjs/google-analytics":"^2.0.2","@nuxtjs/pwa":"^2.0.5","babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-plugin-external-helpers":"^6.22.0","babel-plugin-istanbul":"^4.1.5","clean-css":"^4.1.9",codecov:"^3.0.0",codemirror:"^5.33.0","cross-env":"^5.1.3",eslint:"^4.15.0","eslint-config-standard":"^11.0.0-beta.0","eslint-plugin-import":"^2.8.0","eslint-plugin-jest":"^21.6.2","eslint-plugin-node":"^5.2.1","eslint-plugin-promise":"^3.6.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^4.2.0","gh-pages":"^1.1.0","highlight-loader":"^0.7.2",highlightjs:"^9.8.0","html-loader":"^0.5.4",jest:"^22.0.6","jest-css-modules":"^1.1.0",lodash:"^4.17.4","markdown-loader":"^2.0.2",marked:"^0.3.12",nuxt:"1.1.1",rollup:"^0.54.0","rollup-plugin-babel":"^3.0.3","rollup-plugin-commonjs":"^8.2.6","rollup-plugin-css-porter":"^0.1.2","rollup-plugin-node-resolve":"^3.0.2","rollup-plugin-vue":"^3.0.0","rollup-watch":"^4.3.1","standard-version":"^4.3.0","uglify-es":"^3.3.6","vue-jest":"^1.4.0","vue-test-utils":"1.0.0-beta.11"},jest:{testRegex:"spec.js$",moduleFileExtensions:["js","vue"],transform:{"^.+\\.js$":"babel-jest",".*\\.(vue)$":"vue-jest",".*\\.(css)$":"jest-css-modules"},coverageDirectory:"./coverage/",collectCoverage:!0,mapCoverage:!0},keywords:["Bootstrap","Bootstrap 4","Bootstrap for Vue","SSR","Web","Components","Directives","Polymer","Vue","VueJS","Vue2","WebComponents","jquery","Popper.js","vue-strap","vueify","vuestrap","CSS","Flexbox","Alert","Breadcrumb","Button","Checkbox","Radio","Card","Carousel","Slider","Collapse","Dropdown","Select","Option","Input","Jumbotron","List","Nav","Modal","Upload","Dropzone","Navbar","Pagination","Popover","Progress","Tab","Table","Tag","Tooltip"],collective:{type:"opencollective",url:"https://opencollective.com/bootstrap-vue",logo:"https://opencollective.com/opencollective/logo.txt"}}},"80JZ":function(e,t){e.exports={title:"Size props and classes",slug:"size-props"}},"81bi":function(e,t,o){"use strict";var n=o("rzRs");t.a={computed:{version:function(){return n.f}}}},"8bom":function(e,t){e.exports={name:"@bootstrap-vue/tabs",version:"1.0.0",meta:{title:"Tabs",component:"bTabs",components:["bTab"],events:[{event:"input",description:"Emits when a tab is shown. USed to update the v-model",args:[{arg:"tab_index"}]}],slots:[{name:"tabs",description:"Additional tabs without content"},{name:"empty",description:"Renders this slot if no tabs are present"}]}}},"9xWK":function(e,t){e.exports={title:"Utility Classes",new:!0}},Av5r:function(e,t){e.exports={name:"@bootstrap-vue/layout",version:"1.0.0",meta:{title:"Layout and Grid System",slug:"layout",components:["bContainer","bRow","bCol","bFormRow"]}}},BGcK:function(e,t){e.exports={name:"@bootstrap-vue/button-toolbar",version:"1.0.0",meta:{title:"Button toolbar",component:"bButtonToolbar"}}},CrPL:function(e,t){e.exports={name:"@bootstrap-vue/tooltip",version:"1.0.0",meta:{title:"Tooltip",component:"bTooltip",events:[{event:"show",description:"Emitted when tooltip is about to be shown. Cancelable. Call bvEvent.preventDefault() to cancel show.",args:[{arg:"bvEvent",description:"bvEvent object"}]},{event:"shown",description:"Emitted when tooltip is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"hide",description:"Emitted when tooltip is about to be hidden. Cancelable. Call bvEvent.preventDefault() to cancel hide.",args:[{arg:"bvEvent",description:"bvEvent object"}]},{event:"hidden",description:"Emitted when tooltip is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"enabled",description:"Emitted when tooltip becomes enabled"},{event:"disabled",description:"Emitted when tooltip becomes disabled"},{event:"bv::tooltip::show",description:"Emitted on $root when tooltip is about to be shown. Cancelable. Call bvEvent.preventDefault() to cancel show.",args:[{arg:"bvEvent",description:"bvEvent object"}]},{event:"bv::tooltip::shown",description:"Emitted on $root when tooltip is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::tooltip::hide",description:"Emitted on $root when tooltip is about to be hidden. Cancelable. Call bvEvent.preventDefault() to cancel hide.",args:[{arg:"bvEvent",description:"bvEvent object"}]},{event:"bv::tooltip::hidden",description:"Emitted on $root when tooltip is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::tooltip::enabled",description:"Emitted on $root when tooltip becomes enabled",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::tooltip::disabled",description:"Emitted on $root when tooltip becomes disabled",args:[{arg:"bvEvent",description:"bvEvent object."}]}]}}},DqH2:function(e,t){e.exports={title:"Contributing"}},GUC9:function(e,t){e.exports={name:"@bootstrap-vue/progress",version:"1.0.0",meta:{title:"Progress",component:"bProgress",components:["bProgressBar"]}}},Gfqs:function(e,t,o){var n={"./alert/package.json":"Wkvv","./badge/package.json":"lkd2","./breadcrumb/package.json":"edhI","./button-group/package.json":"UlFk","./button-toolbar/package.json":"BGcK","./button/package.json":"LH9z","./card/package.json":"/RSe","./carousel/package.json":"IZV0","./collapse/package.json":"drpw","./dropdown/package.json":"xDVA","./embed/package.json":"s26O","./form-checkbox/package.json":"P5SY","./form-file/package.json":"72xY","./form-group/package.json":"d3hi","./form-input/package.json":"iRKB","./form-radio/package.json":"KBj4","./form-select/package.json":"V8qu","./form-textarea/package.json":"HRPh","./form/package.json":"aBNC","./image/package.json":"mzua","./input-group/package.json":"LfL0","./jumbotron/package.json":"5qSi","./layout/package.json":"Av5r","./link/package.json":"emmp","./list-group/package.json":"KAUE","./media/package.json":"Up1I","./modal/package.json":"hb+f","./nav/package.json":"2oQI","./navbar/package.json":"HkM+","./pagination-nav/package.json":"i4Zx","./pagination/package.json":"RqpV","./popover/package.json":"Ovir","./progress/package.json":"GUC9","./table/package.json":"+f7m","./tabs/package.json":"8bom","./tooltip/package.json":"CrPL"};function i(e){return o(s(e))}function s(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="Gfqs"},HRPh:function(e,t){e.exports={name:"@bootstrap-vue/form-textarea",version:"1.0.0",meta:{title:"Form Textarea",component:"bFormTextarea",events:[{event:"input",description:"Emitted when the textarea receives input from user.",args:[{arg:"value",description:"current value of the textarea"}]}]}}},"HkM+":function(e,t){e.exports={name:"@bootstrap-vue/navbar",version:"1.0.0",meta:{title:"Navbar",component:"bNavbar",components:["bNavbarNav","bNavbarBrand","bNavbarToggle"],plugins:["Nav","Dropdown","Collapse"]}}},IZV0:function(e,t){e.exports={name:"@bootstrap-vue/carousel",version:"1.0.0",meta:{title:"Carousel",component:"bCarousel",components:["bCarouselSlide"],events:[{event:"sliding-start",description:"Emitted when transitioning to a new slide has started.",args:[{arg:"slide",description:"Slide number that is being slid to."}]},{event:"sliding-end",description:"Emitted when transitioning to a new slide has ended.",args:[{arg:"slide",description:"Slide number that was slid to."}]}]}}},JMyG:function(e,t,o){var n={"./popover/package.json":"5RXe","./scrollspy/package.json":"/h/w","./tooltip/package.json":"zRSF"};function i(e){return o(s(e))}function s(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="JMyG"},Jg96:function(e,t,o){"use strict";var n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-navbar",{staticClass:"navbar-dark bd-navbar",attrs:{toggleable:"md",sticky:""}},[o("b-navbar-toggle",{attrs:{target:"bd-main-nav"}}),o("b-navbar-brand",{attrs:{to:"/",exact:""}},[o("svg",{staticClass:"d-block",attrs:{width:"36",height:"36",viewBox:"0 0 612 612",xmlns:"http://www.w3.org/2000/svg",focusable:"false",fill:"#fff"}},[o("path",{attrs:{d:"M510,8 C561.846401,8.16468012 603.83532,50.1535995 604,102 L604,510 C603.83532,561.846401 561.846401,603.83532 510,604 L102,604 C50.1535995,603.83532 8.16468012,561.846401 8,510 L8,102 C8.16468012,50.1535995 50.1535995,8.16468012 102,8 L510,8 L510,8 Z M510,0 L102,0 C45.9,6.21724894e-15 0,45.9 0,102 L0,510 C0,566.1 45.9,612 102,612 L510,612 C566.1,612 612,566.1 612,510 L612,102 C612,45.9 566.1,6.21724894e-15 510,0 Z","fill-rule":"nonzero"}}),o("text",{attrs:{id:"BV","font-family":"Arial","font-size":"350","font-weight":"light","letter-spacing":"2"}},[o("tspan",{attrs:{x:"72.0527344",y:"446"}},[e._v("B")]),o("tspan",{attrs:{x:"307.5",y:"446"}},[e._v("V")])])]),o("span",{staticClass:"sr-only"},[e._v("Home")])]),o("b-collapse",{staticClass:"justify-content-between",attrs:{"is-nav":"",id:"bd-main-nav"}},[o("b-navbar-nav",[o("b-nav-item",{attrs:{to:"/docs",exact:""}},[e._v("Docs")]),o("b-nav-item",{attrs:{to:"/docs/components"}},[e._v("Components")]),o("b-nav-item",{attrs:{to:"/docs/directives"}},[e._v("Directives")]),o("b-nav-item",{attrs:{to:"/docs/reference"}},[e._v("Reference")]),o("b-nav-item",{attrs:{to:"/docs/misc"}},[e._v("Misc")]),o("b-nav-item",{attrs:{to:"/play"}},[e._v("Play")])],1),o("b-navbar-nav",[o("b-nav-item-dropdown",{attrs:{text:"v"+e.version,right:""}},[o("b-dropdown-item",{attrs:{href:"http://dev.bootstrap-vue.netlify.com"}},[e._v("Development")]),o("b-dropdown-item",{attrs:{href:"https://bootstrap-vue.js.org"}},[e._v("Latest (v"+e._s(e.version)+")")]),o("b-dropdown-divider"),o("b-dropdown-item",{attrs:{href:"http://beta.bootstrap-vue.netlify.com"}},[e._v("Beta 2 (v1.5.0)")]),o("b-dropdown-item",{attrs:{href:"http://alpha.bootstrap-vue.netlify.com"}},[e._v("Alpha 6 (v0.23.1)")])],1),o("b-nav-item",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue",target:"_blank"}},[o("svg",{staticClass:"navbar-nav-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 499.36",focusable:"false"}},[o("title",[e._v("GitHub")]),o("path",{attrs:{d:"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z",fill:"currentColor","fill-rule":"evenodd"}})]),o("span",{staticClass:"sr-only"},[e._v("GitHub")])]),o("b-nav-item",{attrs:{href:"https://twitter.com/BootstrapVue",target:"_blank"}},[o("svg",{staticClass:"navbar-nav-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 499.36",focusable:"false"}},[o("title",[e._v("Twitter")]),o("path",{attrs:{d:"M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92",fill:"currentColor"}})]),o("span",{staticClass:"sr-only"},[e._v("Twitter")])]),o("b-nav-item",{attrs:{href:"https://bootstrap-vue.now.sh",target:"_blank"}},[o("svg",{staticClass:"navbar-nav-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",focusable:"false"}},[o("title",[e._v("Slack")]),o("path",{attrs:{fill:"currentColor",d:"M210.787 234.832l68.31-22.883 22.1 65.977-68.309 22.882z"}}),o("path",{attrs:{d:"M490.54 185.6C437.7 9.59 361.6-31.34 185.6 21.46S-31.3 150.4 21.46 326.4 150.4 543.3 326.4 490.54 543.34 361.6 490.54 185.6zM401.7 299.8l-33.15 11.05 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.38-68.36 22.92 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.43-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.5-13.92 2.87-29.06 16.78-33.56l33.12-11.03-22.1-65.9-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.48-13.93 2.89-29.07 16.81-33.58l33.15-11.05-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.46 34.38 68.36-22.92-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.47 34.42 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.87 29.06-16.78 33.56L329.7 194.6l22.1 65.9 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.88 29.07-16.81 33.57z",fill:"currentColor"}})]),o("span",{staticClass:"sr-only"},[e._v("Slack")])]),o("div",{staticClass:"nav-item nav-link"},[o("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=bootstrap-vue&repo=bootstrap-vue&type=star&count=true",frameborder:"0",scrolling:"0",width:"100px",height:"20px"}})])],1)],1)],1)},staticRenderFns:[]};t.a=n},KAUE:function(e,t){e.exports={name:"@bootstrap-vue/list-group",version:"1.0.0",meta:{title:"List group",component:"bListGroup",components:["bListGroupItem"]}}},KBj4:function(e,t){e.exports={name:"@bootstrap-vue/form-radio",version:"1.0.0",meta:{title:"Form Radio",component:"bFormRadioGroup",components:["bFormRadio"],events:[{event:"input",description:"Emitted when the selected value is changed",args:[{arg:"checked",description:"current selected Value of radio group."}]},{event:"change",description:"Emitted when selected value is changed due to user interaction",args:[{arg:"checked",description:"current selected Value of radio group."}]}]}}},LH9z:function(e,t){e.exports={name:"@bootstrap-vue/button",version:"1.0.0",meta:{title:"Button",component:"bButton",components:["bButtonClose"],events:[{event:"click",description:"when clicked on button"}]}}},LfL0:function(e,t){e.exports={name:"@bootstrap-vue/input-group",version:"1.0.0",meta:{title:"Input Group",component:"bInputGroup",components:["bInputGroupAddon","bInputGroupText"],slots:[{name:"prepdend",description:"Prepend attachment"},{name:"append",description:"Append attachment"}]}}},NmoH:function(e,t,o){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{staticClass:"bd-footer text-muted"},[t("div",{staticClass:"container"},[t("ul",{staticClass:"bd-footer-links"},[t("li",[t("router-link",{attrs:{to:"/"}},[this._v("Home")])],1),t("li",[t("router-link",{attrs:{to:"/docs/"}},[this._v("Documentation")])],1),this._m(0)]),this._m(1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue",target:"_blank"}},[this._v("Fork on GitHub")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            Designed and built with all the love in the world.\n            Maintained by the "),t("a",{attrs:{href:"https://github.com/orgs/bootstrap-vue/people"}},[this._v("core team")]),this._v("\n            With the help of\n            "),t("a",{attrs:{href:"https://github.com/bootstrap-vue/bootstrap-vue/graphs/contributors"}},[this._v("our contributors")]),this._v(".\n            docs generated with "),t("a",{attrs:{href:"https://nuxtjs.org/"}},[this._v("NUXT.js")])])}]};t.a=n},NxCc:function(e,t,o){"use strict";var n=o("81bi"),i=o("Jg96");var s=function(e){o("SK1o")},a=o("VU/8")(n.a,i.a,!1,s,null,null);t.a=a.exports},OMmf:function(e,t,o){var n={"./changelog/meta.json":"tF3C","./contributing/meta.json":"DqH2"};function i(e){return o(s(e))}function s(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="OMmf"},Ovir:function(e,t){e.exports={name:"@bootstrap-vue/popover",version:"1.0.0",meta:{title:"Popover",component:"bPopover",events:[{event:"show",description:"Emitted when popover is about to be shown. Cancelable. Call bvEvent.preventDefault() to cancel show.",args:[{arg:"bvEvent",description:"bvEvent object"}]},{event:"shown",description:"Emitted when popover is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"hide",description:"Emitted when popover is about to be hidden. Cancelable. Call bvEvent.preventDefault() to cancel hide.",args:[{arg:"bvEvent",description:"bvEvent object"}]},{event:"hidden",description:"Emitted when popover is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"enabled",description:"Emitted when popover becomes enabled"},{event:"disabled",description:"Emitted when popover becomes disabled"},{event:"bv::popover::show",description:"Emitted on $root when popover is about to be shown. Cancelable. Call bvEvent.preventDefault() to cancel show.",args:[{arg:"bvEvent",description:"bvEvent object"}]},{event:"bv::popover::shown",description:"Emitted on $root when popover is shown",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::popover::hide",description:"Emitted on $root when popover is about to be hidden. Cancelable. Call bvEvent.preventDefault() to cancel hide.",args:[{arg:"bvEvent",description:"bvEvent object"}]},{event:"bv::popover::hidden",description:"Emitted on $root when popover is hidden",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::popover::enabled",description:"Emitted on $root when popover becomes enabled",args:[{arg:"bvEvent",description:"bvEvent object."}]},{event:"bv::popover::disabled",description:"Emitted on $root when popover becomes disabled",args:[{arg:"bvEvent",description:"bvEvent object."}]}],slots:[{name:"title",description:"Optional slot for title (html supported)"}]}}},P5SY:function(e,t){e.exports={name:"@bootstrap-vue/form-checkbox",version:"1.0.0",meta:{title:"Form Checkbox",component:"bFormCheckboxGroup",components:["bFormCheckbox"],events:[{event:"input",description:"Emitted when the selected value(s) is changed",args:[{arg:"checked",description:"Value of checkbox(es). When bound to multiple checkboxes, value will be an array."}]},{event:"change",description:"Emitted when selected value(s) is changed due to user interaction",args:[{arg:"checked",description:"Value of checkbox(es). When bound to multiple checkboxes, value will be an array."}]}]}}},RqpV:function(e,t){e.exports={name:"@bootstrap-vue/pagination",version:"1.0.0",meta:{title:"Pagination",component:"bPagination",events:[{event:"input",description:"when page changes via user interaction or programmatically",args:[{arg:"page",description:"Selected page number (starting with 1)"}]},{event:"change",description:"when page changes via user interaction",args:[{arg:"page",description:"Selected page number (starting with 1)"}]}]}}},SK1o:function(e,t,o){var n=o("yCD4");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("rjj0")("50402531",n,!0)},TkCl:function(e,t,o){"use strict";var n=o("015b"),i=o("NmoH"),s=o("VU/8")(n.a,i.a,!1,null,null,null);t.a=s.exports},UlFk:function(e,t){e.exports={name:"@bootstrap-vue/button-group",version:"1.0.0",meta:{title:"Button group",component:"bButtonGroup"}}},Up1I:function(e,t){e.exports={name:"@bootstrap-vue/media",version:"1.0.0",meta:{title:"Media",component:"bMedia",components:["bMediaAside","bMediaBody"],slots:[{name:"aside",description:"Media Aside"}]}}},V8qu:function(e,t){e.exports={name:"@bootstrap-vue/form-select",version:"1.0.0",meta:{title:"Form Select",component:"bFormSelect",events:[{event:"input",description:"Emitted with the select value changes",args:[{arg:"value",desccription:"current selected value of the select."}]},{event:"change",description:"Emitted with the select value changes via user interaction",args:[{arg:"value",desccription:"current selected value of the select."}]}]}}},VfcC:function(e,t){e.exports={title:"Color Variants"}},VtUA:function(e,t,o){"use strict";t.b=function(e){if(!e)return{};var t=[],o="",n="",i=e.match(/<h1 id=([^> ]+)>(.+?)<\/h1>/)||[];i&&(o="#"+a(i[1]),n=s(i[2]));var r=0;return(e.match(/<h([23]) id=[^> ]+>.+?<\/h\1>/g)||[]).forEach(function(e){var o=e.match(/^<(h[23]) id=([^> ]+)>(.+?)<\/\1>$/);if(o){var n=o[1],i="#"+a(o[2]),c=s(o[3]);"h2"===n?(t.push({href:i,label:c}),r=t.length):"h3"===n&&(t[r]=t[r]||[],t[r].push({href:i,label:c}))}}),{toc:t,title:n,top:o}},t.a=function(e){var t={};return e.keys().map(e).map(function(e){return e.meta||e}).map(function(e){return i()({slug:e.slug||(e.title||"").replace(" ","-").toLowerCase()},e)}).sort(function(e,t){return e.slug<t.slug?-1:e.slug>t.slug?1:0}).forEach(function(e){t[e.slug]=e}),t},t.d=function(e,t,o,n){var i=e.scrollTop,s=t-i,a=0;!function t(){var r,c,p,l=(r=a+=20,c=i,p=s,(r/=o/2)<1?p/2*r*r+c:-p/2*(--r*(r-2)-1)+c);e.scrollTop=Math.round(l),a<o?setTimeout(t,20):n&&"function"==typeof n&&n()}()},t.c=function(e){if(!e.getClientRects().length)return 0;var t=e.getBoundingClientRect(),o=e.ownerDocument.defaultView;return t.top+o.pageYOffset};var n=o("woOf"),i=o.n(n);function s(e){return e.replace(/<[^>]+>/g,"")}function a(e){return e.replace(/"/g,"")}},Wkvv:function(e,t){e.exports={name:"@bootstrap-vue/alert",version:"1.0.0",meta:{title:"Alert",component:"bAlert",events:[{event:"dismissed",description:"Alert dismissed"},{event:"dismiss-count-down",description:"When dismissAfterSeconds enabled, this event emits every second on countdown.",args:[{arg:"dismissCountDown",description:"Time remaining to dismissed"}]}],slots:[{name:"dismiss",description:"Content for the dismiss button."}]}}},aBNC:function(e,t){e.exports={name:"@bootstrap-vue/form",version:"1.0.0",meta:{title:"Form",slug:"form",component:"bForm",components:["bFormText","bFormInvalidFeedback","bFormValidFeedback","bFormRow"],events:[{event:"submit",description:"Emitted when the form is being submitted",args:[{arg:"event",description:"Native submit event."}]}]}}},c6PT:function(e,t){e.exports={title:"Router support",slug:"router-links"}},"cB/C":function(e,t){e.exports={title:"Form Validation",slug:"validation"}},cZRA:function(e,t){e.exports={title:"Component img src resolving",slug:"images"}},d3hi:function(e,t){e.exports={name:"@bootstrap-vue/form-group",version:"1.0.0",meta:{title:"Form Group",component:"bFormGroup",slots:[{name:"label",description:"Content to place inside the <label> element."},{name:"description",description:"Content to place in the description area."},{name:"invalid-feedback",description:"Content to place in the invalid feedback area"},{name:"valid-feedback",description:"Content to place in the valid feedback area"},{name:"feedback",description:"Content to place in the invalid feedback area. Deprecated: use 'invalid-feedback' slot instead"}]}}},"dEb+":function(e,t,o){"use strict";var n=o("NxCc"),i=o("TkCl");t.a={components:{mNav:n.a,mFooter:i.a}}},drpw:function(e,t){e.exports={name:"@bootstrap-vue/collapse",version:"1.0.0",meta:{title:"Collapse",component:"bCollapse",directives:["vBToggle"],events:[{event:"show",description:"emitted when collaspe has started to open"},{event:"shown",description:"emitted when collaspe has finised opening"},{event:"hide",description:"emitted when collaspe has started to close"},{event:"hidden",description:"emitted when collaspe has finished closing"},{event:"bv::toggle::collapse",description:"toggles visible state of collaspe when this event is emitted on $root",args:[{arg:"id",description:"collapse id to toggle"}]}]}}},eGHw:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("dEb+"),i=o("ho4M"),s=o("VU/8")(n.a,i.a,!1,null,null,null);t.default=s.exports},edhI:function(e,t){e.exports={name:"@bootstrap-vue/breadcrumb",version:"1.0.0",meta:{title:"Breadcrumb",component:"bBreadcrumb",components:["bBreadcrumbItem","bBreadcrumbLink"],events:[]}}},emmp:function(e,t){e.exports={name:"@bootstrap-vue/link",version:"1.0.0",meta:{title:"Link",component:"bLink",events:[{event:"click",description:"when link clicked"}]}}},"hb+f":function(e,t){e.exports={name:"@bootstrap-vue/modal",version:"1.0.0",meta:{title:"Modal",component:"bModal",directives:["vBModal"],events:[{event:"change",description:"new modal visibility state",args:[{arg:"is_visible",description:"true if modal is visible, false otherwise"}]},{event:"show",description:"always emits just before modal is shown. cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel show"}]},{event:"shown",description:"always emits when modal is shown",args:[{arg:"bvEvt",description:"BvEvent object"}]},{event:"hide",description:"always emits just before modal has hidden",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]},{event:"hidden",description:"always emits after modal is hidden",args:[{arg:"bvEvt",description:"BvEvent object"}]},{event:"ok",description:"when default OK button pressed, just before modal has hidden. Cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]},{event:"cancel",description:"when default CANCEL button pressed, just before modal has hidden. Cancelable",args:[{arg:"bvEvt",description:"BvEvent object. Call bvEvt.preventDefault() to cancel hide"}]}],slots:[{name:"modal-header",description:"Entire modal header container contents. Also removes the top right X close button."},{name:"modal-title",description:"Modal title. If modal-header slot is used, this slot will not be shown."},{name:"modal-header-close",description:"Content of Modal header close button. If modal-header slot is used, this slot will not be shown."},{name:"modal-footer",description:"Modal footer content. Also removes default OK and CANCEL buttons."},{name:"modal-ok",description:"Modal OK button content."},{name:"modal-cancel",description:"Modal CANCEL button content."}]}}},ho4M:function(e,t,o){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bd-home"},[t("m-nav"),t("br"),t("nuxt"),t("m-footer")],1)},staticRenderFns:[]};t.a=n},i4Zx:function(e,t){e.exports={name:"@bootstrapvue/pagination",version:"1.0.0",meta:{title:"Pagination Nav",component:"bPaginationNav"}}},iRKB:function(e,t){e.exports={name:"@bootstrap-vue/form-input",version:"1.0.0",meta:{title:"Form Input",component:"bFormInput",events:[{event:"input",description:"Emitted when the input receives input from user.",args:[{arg:"value",description:"current value of the input"}]},{event:"change",description:"Emitted when the input changes.",args:[{arg:"value",description:"current value of the input"}]}]}}},lkd2:function(e,t){e.exports={name:"@bootstrap-vue/badge",version:"1.0.0",meta:{title:"Badge",component:"bBadge"}}},mzua:function(e,t){e.exports={name:"@bootstrap-vue/image",version:"1.0.0",meta:{title:"Image",component:"bImg",components:["bImgLazy"]}}},nEqD:function(e,t){e.exports={title:"Spacing classes"}},rzRs:function(e,t,o){"use strict";o.d(t,"a",function(){return a}),o.d(t,"b",function(){return c}),o.d(t,"e",function(){return l}),o.d(t,"c",function(){return v}),o.d(t,"d",function(){return u});var n=o("VtUA"),i=o("7YgM");o.n(i);o.o(i,"version")&&o.d(t,"f",function(){return i.version});var s=o("Gfqs"),a=Object(n.a)(s),r=o("JMyG"),c=Object(n.a)(r),p=o("0Hg4"),l=Object(n.a)(p),d=o("OMmf"),v=Object(n.a)(d),u=[{title:"Getting started",base:""},{title:"Components",base:"components/",pages:a},{title:"Directives",base:"directives/",pages:c},{title:"Reference",base:"reference/",pages:l},{title:"Misc",base:"misc/",pages:v}]},s26O:function(e,t){e.exports={name:"@bootstrap-vue/embed",version:"1.0.0",meta:{title:"Embed",component:"bEmbed"}}},tF3C:function(e,t){e.exports={title:"ChangeLog"}},xDVA:function(e,t){e.exports={name:"@bootstrap-vue/dropdown",version:"1.0.0",meta:{title:"Dropdown",component:"bDropdown",components:["bDropdownItem","bDropdownItemButton","bDropdownHeader","bDropdownDivider"],events:[{event:"shown",description:"Emitted When dropdown is shown"},{event:"hidden",description:"Emitted When dropdown is hidden"},{event:"click",description:"Emitted when split button clicked in split mode."}],slots:[{name:"button-content",description:"Can be used to implement custom text with icons and more styling"},{name:"text",description:"Deprecated. please use 'button-content' slot instead."}]}}},xY7C:function(e,t){e.exports={title:"Starter Templates"}},yCD4:function(e,t,o){(e.exports=o("FZ+f")(!0)).push([e.i,".main-nav{-webkit-box-shadow:0 0 5px rgba(57,70,78,.2)!important;box-shadow:0 0 5px rgba(57,70,78,.2)!important;background:#fff;z-index:1050;padding-bottom:0}.main-nav .nav-link,.main-nav .navbar-brand{padding-bottom:10px;border-bottom:3px solid transparent}.main-nav .nav-link.nuxt-link-active{border-bottom:3px solid #4fc08d}.navbar-brand img{height:1.5em;padding-right:.5em}","",{version:3,sources:["/usr/src/app/docs/components/nav.vue"],names:[],mappings:"AACA,UACE,uDAA4D,AACpD,+CAAoD,AAC5D,gBAAkB,AAClB,aAAc,AACd,gBAAkB,CACnB,AACD,4CAEE,oBAAqB,AACrB,mCAAqC,CACtC,AACD,qCACE,+BAAiC,CAClC,AACD,kBACE,aAAc,AACd,kBAAqB,CACtB",file:"nav.vue",sourcesContent:["\n.main-nav {\n  -webkit-box-shadow: 0 0 5px rgba(57, 70, 78, .2) !important;\n          box-shadow: 0 0 5px rgba(57, 70, 78, .2) !important;\n  background: white;\n  z-index: 1050;\n  padding-bottom: 0;\n}\n.main-nav .nav-link,\n.main-nav .navbar-brand {\n  padding-bottom: 10px;\n  border-bottom: 3px solid transparent;\n}\n.main-nav .nav-link.nuxt-link-active {\n  border-bottom: 3px solid #4fc08d;\n}\n.navbar-brand img {\n  height: 1.5em;\n  padding-right: 0.5em;\n}\n"],sourceRoot:""}])},zRSF:function(e,t){e.exports={name:"@bootstrap-vue/tooltip",version:"0.0.0",meta:{title:"Tooltip",directive:"vBTooltip"}}}});
//# sourceMappingURL=default.d0536e5b6b8db1b3f7d6.js.map