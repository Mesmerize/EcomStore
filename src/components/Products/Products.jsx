import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'iPhone', description: 'Good Condition iPhone', price: '$1,564', image: 'https://www.zdnet.com/a/hub/i/r/2020/11/23/396499cd-fd42-4765-ae71-80332848cbd4/thumbnail/770x433/58be528b58e890b6b3a9f1748c22979b/iphone-12-pro-max1.jpg'},
//     { id: 2, name: 'MacBook', description: 'Lightning Fast MacBook', price: '$1,994', image: 'https://cdn.mos.cms.futurecdn.net/gPvyaz76tASn87RCGuSdDc.jpg'}
// ]

const Products = ({products, onAddToCart}) => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;