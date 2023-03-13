import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.ava}>
                <img src="https://krot.info/uploads/posts/2022-03/1646237317_66-krot-info-p-obezyana-mem-smeshnie-foto-71.jpg" alt="" />
            </div>
            <div className={classes.text}>
                <div className={classes.name}>Name</div>
                <div className={classes.message}>{props.message}</div>
            </div>
            
        </div>
    );
}

export default Message;