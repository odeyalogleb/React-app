import { NavLink } from "react-router-dom";
import classes from "./Dialog.module.css";

const Dialog = (props) => {
    return (
        <div className={classes.content}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;