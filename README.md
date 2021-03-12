## Playing around
Will expand on this soon.

## Quickstart

To get started:

```bash
npm install
npm run-script start
```

the start command will give you a network path to the app, in chrome that seems to be he best way to get it to run.

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project


# Initializing a new lit-element component
You can use hygen to quickly scaffold a new component. For a LitElement component:

`hygen my-component new my-new-element --path src/components`

this will create the `/src/components/my-new-element/` directory containing 2 files:

`MyNewElement.js # class`

`my-new-element.js # registration`

