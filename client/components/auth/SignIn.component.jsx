import { useState, useEffect } from 'react'
import { signin, authenticate, isAuthenticated } from '../../actions/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router';
import CustomButton from '../custom-button/custom-button.component';
import styles from '../Component.module.css'
import { Avatar, Container, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Link from 'next/link'

const SignInComponent = () => {
    const useStyles = makeStyles((theme) => ({
        root: {},
        heading: {
            color: theme.primary,
            align: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: '#2b41bd',
        },
        paper: {
            marginTop: theme.spacing(12),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
            backgroundColor: '#264653',
        },
    }));

    const [values, setValues] = useState({
        email: 'silvinpradhan95@gmail.com',
        password: 'Invoker200695@@',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })

    // Destructure te values from the state.
    const { name, email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        // Check if there is a token and user data in localstorage as well as cookie, redirect the logged in user to homepage
        isAuthenticated() && Router.push('/') // For safety purposes so that '/signin' would not redirect to sign in page although the user already signed
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm })
        setValues({ ...values, loading: true, error: false })
        const user = { name, email, password }

        await signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false })
                toast.error(`${data.error}`)
            } else {
                // Save user token to cookie
                // save user info to localStorage
                // authenticate user
                authenticate(data, () => {
                    if (isAuthenticated() && isAuthenticated().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                })
                toast.success(`You have signed in as ${isAuthenticated().name}`)
            }
        })

    }
    const handleChange = name => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value })
    };

    const showLoading = () => (loading ? <div className="alert alert-info"><span> Loading ...</span></div> : "");
    const showError = () => (error ? <div className="alert alert-danger"> {error}</div> : "");
    const showMessage = () => (message ? <div className="alert alert-info"> {message}</div> : "");

    // Button Disabled if the fields are empty..
    const isEnabled = email.length > 0 && password.length > 0

    const signinForm = () => {
        const classes = useStyles();
        return (
            <Container maxWidth="md" component="main">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography className={classes.heading}>
                        <i className="fas fa-user" style={{ fontStyle: "normal" }}>Sign into your account</i>
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <ToastContainer position="top-right" autoClose={8000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
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
                            {loading ? (<img src="/spinner.png" width="100px" height="100px" alt="Loading..." />) : (<CustomButton className={styles.custom_button} disabled={!isEnabled}>Login</CustomButton>)}
                        </div>
                    </form>
                    <Typography className={classes.heading}>
                        Don't have an account? <Link href="/signup">Register</Link>
                    </Typography>
                </div>

            </Container >

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

export default SignInComponent;
