const applyConfig = (config) => {
  config.settings.isMultilingual = true;
  config.settings.supportedLanguages = ['pt-br', 'en', 'es'];
  config.settings.defaultLanguage = 'pt-br';

  return config;
};

export default applyConfig;
