import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile} from "../../redux/profileReducer";
import { Navigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount(){
        this.props.getProfile(this.props.param.userId)
    }
    render(){
        if (!this.props.isAuth)
            return <Navigate to="/login" />
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
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps,
    {getProfile})(TakeParams);