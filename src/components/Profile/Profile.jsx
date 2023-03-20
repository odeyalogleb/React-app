import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';



const Profile = (props) => {
    debugger;
    return (
        <div>          
            <ProfileHeader />
            <MyPostsContainer data = {props.data} 
            dispatch = {props.dispatch} />
        </div>
    );
}

export default Profile;