const settings = {};

settings.app_name = "Invoice Digitization App";
settings.app_title = "What is Invoice Digitization App?";
settings.app_moto = "Invoice Digitization App";
settings.app_explanatory = "Invoice Digitization App";
settings.app_benefits = [];
settings.app_benefit_1 = "save time";
settings.app_benefit_2 = "save paper";
settings.app_benefit_3 = "save money";

const get = (key) => {
  return settings[key];
};

module.exports = {
  get,
};
