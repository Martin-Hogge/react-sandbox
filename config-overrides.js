module.exports = function override (config, env) {
  // allow importing from outside of app/src folder, ModuleScopePlugin prevents this.
  delete config.resolve.plugins.ModuleScopePlugin;
  return config;
};