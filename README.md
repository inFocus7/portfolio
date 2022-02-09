# Portfolio 👀 (older version)

#### [fabianswe.com](https://www.fabianswe.com) (now hosting v3 using Go + gRPC. private codebase)

 My portfolio's front end utilizing [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [React](http://reactjs.org/), and [Apollo](http://apollographql.com/) Client. It makes query calls to my backend [GraphQL](http://graphql.org/) API to display information.

## TODO

* Better loading. (animation vs. splash screen)
* Make switching projects faster. (Or at least have `isLoading` in between switches to provide feedback)
* Make `duration` from `scroll-link`s in `Header.tsx` speed dependant on screen height. The current duration speed (500) could seem laggish on smaller devices.
* Import/look into the necessary Google Fonts (ex. Google font for `<h2>`)
* Modify for mobile displays. 📱
* Look into SEOs for SPAs 🤓
* Design it with the intention of "fun"! 😄
* Add blog post section. 📄
* Decrease First Load JS (**226 kB** as of 6.18.2020) 🐌
  * SVGs: Remove, minimize, or host online.
  * Remove some 3rd party components.
    * Manual `react-typical` implementation.
* `<span>` some aos-ed components to not mess with page width. (ex. `StylizedBadge`)
