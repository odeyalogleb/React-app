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
            <div>
            My posts
            <div>New post</div>
            <div>
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
            </div>
        </div>
    );
}

export default Profile;