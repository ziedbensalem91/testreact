import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';

import { array, boolean, mixed, number, object, string } from 'yup';
import { InvestmentDetails } from './InvestmentDetails';
import * as Yup from 'yup';

const initialValues: InvestmentDetails = {
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    initialInvestment: 0,
    investmentRisk: [],
    commentAboutInvestmentRisk: '',
    dependents: -1,
    acceptedTermsAndConditions: false

};

function ForgetPassword() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">Forget Password</Typography>

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
                                    <ErrorMessage name="email" />
                                </FormGroup>
                            </Box>
                           

                            <Button type="submit" disabled={isSubmitting || isValidating}>Send password reset link</Button>

                            <pre>{JSON.stringify(errors, null, 4)}</pre>
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
}

export default ForgetPassword;
