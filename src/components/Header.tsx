import React, { useContext } from 'react'
import '../App.css'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../App'

interface HeaderProps {
    onClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({onClick}) => {
    const theme = useContext(ThemeContext)
    const mode = theme === 'light-mode' ? 'Dark Mode' : 'Light Mode'

    return (
        <div className={`header ${theme}`}>
            <h1>Where in the world?</h1>
            <div className="toggle" onClick={onClick}>
                <FontAwesomeIcon icon={faMoon}/>
                <p>{mode}</p>
            </div>
        </div>
    );
}