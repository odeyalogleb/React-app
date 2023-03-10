import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';



const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content_header}>
                <img className={classes.content__img}src='https://storge.pic2.me/c/1360x800/623/55661684bf63f.jpg'/>
            </div>
            <div>
            ava + info
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;