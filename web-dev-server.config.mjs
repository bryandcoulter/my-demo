// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');
// const parseToEsm = './web-server-transform-plugin');
function parseToEsm() {
  return {
    transform(context) {
      const filesToTransform = ['/node_modules/page/index.js', '/node_modules/isarray/index.js', '/node_modules/path-to-regexp/index.js', '/node_modules/qs/lib/utils.js', '/node_modules/qs/lib/parse.js'];
      if (filesToTransform.includes(context.path)) {
        console.log('found');
        return context.body;
      }
    },
  }
}


export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: '/',
  watch: !hmr,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  appIndex: './index.html',

  /** Confgure bare import resolve plugin */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development']
  // },

  plugins: [
    parseToEsm()
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
  ],

  // See documentation for all available options
});
