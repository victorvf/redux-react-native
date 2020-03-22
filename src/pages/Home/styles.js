import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
    background: #191920;
`;

export const ListProduct = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})``;

export const Product = styled.View`
    background: #fff;
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    width: 220px;
`;

export const ProductImage = styled.Image`
    width: 200px;
    height: 200px;
`;

export const ProductTitle = styled.Text`
    font-size: 16px;
`;

export const ProductPrice = styled.Text`
    margin-bottom: 14px;
    font-size: 20px;
    font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;

    background: #7159c1;
    border-radius: 4px;
    margin-top: auto;
`;

export const AddButtonText = styled.Text`
    flex: 1;
    color: #fff;
    font-weight: bold;
    text-align: center;
`;

export const ProductAmount = styled.View`
    flex-direction: row;
    align-items: center;

    padding: 12px;
    background: ${darken(0.03, '#7159c1')};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
    color: #fff;
    margin: 0px 4px 0px 10px;
`;
