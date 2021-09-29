import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './Componants/Details/Details';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import LogIn from './Componants/LogIn/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/details/:itemID">
            <Details></Details>
          </Route>
          <Route exact path="/details">
            <Details></Details>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
