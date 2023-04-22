import { Field, reduxForm } from "redux-form"

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
                <Field component={"input"} name={"login"} placeholder={"Login"} />
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"password"} />
            </div>
            <div>
                <Field component={"input"}  type={"checkbox"} name={"remeberMe"} /> remember me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



export default Login;