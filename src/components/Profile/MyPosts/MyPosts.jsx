import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {

    let PostsData = [
        {id: 1, message:"Hello, my name is Stanislav", likesCount: 11},
        {id: 2, message:"Hello, my name is Miron", likesCount: 121},
        {id: 3, message:"Hello, my name is Tural", likesCount: 1231},
    ];

    let PostsElements = PostsData
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