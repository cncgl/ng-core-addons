var tasks = require("./tasks/index.js");

module.exports = {
  hooks: [
  ],
  tasks: [
    {
      name: 'ngWebpack',
      init: tasks.webpack
    },
    {
      name: 'ngPickFiles',
      init: tasks.pickIndex
    },
    {
      name: 'cacheTemplates',
      init: tasks.cacheTemplates
    },
    {
      name: 'pickAssets',
      init: tasks.pickAssets
    },
    {
      name:'vendorsCss',
      init: tasks.vendorsCss
    }
  ],
  commands:[
  ],
  afterInstall: function(commands){
  }
};
