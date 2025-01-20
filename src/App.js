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
        <div className="footer">
          <h5>ONLINE SHOPPING</h5>
          <div className="shop">
            <NavLink to="/men">Men</NavLink>
            <NavLink to="/women">women</NavLink>
            <NavLink to="/kids">kids</NavLink>
            <NavLink to="/living">Home & living</NavLink>
            <NavLink to="/beauty">Beauty</NavLink>
            <NavLink to="/gift">Gift Cards</NavLink>
            <NavLink to="/false">Myntra Insider</NavLink>
          </div>
          <div className="policies">
            <h5>CUSTOMER POLICIES</h5>
          </div>
          <div className="apps">
            <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
          </div>
          <div className="promises">
            <div className="org"></div>
            <div className="return"></div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
