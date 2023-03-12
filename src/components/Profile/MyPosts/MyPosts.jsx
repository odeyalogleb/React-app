import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {

    let PostsData = [
        {id: 1, message:"Hello, my name is Stanislav", likesCount: 11},
        {id: 2, message:"Hello, my name is Miron", likesCount: 121}
    ];
    
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
                <Post message = {PostsData[0].message} likesCount = {PostsData[0].likesCount}/>
                <Post message ={PostsData[1].message}  likesCount = {PostsData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;