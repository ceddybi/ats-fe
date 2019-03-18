import { addLocaleData } from "react-intl";
import arLang from "./entries/ar_SA";
import enLang from "./entries/en-US";
import esLang from "./entries/es_ES";
import frLang from "./entries/fr_FR";
import itLang from "./entries/it_IT";
import zhLang from "./entries/zh-Hans-CN";

const AppLocale = {
  en: enLang,
  zh: zhLang,
  ar: arLang,
  it: itLang,
  es: esLang,
  fr: frLang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.zh.data);
addLocaleData(AppLocale.ar.data);
addLocaleData(AppLocale.it.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.fr.data);

export default AppLocale;
