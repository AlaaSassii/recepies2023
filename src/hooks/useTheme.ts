import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        // Try to retrieve the theme from localStorage, or use 'theme-light' as the default.
        return localStorage.getItem('theme') || 'theme-light';
    });

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light'
        );
    };

    useEffect(() => {
        // Set the theme attribute on the document's root element
        document.documentElement.setAttribute('data-theme', theme);

        // Save the theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;
