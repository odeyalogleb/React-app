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
    return (
        <div className = {classes.dialogs}>
            <div className={classes.names}>
                <Dialog name = {NamesData[0].name} id = {NamesData[0].id} />
                <Dialog name = {NamesData[1].name} id = {NamesData[1].id} />
                <Dialog name = {NamesData[2].name} id = {NamesData[2].id} />
                <Dialog name = {NamesData[3].name} id = {NamesData[3].id} />
            </div>
            <div className={classes.messages}>
                <Message  message = {MessagesData[0].message}/>
                <Message  message = {MessagesData[1].message}/>
                <Message  message = {MessagesData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs;