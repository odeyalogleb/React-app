//import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message = "Hello, my name is Stanislav" likesCount = '11'/>
                <Post message = "Hello, my name is Miron" likesCount = '112'/>
            </div>
        </div>
    );
}

export default MyPosts;