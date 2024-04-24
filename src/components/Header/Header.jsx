import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://www.nicepng.com/png/full/443-4438504_facebook-logo-png.png' alt='' />
            <div className={classes.login}> 
            </div>
        </header>

    );
}

/*<div>
    {props.login}
    <button onClick={props.logout} >Log out</button>
</div>
                
                    : <NavLink to={'/login'}>Login</NavLink>}*/

export default Header;