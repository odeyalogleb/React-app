import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(){

        let userId = this.props.param.userId
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render(){
        return (
            <Profile {...this.props} profile = {this.props.profile}  
            status = {this.props.status} updateStatus = {this.props.updateStatus}/>
        );
    }
}

const TakeParams = (props) => {
    return <ProfileContainer {...props} param = {useParams()} />
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

let ProfileContainerEnd = compose(connect(mapStateToProps,
    {getProfile, getStatus, updateStatus}))(TakeParams)


export default ProfileContainerEnd;