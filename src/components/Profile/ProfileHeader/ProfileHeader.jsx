import Preloader from '../../common/Preloader';
import classes from './ProfileHeader.module.css';

const ProfileHeader = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.header}>
                <img src='https://storge.pic2.me/c/1360x800/623/55661684bf63f.jpg' alt=''/>
                <img src={props.profile.photos.large} alt=''/>
            </div>
            <div>
                ava + info
            </div>
        </div>
    );
}

export default ProfileHeader;