const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs-es5');

const md = markdownIt();

md.use(markdownItAttrs);

console.log(md.render('[ABC](https://example.com){aria-label=DEF}'));
