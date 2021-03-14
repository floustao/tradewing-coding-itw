# Boilerplate 1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Main Dependencies
- react 17 (from CRA)
- testing-library (from CRA)
- Styled-components
- husky + lint-staged
- react-router-dom
- nprogress

## Main Dev Dependencies
- prettier
- jest-axe + @types/jest-axe,
- webpack-bundle-analyzer + progress-bar-webpack-plugin

## Extra config in package.json
Runners:
- `yarn clean` -> removes /node_modules
- `yarn analyze` -> creates an interactive treemap visualization of the contents of all the bundles.

Pre-commit:
- uses husky & lint-staged to run prettier on save

Browslerlist:
- "not ie 11"

### Main commands
- `yarn start` -> runs the app in the development mode.
- `yarn test` -> launches the test runner in the interactive watch mode.
- `yarn build` -> builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
