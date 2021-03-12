## Playing around
Will expand on this soon.

## Quickstart

To get started:

```bash
npm install
npm run-script start
```

The start command will give you a network path to the app, in chrome that seems to be the best way to get it to run.

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

# Create an executable bundle of the components
When you run the build command it will create a UMD bundle of the components

Right now it is configured to get all components that are a dependency of the my-demo main component.

If you wish to add other components just import them in the bundle-dep.js file.

# Static Demo
The static demo has an index page what will allow you to test your bundle. The new bundle automatically gets generated in that folder when you run the build command.

With this just being a static html page you can run `http-server` on the static demo dir and load the page.

If you don't have http-server it is a global install at `npm add -g http-server`