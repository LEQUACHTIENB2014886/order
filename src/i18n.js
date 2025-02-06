import { createI18n } from "vue-i18n";
import vi from "./locales/vi.json";
import en from "./locales/en.json";
import zhCN from "./locales/zh-cn.json";
import zhTW from "./locales/zh-tw.json";
import store from "./store"; 
const messages = {
  vi,
  en,
  "zh-cn": zhCN,
  "zh-tw": zhTW,
};

const i18n = createI18n({
  legacy: false,
  locale: store.state.language.locale || "vi", 
  messages,
});

export default i18n;
