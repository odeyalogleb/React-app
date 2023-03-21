import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';



const Profile = () => {
    debugger;
    return (
        <div>          
            <ProfileHeader />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;