import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import React from 'react';
import { array, boolean, mixed, number, object, string } from 'yup';
import { ProfileDetails } from './ProfileDetails';
import * as Yup from 'yup';

const initialValues: ProfileDetails = {
  fullName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  acceptedTermsAndConditions: false

};

export function Register() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Register</Typography>

        <Formik
          validationSchema={
            object({
              fullName: string().required('Your name is mandatory!!!').max(30),
              acceptedTermsAndConditions: boolean().oneOf([true]),
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
              passwordConfirmation: string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
                  <Field name="fullName" as={TextField} label="Full Name" />
                  <ErrorMessage name="fullName" />
                </FormGroup>
              </Box>


              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="email" as={TextField} label="Email" />
                  <ErrorMessage name="email" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="password" as={TextField} label="Password" type="password" />
                  <ErrorMessage name="password" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="passwordConfirmation" as={TextField} label="Password Confirmation" type="password" />
                  <ErrorMessage name="passwordConfirmation" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <MyCheckbox
                    name="acceptedTermsAndConditions"
                    label="Accept terms and conditions"
                  />
                  <ErrorMessage name="acceptedTermsAndConditions" />
                </FormGroup>
              </Box>
              <Button type="submit" disabled={isSubmitting || isValidating}>Register</Button>

              <pre>{JSON.stringify(errors, null, 4)}</pre>
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}

export interface MyCheckboxProps extends CheckboxProps {
  name: string;
  value?: string | number;
  label?: string;
}

export function MyCheckbox(props: MyCheckboxProps) {
  const [field] = useField({
    name: props.name,
    type: 'checkbox',
    value: props.value
  });
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={props.label}
    />
  );
}