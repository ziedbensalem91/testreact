import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import React from 'react';
import { array, boolean, mixed, number, object, string } from 'yup';
import { ProfileDetails } from './ProfileDetails';
import * as Yup from 'yup';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
const initialValues: ProfileDetails = {
  fullName: '',
  email: '',
  showPassword: '',
  password: '',
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Register() {

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.checked })
  }

  const handleClickShowPassword = (): void => {
    setValues({ ...values, showPassword: !values.showPassword })
  }



  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
  }

  const handleClickShowPasswordConfirmation = (): void => {
    setValues({ ...values, showPassword: !values.showPassword })
  }



  const handleMouseDownPasswordConfirmation = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
  }
  const classes = useStyles();

  return (
   
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

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
            <Form autoComplete="off">
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="fullName" as={TextField} label="Full Name" variant="outlined" fullWidth />
                  <ErrorMessage name="fullName">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="email" as={TextField} label="Email" variant="outlined" fullWidth/>
                  <ErrorMessage name="email">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="password" as={TextField} label="Password" type={values.showPassword ? "text" : "password"} variant="outlined" fullWidth
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
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="passwordConfirmation" as={TextField} label="Password Confirmation" type={values.showPassword ? "text" : "password"} variant="outlined" fullWidth
                    value={values.passwordConfirmation}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPasswordConfirmation}
                            onMouseDown={handleMouseDownPasswordConfirmation}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }} />
                  <ErrorMessage name="passwordConfirmation">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <MyCheckbox
                    name="acceptedTermsAndConditions"
                    label="Accept terms and conditions"
                  />
                  <ErrorMessage name="acceptedTermsAndConditions">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </FormGroup>
              </Box>
              <Button    fullWidth
            variant="contained"
            color="primary" type="submit" style={{ margin: '0 auto', display: 'block' }} disabled={isSubmitting || isValidating}>Register</Button>
            <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
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