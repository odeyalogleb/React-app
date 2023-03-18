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

    let changeNewMsg = () => {
        let text = MsgTextRef.current.value;
        let action = {type: 'CHANGE-MESSAGE', currentMessage: text}
        props.dispatch(action);
    }

    let SendMsg = () => {
        let action = {type: 'SEND-MESSAGE'};
        props.dispatch(action);
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
                    <textarea ref={MsgTextRef} 
                    placeholder='Write a message...' 
                    onChange = {changeNewMsg}
                    value={props.data.currMsg}
                     />
                    <button onClick={SendMsg}>Send Message</button>
                </div>
            </div>
            
        </div>
    );
}

export default Dialogs;