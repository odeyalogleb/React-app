import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileHeader from './ProfileHeader/ProfileHeader';



const Profile = (props) => {
    return (
        <div>          
            <ProfileHeader />
            <MyPosts data = {props.data} 
            addPost = {props.addPost}
            changeNewPost = {props.changeNewPost}/>
        </div>
    );
}

export default Profile;