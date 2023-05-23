import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    editModeOn = () => {
        this.setState({
            editMode: true
        })

    }

    editModeOff = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate (prevProps, prevState) {
        if(this.props.status !== prevProps.status)
            this.setState({
                status: this.props.status
            })
    }

    
    render(){
        return(
            <div>
                {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editModeOff} value={this.state.status} />}
                {!this.state.editMode && 
                <span onClick={this.editModeOn}> {this.state.status ? this.state.status : 'Редактировать статус' } </span>}
            </div>
        )
    }
}

//export default ProfileStatus;