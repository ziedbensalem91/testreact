import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';

import { array, boolean, mixed, number, object, string } from 'yup';
import { ProfileDetails } from './ProfileDetails';
import * as Yup from 'yup';
import AvatarUploader from './UploadImage';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
const initialValues: ProfileDetails = {
    fullName: '',
    email: '',
    password: '',
    showPassword: '',
    passwordConfirmation: '',
    acceptedTermsAndConditions: false

};


function mangeProfile() {


    return (
        <Card>
            <CardContent>
                <Typography variant="h4">Profile Setting</Typography>
                <Formik
                    validationSchema={
                        object({
                            fullName:
                                string().required("Name is required"),

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
                                    <AvatarUploader></AvatarUploader>
                                </FormGroup>
                            </Box>
                            <Box marginBottom={2}>
                                <FormGroup>
                                    <Field name="fullName" as={TextField} label="Name" />
                                    <ErrorMessage name="fullName">
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>
                                </FormGroup>
                                <Box marginBottom={2}>
                                    <FormGroup>
                                        <FormControl >
                                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                            // value={age}
                                            //  onChange={handleChange}
                                            >
                                                <MenuItem value={10}>French</MenuItem>
                                                <MenuItem value={20}>english</MenuItem>
                                                <MenuItem value={30}>japanese</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormGroup>
                                </Box>
                                <Box marginBottom={2}>
                                    <FormGroup>
                                        <Field name="email" as={TextField} label="Description" />
                                    </FormGroup>
                                </Box>
                            </Box>
                            <Button variant="contained" color="primary" type="submit" style={{ margin: '0 auto', display: 'block' }} disabled={isSubmitting || isValidating}>save</Button>
                        </Form>
                    )}
                </Formik>

            </CardContent>
        </Card>
    );
}

export default mangeProfile;
