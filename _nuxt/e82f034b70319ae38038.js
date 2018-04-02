(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{382:function(s,a){s.exports='<h1 id="popovers">Popovers</h1>\n<blockquote>\n<p>Documentation and examples for adding Bootstrap-Vue popovers to any element on your site,\nusing Bootstrap V4 CSS for styling and animations. Popovers can be triggered by hovering,\nfocusing, or clicking an element, and can contain both content and a title heading.\nPopovers are tooltips on steroids.</p>\n</blockquote>\n<p>Use the <code>v-b-popover</code> directive on any <strong>element</strong> or <strong>component</strong> where you would\nlike a popover to appear.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center my-3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover</span>=<span class="hljs-string">&quot;&apos;I am popover content!&apos;&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Popover Title&quot;</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- popover-example-sample.vue --&gt;</span>\n</pre>\n<h2 id="overview">Overview</h2>\n<p>Things to know when using popovers:</p>\n<ul>\n<li>Popovers rely on the 3rd party library Popper.js for positioning. It is bundled with Bootstrap-Vue!</li>\n<li>Zero-length title and content values will never show a popover.</li>\n<li>Specify container: &apos;body&apos; (default) to avoid rendering problems in more complex components (like input groups, button groups, etc).</li>\n<li>Triggering popovers on hidden elements will not work.</li>\n<li>Popovers for <code>disabled</code> elements must be triggered on a wrapper element.</li>\n<li>When triggered from hyperlinks that span multiple lines, popovers will be centered. Use white-space: nowrap; on your <code>&lt;a&gt;</code>s, <code>&lt;b-link&gt;</code>s or <code>&lt;router-link&gt;</code>s b to avoid this behavior.</li>\n<li>Popovers must be hidden before their corresponding elements have been removed from the DOM.</li>\n<li>When using a client side router, popovers will listen to changes in <code>$route</code> and automatically hide.</li>\n<li>Elements that trigger popovers should be in the document tab sequence. Add <code>tabinded=&quot;0&quot;</code> if rquired.</li>\n</ul>\n<h2 id="positioning">Positioning</h2>\n<p>Twelve options are available for positioning: <code>top</code>, <code>topleft</code>, <code>topright</code>, <code>right</code>, <code>righttop</code>,\n<code>rightbottom</code>, <code>bottom</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>left</code>, <code>lefttop</code>, and <code>leftbottom</code> aligned.\nPositioning is relative to the trigger element.</p>\n<div class="bd-example bd-example-popover-static">\n  <div class="popover bs-popover-top bs-popover-top-docs">\n    <div class="arrow"></div>\n    <h3 class="popover-header">Popover top</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n  <div class="popover bs-popover-top bs-popover-top-docs">\n    <div class="arrow" style="left:93%"></div>\n    <h3 class="popover-header">Popover topleft</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n  <div class="popover bs-popover-top bs-popover-top-docs">\n    <div class="arrow" style="left:4%"></div>\n    <h3 class="popover-header">Popover topright</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n\n  <div class="popover bs-popover-right bs-popover-right-docs">\n    <div class="arrow"></div>\n    <h3 class="popover-header">Popover right</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n  <div class="popover bs-popover-right bs-popover-right-docs">\n    <div class="arrow" style="top:89%"></div>\n    <h3 class="popover-header">Popover righttop</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n  <div class="popover bs-popover-right bs-popover-right-docs">\n    <div class="arrow" style="top:7%"></div>\n    <h3 class="popover-header">Popover rightbottom</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n\n  <div class="popover bs-popover-bottom bs-popover-bottom-docs">\n    <div class="arrow"></div>\n    <h3 class="popover-header">Popover bottom</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n  <div class="popover bs-popover-bottom bs-popover-bottom-docs">\n    <div class="arrow" style="left:93%"></div>\n    <h3 class="popover-header">Popover bottomleft</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n  <div class="popover bs-popover-bottom bs-popover-bottom-docs">\n    <div class="arrow" style="left:4%"></div>\n    <h3 class="popover-header">Popover bottomright</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n\n  <div class="popover bs-popover-left bs-popover-left-docs">\n    <div class="arrow"></div>\n    <h3 class="popover-header">Popover left</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n  <div class="popover bs-popover-left bs-popover-left-docs">\n    <div class="arrow" style="top:89%"></div>\n    <h3 class="popover-header">Popover lefttop</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n  <div class="popover bs-popover-left bs-popover-left-docs">\n    <div class="arrow" style="top:7%"></div>\n    <h3 class="popover-header">Popover leftbottom</h3>\n    <div class="popover-body">\n      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\n    </div>\n  </div>\n\n  <div class="clearfix"></div>\n</div>\n\n<p><strong>Live example</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover.top</span>=<span class="hljs-string">&quot;&apos;Popover!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Top<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover.right</span>=<span class="hljs-string">&quot;&apos;Popover!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Right<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover.left</span>=<span class="hljs-string">&quot;&apos;Popover!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Left<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover.bottom</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- popover-positioning-live.vue --&gt;</span>\n</pre>\n<h2 id="triggers">Triggers</h2>\n<p>Popovers can be triggered (opened/closed) via any combination of <code>click</code>, <code>hover</code> and\n<code>focus</code>. The default trigger is <code>click</code>.</p>\n<p>If a popover has more than one trigger, then all triggers must be cleared before the\npopover will close. I.e. if a popover has the trigger <code>focus click</code>, and it was opened by\n<code>focus</code>, and the user then clicks the trigger element, they must click it again <strong>and</strong>\nmove focus to close the popover.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Triggers<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover</span>=<span class="hljs-string">&quot;&apos;Popover!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline-success&quot;</span>&gt;</span>Click (default)<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover</span>=<span class="hljs-string">&quot;&apos;Popover!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline-success&quot;</span>&gt;</span>Hover<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.focus</span>=<span class="hljs-string">&quot;&apos;Popover!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline-success&quot;</span>&gt;</span>Focus<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover.focus</span>=<span class="hljs-string">&quot;&apos;Popover!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline-success&quot;</span>&gt;</span>Hover + Focus<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- popover-triggers.vue --&gt;</span>\n</pre>\n<h3 id="dismiss-on-next-click-self-dimissing-">Dismiss on next click (self dimissing)</h3>\n<p>Use the <code>focus</code> trigger by itself to dismiss popovers on the next click that the user makes.\n<code>focus</code> also makes the popover activate on both <code>focus</code> and <code>click</code> (as a click makes\nthe element receive focus, assuming it is in the tab sequence of the page).</p>\n<p>You can, however, specify your trigger as <code>click blur</code>,  which will make only a\nclick activate the popover, and either a click on the element - <em>or losing foucus\nto another element or part of the document</em> - will close the popover.</p>\n<p>This <code>blur</code> trigger must be used in combination with the <code>click</code> trigger.</p>\n<p>Th following example shows the <code>click blur</code> use case. Popovers will only open on click\nof the button, and will close either on click of the button, or a click anywhere else (or\na focus change via pressing the <kbd>TAB</kbd> key). Some call this behavior <em>self dismising</em>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.click.blur</span>=<span class="hljs-string">&quot;&apos;Content&apos;&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Popover&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.click.blur</span>=<span class="hljs-string">&quot;&apos;Content&apos;&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Popover&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.click.blur</span>=<span class="hljs-string">&quot;&apos;Content&apos;&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Popover&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.click.blur</span>=<span class="hljs-string">&quot;&apos;Content&apos;&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Popover&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- popover-dismiss-next-click.vue --&gt;</span>\n</pre>\n<h2 id="heading-and-content">Heading and content</h2>\n<p>There are seveal options for provising the title and content of a popover.</p>\n<p>By dfault, popover will ue the <code>title</code> attribute of the element as the popover heading,\nand the content is passed as a string to the <code>v-b-popover</code> directive.\nThe title and content can also be passed as an object to <code>v-b-popoveer</code> in the form of</p>\n<pre class="hljs">{\n   <span class="hljs-attr">title</span>: <span class="hljs-string">&apos;This is the title&apos;</span>,\n   <span class="hljs-attr">content</span>: <span class="hljs-string">&apos;This is the content&apos;</span>\n}\n</pre>\n<p>If your content has basic HTML markup, then you will also need to set the <code>html</code>\nproperty to true, or use the diretive modifier <code>html</code></p>\n<pre class="hljs"><span class="hljs-comment">// Object format with HTML:</span>\n{\n   <span class="hljs-attr">title</span>: <span class="hljs-string">&apos;This is the &lt;string&gt;title&lt;/strong&gt;&apos;</span>,\n   <span class="hljs-attr">content</span>: <span class="hljs-string">&apos;This is the &lt;em&gt;content&lt;em&gt;&apos;</span>,\n   <span class="hljs-attr">html</span>: <span class="hljs-literal">true</span>\n}\n</pre>\n<p>Content can also be a function reference, which is called each time the popover is opened.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover</span>=<span class="hljs-string">&quot;&apos;Content!&apos;&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title from title attribute&quot;</span>\n               <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n          Title + Content\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover</span>=<span class="hljs-string">&quot;{title:&apos;Popover&apos;, content:&apos;This is the content of popover&apos;}&quot;</span>\n               <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n          Config Object\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover</span>=<span class="hljs-string">&quot;popoverData&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Config from data<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover.html</span>=<span class="hljs-string">&quot;popoverMethod&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Popover with HTML&quot;</span>\n               <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n           Method\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">cols</span>=<span class="hljs-string">&quot;12&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-popover.hover</span>=<span class="hljs-string">&quot;popoverConfig&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Config Object<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">popoverData</span>: {\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&apos;Popover Title&apos;</span>,\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&apos;Popover Content&apos;</span>\n      },\n      <span class="hljs-attr">counter</span>: <span class="hljs-number">0</span>\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    popoverMethod () {\n      <span class="hljs-comment">// Returns the content as a string</span>\n      <span class="hljs-comment">// Will be called each time popover is opened</span>\n      <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;&lt;strong&gt;&apos;</span> + <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>() + <span class="hljs-string">&apos;&lt;/strong&gt;&apos;</span>\n    }\n  },\n  <span class="hljs-attr">computed</span>: {\n    popoverConfig () {\n      <span class="hljs-comment">// Both title and content specified as a function in this example</span>\n      <span class="hljs-comment">// and will be called each time popover is opened</span>\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">html</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">title</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;Hello &lt;b&gt;Popover:&lt;/b&gt; &apos;</span> + (++<span class="hljs-keyword">this</span>.counter) },\n        <span class="hljs-attr">content</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;The date is:&lt;br&gt;&lt;em&gt;&apos;</span> + <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>() + <span class="hljs-string">&apos;&lt;/em&gt;&apos;</span> }\n      }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- popover-content.vue --&gt;</span>\n</pre>\n<h2 id="directive-syntax-and-usage">Directive syntax and usage</h2>\n<pre class="hljs">v-b-popover:<span class="hljs-string">[container]</span>.<span class="hljs-string">[mod]</span>.<span class="hljs-string">[mod]</span>.<span class="hljs-string">[...]</span>.<span class="hljs-string">[mod]</span>=<span class="hljs-string">&quot;&lt;value&gt;&quot;</span>\n</pre><p>Where <code>&lt;value&gt;</code> can be (optional):</p>\n<ul>\n<li>A string containing the <strong>content</strong> of the popover</li>\n<li>A function reference to generate the <strong>content</strong> of the popover (receives one argument which is a refernce to the DOM element triggering the popover)</li>\n<li>An object containing more complex configuration of popover, See Bootstrap docs for possible values/structure)</li>\n</ul>\n<p>Where <code>[mod]</code> can be (all optional):</p>\n<ul>\n<li>Positioning: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, <code>auto</code>; or the offset alignment positions <code>topleft</code>, <code>topright</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>lefttop</code>, <code>leftbottom</code>, <code>righttop</code>, or <code>rightbottom</code> (last one found wins, defaults to <code>right</code>).</li>\n<li>Event trigger: <code>click</code>, <code>hover</code>, <code>focus</code>, <code>blur</code> (if none specified, defaults to <code>click</code>. The <code>blur</code> trigger is a close handler only, and if specified by itself, will be converted to <code>focus</code>).</li>\n<li><code>nofade</code> to turn off animation.</li>\n<li><code>html</code> to enable rendering raw HTML. by default HTML is escaped and converted to text.</li>\n<li>A delay value in the format of <code>d###</code> (where <code>###</code> is in ms, defaults to 0).</li>\n<li>An offset value in pixels in the format of <code>o###</code> (where <code>###</code> is the number of pixels, defaults to 0. Negative values are allowed). Note if an offset is supplied, then the alignment positions will fallback to one of <code>top</code>, <code>bottom</code>, <code>left</code>, or <code>right</code>.</li>\n<li>A boundary setting of <code>window</code> or <code>viewport</code>.  The element to constrain the visual placement of the popover. If not specified, the boundary defaults to the trigger element&apos;s scroll parent (in most cases this will suffice).</li>\n</ul>\n<p>Where <code>[container]</code> can be (optional):</p>\n<ul>\n<li>An element ID (minus the #) to place the popover markup in when visible</li>\n<li>If not provided, popovers are appended to the body when visible</li>\n</ul>\n<h3 id="usage">Usage</h3>\n<p><strong>Simplest usage:</strong></p>\n<pre class="hljs"><span class="hljs-attr">v-b-popover</span>=<span class="hljs-string">&quot;&apos;This is a Poopover!&apos;&quot;</span>\n</pre><p>or use the element&apos;s <code>title</code> attribute for the popover header:</p>\n<pre class="hljs">v-b-popover <span class="hljs-attribute">title</span>=<span class="hljs-string">&quot;This is a popover header&quot;</span>\n<span class="hljs-attribute">v-b-popover</span>=<span class="hljs-string">&quot;&apos;This is popover content&apos;&quot;</span> <span class="hljs-attribute">title</span>=<span class="hljs-string">&quot;This is popover header&quot;</span>\n</pre><p>or provide an object for title and content:</p>\n<pre class="hljs"><span class="hljs-attr">v-b-popover</span>=<span class="hljs-string">&quot;{title:&apos;Popover header&apos;, content:&apos;Popover content&apos;}&quot;</span>\n</pre><p><strong>Enable HTML content/title:</strong></p>\n<pre class="hljs">v-b-popover.html=&quot;&apos;<span class="hljs-tag">&lt;<span class="hljs-name">em</span>&gt;</span>Emphasis<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span> in content&apos;&quot; title=&quot;<span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Bolded title<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>&quot;\n</pre><p><strong>Placement examples:</strong></p>\n<pre class="hljs">v-b-popover<span class="hljs-selector-class">.top</span>\n</pre><p><strong>Trigger examples:</strong></p>\n<pre class="hljs">v-b-popover        =&gt;<span class="hljs-built_in"> Default </span>of click\nv-b-popover.hover  =&gt; Hover only\nv-b-popover.click  =&gt; Click only\nv-b-popover.hover.focus =&gt; Both hover <span class="hljs-keyword">and</span> focus\n</pre><p><strong>Combo:</strong></p>\n<pre class="hljs">v-b-popover.hover.<span class="hljs-built_in">bottom</span>  =&gt; <span class="hljs-keyword">Show</span> on hover and place <span class="hljs-built_in">at</span> <span class="hljs-built_in">bottom</span>\nv-b-popover.<span class="hljs-built_in">bottom</span>.hover  =&gt; Same <span class="hljs-built_in">as</span> above\nv-b-popover.<span class="hljs-built_in">bottom</span>.click.html  =&gt; <span class="hljs-keyword">Show</span> on click and place <span class="hljs-built_in">at</span> <span class="hljs-built_in">bottom</span> <span class="hljs-built_in">with</span> HTML content\n</pre><h2 id="hiding-and-showing-popovers-via-root-events">Hiding and showing popovers via $root events</h2>\n<p>You can close (hide) <strong>all open popovers</strong> by emitting the <code>bv::hide::popover</code> event on $root:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::hide::popover&apos;</span>);\n</pre>\n<p>To close a <strong>specific popover</strong>, pass the trigger element&apos;s <code>id</code> as the first argument:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::show::popover&apos;</span>, <span class="hljs-string">&apos;my-trigger-button-id&apos;</span>);\n</pre>\n<p>To open (show) a <strong>specific popover</strong>, pass the trigger element&apos;s <code>id</code> as the first argument when\nemitting the <code>bv::show::popover</code> event:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::show::popover&apos;</span>, <span class="hljs-string">&apos;my-trigger-button-id&apos;</span>);\n</pre>\n<p>To open all popovers simultaneously, omit the <code>id</code> argument when emitting the\n<code>bv::show::popover</code> event.</p>\n<p>These events work for both the component <strong>and</strong> directive versions of popover.</p>\n<p>Note the <strong>trigger element</strong> must exist in the DOM and be in a visible state in order for the\npopover to instantiate and show.</p>\n<h2 id="disabling-and-enabling-popovers-via-root-events">Disabling and enabling popovers via $root events</h2>\n<p>You can disable <strong>all</strong> popovers by emitting the <code>bv::disable::popover</code> event on $root:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::disable::popover&apos;</span>);\n</pre>\n<p>To disable a <strong>specific popover</strong>, pass the trigger element&apos;s <code>id</code> as the first argument:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::disable::popover&apos;</span>, <span class="hljs-string">&apos;my-trigger-button-id&apos;</span>);\n</pre>\n<p>To enable a <strong>specific popover</strong>, pass the trigger element&apos;s <code>id</code> as the first argument when\nemitting the <code>bv::enable::popover</code> event:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::enable::popover&apos;</span>, <span class="hljs-string">&apos;my-trigger-button-id&apos;</span>);\n</pre>\n<p>To enable all popovers simultaneously, omit the <code>id</code> argument when emitting the\n<code>bv::enable::popover</code> event.</p>\n<p>These events work for both the component and directive versions of popover.</p>\n<p>Note the <strong>trigger element</strong> must exist in the DOM in order for the popover to be\nenabled or disabled.</p>\n<h2 id="see-also">See also</h2>\n<ul>\n<li><a href="/docs/directives/tooltip"><code>v-b-tooltip</code> directive</a></li>\n<li><a href="/docs/components/popover"><code>&lt;b-popover&gt;</code> component</a></li>\n<li><a href="/docs/components/tooltip"><code>&lt;b-tooltip&gt;</code> component</a></li>\n</ul>\n<h2 id="directive-reference">Directive reference</h2>\n'}}]);