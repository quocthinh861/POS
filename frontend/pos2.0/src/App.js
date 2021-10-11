import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart';
import Signup from './components/Login/Signup';

function App() {
  return (
    <Router>
        <Header />
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
    </Router>
  );
}

export default App;
