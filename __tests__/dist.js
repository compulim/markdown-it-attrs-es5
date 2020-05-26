/**
 * @jest-environment jsdom
 */

import 'regenerator-runtime';
import { join } from 'path';
import { JSDOM } from 'jsdom';
import markdownIt from 'markdown-it';

async function waitOnce(eventTarget, name) {
  return new Promise(resolve => eventTarget.addEventListener(name, resolve, { once: true }));
}

test('Able to load production bundle via window.simpleUpdateIn', async () => {
  const { window } = await JSDOM.fromFile(join(__dirname, 'dist.production.html'), {
    resources: 'usable',
    runScripts: 'dangerously'
  });

  await waitOnce(window, 'load');

  const md = markdownIt();

  md.use(window.markdownItAttrs);

  const actual = md.render('[ABC](https://example.com){aria-label=DEF}');

  expect(actual).toEqual('<p><a href="https://example.com" aria-label="DEF">ABC</a></p>\n');
});
