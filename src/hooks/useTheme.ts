import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState('theme-light');

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light'
        );
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;
