import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Toolbar from './components/Toolbar';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PersonIcon from '@mui/icons-material/Person';
import ShieldIcon from '@mui/icons-material/Shield';


import classes from './style.module.scss';

const AdminNavbar = ({ title, locale, theme }) => {
  const navigate = useNavigate();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);


  const userDetails = useSelector((state) => state.client.userDetails);
  const goHome = () => {
    navigate('/admin');
  };

  const goPlayerListPage = () => {
    navigate('/admin/player-list');
  };

  const goUserListPage = () => {
    navigate('/admin/create-player');
  };

  return (
    <>
      <div className={classes.headerWrapper} data-testid="navbar">
        <div className={classes.contentWrapper}>
          <div className={classes["title-container"]}>
            <div className={classes["hamburger-icon-wrapper"]}>
              <MenuIcon onClick={() => setHamburgerOpen(true)}></MenuIcon>
            </div>
            <div className={classes.logoImage} onClick={goHome}>
              <img src="/vite.svg" alt="logo" className={classes.logo} />
              <div className={classes.title}>Very Nice Football Admin</div>
            </div>
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
      <div className={classes['admin-sidebar']}>
        <div onClick={goPlayerListPage} className={classes["sidebar-button"]}>
          <SportsSoccerIcon />
        </div>
        <div onClick={goUserListPage} className={classes["sidebar-button"]}>
          <PersonIcon />
        </div>
        <div onClick={goUserListPage} className={classes["sidebar-button"]}>
          <ShieldIcon />
        </div>
      </div>
    </>
  );
};

AdminNavbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

export default AdminNavbar;
