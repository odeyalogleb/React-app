import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileHeader from './ProfileHeader/ProfileHeader';



const Profile = (props) => {
    return (
        <div>          
            <ProfileHeader profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;