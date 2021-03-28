import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
// import classes from '*.module.css';

import logo from '../../assets/c.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {

    const classes = useStyles();
    const location = useLocation();


    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit' >
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                        E-Commerce
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button} >
                        <IconButton component={Link} to='/cart' aria-label='Showcart items' color='inherit' >
                            <Badge badgeContent={totalItems} color='secondary' >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
