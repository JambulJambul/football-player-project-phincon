import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { setLocale, setTheme } from '@containers/App/actions';
import classes from '../../style.module.scss'
import { setLogout } from '@containers/Client/actions';

const Toolbar = ({ title, locale, theme }) => {
    const dispatch = useDispatch();
    const [menuPosition, setMenuPosition] = useState(null);
    const open = Boolean(menuPosition);
    const userDetails = useSelector((state) => state.client.userDetails);

    const handleClick = (event) => {
        setMenuPosition(event.currentTarget);
    };

    const handleClose = () => {
        setMenuPosition(null);
    };

    const onSelectLang = (lang) => {
        if (lang !== locale) {
            dispatch(setLocale(lang));
        }
        handleClose();
    };

    const handleLogout = () => {
        dispatch(setLogout());
    }

    return (
        <>
            <div className={classes["toolbar-wrapper"]}>
                <List>
                    <ListItem>
                        <ListItemText primary={`Hi, Admin `+userDetails.user_name} />
                    </ListItem>
                    <ListItem component={Link} to={'/login'} onClick={handleLogout}>
                        <ListItemText primary="Sign Out" />
                    </ListItem>
                    <ListSubheader>Language</ListSubheader>
                    <ListItem onClick={handleClick}>
                        <ListItemText primary={
                            <div className={classes["language-list"]}>
                                <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
                                <div className={classes.lang}>{locale}</div>
                                <ExpandMoreIcon />
                            </div>
                        } />
                    </ListItem>
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
                </List>
                {/* <div className={classes.toolbar}>
                    <div>
                        <p>Hi, Admin {userDetails.user_name}</p>
                    </div>
                    <Link onClick={handleLogout} to={'/login'}>
                        <button className={classes["button"]}>
                            Sign Out
                        </button>
                    </Link>
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
                </Menu> */}
            </div>
        </>
    )
}

export default Toolbar