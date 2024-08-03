import { Locale } from 'i18n.config';
import 'server-only';

const dictionaries = {
  en: () => import('../src/dictonaries/en.json').then((module) => module.default),
  fa: () => import('../src/dictonaries/fa.json').then((module) => module.default)
}


export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries["en"];
