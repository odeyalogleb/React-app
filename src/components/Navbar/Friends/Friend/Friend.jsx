import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://krasivosti.pro/uploads/posts/2021-09/1631174856_6-krasivosti-pro-p-tupaya-obezyana-zhivotnie-krasivo-foto-8.jpg" alt="" />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;