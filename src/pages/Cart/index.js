import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

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
    EmptyCart,
    EmptyText,
} from './styles';

export default function Cart() {
    const dispatch = useDispatch();

    const cart = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
        }))
    );

    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce(
                (totalPrice, product) =>
                    totalPrice + product.price * product.amount,
                0
            )
        )
    );

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

    return (
        <Container>
            {cart.length ? (
                <>
                    <List
                        data={cart}
                        keyExtractor={product => String(product.id)}
                        renderItem={({ item }) => (
                            <>
                                <ProductInfo>
                                    <ProductImage
                                        source={{ uri: item.image }}
                                    />
                                    <View>
                                        <ProductTitle>
                                            {item.title}
                                        </ProductTitle>
                                        <ProductPrice>
                                            {`R$${item.price}`}
                                        </ProductPrice>
                                    </View>
                                    <ButtonControl
                                        onPress={() =>
                                            dispatch(
                                                CartActions.removeFromCart(
                                                    item.id
                                                )
                                            )
                                        }
                                    >
                                        <Icon
                                            name="delete"
                                            size={25}
                                            color="#7159c1"
                                        />
                                    </ButtonControl>
                                </ProductInfo>
                                <ProductControls>
                                    <Controls>
                                        <ButtonControl
                                            onPress={() => decrement(item)}
                                        >
                                            <Icon
                                                name="remove-circle-outline"
                                                size={25}
                                                color="#7159c1"
                                            />
                                        </ButtonControl>
                                        <ProductAmount
                                            value={String(item.amount)}
                                        />
                                        <ButtonControl
                                            onPress={() => increment(item)}
                                        >
                                            <Icon
                                                name="add-circle-outline"
                                                size={25}
                                                color="#7159c1"
                                            />
                                        </ButtonControl>
                                    </Controls>
                                    <ProductSubTotal>
                                        {item.subtotal}
                                    </ProductSubTotal>
                                </ProductControls>
                            </>
                        )}
                    />
                    <TotalContainer>
                        <TotalText>TOTAL</TotalText>
                        <TotalTextPrice>{total}</TotalTextPrice>
                        <TotalButton>
                            <TotalButtonText>FINALIZAR PEDIDO</TotalButtonText>
                        </TotalButton>
                    </TotalContainer>
                </>
            ) : (
                <EmptyCart>
                    <Icon name="remove-shopping-cart" size={64} color="#eee" />
                    <EmptyText>Seu carrinho está vazio.</EmptyText>
                </EmptyCart>
            )}
        </Container>
    );
}
