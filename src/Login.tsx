import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';


import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@material-ui/core';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ProfileDetails } from './ProfileDetails';
import { array, boolean, mixed, number, object, string } from 'yup';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const initialValues: ProfileDetails = {
    fullName: '',
    email: '',
    password: '',
    showPassword: '',
    passwordConfirmation: '',
    acceptedTermsAndConditions: false

};
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = (): void => {
        setValues({ ...values, showPassword: !values.showPassword })
    }



    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <Formik
                    validationSchema={
                        object({
                            email:
                                string()
                                    .email("Enter a valid email")
                                    .required("Email is required"),

                            password: string()
                                .required("Please Enter your password")
                                .test(
                                    "regex",
                                    "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
                                    val => {
                                        let regExp = new RegExp(
                                            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                                        );
                                        console.log(regExp.test(val), regExp, val);
                                        return regExp.test(val);
                                    }
                                ),
                        })
                    }
                    initialValues={initialValues} onSubmit={(values, formikHelpers) => {
                        return new Promise(res => {
                            setTimeout(() => {
                                console.log(values);
                                console.log(formikHelpers);
                                console.log('---------');
                                res();
                            }, 5000);
                        })
                    }}>
                    {({ values, errors, isSubmitting, isValidating }) => (
                        <Form>

                            <Field variant="outlined" fullWidth
                                margin="normal" name="email" as={TextField} label="Email" />
                            <ErrorMessage name="email">
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                            <Field name="password" as={TextField} label="Password" variant="outlined" fullWidth margin="normal" type={values.showPassword ? "text" : "password"}
                                //onChange={handleChange("password")}
                                value={values.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                            <ErrorMessage name="password">
                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                            </ErrorMessage>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
          </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/ForgetPassword" variant="body2">
                                        Forgot password?
              </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/Register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
}