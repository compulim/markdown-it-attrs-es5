// When bundling with esbuild:
// - If we "import", it load ESM from "markdown-it-attrs-es5/module". The default imported object is () => any.
// - If we "require", it load CJS from "markdown-it-attrs-es5/main". The default imported object is () => any.

// When bundling with Webpack:
// - Nomatter we "import" or "require", it always load ESM from "markdown-it-attrs-es5/module", based on the "webpack.config.json/mainFields".
// - If we "import", the default imported object is () => any.
// - If we "require", the default imported object is { default: () => any }.
// - If we "require" and "mainFields" is "main", the default imported object is () => any.

import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs-es5';

const md = markdownIt();

md.use(markdownItAttrs);

process.send(md.render('[ABC](https://example.com){aria-label=DEF}'));
