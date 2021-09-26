import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
function App() {
  return (
    <Router>
        <Header />
        <Route>
          <Login />
        </Route>
    </Router>
  );
}

export default App;
