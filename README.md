# @nuxtjs/darkmode-js-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> 🌓 Add darkmode / nightmode to your nuxt project in a few seconds

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/darkmode-js-module` dependency to your project

```bash
yarn add @nuxtjs/darkmode-js-module # or npm install @nuxtjs/darkmode-js-module
```

2. Add `@nuxtjs/darkmode-js-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/darkmode-js-module',

    // With options
    ['@nuxtjs/darkmode-js-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Sandoche Adittane <sandoche@protonmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/darkmode-js-module/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/darkmode-js-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/darkmode-js-module.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/darkmode-js-module

[github-actions-ci-src]: https://github.com/sandoche/nuxt-darkmode-js-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/sandoche/nuxt-darkmode-js-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/sandoche/nuxt-darkmode-js-module.svg
[codecov-href]: https://codecov.io/gh/sandoche/nuxt-darkmode-js-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/darkmode-js-module.svg
[license-href]: https://npmjs.com/package/@nuxtjs/darkmode-js-module
