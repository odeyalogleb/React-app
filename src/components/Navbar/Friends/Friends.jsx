import Friend from './Friend/Friend';
import classes from './Friends.module.css';

const Friends = (props) =>{

    let MyFriends = props.data.MyFriendsData
        .map((friend) => <Friend name = {friend.name} />) ;
    return (
        <div className={classes.content}>
            <h3>My Friends</h3>
            <div className={classes.body}>
                {MyFriends}
            </div>
             
        </div>
    );
}

export default Friends;