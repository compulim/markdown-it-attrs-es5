# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added ES Module entrypoint, in PR [#XXX](https://github.com/compulim/p-defer-es5/pull/XXX)

### Changed

- Moved to [`esbuild`](https://npmjs.com/package/esbuild) from Webpack, in PR [#18](https://github.com/compulim/markdown-it-attrs-es5/pull/18)
- Move to end-to-end tests from unit tests, in PR [#XXX](https://github.com/compulim/p-defer-es5/pull/XXX)
- Ponyfill `globalThis` and `Promise` via `core-js-pure` by usage, in PR [#XXX](https://github.com/compulim/p-defer-es5/pull/XXX)

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
