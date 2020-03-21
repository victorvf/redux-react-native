import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ cartSize }) {
    return (
        <Wrapper>
            <Container>
                <TouchableOpacity>
                    <Logo />
                </TouchableOpacity>
                <BasketContainer>
                    <Icon name="shopping-basket" color="#fff" size={24} />
                    <ItemCount>{cartSize || 0}</ItemCount>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
