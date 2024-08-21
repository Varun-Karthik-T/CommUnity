import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import english from "./locales/en.json" ;
import tamil from "./locales/tn.json";


let translations = {
en:{...english},
ta:{...tamil}
 };

const i = new I18n(translations);
i.locale = getLocales()[0].languageCode ?? "en";
i.enableFallback = true;

export default i;