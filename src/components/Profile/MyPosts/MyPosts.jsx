import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    let PostsElements = props.data
        .map(p => <Post message={p.message} likesCount = {p.likesCount} />);
    
    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.header}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.content}>
                {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;