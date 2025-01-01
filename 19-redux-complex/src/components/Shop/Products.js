import ProductItem from './ProductItem';
import classes from './Products.module.css';

import products from '../../util/products';

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map((product) => (
                    <ProductItem
                        key={product.title}
                        {...product}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
