import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Toolbar from './components/Toolbar';

import classes from './style.module.scss';

const Navbar = ({ title, locale, theme }) => {
  const navigate = useNavigate();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);


  const userDetails = useSelector((state) => state.client.userDetails);
  const goHome = () => {
    navigate('/');
  };

  return (
    <div className={classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src="/vite.svg" alt="logo" className={classes.logo} />
          <div className={classes.title}>{title}</div>
        </div>
        <div className={classes["toolbar-container"]}>
          <div className={classes["hamburger-icon-wrapper"]}>
            <MenuIcon onClick={() => setHamburgerOpen(true)}></MenuIcon>
          </div>
          <Drawer
            open={hamburgerOpen}
            anchor={"right"}
            onClose={() => setHamburgerOpen(false)}
          >
            <div className={classes["drawer-wrapper"]}>
              <Toolbar title={title} locale={locale} theme={theme} userDetails={userDetails} />
            </div>
          </Drawer>
        </div>
        <Toolbar title={title} locale={locale} theme={theme} userDetails={userDetails} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

export default Navbar;
