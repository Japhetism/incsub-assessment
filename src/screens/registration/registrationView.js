import React from 'react';
import { CssBaseline, Container, Grid, makeStyles } from '@material-ui/core';
import { Step1Form } from "./components"
import { Banner } from "../../components"

const RegistrationView = (props) => {

    const classes = useStyles();
    const { handleSubmit } = props;

    return <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={8} md={8} >
                    <Step1Form handleSubmit={handleSubmit} />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Banner />
                </Grid>
            </Grid>
      </Container>
    </React.Fragment>

}

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#3358FF',
    }
}));

export default RegistrationView;