import { NavLink } from 'react-router-dom';

import { NavItemProps } from './types';

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `flex items-center my-3 py-2 pl-7 text-lg font-nino-mtavruli ${
          isActive
            ? 'bg-content-white text-primary-dark-blue'
            : 'bg-transparent text-content-white'
        }`
      }
      role='listitem'
    >
      {props.children}
    </NavLink>
  );
};

export default NavItem;
