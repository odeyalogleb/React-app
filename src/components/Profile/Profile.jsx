import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';



const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
            <img src='https://storge.pic2.me/c/1360x800/623/55661684bf63f.jpg'/>
            </div>
            <div>
            ava + info
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;