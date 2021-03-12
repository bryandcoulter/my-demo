const inflection = require('inflection');
module.exports = {
  helpers: {
    classifyDashed: s => {
      return inflection.classify(s.replace(/-/gi, '_'));
    },
  }
}
