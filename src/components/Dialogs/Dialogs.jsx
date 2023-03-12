import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className = {classes.dialogs}>
            <div className={classes.names}>
                <Dialog name = "Stas" id='1' />
                <Dialog name = "Miron" id='2' />
                <Dialog name = "Tural" id='3' />
                <Dialog name = "Misha" id='4' />
            </div>
            <div className={classes.messages}>
                <Message text = "Hello" />
                <Message text = "Yoo" />
                <Message text = "Let's GO PARTY" />
            </div>
        </div>
    );
}

export default Dialogs;