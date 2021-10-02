import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart';
function App() {
  return (
    <Router>
        <Header />
        <Route path="/signup">
          <Login />
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
