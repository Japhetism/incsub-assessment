import React from 'react';
import {
    Typography, makeStyles
} from '@material-ui/core'

const Banner  = () => {

    const classes = useStyles();

    return <React.Fragment>
        <div className={classes.banner}>
            <Typography variant="h4" component="h4" className={classes.bannerHeader}>
                Dummy Heading
            </Typography>
            <Typography variant="body1" component="span" className={classes.bannerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Typography>
        </div>
    </React.Fragment>
}

const useStyles = makeStyles(() => ({
    banner: {
        color: '#FFFFFF',
        margin: 0,
        position: 'absolute',
        top: '40%',
        left: '70%',
        right: '3%',
    },
    bannerHeader: {
        fontWeight: 'bold',
        marginBottom: '20%',
        textAlign: 'center'
    },
    bannerText: {
        fontSize: '20px'
    }
}));

export default Banner;