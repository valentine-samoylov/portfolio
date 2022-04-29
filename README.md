# Webpack Boilerplate (React + TypeScript Edition)

## Features

- Supports React + TypeScript
- React Refresh (HMR) (**Dev mode**)
- Styling preprocessors:
  - SASS/SCSS
  - PostCSS preprocessor
    - Autoprefixer
- Babel transpiller
- Source-maps for CSS and JS files (**Dev mode**)
- Minification of HTML/CSS/JS files (**Prod mode**)
- Optimization of images with Squoosh (**Prod mode**)
  - Images can be converted to WEBP format (**Prod mode**)
- SVGR converts SVG into React components and inserts them as inline SVG into HTML.
- ESlint and Stylelint
- Prettier
- Webpack Bundle Analyzer (**Prod mode**)
  - An HTML report file will be created in the **reports** folder.

## Scripts

To install dependencies:

```sh
yarn install
```

Start development mode:

```sh
yarn run start
```

Create production build:

```sh
yarn run build
```

Lint code:

```sh
yarn run lint
```

Format code with Prettier:

```sh
yarn run format
```
