import { NavLink } from 'react-router-dom';
import { FiBell, FiUser, FiCreditCard } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className='navbar__ul'>
        <li className='navbar__li'>
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="navbar__link"
          >
            <FiCreditCard size={24} />
          </NavLink>
        </li>
        <li className='navbar__li'>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="navbar__link"
          >
            <FiBell size={24} />
          </NavLink>
        </li>
        <li className='navbar__li'>
          <NavLink
            to="/about"
            activeClassName="active"
            className="navbar__link"
          >
            <FiUser size={24} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
