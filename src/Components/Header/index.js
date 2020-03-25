import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

export default function Header({ navigation: { navigate } }) {
    const cartSize = useSelector(state => state.cart.length);

    return (
        <Wrapper>
            <Container>
                <TouchableOpacity onPress={() => navigate('Home')}>
                    <Logo />
                </TouchableOpacity>
                <BasketContainer onPress={() => navigate('Cart')}>
                    <Icon name="shopping-basket" color="#fff" size={24} />
                    <ItemCount>{cartSize || 0}</ItemCount>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}
