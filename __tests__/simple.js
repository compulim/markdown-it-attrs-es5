import { fork } from 'child_process';
import markdownIt from 'markdown-it';

import markdownItAttrs from '../lib/index';

test('markdownItAttrs should be a function', () => {
  expect(typeof markdownItAttrs).toBe('function');
});

test('markdownItAttrs should work in simple case', async () => {
  const md = markdownIt();

  md.use(markdownItAttrs);

  const actual = md.render('[ABC](https://example.com){aria-label=DEF}');

  expect(actual).toEqual('<p><a href="https://example.com" aria-label="DEF">ABC</a></p>\n');
});

test('markdownItAttrs should work in .mjs', async () => {
  // Until Jest support .mjs, we need to use fork().
  const process = fork('./__tests__/simple.mjs');
  const promise = new Promise((resolve, reject) => process.once('message', resolve).once('exit', reject));

  await expect(promise).resolves.toBe('<p><a href="https://example.com" aria-label="DEF">ABC</a></p>\n');
});
