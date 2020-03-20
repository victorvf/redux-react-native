import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

export default function Header() {
    return (
        <Wrapper>
            <Container>
                <TouchableOpacity>
                    <Logo />
                </TouchableOpacity>
                <BasketContainer>
                    <Icon name="shopping-basket" color="#fff" size={24} />
                    <ItemCount>0</ItemCount>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}
