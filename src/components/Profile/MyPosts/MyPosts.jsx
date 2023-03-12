import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {
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
            <div>
                <Post message = "Hello, my name is Stanislav" likesCount = '11'/>
                <Post message = "Hello, my name is Miron" likesCount = '112'/>
            </div>
        </div>
    );
}

export default MyPosts;