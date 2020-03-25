import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
    Container,
    ListProduct,
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    AddButton,
    AddButtonText,
    ProductAmount,
    ProductAmountText,
} from './styles';

export default function Home() {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;

            return sumAmount;
        }, {})
    );

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    function renderProduct({ item }) {
        return (
            <Product>
                <ProductImage source={{ uri: item.image }} />

                <ProductTitle>{item.title}</ProductTitle>

                <ProductPrice>{item.priceFormatted}</ProductPrice>

                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#fff" size={20} />
                        <ProductAmountText>
                            {amount[item.id] || 0}
                        </ProductAmountText>
                    </ProductAmount>
                    <AddButtonText onPress={() => handleAddProduct(item.id)}>
                        ADICIONAR
                    </AddButtonText>
                </AddButton>
            </Product>
        );
    }

    return (
        <Container>
            <ListProduct
                horizontal
                data={products}
                keyExtractor={product => String(product.id)}
                renderItem={item => renderProduct(item)}
            />
        </Container>
    );
}
