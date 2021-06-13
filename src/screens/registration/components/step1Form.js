import React, { useState } from 'react';
import { 
    FormControl, Input, InputLabel, FormHelperText, TextField, Select, Link, 
    MenuItem, OutlinedInput, InputAdornment, IconButton, Button, Typography,
    makeStyles, Container 
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { UserTypes } from "../../../fixtures";

const Step1Form  = (props) => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Container maxWidth="xl" className={classes.root}>
        <FormControl fullWidth className={classes.form}>
            <Typography variant="h4" component="h4" className={classes.header}>
                Let's setup your account
            </Typography>
            <Typography variant="body1" component="span" className={classes.headerBody}>
                Already have an account? 
                <Link
                    className={classes.link}
                    component="span"
                    variant="body1"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    &nbsp;Sign in
                </Link>
            </Typography>
            <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-name">Your name</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-name"
                    //type={values.showPassword ? 'text' : 'password'}
                    //value={values.password}
                    //onChange={handleChange('password')}
                    labelWidth={70}
                />
            </FormControl>  
            <FormControl variant="outlined" className={classes.input}>
                <InputLabel htmlFor="outlined-adornment-email">Email address</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email"
                    //type={values.showPassword ? 'text' : 'password'}
                    //value={values.password}
                    //onChange={handleChange('password')}
                    labelWidth={70}
                />
            </FormControl>
            <FormControl variant="outlined" className={classes.input}>
                <InputLabel id="demo-simple-select-outlined-label">I would describe my user type as</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="I would describe my user type as"
                defaultValue=""
                >
                    {UserTypes().sort().map(userType => <MenuItem key={userType} value={userType}>{userType}</MenuItem>)}
                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    //value={values.password}
                    //onChange={handleChange('password')}
                    endAdornment={
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
                    }
                    labelWidth={70}
                />
            </FormControl>
            <FormHelperText id="my-helper-text" className={classes.input}>Minimum 8 characters</FormHelperText>
            <FormControl variant="outlined" className={classes.input}>
                <Button variant="contained" size="large" className={classes.button}>
                    Next
                </Button>
            </FormControl>
            <Typography variant="body1" component="span" className={classes.bottomText}>
                By clicking the "Next" button, you agree to creating a free account, and to 
                <Link
                    component="span"
                    variant="body2"
                    className={[classes.bottomText, classes.link]}
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    &nbsp;Terms of Service&nbsp;
                </Link>
                and
                <Link
                    component="span"
                    variant="body2"
                    className={[classes.bottomText, classes.link]}
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    &nbsp;Privacy Policy
                </Link>
               .
            </Typography>
        </FormControl>
        </Container>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        marginLeft: '-5%',
        marginTop: '0%'
    },
    form: {
        margin: '20%',
        width: '60%'
    },
    header: {
        fontWeight: 'bold',
        marginBottom: '10%'
    },
    headerBody: {
        marginBottom: '5%'
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
        '&:hover': {
            backgroundColor: '#3358FF',
            color: '#FFFFFF',
        }
    }, 
    link: {
        color: '#3358FF',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}));

export default Step1Form;