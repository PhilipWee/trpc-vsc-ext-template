# VSCode TRPC Template for e2e typesafety

A template for making vscode extensions with trpc

## Demo
[![](https://markdown-videos-api.jorgenkh.no/youtube/ePMEEPKqwtE)](https://youtu.be/ePMEEPKqwtE)

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
| Styling             | Tailwind CSS |

### Styling
The tailwind config is configured such that it matches the color scheme and fonts of the vscode theme the user is using as far as possible, so that there is minimal UI clashing

### Base Project Setup

## Project Structure

```
root
├── apps
│   ├── ui          # Webview UI that opens when the shortcut is pressed
│   └── vsc-ext     # Template window
├── components      # Stores shadcn primitives
├── shared
│   ├── helpers     # Helper functions
│   └── types       # Global types
```

### Window opening example

Right now, the default function is set to always open the webview panel to the side of the active text editor, if any, when the shortcut is pressed. You can edit it for your own purposes.

## 🏃 Getting Started

1. Replace all instances of the word `vsc-trpc-template` in the codebase with your new repo name, for example `taffy`
1. Run `npm i` to install necessary packages
1. Run `npm run serve` to start the build (If this doesn't work the first time, stop the process and run it again)
1. Press `f5` to open the development window
1. Press `Ctrl+Shift+M` in the development window to open the window to see the message passing sample

## Debugging

If there are issues running the keyboard shortcut `ctrl+shift+m`, search the existing keyboard shortcuts with `f1 >  Preferences: Open Keyboard Shortcuts` and search for `ctrl shift m` and make sure there are no clashing keyboard shortcuts.

## 📃 License

MIT License
