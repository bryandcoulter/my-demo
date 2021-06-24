function parseToEsm() {
  return {
    transform(context) {
      const filesToTransform = ['/node_modules/page/index.js'];
      if (filesToTransform.includes(context.path)) {
        console.log('found');
        return context.body;
      }
    },
  }
}

module.exports = {
  parseToEsm
};