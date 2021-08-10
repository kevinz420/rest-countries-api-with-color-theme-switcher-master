import React, { useContext } from 'react'
import '../App.css'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../App'

interface HeaderProps {
    setTheme: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({setTheme}) => {
    const theme = useContext(ThemeContext)
    const mode = theme === 'light-mode' ? 'Dark Mode' : 'Light Mode'

    function changeTheme(){
        setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode')
    }

    return (
        <div className={"header"}>
            <h1>Where in the world?</h1>
            <div className="toggle" onClick={changeTheme}>
                <FontAwesomeIcon icon={faMoon}/>
                <p>{mode}</p>
            </div>
        </div>
    );
}