# Svelte + Vite + Jest Template App

This template should help get you started developing with Svelte in Vite, and testing with Jest.

The template is based on the template from the Vite website created by running the following:

```bash
npm init vite@latest example-svelte-app -- --template svelte
cd example-svelte-app
npm install
```

This creates a default "Hello World" project. The homepage says "HELLO WORLD!" and has a counter button courtest of a `Counter` component.

![screenshot](img/screenshot.png)

Clicking the button will update it the number in its inner text.

<img align="center" src="img/counter-component.png" alt="counter component" loading="lazy" width="323" height="106"/>

We can run the project with `npm run dev` and visit it at <localhost:3000>.

## But testing..

The Vite template has no testing setup included. And you should probably test your app! I did the ugly work of getting the right packages together for you. Fly chicklet, fly. 🐥

There are tests for the `App` and `Counter` components included. You can run the test suites with `npm run test`. To run the Jest in watch mode, you can run `npm run test:watch`.

Happy Svelte-Vite-Jesting!
