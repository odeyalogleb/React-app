import { Field, reduxForm } from "redux-form"
import { maxLength, required } from "../../utils/validators/validators"
import { Input } from "../common/FormsControls/FormsControls"

let maxLength20 = maxLength(20);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Input} name={"login"} placeholder={"Login"} 
                validate = {[required,maxLength20]}/>
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"password"}
                validate = {[required,maxLength20]} />
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



export default Login;