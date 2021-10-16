import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import classes from "./NavbarMain.module.css";
import "./NavbarMain.css";
const NavbarMain = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const [finalVal, setfinalVal] = useState("");

  const hamburger = useRef(null);
  const navMenu = useRef(null);

  const mobileMenu = () => {
    const hamCurr = hamburger.current;
    const navCurr = navMenu.current;
    hamCurr.classList.toggle("active");
    navCurr.classList.toggle("active");
  };

  const history = useHistory();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      
    mobileMenu();
      setfinalVal(searchVal);

    }, 1500);
    if (props.pathName !== "/") {
      history.push("/");
    }
    return () => clearTimeout(timeOut);
  }, [searchVal, props, history]);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">Movie Zone</div>
        <ul className="nav-menu" ref={navMenu}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={mobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link" onClick={mobileMenu}>
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <div className="sbexample1">
              <div className="search">
                <input
                  type="search"
                  placeholder="Search Movies"
                  onChange={(e) => {
                    setSearchVal(e.target.value);
                  }}
                  value={searchVal}
                  className="searchTerm"
                />
              </div>
            </div>
          </li>
        </ul>
        <div className="hamburger" ref={hamburger} onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {props.searchInfo(finalVal)}
      </nav>
    </header>
  );
};

export default NavbarMain;
