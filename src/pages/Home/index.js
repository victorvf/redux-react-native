import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    };

    handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    renderProduct = ({ item }) => {
        const { amount } = this.props;

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
                    <AddButtonText
                        onPress={() => this.handleAddProduct(item.id)}
                    >
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

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
