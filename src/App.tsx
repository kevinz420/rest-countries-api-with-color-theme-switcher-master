import { createContext, useState } from 'react';
import './App.css';
import { Header } from './components/Header'
import {Home} from './components/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { DetailsPage } from './components/DetailsPage';
import { RestCountries } from './types';

export const ThemeContext = createContext('light-mode')

function App() {
  const [theme, setTheme] = useState('light-mode')
  const [data, setData] = useState<RestCountries[]>([])

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <ThemeContext.Provider value={theme}>
          <Header setTheme={setTheme}/>
          <Switch>
              <Route path="/" exact render={() => <Home setData={setData} data={data}/>}/>
              <Route path={"/:code"} component={DetailsPage}/>
          </Switch>
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
