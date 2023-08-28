# Social Network

This project was bootstrapped with [Vite](https://vitejs.dev/) using the [TS](https://www.typescriptlang.org/) template, which is a tool that enables the creation of React projects with lightning-fast compilation time ⚡

The package manager used for this project is [pnpm](https://pnpm.io/es/) 📦, which is known for being 3 times faster than npm.

All the images have been optimized using [squoosh](https://squoosh.app/) 🖼️ to reduce their size to a minimum and convert them to the webp format (webp images are typically 15%-34% smaller than images in other formats).

## Run project 🎮

To execute this project you will need to do the next steps:

1. nvm use recommended to use the node version defined (optional)
2. npm or pnpm install
3. npm or pnpm start

### Pages

- Home 🏠:
  - User can see a list of the social network users.

- User Details 📜:

  - Users can see more information related with the user selected.

- NotFoundPage 🚫:
  - If a user attempts to access a page that does not exist within the application, they will be directed to a custom 404 page, indicating that the requested page does not exist. This ensures a user-friendly experience when encountering invalid or non-existent URLs.


## Interesting Libraries Added 📘

### Dependencies

- [react-query](https://tanstack.com/query/v4/docs/react/overview) ⤵️ : a data-fetching and state management library for React applications that simplifies fetching, caching, and updating data
- [i18N](https://react.i18next.com/):🗺️ is a powerful internationalization framework used to have all the text reusable and located in the same place 📖
- [react-router](https://reactrouter.com/en/main):🚗 react router provides a declarative way to define the routes in your application, associating each route with a specific component

### Dev Dependencies

- [commitlint](https://commitlint.js.org/#/) ✔️: commitlint helps your team adhere to a commit convention (executed in commit-msg husky hook 🪝).
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)🐙: The @testing-library family of packages helps you test UI components in a user-centric way (executed in pre-prush husky hook 🪝)
- vitest 🏗️: package to replace jest when the project is build with vite (executed in pre-prush husky hook 🪝).
- [prettier](https://prettier.io/)🎨: Prettier is an opinionated code formatter used in this case to format the code and no having different styles (executed in pre-commit husky hook 🪝)
- [husky](https://github.com/typicode/husky)🐶: Hook library to execute different command in pre-push, pre-commit, commit-msg...
- [lint-staged](https://github.com/okonet/lint-staged): package useful to apply lint or prettier rules with hooks (executed in pre-commit husky hook 🪝)


## Architecture

- `Pages`: Here you can find the views to be displayed for the user
- `Components`: items that can be reused in different views
- `Context`: React API Context used along the aplication
- `Hooks`: Hooks used in the views to manage some data
- `Locales`: Json translations files used for Reacti18N
- `Theme`: The theme used in the project with the css constants
- `Utils`: General functions that could be reused in the project like it would be in this case the search function with debounce

Depends the complexity of the component or the view these folders could have an own folder of `components` or `utils` to externalize the logistic related with that view and reducing the file length and increasing the redeability as much as possible.

 I  have implemented two layers to handle the API calls:

- `Repositories`: The primary responsibility of repositories would be to handle API endpoint calls and data mapping before passing it to other parts of the application. By centralizing these operations, any future changes in the API's attributes or parameters could be managed more efficiently.

- `Services`: The services layer acts as an intermediary between the repositories and hooks. This layer would handle the more data-centric tasks, such as data modifications or additional operations.


`Github` has been used as code repository and running the test in an extenal machine on every main push.

## Available Scripts 🖥️

In the project directory, you can run:

### `npm  start` or `pnpm  start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test` or `pnpm run test`

Launches the test runner in watchMode = false.\
See the section about [running tests](https://vitest.dev/api/) for more information.

For testing I have followed a small approach to use:

- Unit test with [jest](https://jestjs.io/es-ES/)
- Component test with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

If I had had more time i would have included some kind of e2e test like:

- [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/)

### `npm run lint` or `pnpm run lint`

To check the lint in the project

### `npm run build`

simply run the vite build command. By default, it uses <root>/index.html as the build entry point,
and produces an application bundle that is suitable to be served over a static hosting service

See the section about [build](https://vitejs.dev/guide/build.html) for more information.
