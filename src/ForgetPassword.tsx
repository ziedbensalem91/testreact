import React from "react";
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

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function ForgetPassword() {
    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Forget password
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

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Send password reset link
          </Button>
                            <Grid container>


                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>

        </Container>
    );
}

export default ForgetPassword;
