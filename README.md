# VSCode TRPC Template for e2e typesafety

A template for making vscode extensions with trpc

## Architecture

This i an nx monorepo template for you to quickly get started building a vscode extension

The frontend is built with `vite`
The midend is built with `esbuild`

### Implementations

| Category            | Technology   |
| ------------------- | ------------ |
| Message Passing     | TRPC         |
| Frontend Components | Shadcn       |
| Frontend Framework  | React        |
| Midend Framework    | TRPC         |
| Keyboard Shortcuts  | Mousetrap.js |

### Base Project Setup

## Project Structure

apps
|\_**\_ ui (webview ui that opens when the shortcut is pressed)
|\_\_** vsc-ext (template window)
components (for storing shadcn primitives)
shared
|\_**\_ helpers (Helper functions)
|\_\_** types (global types)

### Window opening example

Right now, the default function is set to always open the webview panel to the side of the active text editor, if any, when the shortcut is pressed. You can edit it for your own purposes.

## 🏃 Getting Started

1. Run `npm i` to install necessary packages
2. Run `npm run serve` to start the build
3. Press `f5` to open the development window
4. Press `Ctrl+Shift+M` in the development window to open the window to see the message passing sample

## 📃 License

MIT License
