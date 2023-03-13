import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    

    let NamesElements = props.data.NamesData
        .map( u => <Dialog name={u.name} id = {u.id} /> );
    
    let MessagesElements = props.data.MessagesData
        .map(m => <Message message = {m.message} />);


        return (
        <div className = {classes.dialogs}>
            <div className={classes.names}>
                {NamesElements}
            </div>
            <div className={classes.messages}>
                {MessagesElements}
            </div>
        </div>
    );
}

export default Dialogs;