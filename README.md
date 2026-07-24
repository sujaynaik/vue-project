URL: https://sujaynaik.github.io/vue-project/#/

## Automatic Release Workflow

When you push code to main, this is what happens:

| Step | Description                                                                                              |
| ---- | -------------------------------------------------------------------------------------------------------- |
| 1    | Developer creates a commit using **Conventional Commits** (e.g., `feat: add login page`).                |
| 2    | Developer pushes the commit to the `main` branch.                                                        |
| 3    | GitHub Actions is triggered automatically.                                                               |
| 4    | Dependencies are installed (`npm ci`).                                                                   |
| 5    | Tests are executed (if configured).                                                                      |
| 6    | The Vue application is built to verify it compiles successfully.                                         |
| 7    | `semantic-release` starts.                                                                               |
| 8    | Reads the latest Git tag (e.g., `v1.2.0`).                                                               |
| 9    | Analyzes all commits since the last release.                                                             |
| 10   | Determines the next semantic version (`major`, `minor`, or `patch`).                                     |
| 11   | Generates release notes from the commit history.                                                         |
| 12   | Updates `CHANGELOG.md`.                                                                                  |
| 13   | Updates the `version` field in `package.json`.                                                           |
| 14   | Commits the updated release files back to the repository.                                                |
| 15   | Creates a Git tag (e.g., `v1.3.0`).                                                                      |
| 16   | Publishes a GitHub Release with the generated release notes.                                             |
| 17   | The repository is now ready for deployment (manual or automatic, depending on your deployment workflow). |

Then your GitHub Pages deployment workflow builds the latest version and publishes it.

## semantic-release implemented

Commit message decides the version vX.Y.Z (X: Major, Y: Minor, Z: Patch)

Example-
commit message = "feat!: change release workflow

BREAKING CHANGE: release workflow changed from separate workflows to combined workflow"

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
