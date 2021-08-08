import { createContext, useState } from 'react';
import './App.css';
import { Search } from './components/Search'
import { Header } from './components/Header'

export const ThemeContext = createContext('light-mode')

function App() {
  const [theme, setTheme] = useState('light-mode')
  const [data, setData] = useState([])

  function changeTheme(){
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode')
  }

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={theme}>
        <Header onClick={changeTheme}/>
        <Search setData={setData}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
