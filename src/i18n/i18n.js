import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import JT from './locales/zh-jt'
import FT from './locales/zh-ft'
import EN from './locales/zh-en'

const Language = {
    zh: {
        translation: JT
    },
    ft: {
        translation: FT
    },
    en: {
        translation: EN
    }
}

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'zh',
        lng: 'en',
        debug: true,
        resources: Language,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n