require('markdown-it-attrs-es5/dist/markdown-it-attrs-es5.production.min.js');

const markdownIt = require('markdown-it');

const md = markdownIt();

md.use(markdownItAttrs);

console.log(md.render('[ABC](https://example.com){aria-label=DEF}'));
