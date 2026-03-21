import { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    // defaults
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [palette, setPalette] = useState(localStorage.getItem('palette') || 'cool');
    const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'medium');
    const [fontFamily, setFontFamily] = useState(localStorage.getItem('fontFamily') || 'system');

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        root.setAttribute('data-palette', palette);
        root.setAttribute('data-font-size', fontSize);
        root.setAttribute('data-font-family', fontFamily);

        localStorage.setItem('theme', theme);
        localStorage.setItem('palette', palette);
        localStorage.setItem('fontSize', fontSize);
        localStorage.setItem('fontFamily', fontFamily);
    }, [theme, palette, fontSize, fontFamily]);

    return (
        <SettingsContext.Provider value={{
            theme, setTheme,
            palette, setPalette,
            fontSize, setFontSize,
            fontFamily, setFontFamily
        }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);
