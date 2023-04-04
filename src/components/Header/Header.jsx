import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    debugger;
    return (
        <header className={classes.header}>
            <img src='https://www.nicepng.com/png/full/443-4438504_facebook-logo-png.png' />
            <div className={classes.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>

    );
}

export default Header;