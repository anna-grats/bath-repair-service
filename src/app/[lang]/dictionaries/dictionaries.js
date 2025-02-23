import 'server-only'

const dictionaries = {
    en: () => import('.//en.json').then((module) => module.default),
    es: () => import('.//es.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
    if (dictionaries[locale]) {
        return dictionaries[locale]();
    } else {
        console.warn(`Locale '${locale}' not found. Using default locale 'en'.`);
        return dictionaries['en']();
    }
};