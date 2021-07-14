/**
 * @jest-environment jsdom
 */

 const markdownIt = require('markdown-it');

test('Using bundle', async () => {
  require('../dist/markdown-it-attrs-es5.production.min');

  const md = markdownIt();

  md.use(markdownItAttrs);

  const actual = md.render('[ABC](https://example.com){aria-label=DEF}');

  expect(actual).toEqual('<p><a href="https://example.com" aria-label="DEF">ABC</a></p>\n');
});

test('Using package', async () => {
  require('..');

  const md = markdownIt();

  md.use(markdownItAttrs);

  const actual = md.render('[ABC](https://example.com){aria-label=DEF}');

  expect(actual).toEqual('<p><a href="https://example.com" aria-label="DEF">ABC</a></p>\n');
});
