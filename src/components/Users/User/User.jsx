import classes from './User.module.css';
import userPhoto from '../../../assets/images/user.png'

const User = (props) => {
    debugger;
    return (
        <div>
            <div>
                <img className={classes.image} src={props.data.photos.small != null ? 
                    props.data.photos.small 
                    : userPhoto} alt="" />
            </div>
            <div>
                {props.data.followed ? 
                    <button onClick={ () => props.unFollow(props.data.id)}>Unfollow</button> 
                    :<button onClick={ () => props.follow(props.data.id)}>Follow</button> }
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