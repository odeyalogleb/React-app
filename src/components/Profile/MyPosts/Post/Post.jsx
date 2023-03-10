import classes from './Post.module.css';



const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.imgflip.com/1ezeb4.jpg" alt="" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>  
        </div>
    );
}

export default Post;