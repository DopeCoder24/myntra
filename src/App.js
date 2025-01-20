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
import { mediaimgdata, storeimgdata } from "./data/data";
import Images from "./components/Images";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="logo">
            <NavLink to="/">
              <img src="https://images.indianexpress.com/2021/01/myntra.png" />
            </NavLink>
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
          <div className="shop">
            <h5>ONLINE SHOPPING</h5>
            <NavLink to="/men">Men</NavLink>
            <NavLink to="/women">Women</NavLink>
            <NavLink to="/kids">Kids</NavLink>
            <NavLink to="/living">Home & living</NavLink>
            <NavLink to="/beauty">Beauty</NavLink>
            <NavLink to="/gift">Gift Cards</NavLink>
            <NavLink to="/false">Myntra Insider</NavLink>
          </div>
          <div className="policies">
            <h5>CUSTOMER POLICIES</h5>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/cancel">Cancellation</NavLink>
            <NavLink to="/returns">Returns</NavLink>
            <NavLink to="/policy">Privacy Policy</NavLink>
          </div>
          <div className="app-exp">
            <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
            <div className="items">
              {storeimgdata.map((currentdata) => (
                <Images img={currentdata.img} />
              ))}
            </div>
            <div className="media">
              <h5>KEEP IN TOUCH</h5>
              <div className="items">
                {mediaimgdata.map((currentdata) => (
                  <Images img={currentdata.img} />
                ))}
              </div>
            </div>
          </div>
          <div className="promises">
            <div className="org">
              <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" />
              <p>
                <span>100% ORIGINAL</span> guarantee for all products at
                myntra.com
              </p>
            </div>
            <div className="back">
              <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" />
              <p>
                <span>Return within 14days</span> of receiving your order
              </p>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
