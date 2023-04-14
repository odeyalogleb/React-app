import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: 'Yo'
    }
    editModeOn = () => {
        this.setState({
            editMode: true
        })

    }

    editModeOff = () => {
        this.setState({
            editMode: false
        }
        )
    }

    
    render(){
        return(
            <div>
                {this.state.editMode &&
                <input autoFocus={true} onBlur={this.editModeOff} value={this.props.status} />}
                {!this.state.editMode && 
                <span onClick={this.editModeOn} > 12345 </span>}
            </div>
        )
    }
}

export default ProfileStatus;