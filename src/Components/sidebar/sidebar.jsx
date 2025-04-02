import { useContext, useState, useEffect } from "react";

import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import ProfilePic from '../../assets/mustafa-burhani.jpg';

import ThemeToggle from "../themeToggle/themeToggle";
import GlobalVariables from "../../Common/globalVariables";

import { SideBarContext } from "../../Provider/SidebarContext";

import './sidebar.scss';

const sections = ["home", "about", "skills", "resume", "contact"];
const adminOptions = [
    { name: 'Admin', link: '/admin' },
    { name: 'Manage Todo List', link: '/admin/todolist' },
    { name: 'Manage User', link: '/admin/userlist' },
    { name: 'useReducer', link: '/admin/useReducer' },
];
const colorPalette = ['#149ddd', '#ab0000', '#a0a005', '#008f00', '#800080'];

const themeColor__ = window.localStorage.getItem('themeColor');
export default function SideBar() {
    const [activeMenu, setActiveMenu] = useState('home');
    const [activeAdminMenu, setActiveAdminMenu] = useState('');
    const [themeColor, setThemeColor] = useState(themeColor__ != undefined ? themeColor__ : '#149ddd');
    const { sideBarState, setsideBarState } = useContext(SideBarContext);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) { // Adjust threshold as needed
                        currentSection = id;
                    }
                }
            });

            setActiveMenu(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const __setThemeColor = (color) => {
        setThemeColor(color);

        window.localStorage.setItem('themeColor', color);
        document.documentElement.style.setProperty("--theme-color", `${color}`);
    }

    const onColorChange = (e) => {
        setThemeColor(e.target.value);

        window.localStorage.setItem('themeColor', e.target.value);
        document.documentElement.style.setProperty("--theme-color", `${e.target.value}`);
    }

    return <section className="sidebar-section">
        <div className="profile-pic">
            <RouterLink to={'/'}>
                <img src={ProfilePic} alt="" />
            </RouterLink>

        </div>

        <h1 className="owner-name">{GlobalVariables.ownerName}</h1>

        <div className="social-media-area">
            <ul>
                <li>
                    <a href={GlobalVariables.instaLink} target='_blank'>
                        <i className='fa-brands fa-instagram color-white'></i>
                    </a>
                </li>
                <li>
                    <a href={GlobalVariables.linkedinLink} target='_blank'>
                        <i className='fa-brands fa-linkedin color-white'></i>
                    </a>
                </li>
                <li>
                    <a href={GlobalVariables.skypeLink} target='_blank'>
                        <i className='fa-brands fa-skype color-white'></i>
                    </a>
                </li>
            </ul>
        </div>

        <div className="menu-list">
            <ul>
                {
                    GlobalVariables.isAdmin &&
                    <li className="admin-dropdown">
                        <div className="dropdown-action">
                            <button className="color-white" onClick={() => { setActiveAdminMenu(activeAdminMenu == "show" ? '' : 'show') }}>
                                Admin
                                <i className={`fa fa-chevron-down ms-2 ${activeAdminMenu}`}></i>
                            </button>
                        </div>
                        <div className={`admin-menu-dropdown mt-3 ${activeAdminMenu}`}>
                            {
                                adminOptions.map((adminMenus, index) => {
                                    return <RouterLink className={`color-white`} to={adminMenus.link} key={index}>{adminMenus.name}</RouterLink>
                                })
                            }
                        </div>

                    </li>
                }
                {
                    sections.map((item, index) => {
                        return <li key={index}>
                            <ScrollLink
                                to={item}
                                smooth={true} duration={10}
                                className={`color-white ${activeMenu == item ? 'active' : ''}`}
                                onClick={() => { setsideBarState('close'); setActiveMenu(item) }}>
                                {item}
                            </ScrollLink>
                        </li>
                    })
                }
            </ul>
        </div>

        <div className="d-flex justify-content-center">
            <ThemeToggle />
        </div>

        <div className="color-palette-wrapper mt-5">
            <input type="color" className="color-input" value={themeColor} onChange={(e) => onColorChange(e)} />
            {
                colorPalette.map((colorItems, index) => {
                    return <div
                        className={`color-palette ${themeColor == colorItems ? 'active' : ''}`}
                        onClick={() => __setThemeColor(colorItems)}
                        style={{ backgroundColor: colorItems }}
                        key={index}
                    />
                })
            }
        </div>
    </section>;
}