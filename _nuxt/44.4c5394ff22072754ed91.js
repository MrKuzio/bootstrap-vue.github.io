webpackJsonp([44],{q3pG:function(s,e){s.exports="<h1 id=form-group>Form group</h1> <blockquote> <p>The <code>&lt;b-form-group&gt;</code> component is the easiest way to add some structure to forms. Its purpose is to provide a pairing between controls and a label, help text and feedback text, as well as contextual state visual feedback.</p> </blockquote> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span>\n      <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;fieldset1&quot;</span>\n      <span class=hljs-attr>description</span>=<span class=hljs-string>&quot;Let us know your name.&quot;</span>\n      <span class=hljs-attr>label</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>\n      <span class=hljs-attr>:feedback</span>=<span class=hljs-string>&quot;feedback&quot;</span> \n      <span class=hljs-attr>:state</span>=<span class=hljs-string>&quot;state&quot;</span>\n  &gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;input1&quot;</span> <span class=hljs-attr>:state</span>=<span class=hljs-string>&quot;state&quot;</span> <span class=hljs-attr>v-model.trim</span>=<span class=hljs-string>&quot;name&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  <span class=hljs-attr>computed</span>: {\n    feedback() {\n      <span class=hljs-keyword>return</span> <span class=hljs-keyword>this</span>.name.length &gt; <span class=hljs-number>0</span> ? <span class=hljs-string>&apos;Enter at least 4 characters&apos;</span> : <span class=hljs-string>&apos;Please enter something&apos;</span>;\n    },\n    state() {\n      <span class=hljs-keyword>return</span> <span class=hljs-keyword>this</span>.name.length &gt; <span class=hljs-number>4</span> ? <span class=hljs-string>&apos;valid&apos;</span> : <span class=hljs-string>&apos;invalid&apos;</span>;\n    }\n  },\n  <span class=hljs-attr>data</span>: {\n    <span class=hljs-attr>name</span>: <span class=hljs-string>&apos;&apos;</span>,\n  }\n}\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-group-1.vue --&gt;</span>\n</pre> <h2 id=label>Label</h2> <p>Use the prop <code>label</code> to set the content of the <code>&lt;fieldset&gt;</code> generated <code>&lt;legend&gt;</code> element (html supported), or by using the named slot <code>label</code>, You may optionally visually hide the label text by setting the prop <code>label-sr-only</code>.</p> <p>By default, the label appears above the input element(s), but you may optionally set the prop <code>horizontal</code> to place the label on the same line, and control the width of the label by setting <code>label-cols</code> to the number of columns (default of <code>3</code>, valid range of 1 through 11). <code>label-cols</code> has no effect if the layout is not <code>horizontal</code>. For viewports below size <code>sm</code>, the label will revert to being displayed above the input control. You can control the breakpoint for this by setting the <code>breakpoint</code> prop (default is <code>sm</code>).</p> <p>The label text may also optionally be aligned <code>left</code>, <code>center</code> or <code>right</code> by setting the respective value via the prop <code>label-text-align</code>. Alignment has no effect if <code>label-sr-only</code> is set.</p> <p><strong>Example: Horizontal laout</strong></p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;fieldsetHorizontal&quot;</span>\n                <span class=hljs-attr>horizontal</span>\n                <span class=hljs-attr>:label-cols</span>=<span class=hljs-string>&quot;4&quot;</span>\n                <span class=hljs-attr>breakpoint</span>=<span class=hljs-string>&quot;md&quot;</span>\n                <span class=hljs-attr>description</span>=<span class=hljs-string>&quot;Let us know your name.&quot;</span>\n                <span class=hljs-attr>label</span>=<span class=hljs-string>&quot;Enter your name&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-input</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;inputHorizontal&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-input</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-group-horizontal.vue --&gt;</span>\n</pre> <h2 id=description>Description</h2> <p>Optional descriptive text which is always shown with the <code>.text-muted</code> class (html supported) by setting the <code>description</code> prop or using the named slot <code>description</code>. The description text is rendered using the &lt;<code>b-form-text&gt;</code> component.</p> <h2 id=invalid-feedback>Invalid feedback</h2> <p>Show optional feedback text to provide textual state feedback (html supported) by setting the prop <code>feedback</code> or using the named slot <code>feedback</code>.</p> <p>Note that the feedback <strong>will not be shown</strong> unless the invalid <code>state</code> is set on the <code>&lt;b-form-group&gt;</code> and it&apos;s child(ren) input(s) or just on the input (<code>b-form-input&gt;</code>, <code>b-form-textarea&gt;</code>, <code>&lt;b-form-select&gt;</code>, <code>&lt;b-form-checkbox&gt;</code>, <code>&lt;b-form-radio&gt;</code>, or <code>&lt;b-form-file&gt;</code>).</p> <p>Also feedback will be shown if the parent <code>&lt;b-form&gt;</code> component does not have the <code>novalidate</code> prop set (or set to <code>false</code>) along with <code>vadidated</code> prop set (and the input fails browser native validation constraintes such as <code>required</code>).</p> <p>Refer to Bootstrap V4&apos;s <code>Form</code> component documentation for details on validation methods.</p> <p>Invalid feedback is rendered using the <code>&lt;b-form-feedback&gt;</code> componment.</p> <p><strong>Note:</strong> When using <code>&lt;b-input-group&gt;</code>, <code>&lt;b-form-file&gt;</code>, <code>&lt;b-form-radio-group&gt;</code>, <code>&lt;b-form-radio&gt;</code>, <code>&lt;b-form-checkbox-group&gt;</code> or <code>&lt;b-form-checkbox&gt;</code> inside a <code>&lt;b-form-group&gt;</code>, setting an invalid <code>state</code> on the <code>input</code> alone will <strong>not</strong> trigger the invalid feeback to show (due to limitations with the new Bootsrap V4 validation CSS). To get around this, <strong>you must also</strong> set the invalid <code>state</code> on <code>&lt;b-form-group&gt;</code>. Native browser validation will <strong>not</strong> trigger the invalid feedback to show when using one of the above mentiond form controls.</p> <h2 id=contextual-visual-state>Contextual visual state</h2> <p>Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states on most form controls.</p> <p>Generally speaking, you&#x2019;ll want to use a particular state for specific types of feedback:</p> <ul> <li><code>&apos;invalid&apos;</code> is great for when there&#x2019;s a blocking or required field. A user must fill in this field properly to submit the form.</li> <li><code>&apos;valid&apos;</code> is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.</li> <li><code>null</code> Displays no validation state</li> </ul> <p>To apply one of the contextual state icons on <code>&lt;b-form-group&gt;</code>, set the <code>state</code> prop to <code>&apos;invalid&apos;</code> (or <code>false</code>), <code>&apos;valid&apos;</code> (or <code>true</code>), or <code>null</code>.</p> <p>You should always provide content via the <code>feedback</code> prop (or slot) to aid users using assistive technologies when setting a contextual <code>invalid</code> state.</p> <h2 id=accessibility>Accessibility</h2> <p>To enable auto-generation of <code>aria-*</code> attributes, you should supply a unique <code>id</code> prop to <code>&lt;b-form-group&gt;</code>. This will associate the help text and feeback text to the <code>&lt;b-form-group&gt;</code> and its input control(s).</p> <p><code>&lt;b-form-group&gt;</code> renders the input control(s) inside a an HTML <code>&lt;fieldset&gt;</code> element with the label content placed inside the fieldset&apos;s <code>&lt;legend&gt;</code> element. By nature of this markup, the legend content is automatically associated the the input control(s).</p> <p>When placing multiple form controls inside a fieldset, it is recommended to give each control an associated <code>&lt;label&gt;</code> (which may be visually hidden using the <code>.sr-only</code> class) and set the label&apos;s <code>for</code> attribute to the <code>id</code> of the associated input control. Alternatively, you can set the <code>aria-label</code> attribute on each input control instead of using a <code>&lt;label&gt;</code>.</p> <p>It is <strong>highly recommended</strong> that you provide a unique <code>id</code> prop on your input element(s).</p> <h2 id=component-alias>Component alias</h2> <p><code>&lt;b-form-group&gt;</code> can also be used via the legacy alias of <code>&lt;b-form-fieldset&gt;</code>.</p> <h2 id=component-reference>Component Reference</h2> "}});
//# sourceMappingURL=44.4c5394ff22072754ed91.js.map