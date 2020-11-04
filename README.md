# nuxtjs-darkmode-js-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Medium Badge](https://badgen.net/badge/icon/medium?icon=medium&label)](https://medium.com/@sandoche)
[![Twitter: sandochee](https://img.shields.io/twitter/follow/sandochee.svg?style=social)](https://twitter.com/sandochee)

🌓 Add darkmode / nightmode to your Nuxt.js project in a few seconds

This library adds [Darkmode.js](https://github.com/sandoche/Darkmode.js) to Nuxt.js

## 💡 Features

- Widget appears automatically
- Saving users choice
- Automatically shows Darkmode if the OS preferred theme is dark
- Can be used programmatically without widget (Darkmode instance accessible from Vue)
- Can be installed as a Nuxt Module

## ✨ Demo

Check out the demo in these websites:

- https://undesign.learn.uno
- https://curatedstacktemplate.learn.uno/

## 📖 Setup

1. Add `nuxtjs-darkmode-js-module` dependency to your project

```bash
yarn add nuxtjs-darkmode-js-module # or npm install nuxtjs-darkmode-js-module
```

2. Add `nuxtjs-darkmode-js-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxtjs-darkmode-js-module',

    // With options
    ['nuxtjs-darkmode-js-module', { /* module options - check below */ }]
  ]

  // or use options likes this,
  darkmodejs: {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true, // default: true
    disableWidget: false // default: false
  }
}
```

## ▶️ Methods
If you don't want to show the widget and enable/disable Darkmode programatically you can use the method `toggle()`. You can also check if the Dark Mode is activated with the method `isActivated()`. See them in action in the following example:
```javascript
// in a vue instance check example in example/pages/index.vue
this.darkmode.toggle() // this will work well only if `disableWidget: true` in the options

// caution the following method is not reactive
console.log(this.darkmode.isActivated())
```

## 💄 Override style
* A CSS class `darkmode--activated` is added to the body tag when the darkmode is activated. You can take advantage of it to override the style and have a custom style
* Use the class `darkmode-ignore` where you don't want to apply darkmode
* You can also add this style: `isolation: isolate;` in your CSS, this will also ignore the darkmode.
* It is also possible to revert the Dark Mode with this style `mix-blend-mode: difference;`

### Examples
```css
.darkmode--activated p, .darkmode--activated li {
  color: #000;
}

.button {
  isolation: isolate;
}

.darkmode--activated .logo {
  mix-blend-mode: difference;
}
```
```html
<span class="darkmode-ignore">😬<span>
```

## 🐛 Debug
If it does not work you may have to add the following code, but this will invalidate the classes to override.
```css
.darkmode-layer, .darkmode-toggle {
  z-index: 500;
}
```

## 🚸 Browser compatibility
This library uses the CSS `mix-blend-mode: difference;` to provide the Dark Mode.
It may not be compatible with all the browsers. Therefore the widget has been hidden in Internet Explorer and Edge.
This library also uses `prefers-color-scheme: dark` to automatically enable the Dark Mode if the OS prefered theme is dark.

Check the compatibility here: 
- https://caniuse.com/#search=mix-blend-mode
- https://caniuse.com/#search=prefers-color-scheme (to activate Dark Mode automatically)

## ⚙️ Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## ⭐️ Show your support

Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/sandoche">[![patreon.png](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/sandoche)</a>

## 🍺 Buy me a beer

If you like this project, feel free to donate:

- PayPal: https://www.paypal.me/kanbanote
- Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
- Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
- Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
- Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)

## 📄 License

[MIT License](./LICENSE)

Copyright (c) Sandoche Adittane

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxtjs-darkmode-js-module/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxtjs-darkmode-js-module
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxtjs-darkmode-js-module.svg
[npm-downloads-href]: https://npmjs.com/package/nuxtjs-darkmode-js-module
[license-src]: https://img.shields.io/npm/l/nuxtjs-darkmode-js-module.svg
[license-href]: https://npmjs.com/package/nuxtjs-darkmode-js-module
