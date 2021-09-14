
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Blocos from './pages/Blocos/Blocos';
import Linhas from './pages/Linhas/Linhas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Blocos/>
        </Route>
        <Route path="/linhas" exact>
          <Linhas/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
