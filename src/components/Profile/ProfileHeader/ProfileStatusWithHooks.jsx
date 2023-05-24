import { useEffect, useState } from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    let editModeOn = () => {
        setEditMode(true);
    }

    let editModeOff = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    return (
        <div>
                {editMode &&
                <input  autoFocus={true}  onChange={onStatusChange} onBlur={editModeOff} value={status} />}
                {!editMode && 
                <span onClick={editModeOn} > {status ? status : 'Редактировать статус' } </span>}
            </div>
    );
}

export default ProfileStatus;