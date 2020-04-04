# undefined is not a theme

[![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/v/christianhg.undefined.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=christianhg.undefined)

> A dark, slightly opinionated, but otherwise no-nonsense theme for [Visual Studio Code](http://code.visualstudio.com/)

## Highlights

- Dark and toned-down
- Few colours, semantically used
- Uses one colour for all literals
- Emphasizes comments and `this`
- De-emphasizes TypeScript types

![Screenshot](https://raw.githubusercontent.com/christianhg/vscode-theme-undefined/master/screenshot.png)

## Colour Categories

- Blue: **Function calls** (`map(add(2))`, `new Bar()`)
- Green: **Literals** (`42`, `'foo'`, `/"[^"]*"/gus`, ...)
- Yellow: **Operators** (`&&`, `===`, `<`, ...)
- Red: **Attention seekers** (`/** comments */`, `this`, `debugger`)
- Grey: **Non-essentials** (`: string`, `import`, `export`, `;`, ...)
- White: **Defaults** (variables, properties and everything else)

## Deviants a.k.a. Known Issues

- Array and object literals are not coloured as "Literals".
- The entire editor frame isn't fully styled yet.

## Motivations, Goals and Explanations

- The theme aims to provide a similar, toned-down look across languages used for web development (`.js`, `.html`, `.css`, `.json`...).
- Fewer colour categories makes it easier to scan a piece of code and figure out what is what.
- It's simply not feasible to give all literals distinct colours. Therefore they are all just given the same colour.
- `this` makes code harder to understand. Therefore it is emphasized to make sure you don't miss it.
- Code comments should be used to explain code that is otherwise ambiguous. Therefore they are emphasized to make sure you don't miss them.
- One of the great things about TypeScript is that you can get away with bloating your code with few annotations and still get type safety. Those you actually need to satisfy the compiler should provide minimal visual clutter to let you focus on the actual code.

## Development

1. Clone the repo and open it in VS Code.
2. Press `F5` to run an extension host
3. Edit the colours in `./undefined.js`.
4. Run `npm run build` to update `./themes/undefined-color-theme.json`.
5. Commit the change.
6. Run `vsce publish <version-number>` to create a separate commit with the version bump.

## Credits

- Lots of inspiration is drawn from the excellent [Alabaster Theme](https://github.com/tonsky/vscode-theme-alabaster).
- Colours are taken from the [Atom One Dark syntax theme](https://github.com/atom/atom/tree/master/packages/one-dark-syntax). Mainly because those are some pleasant and popular colours. But also to provide a consistent feel if you are using the theme in other contexts like [Atom One Dark for Hyper](https://github.com/mdo/hyperterm-atom-dark).
