import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * A reusable navigation bar component.
 *
 * @param {Object[]} menuData - An array of objects containing navigation menu items.
 * @param {string} menuData[].to - The URL to navigate to.
 * @param {string} menuData[].name - The display name of the menu item.
 * @return {JSX.Element} The JSX element representing the navigation bar.
 */
export default function Navbar({ menuData }) {
  return (
    <nav className='navbar'>
      <ul className='navbar__menu'>
        {menuData?.map(({ to, name }, idx) => (
          <li key={idx} className='navbar__item'>
            <NavLink to={to} className={'navbar__link'}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  menuData: PropTypes.array.isRequired,
};
