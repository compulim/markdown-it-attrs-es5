import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs-es5';

const md = markdownIt();

md.use(markdownItAttrs);

process.send(md.render('[ABC](https://example.com){aria-label=DEF}'));
