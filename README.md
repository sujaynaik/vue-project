URL: https://sujaynaik.github.io/vue-project/#/

RELEASE FLOW:
When you push code to main, this is what happens:

Developer
│
├── git commit
│ feat: add login page
│
├── git push
│
GitHub Actions
│
├── Install dependencies
├── Run tests
├── Build Vue app
├── semantic-release starts
│
├── Read previous Git tag
├── Analyze commits
├── Decide next version
├── Generate release notes
├── Update CHANGELOG
├── Create Git tag
├── Create GitHub Release
└── Commit release files

Then your GitHub Pages deployment workflow builds the latest version and publishes it.

semantic-release implemented: Commit message decides the version vX.Y.Z (X: Major, Y: Minor, Z: Patch)

Example-
feat!: 'Message'

| Commit          | Release |
| --------------- | ------- |
| fix             | Patch   |
| feat            | Minor   |
| feat!           | Major   |
| BREAKING CHANGE | Major   |
| docs            | None    |
| style           | None    |
| refactor        | None    |
| chore           | None    |
| ci              | None    |
| test            | None    |

# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
