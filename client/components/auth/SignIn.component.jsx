import { useState } from 'react'
import { signin, authenticate } from '../../actions/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router';

const SignInComponent = () => {
    const [values, setValues] = useState({
        email: 'silvinpradhan95@gmail.com',
        password: 'Invoker200695@@',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })

    // Destructure te values from the state.
    const { email, password, error, loading, message, showForm } = values

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm })
        setValues({ ...values, loading: true, error: false })
        const user = { email, password }

        await signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false })
                toast.error(`${data.error}`)
            } else {
                // Save user token to cookie
                // save user info to localStorage
                // authenticate user
                authenticate(data, () => {
                    Router.push('/')
                })
                toast.success("You are logged in!", { pauseOnFocusLoss: false });
            }
        })

    }
    const handleChange = name => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value })
    };

    const showLoading = () => (loading ? <div className="alert alert-info"><span> Loading ...</span></div> : "");
    const showError = () => (error ? <div className="alert alert-danger"> {error}</div> : "");
    const showMessage = () => (message ? <div className="alert alert-info"> {message}</div> : "");

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <ToastContainer position="top-right" autoClose={6000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Type your email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Type your password"></input>
                </div>
                {/* Submit */}
                <div className="form-group col text-center">
                    {loading ? (<img src="/spinner.png" width="100px" height="100px" alt="Loading..." />) : (<button className="btn btn-primary">Login</button>)}
                </div>
            </form>
        )
    }
    return (
        <>
            {showError()}
            {showLoading()}
            {showMessage()}

            { showForm && signinForm()}
        </>
    )
}

export default SignInComponent
