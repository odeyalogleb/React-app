import classes from './User.module.css';

const User = (props) => {
    return (
        <div>
            <div>
                <img className={classes.image} src={props.data.photoURL} alt="" />
            </div>
            <div>
                {props.data.followed ? 
                    <button onClick={ () => props.unfollow(props.data.id)}>Unfollow</button> 
                    :<button onClick={ () => props.follow(props.data.id)}>Follow</button> }
            </div>
            <div>
                {props.data.name}
            </div>
            <div>
                {props.data.status}
            </div>
            <div>
                {props.data.location.country}
                {props.data.location.city}
            </div>
        </div>
    );
}

export default User;