import React, { createContext, useContext, useState } from 'react';
import GlobalVariables from '../Common/globalVariables';

// Create Theme Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') ?? GlobalVariables.initialTheme);

    // window.localStorage.setItem('theme', theme);
    const toggleTheme = () => {
        setTheme((prev) =>
            (prev === 'light' ? 'dark' : 'light')
        );

        window.localStorage.setItem('theme', theme == 'light' ? 'dark' : 'light');
        if (document.body.classList.contains('dark')) {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div data-theme={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};
