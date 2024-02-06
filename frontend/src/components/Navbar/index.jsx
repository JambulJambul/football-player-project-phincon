import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';


import { setLocale, setTheme } from '@containers/App/actions';

import classes from './style.module.scss';

const Navbar = ({ title, locale, theme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const open = Boolean(menuPosition);
  const userDetails = useSelector((state) => state.client.userDetails);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

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
            asfafsfassafasf
          </Drawer>
          <div className={classes["toolbar-wrapper"]}>
            <div className={classes.toolbar}>
              {userDetails != null ? (
                <>
                  <div>
                    <p>Hi, {userDetails.user_name}</p>
                  </div>
                </>
              ) : (
                <>
                  <Link to={'/login'}>
                    <button className={classes["button"]}>
                      Login
                    </button>
                  </Link>
                  <Link to={'/register'}>
                    <button className={classes["button"]} >
                      Register
                    </button>
                  </Link>
                </>
              )}
              <div className={classes.theme} onClick={handleTheme} data-testid="toggleTheme">
                {theme === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
              </div>
              <div className={classes.toggle} onClick={handleClick}>
                <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
                <div className={classes.lang}>{locale}</div>
                <ExpandMoreIcon />
              </div>
            </div>
            <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
              <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
                <div className={classes.menu}>
                  <Avatar className={classes.menuAvatar} src="/id.png" />
                  <div className={classes.menuLang}>
                    <FormattedMessage id="app_lang_id" />
                  </div>
                </div>
              </MenuItem>
              <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
                <div className={classes.menu}>
                  <Avatar className={classes.menuAvatar} src="/en.png" />
                  <div className={classes.menuLang}>
                    <FormattedMessage id="app_lang_en" />
                  </div>
                </div>
              </MenuItem>
            </Menu>
          </div>
        </div>
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
