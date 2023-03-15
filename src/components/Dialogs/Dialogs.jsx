import React from 'react';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    

    let NamesElements = props.data.NamesData
        .map( u => <Dialog name={u.name} id = {u.id} /> );
    
    let MessagesElements = props.data.MessagesData
        .map(m => <Message message = {m.message} />);

    let MsgTextRef = React.createRef();

    let SendMsg = () => {
        let NewMsgText = MsgTextRef.current.value;
        props.sendMessage(NewMsgText);
    }
        return (
        <div className = {classes.dialogs}>
            <div className={classes.names}>
                {NamesElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.content}>
                    {MessagesElements}
                </div>
                <div className={classes.newPost}>
                    <textarea ref={MsgTextRef} placeholder='Write a message...'></textarea>
                    <button onClick={SendMsg}>Send Message</button>
                </div>
            </div>
            
        </div>
    );
}

export default Dialogs;