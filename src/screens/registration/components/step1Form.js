import React, { useState } from 'react';
import { 
    FormControl, InputLabel, FormHelperText, TextField, Select, Link, 
    MenuItem, InputAdornment, IconButton, Button, Typography,
    makeStyles, Container 
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UserTypes } from "../../../fixtures";

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    name: yup
      .string('Enter your name')
      .required('Name is required')
      .min(2, 'Name should be of minimum 2 characters length'),
    userType: yup
      .string('Describe your user type')
      .required('User type description is required'),
  });

const Step1Form  = (props) => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const { handleSubmit } = props;

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          userType: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSubmit(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container maxWidth="xl" className={classes.root}>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <Typography variant="h4" component="h4" className={classes.header}>
                    Let's setup your account
                </Typography>
                <Typography variant="body1" component="span" className={classes.headerBody}>
                    Already have an account? 
                    <Link
                        className={classes.link}
                        component="span"
                        variant="body1"
                    >
                        &nbsp;Sign in
                    </Link>
                </Typography>
                <div className={classes.inputName}>
                    <TextField
                        fullWidth
                        id="filled-error"
                        name="name"
                        variant="outlined"
                        label="Name"
                        defaultValue={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                    />
                    <FormHelperText className="MuiFormHelperText-root Mui-error">{formik.touched.name && formik.errors.name}</FormHelperText>
                </div>
                <div className={classes.input}>
                    <TextField
                        fullWidth
                        id="outlined-error-helper-email"
                        name="email"
                        variant="outlined"
                        label="Email Address"
                        defaultValue={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                    <FormHelperText className="MuiFormHelperText-root Mui-error">{formik.touched.email && formik.errors.email}</FormHelperText>
                </div>
                <div className={classes.input}>
                    <FormControl fullWidth variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">I would describe my user type as</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="I would describe my user type as"
                            name="userType"
                            value={formik.values.userType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.userType && Boolean(formik.errors.userType)}
                        >
                            {UserTypes().sort().map(userType => <MenuItem key={userType} value={userType}>{userType}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormHelperText className="MuiFormHelperText-root Mui-error">{formik.touched.userType && formik.errors.userType}</FormHelperText>
                </div>
                <div>
                    <TextField
                        fullWidth
                        id="outlined-error-helper-password"
                        variant="outlined"
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={(event) => event.preventDefault()}
                                    edge="end"
                                    >
                                    {!showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        defaultValue={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    <FormHelperText className="MuiFormHelperText-root Mui-error">{formik.touched.password && formik.errors.password}</FormHelperText>
                </div>
                <FormHelperText id="my-helper-text" className={classes.input}>Minimum 8 characters</FormHelperText>
                <Button fullWidth variant="contained" size="large" type="submit" disabled={!(formik.isValid && formik.dirty)} className={classes.button}>
                    Next
                </Button>
                <Typography variant="body1" component="span" className={classes.bottomText}>
                    By clicking the "Next" button, you agree to creating a free account, and to 
                    <Link
                        component="span"
                        variant="body2"
                        className={classes.link}
                    >
                        &nbsp;Terms of Service&nbsp;
                    </Link>
                    and
                    <Link
                        component="span"
                        variant="body2"
                        className={classes.link}
                    >
                        &nbsp;Privacy Policy
                    </Link>
                    .
                </Typography>
            </form>
        </Container>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        marginLeft: '-5%',
        marginTop: '0%',
    },
    form: {
        margin: '0% 20% 0% 20%',
        width: '60%',
        paddingTop: '20%',
        paddingBottom: '25%'
    },
    header: {
        fontWeight: 'bold',
        marginBottom: '10%',
    },
    headerBody: {
        marginBottom: '5%',
    },
    inputName: {
        marginBottom: '5%',
        marginTop: '5%',
    },
    input: {
        marginBottom: '5%'
    },
    bottomText: {
        marginTop: '10%',
        fontSize: '14px'
    },
    button: {
        backgroundColor: '#3358FF',
        color: '#FFFFFF',
        marginBottom: '10%',
        marginTop: '5%',
        '&:hover': {
            backgroundColor: '#3358FF',
            color: '#FFFFFF',
        }
    }, 
    link: {
        color: '#3358FF',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}));

export default Step1Form;