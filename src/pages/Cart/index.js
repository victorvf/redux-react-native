import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
    Container,
    List,
    ProductInfo,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductControls,
    Controls,
    ButtonControl,
    ProductAmount,
    ProductSubTotal,
    TotalContainer,
    TotalText,
    TotalTextPrice,
    TotalButton,
    TotalButtonText,
} from './styles';

export default class Cart extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        this.setState({ products: response.data });
    }

    render() {
        const {products} = this.state;

        return (
            <Container>
                <List
                    data={products}
                    keyExtractor={product => String(product.id)}
                    renderItem={({ item }) => (
                        <>
                            <ProductInfo>
                                <ProductImage source={{ uri: item.image }} />
                                <View>
                                    <ProductTitle>{item.title}</ProductTitle>
                                    <ProductPrice>{`R$${item.price}`}</ProductPrice>
                                </View>
                                <ButtonControl>
                                    <Icon
                                        name="delete"
                                        size={25}
                                        color="#7159c1"
                                    />
                                </ButtonControl>
                            </ProductInfo>
                            <ProductControls>
                                <Controls>
                                    <ButtonControl>
                                        <Icon
                                            name="remove-circle-outline"
                                            size={25}
                                            color="#7159c1"
                                        />
                                    </ButtonControl>
                                    <ProductAmount value={String(3)} />
                                    <ButtonControl>
                                        <Icon
                                            name="add-circle-outline"
                                            size={25}
                                            color="#7159c1"
                                        />
                                    </ButtonControl>
                                </Controls>
                                <ProductSubTotal>R$129,99</ProductSubTotal>
                            </ProductControls>
                        </>
                    )}
                />
                <TotalContainer>
                    <TotalText>TOTAL</TotalText>
                    <TotalTextPrice>R$1987,99</TotalTextPrice>
                    <TotalButton>
                        <TotalButtonText>FINALIZAR PEDIDO</TotalButtonText>
                    </TotalButton>
                </TotalContainer>
            </Container>
        );
    }
}
