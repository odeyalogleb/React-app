import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile} from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(){
        this.props.getProfile(this.props.param.userId)
    }
    render(){
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        );
    }
}

const TakeParams = (props) => {
    return <ProfileContainer {...props} param = {useParams()} />
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let ProfileContainerEnd = compose(connect(mapStateToProps,
    {getProfile}), WithAuthRedirect)(TakeParams)


export default ProfileContainerEnd;