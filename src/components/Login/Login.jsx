import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/authReducer";
import { maxLength, required } from "../../utils/validators/validators"
import { Input } from "../common/FormsControls/FormsControls"
import { Navigate } from "react-router-dom";

let maxLength20 = maxLength(20);



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Input} name={"email"} placeholder={"Email"} 
                validate = {[required,maxLength20]}/>
            </div>  
            <div>
                <Field component={Input} name={"password"} placeholder={"password"}
                validate = {[required,maxLength20]} type={"password"} />
            </div>
            <div>
                <Field component={Input}  type={"checkbox"} name={"remeberMe"} 
                validate = {[required]}/> remember me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}



const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Navigate  to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})



export default  connect(mapStateToProps, {login}) (Login);