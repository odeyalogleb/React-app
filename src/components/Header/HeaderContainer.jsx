import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import { HeaderAPI } from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount(){
        HeaderAPI.authMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setUserData(id,email, login);
                }
                
            })
    }

    render () {
        return  <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,

    }
}

export default connect(mapStateToProps,{setUserData} )(HeaderContainer);
