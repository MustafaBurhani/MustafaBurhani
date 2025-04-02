import { useContext } from 'react';
import { useTheme } from '../../Provider/ThemeContext';
import './themeToggle.scss';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return <div className='d-flex align-items-center theme-switch-toggle'>
        <p className={theme === 'light' ? 'active' : ''}>Light</p>
        <div className='theme-switch-wrapper d-flex'>
            <input type="checkbox" id="switch" onChange={toggleTheme} checked={theme === 'dark'} />
            <label htmlFor="switch">
                <i className={`fa-regular fa-sun ${theme === 'light' ? 'active' : ''}`}></i>
                <i className={`fa-regular fa-moon ${theme === 'dark' ? 'active' : ''}`}></i>
            </label>
        </div>
        <p className={theme === 'dark' ? 'active' : ''}>Dark</p>
    </div>
}