// import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faHeart as regular,
} from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="logo">
            <img src="https://images.indianexpress.com/2021/01/myntra.png" />
          </div>
          <div className="nav-main">
            <NavLink to="/men">MEN</NavLink>
            <NavLink to="/women">WOMEN</NavLink>
            <NavLink to="/kids">KIDS</NavLink>
            <NavLink to="/living">HOME & LIVING</NavLink>
            <NavLink to="/beauty">BEAUTY</NavLink>
            <NavLink to="/studio">STUDIO</NavLink>
          </div>
          <div className="nav-search">
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>

            <input placeholder="Search for products brands and more" />
          </div>
          <div className="nav-right">
            <div className="user">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <span>Profile</span>
            </div>
            <div className="heart">
              <FontAwesomeIcon className="icon" icon={faHeart} />
              <span>Wishlist</span>
            </div>
            <div className="shopping">
              <FontAwesomeIcon className="icon" icon={faBagShopping} />
              <span>Bag</span>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
