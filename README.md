# TypeScript Next.js Starter

This is a TypeScript starter for Next.js that includes all you need to build amazing projects 🔥

-   📏 **ESLint** — For linting
-   💖 **Prettier** - Opinionated Code Formatter
-   🐶 **Husky** — For custom git hooks
-   👩‍🎤 **Emotion** - A CSS-in-JS library for styling apps quickly
-   ⚛️ **Redux** - A centralized state management library
-   ⚛️ **Redux-Saga** - For managing side effects through Redux

## 🚀 Getting started

Clone this repository and run the following commands inside the project folder:

1. `npm install`;
4. `npm run dev`;

To view the project open `http://localhost:3000`.

## Notes

When we run `npm run dev`, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
