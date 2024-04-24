import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        // isAuth: state.auth.isAuth
        isAuth: "hui"
    }
}

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth)
                return <Navigate to="/login" />
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}