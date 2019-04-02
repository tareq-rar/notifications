import React, {createContext} from 'react';
import Locales from '../../../locales';

export const locales = {
    ar: Locales.ar,
    en: Locales.en,
};

export const LocalesContext = createContext(locales.en);