import { createI18n } from "vue-i18n";
import tw from './tw.json';

const i18n = createI18n({
    locale: localStorage.getItem("locale") ? localStorage.getItem("locale"): "tw",
    globalInjection: true,
    legacy: false,
    fallbackLocale: "tw",
    messages: {
        tw: {...tw},
    }
})
export default i18n;