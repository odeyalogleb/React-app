import { NavLink } from "react-router-dom";
import classes from "./Dialog.module.css";

const Dialog = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://krot.info/uploads/posts/2022-03/1646237317_66-krot-info-p-obezyana-mem-smeshnie-foto-71.jpg" alt="" />
            </div>
            <div>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
            
        </div>
    );
}

export default Dialog;