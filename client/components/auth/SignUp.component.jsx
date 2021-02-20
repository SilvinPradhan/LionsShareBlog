import { useState } from 'react'
import { signup } from '../../actions/auth'
const SignUpComponent = () => {
    const [values, setValues] = useState({
        name: 'SLU Lions',
        email: 'silvinpradhan95@gmail.com',
        password: 'Invoker200695@@',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })

    // Destructure te values from the state.
    const { name, email, password, error, loading, message, showForm } = values

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm })
        setValues({ ...values, loading: true, error: false })
        const user = { name, email, password }

        await signup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false })
            } else {
                setValues({ ...values, name: '', email: '', password: '', error: '', loading: false, message: data.message, showForm: false, })
            }
        })
    }
    const handleChange = name => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value })
    };

    const showLoading = () => (loading ? <div className="alert alert-info"> Loading ...</div> : "");
    const showError = () => (error ? <div className="alert alert-danger"> {error}</div> : "");

    const showMessage = () => (message ? <div className="alert alert-info"> {message}</div> : "");

    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input value={name} onChange={handleChange('name')} type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                    <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Type your email"></input>
                </div>
                <div className="form-group">
                    <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Type your password"></input>
                </div>
                {/* Submit */}
                <div className="form-group">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        )
    }
    return (
        <>
            {showError()}
            {showLoading()}
            {showMessage()}

            { showForm && signupForm()}
        </>
    )
}

export default SignUpComponent
