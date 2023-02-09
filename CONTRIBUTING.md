# Coredomains Contributing Guide

Hi! We're really excited that you're interested in contributing to CoreDAO Domains! Before submitting your contribution, please read through the following guide.

## Repo Setup

The Coredomains repo is a monorepo using pnpm workspaces. The package manager used to install and link dependencies must be [pnpm](https://pnpm.io/).

To develop and test the core `cnsjs` package:

1. Run `pnpm i` in Coredomains's root folder.

2. Run `pnpm run build` in Coredomains's root folder.

3. If you are developing Coredomains itself, you can go to `packages/base` and run `pnpm run test` to automatically rebuild Coredomains whenever you change its code.

## Debugging

To use breakpoints and explore code execution, you can use the ["Run and Debug"](https://code.visualstudio.com/docs/editor/debugging) feature from VS Code.

1. Add a `debugger` statement where you want to stop the code execution.

2. Click the "Run and Debug" icon in the activity bar of the editor, which opens the [_Run and Debug view_](https://code.visualstudio.com/docs/editor/debugging#_run-and-debug-view).

3. Click the "JavaScript Debug Terminal" button in the _Run and Debug view_, which opens a terminal in VS Code.
