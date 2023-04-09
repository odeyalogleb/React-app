import classes from './User.module.css';
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

const User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + props.data.id}>
                    <img className={classes.image} src={props.data.photos.small != null ?
                        props.data.photos.small : userPhoto} alt="" />
                </NavLink>
            </div>
            <div>
                {props.data.followed ?
                    <button disabled={props.isFollowing.some(id => id === props.data.id)} 
                    onClick={() => { props.unfollowThunk(props.data.id)
                    }}>Unfollow</button>
                    : <button disabled={props.isFollowing.some(id => id === props.data.id)} 
                    onClick={() => { props.followThunk(props.data.id)
                    }}>Follow</button>}
            </div>
            <div>
                {props.data.name}
            </div>
            <div>
                {props.data.status}
            </div>
            <div>
                {"props.data.location.country"}
                {"props.data.location.city"}
            </div>
        </div>
    );
}

export default User;