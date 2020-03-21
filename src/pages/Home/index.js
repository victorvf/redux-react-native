import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

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

class Home extends Component {
    state = {
        products: [],
    }

    async componentDidMount() {
        const response = await api.get('/products');

        this.setState({ products: response.data });
    }

    handleAddProduct = product => {
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };

    renderProduct = ({ item }) => {
        return (
            <Product>
                <ProductImage source={{ uri: item.image }} />

                <ProductTitle>{item.title}</ProductTitle>

                <ProductPrice>{`R$${item.price}`}</ProductPrice>

                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#fff" size={20} />
                        <ProductAmountText>2</ProductAmountText>
                    </ProductAmount>
                    <AddButtonText onPress={() => this.handleAddProduct(item)}>
                        ADICIONAR
                    </AddButtonText>
                </AddButton>
            </Product>
        );
    };

    render() {
        const { products } = this.state;

        return (
            <Container>
                <ListProduct
                    horizontal
                    data={products}
                    keyExtractor={product => String(product.id)}
                    renderItem={this.renderProduct}
                />
            </Container>
        );
    }
}

export default connect()(Home);
