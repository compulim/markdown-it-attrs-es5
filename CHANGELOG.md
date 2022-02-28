# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Updated end-to-end tests, by [@compulim](https://github.com/compulim), in PR [#25](https://github.com/compulim/markdown-it-attrs-es5/pull/25)
   - Using Docker to isolate tests
   - Test against different combinations of Node.js, NPM, and resolvers
- Bumped dependencies, by [@compulim](https://github.com/compulim), in PR [#25](https://github.com/compulim/markdown-it-attrs-es5/pull/25)
   - [`@babel/cli@7.17.6`](https://npmjs.com/package/@babel/cli)
   - [`@babel/core@7.17.5`](https://npmjs.com/package/@babel/core)
   - [`@babel/plugin-transform-runtime@7.17.0`](https://npmjs.com/package/@babel/plugin-transform-runtime)
   - [`@babel/preset-env@7.16.11`](https://npmjs.com/package/@babel/preset-env)
   - [`@babel/runtime-corejs3@7.17.2`](https://npmjs.com/package/@babel/runtime-corejs3)
   - [`esbuild@0.14.23`](https://npmjs.com/package/esbuild)
   - [`read-pkg-up@9.1.0`](https://npmjs.com/package/read-pkg-up)
   - [`terser@5.11.0`](https://npmjs.com/package/terser)
   - [`markdown-it@12.3.2`](https://npmjs.com/package/markdown-it)
   - [`markdown-it-attrs@4.1.3`](https://npmjs.com/package/markdown-it-attrs)

## [2.0.1] - 2021-10-14

### Changed

- Bumped dependencies in PR [#22](https://github.com/compulim/markdown-it-attrs-es5/pull/22)
   - [`@babel/cli@7.15.7`](https://npmjs.com/package/@babel/cli)
   - [`@babel/core@7.15.8`](https://npmjs.com/package/@babel/core)
   - [`@babel/plugin-transform-runtime@7.15.8`](https://npmjs.com/package/@babel/plugin-transform-runtime)
   - [`@babel/preset-env@7.15.8`](https://npmjs.com/package/@babel/preset-env)
   - [`@babel/runtime-corejs3@7.15.4`](https://npmjs.com/package/@babel/runtime-corejs3)
   - [`esbuild@0.13.6`](https://npmjs.com/package/esbuild)
   - [`read-pkg-up@9.0.0`](https://npmjs.com/package/read-pkg-up)
   - [`terser@5.9.0`](https://npmjs.com/package/terser)

## [2.0.0] - 2021-07-20

### Added

- Added ES Module entrypoint, in PR [#19](https://github.com/compulim/markdown-it-attrs-es5/pull/19)

### Changed

- Moved to [`esbuild`](https://npmjs.com/package/esbuild) from Webpack, in PR [#18](https://github.com/compulim/markdown-it-attrs-es5/pull/18)
- Move to end-to-end tests from unit tests, in PR [#19](https://github.com/compulim/markdown-it-attrs-es5/pull/19)
- Ponyfill `globalThis` and `Promise` via `core-js-pure` by usage, in PR [#19](https://github.com/compulim/markdown-it-attrs-es5/pull/19)

## [1.2.1] - 2021-07-13

### Changed

- Bumped dependencies in PR [#16](https://github.com/compulim/markdown-it-attrs-es5/pull/16)
   - [`@babel/core@7.14.6`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.14.7`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-loader@8.2.2`](https://npmjs.com/package/babel-loader)
   - [`jest@27.0.6`](https://npmjs.com/package/jest)
   - [`markdown-it-attrs@4.0.0`](https://npmjs.com/package/markdown-it-attrs)
   - [`markdown-it@12.1.0`](https://npmjs.com/package/markdown-it)
   - [`webpack-cli@4.7.2`](https://npmjs.com/package/webpack-cli)
   - [`webpack@4.46.0`](https://npmjs.com/package/webpack)

## [1.2.0] - 2020-08-06

### Changed

- Bumped dependencies
   - [`@babel/core@7.11.1`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.11.0`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-loader@8.1.0`](https://npmjs.com/package/babel-loader)
   - [`webpack@4.44.1`](https://npmjs.com/package/webpack)
   - [`webpack-cli@3.3.12`](https://npmjs.com/package/webpack-cli)
- Revert `npx` because [`.npmrc` issues with `NpmAuthenticateV0`](https://github.com/microsoft/azure-pipelines-tasks/issues/13265)

## [1.1.0] - 2020-05-26

### Changed

- Bump dependencies, in PR [#2](https://github.com/compulim/event-as-promise/pull/2)
   - [`@babel/core@7.9.6`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.9.6`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-loader@8.1.0`](https://npmjs.com/package/babel-loader)
   - [`jest@26.0.1`](https://npmjs.com/package/jest)
   - [`markdown-it-attrs@3.0.2`](https://npmjs.com/package/markdown-it-attrs)
   - [`markdown-it@11.0.0`](https://npmjs.com/package/markdown-it)
   - [`webpack-cli@3.3.1`](https://npmjs.com/package/webpack-cli)
   - [`webpack@4.43.0`](https://npmjs.com/package/webpack)

## [1.0.0] - 2020-03-17

### Added

- Initial commit
