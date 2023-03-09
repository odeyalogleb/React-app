import classes from './Post.module.css';



const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://i.imgflip.com/1ezeb4.jpg" alt="" />
            post1
            <div>
                <span>like</span>
            </div>  
        </div>
    );
}

export default Post;