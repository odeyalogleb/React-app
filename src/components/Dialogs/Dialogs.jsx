import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {
    let NamesData = [
        {id: 1, name: 'Stas'},
        {id: 2, name: 'Miron'},
        {id: 3, name: 'Tural'},
        {id: 4, name: 'Misha'},
    ];

    let MessagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Yoo'},
        {id: 3, message: 'Lets go Party'},
    ];

    let NamesElements = NamesData
        .map( u => <Dialog name={u.name} id = {u.id} /> );
    
    let MessagesElements = MessagesData
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