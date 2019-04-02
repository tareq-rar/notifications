import React, {createContext, useState, useEffect} from 'react';
import {GlobalContext} from './context';
import {themes} from "./theme";
import {locales} from "./locales";

function WithContextCustomHook(props){
    const [language, setLanguage] = useState('en')
    const contextMainData = {
        language: language,
        theme:themes.light,
        locale:locales.en,
        changeLanguage: (lang) =>{
            setContextData({
                ...contextData,
                locale: locales[lang]
            });
        },
        toggleTheme: (theme) => {
            setContextData({
                ...contextData,
                locale: themes[theme]
            });
        }
    }
    const [contextData, setContextData] = useState(contextMainData);
    // useEffect(() => {
    //     console.log('hi')
    //     changeLanguage();
    // });

    return(
        <GlobalContext.Provider value={contextData}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default WithContextCustomHook;