import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Toolbar from './components/Toolbar';

import classes from './style.module.scss';

const AdminNavbar = ({ title, locale, theme }) => {
  const navigate = useNavigate();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);


  const userDetails = useSelector((state) => state.client.userDetails);
  const goHome = () => {
    navigate('/admin');
  };

  return (
    <div className={classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes["hamburger-icon-wrapper"]}>
          <MenuIcon onClick={() => setHamburgerOpen(true)}></MenuIcon>
        </div>
        <div className={classes.logoImage} onClick={goHome}>
          <img src="/vite.svg" alt="logo" className={classes.logo} />
          <div className={classes.title}>{title}</div>
        </div>

        <div className={classes["toolbar-container"]}>
          <Drawer
            open={hamburgerOpen}
            anchor={"left"}
            onClose={() => setHamburgerOpen(false)}
          >
            <div className={classes["drawer-wrapper"]}>
              <Toolbar title={title} locale={locale} theme={theme} userDetails={userDetails} />
            </div>
          </Drawer>
        </div>
        <div className={classes["admin-message"]}>
          <p>Hi, Admin {userDetails.user_name}</p>
        </div>
      </div>
    </div>
  );
};

AdminNavbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

export default AdminNavbar;
