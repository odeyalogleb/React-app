import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

let maxLength50 = maxLength(50);

const Dialogs = (props) => {
    debugger;
    let NamesElements = props.data.NamesData
        .map(u => <Dialog name={u.name} id={u.id} />);

    let MessagesElements = props.data.MessagesData
        .map(m => <Message message={m.message} />);
    
    let addNewMsg = (values) => {
        props.sendMsg(values.msgText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.names}>
                {NamesElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.content}>
                    {MessagesElements}
                </div>
                <DialogsReduxForm
                currMsg={props.data.currMsg} onSubmit = {addNewMsg} />
            </div>

        </div>
    );
}



const DialogsForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit} className={classes.newPost}>
            <Field component={Textarea} name={"msgText"} validate = {[required, maxLength50]}
                placeholder='Write a message...'
                value={props.currMsg} />

            <button type="submit">Send Message</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: "dialogs" })(DialogsForm)

export default Dialogs;