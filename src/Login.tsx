import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';

import { array, boolean, mixed, number, object, string } from 'yup';
import { ProfileDetails } from './ProfileDetails';
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


function Login() {
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
        <Card>
            <CardContent>
                <Typography variant="h4">Login</Typography>

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
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="email" as={TextField} label="Email" />
                                    <ErrorMessage name="email">
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="password" as={TextField} label="Password" type={values.showPassword ? "text" : "password"}
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
                                </FormGroup>
                            </Box>

                            <Button variant="contained" color="primary" type="submit" style={{ margin: '0 auto', display: 'block' }} disabled={isSubmitting || isValidating}>Login</Button>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
}

export default Login;
