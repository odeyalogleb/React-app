import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import axios from 'axios';
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.param.userId;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => this.props.setUserProfile(response.data));
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



export default connect(mapStateToProps,
    {setUserProfile})(TakeParams);