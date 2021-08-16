import { createContext, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import {Home} from './pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { DetailsPage } from './pages/DetailsPage/details-page';
import { RestCountries } from './interfaces/types';

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
